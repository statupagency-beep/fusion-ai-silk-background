"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const orbUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/vbJZq68zihPwJjuxXlu5QAjvfo-13.png";

const icons = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/acqyqyiqgIAcgJj2sSDTBJ7mxWI-14.png", alt: "Google Calendar" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/6Tkstol08Sqrk7tHK9I5TV6R9E-15.png", alt: "HubSpot" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/EPHvabqNjiltVRxBW66XsQbr7EM-16.png", alt: "Slack" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/mCbhinWgzV3irdrGBTPpxtgkbw-17.png", alt: "Zendesk" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/bPEWWHpZ3ggQQtV7HQFpMLoFk4-18.png", alt: "Salesforce" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/Isd9yuBo2aIVNcH4tmm2FjtSCc-19.png", alt: "WhatsApp" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/tRymLem0RJveQ8v95qGTUdus0-20.png", alt: "OpenAI" },
  // Re-using an icon to make it 8 for the inner circle as per visual representation
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/6Tkstol08Sqrk7tHK9I5TV6R9E-15.png", alt: "HubSpot" },
];

const innerIcons = icons;
const outerIcons = [...icons, ...icons.slice(0, 4)]; // Total 12 icons

interface IconCircleProps {
  icons: { src: string; alt: string }[];
  radius: number;
  animationProps: any;
  className?: string;
}

const IconCircle: React.FC<IconCircleProps> = ({ icons, radius, animationProps, className }) => (
  <motion.div {...animationProps} className={`absolute inset-0 ${className}`}>
    {icons.map((icon, index) => {
      const angle = (360 / icons.length) * index;
      return (
        <div
          key={`${icon.alt}-${index}`}
          className="absolute left-1/2 top-1/2"
          style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` }}
        >
          <div className="flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 shadow-lg backdrop-blur-sm">
            <Image src={icon.src} alt={icon.alt} width={48} height={48} className="h-12 w-12" />
          </div>
        </div>
      );
    })}
  </motion.div>
);

const Integrations = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-[120px]">
      <div className="container mx-auto max-w-[1200px] px-6 text-center md:px-20">
        <div className="flex flex-col items-center">
          <div className="inline-block rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.02em] text-white">
            Powerful Integrations
          </div>
          <h2 className="mt-6 text-[48px] font-bold leading-[1.2] -tracking-[0.01em] text-white">
            Seamlessly Integrate <br /> Every App
          </h2>
        </div>

        <div className="relative mx-auto mt-20 flex h-[520px] w-full max-w-[520px] items-center justify-center md:h-[718px] md:max-w-[718px]">
          <Image
            src={orbUrl}
            width={320}
            height={320}
            alt="Gradient orb"
            className="pointer-events-none absolute z-10"
          />

          <IconCircle
            icons={innerIcons}
            radius={260}
            animationProps={{
              animate: { rotate: 360 },
              transition: { duration: 30, repeat: Infinity, ease: "linear" },
            }}
          />

          <IconCircle
            icons={outerIcons}
            radius={359}
            animationProps={{
              animate: { rotate: -360 },
              transition: { duration: 40, repeat: Infinity, ease: "linear" },
            }}
            className="hidden md:block"
          />
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="#"
            className="group relative inline-block overflow-hidden rounded-[8px] border border-white/20 px-6 py-4 text-base font-medium text-white transition-colors hover:bg-white/5"
          >
            <div className="relative h-[1em] leading-none">
              <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Explore All</span>
              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">Explore All</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Integrations;