"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Cloud, TrendingUp, ShieldCheck, Gem } from 'lucide-react';

const logos = [
  { name: 'business', icon: Box },
  { name: 'application', icon: Cloud },
  { name: 'startup', icon: TrendingUp },
  { name: 'Logoipsum', icon: ShieldCheck },
  { name: 'Logoipsum', icon: Gem },
];

const LogoItem = ({ logo }: { logo: typeof logos[0] }) => (
  <div
    className="flex-shrink-0 flex items-center justify-center text-muted-foreground mx-10"
    style={{ height: '40px' }}
  >
    <logo.icon className="h-7 w-7 mr-4" />
    <span className="text-2xl font-medium tracking-wide capitalize">{logo.name}</span>
  </div>
);

const LogoTicker = () => {
  return (
    <section className="py-20">
      <div className="w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center gap-8">
        <p className="text-center text-muted-foreground text-base font-normal">
          Trusted by 150,000+ users worldwide
        </p>
        <div className="relative w-full overflow-hidden h-10">
          <div className="absolute inset-y-0 left-0 z-10 w-[100px] bg-gradient-to-r from-background to-transparent" />
          
          <div className="absolute top-0 left-0 flex whitespace-nowrap">
            <motion.div
              className="flex"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                ease: 'linear',
                duration: 30,
                repeat: Infinity,
              }}
            >
              {logos.map((logo, index) => (
                <LogoItem key={index} logo={logo} />
              ))}
            </motion.div>
            <motion.div
              className="flex"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                ease: 'linear',
                duration: 30,
                repeat: Infinity,
              }}
              aria-hidden="true"
            >
              {logos.map((logo, index) => (
                <LogoItem key={index + logos.length} logo={logo} />
              ))}
            </motion.div>
          </div>

          <div className="absolute inset-y-0 right-0 z-10 w-[100px] bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;