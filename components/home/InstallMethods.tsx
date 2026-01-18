import { Terminal, Zap, Code2, ChevronRight } from "lucide-react";
import Button from "@/components/shared/Button";

interface InstallMethodsProps {
  onGetStarted: () => void;
}

export default function InstallMethods({ onGetStarted }: InstallMethodsProps) {
  return (
    <section className="border-y border-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Three ways to use DotSnap</h2>
          <p className="text-gray-400 font-mono text-sm">
            Choose the method that works best for your workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CLI */}
          <div className="bg-gray-950 border border-gray-900 rounded-lg p-6">
            <Terminal className="w-10 h-10 text-emerald-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">CLI Tool</h3>
            <p className="text-gray-400 text-sm mb-6">
              Install globally and use from any project directory
            </p>

            <div className="bg-black border border-gray-800 rounded p-4 mb-4">
              <code className="text-emerald-500 font-mono text-sm">
                npm install -g dotsnap
              </code>
            </div>

            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-emerald-500" />
                Auto-detects .env files
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-emerald-500" />
                Saves .env.safe locally
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-emerald-500" />
                Works offline
              </li>
            </ul>
          </div>

          {/* NPX */}
          <div className="bg-gray-950 border border-gray-900 rounded-lg p-6">
            <Zap className="w-10 h-10 text-emerald-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">NPX (No Install)</h3>
            <p className="text-gray-400 text-sm mb-6">
              Run directly without installing anything
            </p>

            <div className="bg-black border border-gray-800 rounded p-4 mb-4">
              <code className="text-emerald-500 font-mono text-sm">
                npx dotsnap mask
              </code>
            </div>

            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-emerald-500" />
                No global installation
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-emerald-500" />
                Always latest version
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-emerald-500" />
                Perfect for CI/CD
              </li>
            </ul>
          </div>

          {/* Web */}
          <div className="bg-gray-950 border border-gray-900 rounded-lg p-6 border-emerald-500 border-opacity-30">
            <Code2 className="w-10 h-10 text-emerald-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Web UI</h3>
            <p className="text-gray-400 text-sm mb-6">
              Browser-based tool for quick masking
            </p>

            <Button
              variant="primary"
              onClick={onGetStarted}
              className="w-full mb-4"
            >
              Launch Web Tool →
            </Button>

            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-emerald-500" />
                No installation needed
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-emerald-500" />
                100% client-side
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-emerald-500" />
                Share via link
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
