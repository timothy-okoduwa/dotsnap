import { ArrowLeft } from "lucide-react";

interface ToolHeaderProps {
  onBack?: () => void;
}

export default function ToolHeader({ onBack }: ToolHeaderProps) {
  return (
    <div className="border-b border-gray-900 py-6">
      <div className="max-w-6xl mx-auto px-6">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-sm mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>
        )}

        <h1 className="text-3xl font-bold mb-2">Mask Your Secrets</h1>
        <p className="text-gray-400 font-mono text-sm">
          Paste your .env file below and we'll mask the sensitive values
        </p>
      </div>
    </div>
  );
}
