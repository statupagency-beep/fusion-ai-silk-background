import React from "react";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-[120px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[float_4s_ease-in-out_infinite]">
          {/* Blue layer */}
          <div className="h-[600px] w-[600px] rounded-full bg-accent/20 blur-3xl"></div>
          {/* Orange layer */}
          <div className="absolute inset-0 m-auto h-[450px] w-[450px] rounded-full bg-primary/20 blur-3xl"></div>
          {/* Core Orb */}
          <div
            className="absolute inset-0 m-auto h-[200px] w-[200px] rounded-full"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent-orange) 0%, var(--color-accent-blue) 100%)",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center gap-8 px-6 text-center">
        <h2 className="text-[56px] font-bold leading-tight text-white">
          Start Your AI Automation Journey Today
        </h2>
        <p className="max-w-[600px] text-lg leading-relaxed text-white/70">
          Sign up for Fusion AI and let AI handle your routine
          tasks—no credit card needed.
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="group relative inline-flex h-12 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-medium text-primary-foreground shadow-[0_4px_16px_rgba(255,107,53,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_24px_rgba(255,107,53,0.5)]"
          >
            Get Started - Free
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-transparent px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;