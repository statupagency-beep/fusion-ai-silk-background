import Image from 'next/image';

const features = [
  {
    title: "Seamless Integrations",
    description: "Integrate Slack, HubSpot, Zendesk & more—automate data flow instantly.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/sVc2HPffpGxiK2VXYhRbRHcsQ-5.png",
    imageAlt: "Seamless Integrations with various app icons like Slack, Hubspot, Zendesk, and Salesforce",
    imageWidth: 292,
    imageHeight: 284,
  },
  {
    title: "Conversational Actions",
    description: "Create records, assign tasks\u00A0&\u00A0queue emails with a simple prompt in seconds flat.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/0jK0GfWeBSpF6Rta0Z1hJdNCc-6.png",
    imageAlt: "Conversational Actions chat interface mockup showing customer record creation",
    imageWidth: 308,
    imageHeight: 284,
  },
  {
    title: "Visual Workflow Designer",
    description: "Drag\u00A0&\u00A0drop AI actions to build workflows visually—\u2028\u2028no coding required.",
    image: null,
    imageAlt: "Abstract placeholder for Visual Workflow Designer",
  },
  {
    title: "Multi\u2011Channel Automation",
    description: "Trigger email, SMS\u00A0&\u00A0chat messages automatically on schedule.",
    image: null,
    imageAlt: "Abstract placeholder for Multi-Channel Automation",
  },
];

const FeaturesBento = () => {
  return (
    <section className="bg-black text-white py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 xl:px-20">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div className="inline-block py-[10px] px-4 rounded-lg border border-white/10 bg-white/5">
            <p className="text-sm font-medium uppercase" style={{ letterSpacing: '0.02em' }}>
              AI-DRIVEN FEATURES
            </p>
          </div>
          <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.01em] max-w-3xl">
            Build, scale and manage entire AI workforce
          </h2>
          <p className="text-lg text-white/70 max-w-[600px]">
            Fusion AI helps you tackle data bottlenecks, streamline analysis, and make smarter decisions with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-card border border-border rounded-3xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,107,53,0.1)_0%,rgba(0,0,0,0)_50%)] opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="h-[284px] flex-shrink-0 flex items-center justify-center">
                {feature.image ? (
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={feature.imageWidth}
                    height={feature.imageHeight}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-white/5 rounded-xl" />
                )}
              </div>
              
              <div className="flex-grow flex flex-col justify-end pt-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-white/70 whitespace-pre-wrap leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBento;