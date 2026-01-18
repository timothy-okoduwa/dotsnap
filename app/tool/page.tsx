"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToolHeader from "@/components/tool/ToolHeader";
import Controls from "@/components/tool/Controls";
import EnvInput from "@/components/tool/EnvInput";
import EnvOutput from "@/components/tool/EnvOutput";
import Toast from "@/components/ui/Toast";
import { processEnvContent } from "@/lib/mask";
import { shareEnvContent, getSharedContent } from "@/lib/share";
import { copyToClipboard } from "@/lib/clipboard";
import { downloadEnvFile } from "@/lib/download";
import { loadInputContent, saveInputContent } from "@/lib/storage";

const DEMO_CONTENT = `# Production Environment
API_KEY=sk-live-1234567890abcdef
DB_PASSWORD=myPassword123
STRIPE_SECRET_KEY=sk_test_51ABC123xyz789
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=super-secret-jwt-token-12345

# AWS Configuration
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
NEXT_PUBLIC_APP_URL=https://myapp.com`;

export default function ToolPage() {
  const router = useRouter();
  const [inputContent, setInputContent] = useState("");
  const [outputContent, setOutputContent] = useState("");
  const [showFirstLast, setShowFirstLast] = useState(true);
  const [fullyHide, setFullyHide] = useState(false);
  const [highlightRisky, setHighlightRisky] = useState(true);
  const [toast, setToast] = useState<string | null>(null);

  // Load content: Priority = shared URL > localStorage > demo
  useEffect(() => {
    const sharedContent = getSharedContent();

    if (sharedContent) {
      setInputContent(sharedContent);
      setToast("✓ Loaded shared content");
      return;
    }

    const saved = loadInputContent();
    setInputContent(saved || DEMO_CONTENT);
  }, []);

  // Save input content to localStorage
  useEffect(() => {
    if (inputContent) {
      saveInputContent(inputContent);
    }
  }, [inputContent]);

  const handleMaskSecrets = () => {
    const masked = processEnvContent(inputContent, showFirstLast, fullyHide);
    setOutputContent(masked);
    setToast("✓ Secrets masked");
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(outputContent);
    if (success) {
      setToast("✓ Copied to clipboard");
    }
  };

  const handleDownload = () => {
    downloadEnvFile(outputContent);
    setToast("✓ Downloaded .env.safe");
  };

  const handleShare = async () => {
    const url = shareEnvContent(inputContent);
    const success = await copyToClipboard(url);
    if (success) {
      setToast("✓ Share link copied to clipboard");
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-b from-gray-950 via-black to-black pointer-events-none bg-grid" />

      <div className="relative z-10">
        <Header />

        <ToolHeader onBack={handleBack} />

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <Controls
              showFirstLast={showFirstLast}
              setShowFirstLast={setShowFirstLast}
              fullyHide={fullyHide}
              setFullyHide={setFullyHide}
              highlightRisky={highlightRisky}
              setHighlightRisky={setHighlightRisky}
              onShare={handleShare}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <EnvInput
                value={inputContent}
                onChange={setInputContent}
                highlightRisky={highlightRisky}
                onMask={handleMaskSecrets}
              />

              <EnvOutput
                value={outputContent}
                onCopy={handleCopy}
                onDownload={handleDownload}
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
