"use client";

import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  companyLogo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  glow?: "blue" | "white" | null;
};

const testimonials: Testimonial[] = [
  {
    companyLogo: {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/JkhULV0WMfJliwLaAnpsCU8KBdk-23.png",
      alt: "Venture logo",
      width: 124,
      height: 28,
    },
    quote:
      "“Seamless Slack and Salesforce integrations keep our team in sync. Fusion AI ensures everyone’s on the same page.”",
    name: "Mat Mursmark",
    title: "Chief Growth Officer",
    glow: "blue",
  },
  {
    companyLogo: {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/jLPVBIsLpIQ3tZJZiCCEC1Jz7Ow-22.png",
      alt: "Application logo",
      width: 165,
      height: 28,
    },
    quote:
      "“Fusion AI cut our onboarding time by 50%—setup was effortless, and our AI agents are now core to daily ops.”",
    name: "Chris Milkulin",
    title: "Performance Marketer",
    glow: "white",
  },
  {
    companyLogo: {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/ehwJVX0AOW0Ns86sjH5bO7LNM-21.png",
      alt: "Startup logo",
      width: 122,
      height: 28,
    },
    quote:
      "“Automating lead follow‑ups boosted our conversion rate by 30% without adding headcount. Fusion AI is a game‑changer.”",
    name: "Audrey Madden",
    title: "Chief Growth Officer",
    glow: null,
  },
  {
    companyLogo: {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/JkhULV0WMfJliwLaAnpsCU8KBdk-23.png",
      alt: "Venture logo",
      width: 124,
      height: 28,
    },
    quote:
      "“Real‑time insights from AI agents help us spot trends before they emerge—our decisions are smarter and faster.”",
    name: "Jamal Richardson",
    title: "Head of Analytics",
    glow: null,
  },
  {
    companyLogo: {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/jLPVBIsLpIQ3tZJZiCCEC1Jz7Ow-22.png",
      alt: "Application logo",
      width: 165,
      height: 28,
    },
    quote:
      "“Seamless Slack and Salesforce integrations keep our team in sync. Fusion AI ensures everyone’s on the same page.”",
    name: "Priya Desai",
    title: "Customer Success Manager",
    glow: "blue",
  },
];

const TestimonialCard = ({ quote, name, title, companyLogo, glow }: Testimonial) => (
  <div className="w-[400px] flex-shrink-0">
    <div className="rounded-[20px] bg-gradient-to-r from-primary to-accent p-[1px] h-full">
      <div className="relative flex h-full flex-col justify-between gap-8 rounded-[19px] bg-surface-dark p-8 overflow-hidden">
        {glow === 'blue' && (
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_var(--color-accent-blue)_0,_transparent_70%)] opacity-20 blur-2xl z-0" />
        )}
        {glow === 'white' && (
           <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.08)_50%,transparent_65%)] z-0" />
        )}
        <div className="relative z-10">
          <Image
            src={companyLogo.src}
            alt={companyLogo.alt}
            width={companyLogo.width}
            height={companyLogo.height}
            className="h-7 w-auto"
          />
        </div>
        <p className="text-lg text-text-primary z-10">{quote}</p>
        <div className="flex items-center gap-4 z-10">
          <div className="w-12 h-12 rounded-full bg-surface-elevated border border-border-accent" />
          <div>
            <p className="font-medium text-text-primary">{name}</p>
            <p className="text-sm text-text-secondary">{title}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <>
      <style>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 24px));
          }
        }
      `}</style>
      <section className="bg-black text-white py-[100px]">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <div className="border border-border-accent bg-surface-elevated rounded-lg px-4 py-2">
              <p className="text-sm font-medium uppercase tracking-[0.02em] text-text-secondary">
                SUCCESS STORIES
              </p>
            </div>
            <h2 className="text-3xl md:text-[48px] font-bold leading-tight max-w-2xl">
              Hear from our customers & their success stories
            </h2>
          </div>
        </div>

        <div
          className="relative w-full overflow-hidden group"
          style={{ maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)' }}
        >
          <div className="flex w-max">
            <div className="flex-shrink-0 flex items-stretch gap-6 animate-scroll group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`first-${index}`} {...testimonial} />
              ))}
            </div>
            <div className="flex-shrink-0 flex items-stretch gap-6 animate-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`second-${index}`} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;