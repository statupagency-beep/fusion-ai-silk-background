"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface AiApp {
  id?: number;
  name: string;
  description: string;
  iconName: string;
  status: "active" | "inactive";
  usageCount: number;
  category: string;
  gradient: string;
}

interface AiAppDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  app?: AiApp | null;
  onSuccess: () => void;
}

const iconOptions = ["MessageSquare", "Sparkles", "Zap", "Brain", "Code", "Bot", "Search", "Image", "FileText", "Globe"];
const categoryOptions = ["Conversation", "Multimodal", "Development", "Search", "Creative", "Analytics", "Productivity"];
const statusOptions = ["active", "inactive"];

export function AiAppDialog({ open, onOpenChange, app, onSuccess }: AiAppDialogProps) {
  const [formData, setFormData] = useState<AiApp>({
    name: "",
    description: "",
    iconName: "MessageSquare",
    status: "active",
    usageCount: 0,
    category: "Conversation",
    gradient: "from-[#FF6B35] to-[#1E90FF]",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (app) {
      setFormData(app);
    } else {
      setFormData({
        name: "",
        description: "",
        iconName: "MessageSquare",
        status: "active",
        usageCount: 0,
        category: "Conversation",
        gradient: "from-[#FF6B35] to-[#1E90FF]",
      });
    }
    setError(null);
  }, [app, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = app?.id ? `/api/ai-apps?id=${app.id}` : "/api/ai-apps";
      const method = app?.id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save AI app");
      }

      onSuccess();
      onOpenChange(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-[#0a0a0a] border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {app?.id ? "Edit AI App" : "Add New AI App"}
          </DialogTitle>
          <DialogDescription className="text-white/60">
            {app?.id ? "Update the AI app details below." : "Fill in the details to add a new AI app."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Name *
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., ChatGPT"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-white">
              Description *
            </label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="e.g., Advanced conversational AI"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="iconName" className="text-sm font-medium text-white">
                Icon *
              </label>
              <select
                id="iconName"
                value={formData.iconName}
                onChange={(e) => setFormData({ ...formData, iconName: e.target.value })}
                required
                className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              >
                {iconOptions.map((icon) => (
                  <option key={icon} value={icon} className="bg-[#0a0a0a]">
                    {icon}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium text-white">
                Category *
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              >
                {categoryOptions.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#0a0a0a]">
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium text-white">
                Status *
              </label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as "active" | "inactive" })}
                required
                className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status} className="bg-[#0a0a0a]">
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="usageCount" className="text-sm font-medium text-white">
                Usage Count
              </label>
              <Input
                id="usageCount"
                type="number"
                value={formData.usageCount}
                onChange={(e) => setFormData({ ...formData, usageCount: parseInt(e.target.value) || 0 })}
                min="0"
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="gradient" className="text-sm font-medium text-white">
              Gradient (Tailwind classes) *
            </label>
            <Input
              id="gradient"
              value={formData.gradient}
              onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
              placeholder="e.g., from-[#FF6B35] to-[#1E90FF]"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
            />
            <div className={`h-8 rounded-md bg-gradient-to-r ${formData.gradient}`} />
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
              className="bg-transparent border-white/20 text-white hover:bg-white/5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#FF6B35] to-[#1E90FF] text-white hover:scale-105 transition-transform"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>{app?.id ? "Update" : "Create"} App</>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
