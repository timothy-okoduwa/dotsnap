import { Terminal } from "lucide-react";
import Button from "@/components/shared/Button";

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
      <div className="inline-block mb-6">
        <div className="flex items-center gap-2 text-emerald-500 font-mono text-sm">
          <Terminal className="w-4 h-4" />
          <span>Open Source CLI + Web Tool</span>
        </div>
      </div>

      <h1 className="text-6xl font-bold mb-6 leading-tight">
        Mask your <span className="text-emerald-500">.env files</span>
        <br />
        across machines
      </h1>

      <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
        Built for your environment backups and best practices. Securely share
        configuration files
        <br />
        via screenshots, Slack messages, and team wikis – without exposing
        secrets.
      </p>

      <div className="flex items-center justify-center gap-4">
        <Button variant="primary" onClick={onGetStarted}>
          Get Started
        </Button>
        <Button variant="secondary">
          <a href="https://github.com/timothy-okoduwa/dotsnap">
            ★ Star on GitHub
          </a>
        </Button>
      </div>

      {/* Code Preview */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gray-950 border border-gray-900 rounded-lg p-6 text-left">
          <div className="flex items-center gap-2 mb-4 text-xs text-gray-500 font-mono">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-gray-800"></div>
              <div className="w-3 h-3 rounded-full bg-gray-800"></div>
              <div className="w-3 h-3 rounded-full bg-gray-800"></div>
            </div>
            <span className="ml-2">terminal</span>
          </div>

          <pre className="font-mono text-sm leading-relaxed">
            <code>
              <span className="text-gray-600"># Install via npm</span>
              {"\n"}
              <span className="text-gray-400">$ </span>
              <span className="text-emerald-500">npm install -g dotsnap</span>
              {"\n"}
              {"\n"}
              <span className="text-gray-600">
                # Run in your project directory
              </span>
              {"\n"}
              <span className="text-gray-400">$ </span>
              <span className="text-emerald-500">dotsnap mask</span>
              {"\n"}
              {"\n"}
              <span className="text-emerald-500">✓ Found .env file</span>
              {"\n"}
              <span className="text-emerald-500">✓ Masked 8 secrets</span>
              {"\n"}
              <span className="text-emerald-500">✓ Saved to .env.safe</span>
              {"\n"}
              {"\n"}
              <span className="text-gray-600"># Or use the web UI</span>
              {"\n"}
              <span className="text-gray-400">$ </span>
              <span className="text-emerald-500">dotsnap web</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
