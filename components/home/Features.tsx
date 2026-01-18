import { Terminal, Lock, Shield, Code2, Zap, Share2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Terminal,
      title: "Client-Side Processing",
      description:
        "All masking happens locally. Your secrets never touch our servers or leave your machine.",
    },
    {
      icon: Lock,
      title: "Smart Detection",
      description:
        "Automatically identifies and highlights risky keys like tokens, passwords, and API credentials.",
    },
    {
      icon: Shield,
      title: "Preserve Context",
      description:
        "Shows first and last characters so you can identify which credential is which.",
    },
    {
      icon: Code2,
      title: "Format Preserving",
      description:
        "Maintains comments, empty lines, and structure. Your .env.safe file looks just like the original.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Lightning-fast masking with copy, download, and shareable link capabilities built-in.",
    },
    {
      icon: Share2,
      title: "Team Friendly",
      description:
        "Share configs safely in Slack, screenshots, wikis, or documentation without worry.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Built for developers who care about security
        </h2>
        <p className="text-gray-400 mb-16 font-mono text-sm">
          CLI & web UI options. Works with any workflow. No vendor lock-in.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-left">
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
