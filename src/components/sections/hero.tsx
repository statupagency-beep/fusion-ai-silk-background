"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Globe } from 'lucide-react';

const ChatInterface = () => {
    const phrases = ["Schedule meetings and send invites", "Generate a customer follow-up list"];
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (isDeleting) {
            if (subIndex === 0) {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            } else {
                const timeout = setTimeout(() => {
                    setSubIndex((prev) => prev - 1);
                }, 75);
                return () => clearTimeout(timeout);
            }
        } else {
            if (subIndex === phrases[phraseIndex].length) {
                const holdTimeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
                return () => clearTimeout(holdTimeout);

            } else {
                const timeout = setTimeout(() => {
                    setSubIndex((prev) => prev + 1);
                }, 100);
                return () => clearTimeout(timeout);
            }
        }
    }, [subIndex, isDeleting, phrases, phraseIndex]);

    return (
        <div className="relative mt-16 lg:mt-20 w-full flex justify-center max-w-[1200px] mx-auto px-6 lg:px-20">
            <div className="relative w-full">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/FcJPSxu5QRR0s0hFrNnbIBqvac-4.png"
                    width={2280}
                    height={1098}
                    alt="Hero Dashboard Image"
                    className="w-full h-auto rounded-lg shadow-2xl"
                    priority
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[830px]">
                    <div className="bg-[#18181b]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 sm:p-5 text-left">
                        <div className="flex items-center justify-between mb-4">
                            <button className="flex items-center gap-2 bg-[#27272A] border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm">
                                <Globe size={16} className="text-white/60" />
                                GPT 4.5
                                <ChevronDown size={16} className="text-white/60" />
                            </button>
                        </div>

                        <div className="w-full text-white/90 text-base sm:text-lg min-h-[56px] sm:min-h-[28px] mb-4 px-2 flex items-center">
                            <span>{phrases[phraseIndex].substring(0, subIndex)}</span>
                            <span className="animate-[blink_1s_infinite] text-white/90">|</span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <button className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm hover:bg-white/10 transition-colors">Chat</button>
                                <button className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm hover:bg-white/10 transition-colors">Launch Workflow</button>
                                <button className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-sm hover:bg-white/10 transition-colors">Data Analysis</button>                            </div>

                            <button className="relative flex items-center justify-center gap-2 text-white text-sm font-medium bg-gradient-to-r from-[#FF6B35] to-[#1E90FF] rounded-lg px-4 py-2 hover:opacity-90 transition-opacity w-full sm:w-auto">
                                <span className="sm:hidden">Send</span>
                                <span className="hidden sm:inline">Send</span>
                                <Image
                                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/sVkwweGRCRcQUW2eM3O9WXUNw4w-3.png"
                                    width={24}
                                    height={24}
                                    alt="Send icon"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const HeroSection = () => {
  return (
    <header className="relative w-full bg-black pt-40 pb-20 md:pb-32 isolate">
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://framerusercontent.com/assets/Bax1SXv4b9QI33bMvkicABKnI.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/Be2eOLzV4xVwCVXDiJq8fLpcY3c-1.png"
          alt="Background gradient overlay"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-100"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center justify-center bg-[#18181B] border border-white/10 rounded-full px-6 py-2">
            <p className="text-white text-sm font-medium tracking-wide">
              SUPERCHARGE YOUR AI WORKFLOWS
            </p>
          </div>
        </div>

        <h1 className="text-white font-bold text-[40px] leading-tight sm:text-[56px] lg:text-[72px] lg:leading-[1.1] tracking-[-0.02em] max-w-5xl mx-auto">
          Automate Your AI Workflows with AI Agent
        </h1>

        <p className="text-[#b3b3b3] text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-8">
          Connect your favorite apps, set triggers and watch AI handle the rest - no coding required. Get up and running in minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-all h-auto px-8 py-4 bg-black text-white rounded-xl border-2 border-transparent bg-clip-padding relative w-full sm:w-auto group hover:scale-[1.02]"
            style={{
              backgroundImage: 'linear-gradient(black, black), linear-gradient(135deg, #FF6B35 0%, #1E90FF 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
          >
            Get Started - Free
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center whitespace-nowrap text-base font-medium transition-all h-auto px-8 py-4 bg-black border border-white/20 text-white rounded-xl hover:bg-white/5 hover:scale-[1.02] w-full sm:w-auto"
          >
            View Pricing
          </Link>
        </div>
      </div>
      
      <ChatInterface />

    </header>
  );
};

export default HeroSection;