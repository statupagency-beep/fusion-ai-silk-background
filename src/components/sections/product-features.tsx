import Image from 'next/image';

const features = [
  {
    title: "Workflow:",
    description: "Drag-and-drop multi-step automations with triggers, AI actions, and rules—built visually in minutes."
  },
  {
    title: "Analytics:",
    description: "Real-time dashboards surface trends, bottlenecks, and ROI at a glance—for faster decisions."
  },
  {
    title: "Integration:",
    description: "One-click connectors and an open API sync CRM, chat, calendar, and more—everything stays in sync."
  }
];

const ProductFeatures = () => {
  return (
    <section className="relative bg-black py-[100px]">
      <div 
        className="absolute inset-x-0 top-0 h-[800px] z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.2), rgba(30, 144, 255, 0.2), transparent 80%)'
        }}
      ></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          
          <div className="mb-4 inline-block rounded-lg border border-white/20 bg-white/10 px-4 py-2">
            <p className="font-sans text-sm font-medium uppercase tracking-[0.02em] text-white">
              PRODUCT FEATURES
            </p>
          </div>
          
          <h2 className="mb-12 text-center text-[48px] font-bold leading-[1.2] -tracking-[0.01em] text-white">
            Build Workflows, Track Insights, Connect Tools
          </h2>
          
          <div className="mb-12 w-full max-w-[1140px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/R3urM08pLiVW27CsHsLkJIsKqQ-12.png"
              alt="Fusion AI workflow builder showing a visual node-based editor with connected action blocks."
              width={1140}
              height={694}
              className="w-full h-auto rounded-3xl border border-white/10"
            />
          </div>
          
          <div className="grid w-full max-w-[1140px] grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index}>
                <p className="font-sans text-base leading-relaxed text-text-secondary">
                  <span className="font-medium text-white">{feature.title}</span> {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;