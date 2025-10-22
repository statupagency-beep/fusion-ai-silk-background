import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-4">
    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent mt-1" />
    <p className="text-lg text-white leading-relaxed">{text}</p>
  </div>
);

const AdditionalFeatures1 = () => {
  return (
    <section className="bg-background py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
          {/* Left Column: Image */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] aspect-[570/407.5]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/rZV4cZj0D8MZvaqrVrNLfiKOqhM-27.png"
                alt="No-Code Workflow Builder interface mockup"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl font-bold text-white tracking-[-0.01em] leading-[1.2]">
              No-Code Workflow Builder
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Design complex, multi-step automations with drag-and-drop ease—no
              coding required.
            </p>
            <div className="flex flex-col gap-6">
              <FeatureItem text="Visual workflow canvas" />
              <FeatureItem text="Pre-built action blocks" />
              <FeatureItem text="Conditional logic & branching" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures1;