export default function Security() {
  return (
    <section className="border-t border-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Security by design
        </h2>
        <p className="text-gray-400 text-center mb-16 font-mono text-sm">
          Your environment variables NEVER leave your computer. We built it with
          trust in mind.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-emerald-500 font-mono text-sm mb-4">
              What's Protected
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span>Securely masks tokens before sharing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span>100% client-side processing (web & CLI)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span>No external API calls or network requests</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span>No backend, no cloud storage, no logging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span>Original .env stays untouched on your machine</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span>Open source - audit the code yourself</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-red-500 font-mono text-sm mb-4">
              What's NOT Protected
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✗</span>
                <span>Can't prevent malicious local scripts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✗</span>
                <span>Masked values still show partial info</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✗</span>
                <span>Original file remains on file system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-0.5">✗</span>
                <span>Screenshots may still capture context</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
