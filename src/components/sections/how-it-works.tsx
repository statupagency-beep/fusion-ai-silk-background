import Image from 'next/image';

const steps = [
  {
    step: "1. Select a trigger",
    description: "Choose an event or schedule that kicks off your workflow.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/v8zq87GQc7o20jSLo7D3LFysfkI-24.png",
    alt: "A mockup of a UI element showing a trigger setting 'When this happen' with a lightning bolt icon.",
    width: 304,
    height: 240,
  },
  {
    step: "2. Connect your apps",
    description: "Sync Fusion AI with your tools—CRM, email, Slack, and more.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/FP78rjpGyoYHb8wz6MV0pgyxcEo-25.png",
    alt: "A collection of logos for popular applications like Google Calendar, HubSpot, Slack, Instagram, and Meta on a dark background.",
    width: 304,
    height: 240,
  },
  {
    step: "3. Let AI do the work",
    description: "Lets Fusion AI execute tasks automatically.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/GipiyA7oYsyvVjEBNRp6sUfsKI-26.png",
    alt: "A white checkmark icon inside a glowing blue-to-orange gradient circle.",
    width: 304,
    height: 240,
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-black text-white py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="border border-white/20 rounded-lg bg-white/[.05] px-4 py-2.5">
            <p className="text-sm font-medium uppercase tracking-[0.02em] text-white">AI-Driven Features</p>
          </div>
          <h2 className="text-[48px] font-bold leading-tight -tracking-[0.01em] max-w-2xl">
            Automate workflows in three simple steps
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {steps.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A]">
              <div 
                className="absolute inset-0 opacity-80"
                style={{
                  background: 'radial-gradient(circle at 50% 0, rgba(255, 107, 53, 0.15), transparent 70%), radial-gradient(circle at 50% 0, rgba(30, 144, 255, 0.1), transparent 70%)'
                }}
              />
              <div className="relative z-10 flex flex-col gap-10 p-10">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="w-full h-[240px] rounded-2xl object-cover shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                />
                <div className="flex flex-col gap-3 text-left">
                  <h3 className="text-2xl font-bold text-white">{item.step}</h3>
                  <p className="text-base text-white/70">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;