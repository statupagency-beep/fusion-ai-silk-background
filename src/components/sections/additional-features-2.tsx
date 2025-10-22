import Image from "next/image";
import { FC } from "react";
import { ArrowUpRight } from "lucide-react";

const features: string[] = [
  "Draft & send multi-channel messages",
  "Create CRM contacts on the fly",
  "Cancel meetings or raise issues instantly",
];

interface FeatureItemProps {
  text: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ text }) => (
  <li className="flex items-start gap-4">
    <ArrowUpRight className="h-6 w-6 text-[#1E90FF] flex-shrink-0 mt-0.5" strokeWidth={2} />
    <span className="text-base text-white/80">
      {text}
    </span>
  </li>
);

const AdditionalFeatures2: FC = () => {
  return (
    <section className="py-[100px] bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.01em] text-white">
              Instant, One-Command Actions
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-[1.6]">
              Type an action once—Fusion AI executes it across Slack, WhatsApp, HubSpot, Calendar, and more.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/SLdhupMlg3et6AN05p160bcUTY-29.png"
              alt="Instant one-command actions interface mockup"
              width={570}
              height={583}
              className="rounded-3xl w-full h-auto max-w-[570px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures2;