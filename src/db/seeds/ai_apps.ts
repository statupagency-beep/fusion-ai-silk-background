import { db } from '@/db';
import { aiApps } from '@/db/schema';

async function main() {
    const sampleAiApps = [
        {
            name: 'ChatGPT',
            description: 'Advanced conversational AI',
            iconName: 'MessageSquare',
            status: 'active',
            usageCount: 487,
            category: 'Productivity',
            gradient: 'from-[#10a37f] to-[#1a7f64]',
        },
        {
            name: 'Notion AI',
            description: 'AI-powered workspace',
            iconName: 'FileText',
            status: 'active',
            usageCount: 342,
            category: 'Writing',
            gradient: 'from-[#000000] to-[#434343]',
        },
        {
            name: 'Jasper',
            description: 'AI writing assistant',
            iconName: 'Wand2',
            status: 'active',
            usageCount: 298,
            category: 'Writing',
            gradient: 'from-[#8B5CF6] to-[#6366F1]',
        },
        {
            name: 'Midjourney',
            description: 'AI image generation',
            iconName: 'Image',
            status: 'active',
            usageCount: 456,
            category: 'Creative',
            gradient: 'from-[#FF6B35] to-[#F7931E]',
        },
        {
            name: 'Runway ML',
            description: 'AI video editing suite',
            iconName: 'Video',
            status: 'inactive',
            usageCount: 127,
            category: 'Creative',
            gradient: 'from-[#00D9FF] to-[#0066FF]',
        },
        {
            name: 'Descript',
            description: 'AI audio/video editor',
            iconName: 'Mic',
            status: 'active',
            usageCount: 389,
            category: 'Transcription',
            gradient: 'from-[#7C3AED] to-[#A78BFA]',
        },
        {
            name: 'Otter.ai',
            description: 'Real-time transcription',
            iconName: 'Users',
            status: 'active',
            usageCount: 423,
            category: 'Communication',
            gradient: 'from-[#1E90FF] to-[#4169E1]',
        },
        {
            name: 'Fireflies.ai',
            description: 'AI meeting assistant',
            iconName: 'Sparkles',
            status: 'inactive',
            usageCount: 76,
            category: 'Analytics',
            gradient: 'from-[#FF4B91] to-[#FFB649]',
        },
    ];

    await db.insert(aiApps).values(sampleAiApps);
    
    console.log('✅ AI Apps seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});