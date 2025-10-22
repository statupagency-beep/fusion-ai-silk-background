"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Bot, Sparkles, Zap, Brain, Code, MessageSquare, Search, Image as ImageIcon, FileText, Globe, Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiAppDialog } from "@/components/ai-app-dialog";
import { Button } from "@/components/ui/button";

interface AiApp {
  id: number;
  name: string;
  description: string;
  iconName: string;
  status: "active" | "inactive";
  usageCount: number;
  category: string;
  gradient: string;
  createdAt: string;
  updatedAt: string;
}

const iconMap: Record<string, any> = {
  MessageSquare,
  Sparkles,
  Zap,
  Brain,
  Code,
  Bot,
  Search,
  Image: ImageIcon,
  FileText,
  Globe,
};

export default function HomePage() {
  const [aiApps, setAiApps] = useState<AiApp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingApp, setEditingApp] = useState<AiApp | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const fetchApps = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/ai-apps?limit=100");
      
      if (!response.ok) {
        throw new Error("Failed to fetch AI apps");
      }
      
      const data = await response.json();
      setAiApps(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApps();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this AI app?")) {
      return;
    }

    try {
      setDeletingId(id);
      const response = await fetch(`/api/ai-apps?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete AI app");
      }

      await fetchApps();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to delete AI app");
    } finally {
      setDeletingId(null);
    }
  };

  const handleEdit = (app: AiApp) => {
    setEditingApp(app);
    setDialogOpen(true);
  };

  const handleAdd = () => {
    setEditingApp(null);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setEditingApp(null);
  };

  const handleSuccess = () => {
    fetchApps();
  };

  const activeApps = aiApps.filter((app) => app.status === "active");
  const totalUsage = aiApps.reduce((sum, app) => sum + app.usageCount, 0);

  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
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

      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-[1] overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df671248-c320-423c-9330-70de44fe7071-fusionai-framer-website/assets/images/Be2eOLzV4xVwCVXDiJq8fLpcY3c-1.png"
          alt="Background gradient overlay"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      <Navigation />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20 pt-32 pb-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-sm font-medium uppercase tracking-wide">
              AI Apps Dashboard
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Your AI Workspace
          </h1>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Track and manage all your AI tools in one place. Monitor usage, stay organized, and maximize your productivity.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#1E90FF] bg-clip-text text-transparent">
                {loading ? "..." : aiApps.length}
              </div>
              <div className="text-sm text-white/60">Total Apps</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#1E90FF] bg-clip-text text-transparent">
                {loading ? "..." : activeApps.length}
              </div>
              <div className="text-sm text-white/60">Active Apps</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#1E90FF] bg-clip-text text-transparent">
                {loading ? "..." : totalUsage.toLocaleString()}
              </div>
              <div className="text-sm text-white/60">Total Usage</div>
            </div>
          </div>

          {/* Add Button */}
          <Button
            onClick={handleAdd}
            className="bg-gradient-to-r from-[#FF6B35] to-[#1E90FF] text-white hover:scale-105 transition-transform shadow-lg shadow-[#FF6B35]/30"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New AI App
          </Button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-[#FF6B35]" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-center">
            <p className="text-red-400 mb-4">{error}</p>
            <Button
              onClick={fetchApps}
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/5"
            >
              Try Again
            </Button>
          </div>
        )}

        {/* AI Apps Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {aiApps.map((app) => {
              const Icon = iconMap[app.iconName] || Code;
              const isDeleting = deletingId === app.id;

              return (
                <div
                  key={app.id}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6B35]/20"
                >
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEdit(app)}
                      disabled={isDeleting}
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={() => handleDelete(app.id)}
                      disabled={isDeleting}
                      className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors"
                      title="Delete"
                    >
                      {isDeleting ? (
                        <Loader2 className="w-4 h-4 text-white animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4 text-white" />
                      )}
                    </button>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        app.status === "active"
                          ? "bg-green-500 shadow-lg shadow-green-500/50"
                          : "bg-gray-500"
                      }`}
                    />
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mt-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
                  <p className="text-sm text-white/60 mb-4 line-clamp-2">
                    {app.description}
                  </p>

                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-4">
                    {app.category}
                  </div>

                  {/* Usage Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm text-white/60">Usage</span>
                    <span className="text-lg font-semibold bg-gradient-to-r from-[#FF6B35] to-[#1E90FF] bg-clip-text text-transparent">
                      {app.usageCount}
                    </span>
                  </div>

                  {/* Hover Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF6B35]/0 via-[#1E90FF]/0 to-[#FF6B35]/0 group-hover:from-[#FF6B35]/20 group-hover:via-[#1E90FF]/20 group-hover:to-[#FF6B35]/20 transition-all duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && aiApps.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles className="w-10 h-10 text-white/40" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No AI Apps Yet</h3>
            <p className="text-white/60 mb-6">Get started by adding your first AI app</p>
            <Button
              onClick={handleAdd}
              className="bg-gradient-to-r from-[#FF6B35] to-[#1E90FF] text-white hover:scale-105 transition-transform"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Your First App
            </Button>
          </div>
        )}

        {/* CTA Section */}
        {!loading && !error && aiApps.length > 0 && (
          <div className="relative text-center py-20">
            {/* Gradient Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#FF6B35]/30 to-[#1E90FF]/30 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Expand Your AI Arsenal?
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
                Connect more AI tools and supercharge your workflow automation
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={handleAdd}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#1E90FF] text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#FF6B35]/30"
                >
                  Add More Apps
                </button>
                <button className="px-8 py-4 rounded-xl bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />

      {/* Dialog */}
      <AiAppDialog
        open={dialogOpen}
        onOpenChange={handleDialogClose}
        app={editingApp}
        onSuccess={handleSuccess}
      />
    </main>
  );
}