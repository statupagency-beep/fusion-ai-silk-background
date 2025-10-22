"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const AIAvatar = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-orange to-accent-blue flex-shrink-0" />
);

const AIMessage = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 self-start">
    <AIAvatar />
    <div className="bg-secondary rounded-2xl rounded-tl-md p-3 text-sm text-white/90 leading-snug max-w-[80%]">
      {text}
    </div>
  </div>
);

const UserMessage = ({ text }: { text: string }) => (
  <div className="flex justify-end self-end">
    <div className="bg-accent/15 rounded-2xl rounded-br-md p-3 text-sm text-white/90 leading-snug max-w-[80%]">
      {text}
    </div>
  </div>
);

const ChatWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-[1000] flex flex-col items-end gap-4 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
        isVisible ? "translate-x-0" : "translate-x-[calc(100%+2rem)]"
      }`}
    >
      <div className="w-[380px] max-h-[600px] rounded-3xl p-px bg-gradient-to-br from-accent-orange to-accent-blue shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <div className="bg-card/80 rounded-[23px] backdrop-blur-xl h-full flex flex-col">
          <div className="flex justify-end items-center p-3 border-b border-white/10 flex-shrink-0">
            <button className="text-white/50 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AIMessage text="Sure. I will draft the email workflow now." />
            <UserMessage text="Great! Please schedule it for tomorrow." />
            <AIMessage text="Done! Anything else?" />
          </div>

          <div className="p-4 border-t border-white/10 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"></span>
              <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse [animation-delay:0.4s]"></span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://www.framer.com/?via=amanidesign"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 py-1.5 px-3 bg-black/50 border border-white/10 rounded-full text-xs text-white/70 backdrop-blur-sm hover:bg-white/10 transition-colors"
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/jz1bdnCwcbbxvnbRZhV8NBmY-30.png"
          alt="Framer Logo"
          width={16}
          height={16}
        />
        Made in Framer
      </a>

      <a
        href="https://amanidesign.lemonsqueezy.com/checkout/buy/6e174baf-662f-48e0-bb82-4aa4da747d91"
        target="_blank"
        rel="noopener noreferrer"
        className="py-2 px-4 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
      >
        Get Template - $59
      </a>
    </div>
  );
};

export default ChatWidget;