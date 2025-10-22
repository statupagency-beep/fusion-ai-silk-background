import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    const navLinkColumns = [
        {
            title: "Main Page",
            links: [
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Pricing", href: "/pricing" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact", href: "/contact" },
            ]
        },
        {
            title: "Quick Links",
            links: [
                { name: "Integration", href: "/integration" },
                { name: "Teams", href: "/teams" },
                { name: "Career", href: "/career" },
                { name: "FAQ", href: "/faq" },
                { name: "404", href: "/404" },
            ]
        },
        {
            title: "Others",
            links: [
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Condition", href: "/terms-conditions" },
                { name: "Waitlist", href: "/waitlist" },
                { name: "Changelog", href: "/changelog" },
            ]
        }
    ];

    const socialLinks = [
        { icon: <Instagram size={20} />, href: "https://instagram.com" },
        { icon: <Facebook size={20} />, href: "https://facebook.com" },
        { icon: <Twitter size={20} />, href: "https://twitter.com" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    ];

    return (
        <footer className="bg-black text-foreground">
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 py-[60px]">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-[60px]">
                    <div className="lg:max-w-sm">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/VNxTg4trlyPkvi55POCdKXQ04kY-2.png"
                                alt="Fusion AI Logo"
                                width={40}
                                height={40}
                            />
                            <span className="text-xl font-medium text-white">Fusion AI</span>
                        </Link>
                        <p className="mt-5 text-base text-muted-foreground">
                            Fusion AI and let AI handle your routine tasks.
                        </p>
                    </div>
                    
                    <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-x-[60px]">
                        {navLinkColumns.map((column) => (
                            <div key={column.title}>
                                <h3 className="text-lg font-semibold text-white mb-5">{column.title}</h3>
                                <ul className="space-y-4">
                                    {column.links.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-base font-normal text-white hover:opacity-70 transition-opacity">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        © 2025  Design & Developed by Amani Design
                    </p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <a 
                                key={index} 
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label={`Follow us on ${social.href.split('.')[1]}`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;