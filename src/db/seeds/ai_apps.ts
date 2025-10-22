import { db } from '@/db';
import { aiApps } from '@/db/schema';

async function main() {
    const sampleAiApps = [
        {
            name: 'ChatGPT',
            description: 'Advanced conversational AI that helps with writing, coding, analysis, and creative tasks. Powered by GPT-4 for human-like responses.',
            iconName: 'MessageSquare',
            status: 'active',
            usageCount: 487,
            category: 'Productivity',
            gradient: 'from-[#10a37f] to-[#1a7f64]',
            createdAt: new Date('2024-01-10T08:30:00Z'),
            updatedAt: new Date('2024-01-10T08:30:00Z'),
        },
        {
            name: 'Notion AI',
            description: 'AI-powered workspace that helps you write, brainstorm, edit, and summarize content directly in your Notion documents.',
            iconName: 'FileText',
            status: 'active',
            usageCount: 342,
            category: 'Writing',
            gradient: 'from-[#000000] to-[#434343]',
            createdAt: new Date('2024-01-12T10:15:00Z'),
            updatedAt: new Date('2024-01-12T10:15:00Z'),
        },
        {
            name: 'Jasper',
            description: 'AI writing assistant that creates high-quality marketing copy, blog posts, social media content, and more in seconds.',
            iconName: 'Wand2',
            status: 'active',
            usageCount: 298,
            category: 'Writing',
            gradient: 'from-[#8B5CF6] to-[#6366F1]',
            createdAt: new Date('2024-01-15T14:20:00Z'),
            updatedAt: new Date('2024-01-15T14:20:00Z'),
        },
        {
            name: 'Midjourney',
            description: 'AI image generation tool that creates stunning, artistic visuals from text descriptions. Perfect for creative projects and design work.',
            iconName: 'Image',
            status: 'active',
            usageCount: 456,
            category: 'Creative',
            gradient: 'from-[#FF6B35] to-[#F7931E]',
            createdAt: new Date('2024-01-18T09:45:00Z'),
            updatedAt: new Date('2024-01-18T09:45:00Z'),
        },
        {
            name: 'Runway ML',
            description: 'Advanced AI video editing suite with tools for motion tracking, green screen removal, and AI-generated visual effects.',
            iconName: 'Video',
            status: 'inactive',
            usageCount: 127,
            category: 'Creative',
            gradient: 'from-[#00D9FF] to-[#0066FF]',
            createdAt: new Date('2024-01-20T11:30:00Z'),
            updatedAt: new Date('2024-01-20T11:30:00Z'),
        },
        {
            name: 'Descript',
            description: 'AI-powered audio and video editor that transcribes, edits, and enhances your recordings with studio-quality results.',
            iconName: 'Mic',
            status: 'active',
            usageCount: 389,
            category: 'Transcription',
            gradient: 'from-[#7C3AED] to-[#A78BFA]',
            createdAt: new Date('2024-01-22T13:00:00Z'),
            updatedAt: new Date('2024-01-22T13:00:00Z'),
        },
        {
            name: 'Otter.ai',
            description: 'Real-time transcription service that captures meeting notes, identifies speakers, and generates searchable transcripts automatically.',
            iconName: 'Users',
            status: 'active',
            usageCount: 423,
            category: 'Communication',
            gradient: 'from-[#1E90FF] to-[#4169E1]',
            createdAt: new Date('2024-01-25T15:45:00Z'),
            updatedAt: new Date('2024-01-25T15:45:00Z'),
        },
        {
            name: 'Fireflies.ai',
            description: 'AI meeting assistant that records, transcribes, and analyzes voice conversations across video conferencing platforms.',
            iconName: 'Sparkles',
            status: 'inactive',
            usageCount: 76,
            category: 'Analytics',
            gradient: 'from-[#FF4B91] to-[#FFB649]',
            createdAt: new Date('2024-01-28T16:20:00Z'),
            updatedAt: new Date('2024-01-28T16:20:00Z'),
        },
    ];

    await db.insert(aiApps).values(sampleAiApps);
    
    console.log('✅ AI apps seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});