"use client";

import React from "react";
import Image from "next/image";
import {
  Plus,
  Mail,
  UserCheck,
  BarChart3,
  Settings,
  ChevronDown,
  SendHorizontal,
  Bot,
  User,
} from "lucide-react";

interface Category {
  name: string;
  icon: string;
}

const categories: Category[] = [
  {
    name: "Customer Support",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/TlvPA50zhT5k8DxWWkYnT1FShQ-7.png",
  },
  {
    name: "Healthcare",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/xu3Rm8ZKi6rTLrVdLsojwkBuuRY-8.png",
  },
  {
    name: "Marketing",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/Ud9wQi3KMKw0DpXcfhAMSRvpsQo-9.png",
  },
  {
    name: "Education",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/RycTa5cTaVt64GufCiLDvDc1U0-10.png",
  },
  {
    name: "Finance",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/srMOjDrIT8CqbJX3NkLoWpOFJgg-11.png",
  },
];

const sidebarItems = [
  { name: "Email Outreach", icon: Mail },
  { name: "Customer Follow-Up", icon: UserCheck },
  { name: "Data Analysis", icon: BarChart3 },
  { name: "Meeting Scheduler", icon: Settings },
];

const FusionAILogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M2 7L12 12L22 7"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 22V12"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <span className="font-semibold text-lg">Fusion AI</span>
  </div>
);

const Orb = () => (
  <div className="relative w-32 h-32">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-50 blur-2xl"></div>
    <div
      className="absolute inset-0 rounded-full p-px"
      style={{
        background: "linear-gradient(135deg, #FF6B35 0%, #1E90FF 100%)",
      }}
    >
      <div
        className="w-full h-full bg-black rounded-full relative overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, hsla(0, 0%, 100%, 0.3) 0%, hsla(0, 0%, 100%, 0) 50%)",
          }}
        ></div>
      </div>
    </div>
  </div>
);

const AiShowcase = () => {
  return (
    <section className="bg-black text-white pt-[100px] pb-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-6 mb-[100px]">
          <div className="hidden md:block">
            <Orb />
          </div>
          <h1 className="text-[140px] font-bold leading-none tracking-tighter text-white">
            AI
          </h1>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-x-0 -top-20 -bottom-20 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-[150px] opacity-50 -z-10"></div>
          
          <div className="p-px bg-gradient-to-b from-white/10 to-transparent rounded-3xl">
            <div className="bg-[#0A0A0A] rounded-[23px] overflow-hidden border border-white/5">
              <div className="h-10 bg-[#1e1e1e]/80 backdrop-blur-sm flex items-center px-4 gap-2 border-b border-white/5">
                <span className="w-3 h-3 bg-[#ff5f56] rounded-full"></span>
                <span className="w-3 h-3 bg-[#ffbd2e] rounded-full"></span>
                <span className="w-3 h-3 bg-[#27c93f] rounded-full"></span>
              </div>

              <div className="flex flex-col md:flex-row min-h-[600px]">
                <aside className="w-full md:w-1/3 md:max-w-xs bg-black/20 p-4 border-b md:border-b-0 md:border-r border-white/10 flex flex-col gap-4">
                  <FusionAILogo />
                  <button className="w-full flex items-center justify-between p-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-text-secondary hover:bg-white/10 transition-colors">
                    New Chat <Plus size={16} />
                  </button>
                  <nav className="flex flex-col gap-1 mt-2">
                    {sidebarItems.map((item) => (
                      <a
                        key={item.name}
                        href="#"
                        className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-text-secondary hover:bg-white/10 transition-colors"
                      >
                        <item.icon size={18} className="opacity-70" />
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </aside>

                <main className="flex-1 flex flex-col p-4 sm:p-6 bg-[#040404]">
                  <div className="flex-grow space-y-8">
                    <div className="flex justify-end">
                      <div className="max-w-md">
                        <div className="flex items-start gap-3 justify-end">
                          <div className="bg-surface-elevated border border-border-subtle p-3 rounded-xl rounded-br-none">
                            <p className="text-text-primary">Hey, can you generate a customer follow-up list</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                            <User size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Bot size={16} />
                      </div>
                      <div className="pt-1">
                        <p className="text-text-secondary">Hey Mark — Done! I&apos;ve corrupted 0 leads and enrolled the list to you. Ready for your outreach!</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6">
                    <div className="relative rounded-xl p-px bg-gradient-to-b from-white/10 to-transparent">
                      <div className="relative bg-[#151718] rounded-[11px] p-2 flex items-center gap-2">
                        <button className="flex-shrink-0 flex items-center gap-2 p-2 bg-white/5 border border-white/10 rounded-md text-sm">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2501 2.00002L3.00012 8.25002V15.75L11.2501 22L19.5001 15.75V8.25002L11.2501 2.00002Z" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.25 22L7.125 15.75L11.25 12.375L15.375 15.75L11.25 22Z" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.125 8.25L11.25 12.375L15.375 8.25" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.25 2V12.375" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                           GPT 4.5
                          <ChevronDown size={14} className="opacity-50" />
                        </button>
                        <input
                          type="text"
                          defaultValue="Generate weekly sales summary report"
                          className="w-full bg-transparent outline-none text-sm text-text-primary placeholder:text-text-tertiary px-2"
                        />
                        <button className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-md flex items-center justify-center hover:scale-105 transition-transform">
                          <SendHorizontal size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-[100px]">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative p-6 bg-surface-elevated border border-border-subtle rounded-2xl flex flex-col items-center justify-center text-center gap-4 h-40 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <Image
                src={category.icon}
                alt={`${category.name} icon`}
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-text-primary font-medium text-sm sm:text-base">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiShowcase;