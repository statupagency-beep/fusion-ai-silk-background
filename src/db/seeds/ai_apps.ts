import { db } from '@/db';
import { aiApps } from '@/db/schema';

async function main() {
    const sampleAiApps = [
        {
            name: 'ChatGPT',
            description: 'Advanced conversational AI by OpenAI',
            iconName: 'MessageSquare',
            status: 'active',
            usageCount: 247,
            category: 'Conversation',
            gradient: 'from-[#10a37f] to-[#1a7f64]',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            name: 'Gemini',
            description: "Google's multimodal AI assistant",
            iconName: 'Sparkles',
            status: 'active',
            usageCount: 189,
            category: 'Multimodal',
            gradient: 'from-[#4285f4] to-[#8ab4f8]',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            name: 'Lovable',
            description: 'AI-powered design and development',
            iconName: 'Zap',
            status: 'active',
            usageCount: 156,
            category: 'Development',
            gradient: 'from-[#FF6B35] to-[#1E90FF]',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            name: 'Orchids',
            description: 'Next-gen AI coding assistant',
            iconName: 'Code',
            status: 'active',
            usageCount: 203,
            category: 'Development',
            gradient: 'from-[#a855f7] to-[#ec4899]',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            name: 'Claude',
            description: "Anthropic's helpful AI assistant",
            iconName: 'Bot',
            status: 'inactive',
            usageCount: 94,
            category: 'Conversation',
            gradient: 'from-[#d97706] to-[#ca8a04]',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            name: 'Perplexity',
            description: 'AI-powered search engine',
            iconName: 'Brain',
            status: 'active',
            usageCount: 112,
            category: 'Search',
            gradient: 'from-[#06b6d4] to-[#0891b2]',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            name: 'Midjourney',
            description: 'AI image generation platform',
            iconName: 'Sparkles',
            status: 'inactive',
            usageCount: 67,
            category: 'Creative',
            gradient: 'from-[#ec4899] to-[#be185d]',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            name: 'GitHub Copilot',
            description: 'AI pair programmer',
            iconName: 'Code',
            status: 'active',
            usageCount: 324,
            category: 'Development',
            gradient: 'from-[#6366f1] to-[#4f46e5]',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ];

    await db.insert(aiApps).values(sampleAiApps);
    
    console.log('✅ AI Apps seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});