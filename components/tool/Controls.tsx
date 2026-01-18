import { Share2 } from "lucide-react";

interface ControlsProps {
  showFirstLast: boolean;
  setShowFirstLast: (value: boolean) => void;
  fullyHide: boolean;
  setFullyHide: (value: boolean) => void;
  highlightRisky: boolean;
  setHighlightRisky: (value: boolean) => void;
  onShare: () => void;
}

export default function Controls({
  showFirstLast,
  setShowFirstLast,
  fullyHide,
  setFullyHide,
  highlightRisky,
  setHighlightRisky,
  onShare,
}: ControlsProps) {
  return (
    <div className="bg-gray-950 border border-gray-900 rounded-lg p-6 mb-6">
      <div className="flex flex-wrap gap-6 items-center justify-between">
        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2 cursor-pointer text-sm font-mono">
            <input
              type="checkbox"
              checked={showFirstLast}
              onChange={(e) => setShowFirstLast(e.target.checked)}
              className="w-4 h-4 rounded bg-gray-900 border-gray-800"
            />
            <span>Show first/last chars</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-sm font-mono">
            <input
              type="checkbox"
              checked={fullyHide}
              onChange={(e) => setFullyHide(e.target.checked)}
              className="w-4 h-4 rounded bg-gray-900 border-gray-800"
            />
            <span>Fully hide values</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-sm font-mono">
            <input
              type="checkbox"
              checked={highlightRisky}
              onChange={(e) => setHighlightRisky(e.target.checked)}
              className="w-4 h-4 rounded bg-gray-900 border-gray-800"
            />
            <span>Highlight risky keys</span>
          </label>
        </div>

        <button
          onClick={onShare}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded transition-colors text-sm font-mono border border-gray-800"
        >
          <Share2 className="w-4 h-4" />
          Share Link
        </button>
      </div>
    </div>
  );
}
