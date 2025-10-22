import BackgroundAnimation from "@/components/sections/background-animation";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import LogoTicker from "@/components/sections/logo-ticker";
import FeaturesBento from "@/components/sections/features-bento";
import AiShowcase from "@/components/sections/ai-showcase";
import ProductFeatures from "@/components/sections/product-features";
import Integrations from "@/components/sections/integrations";
import TestimonialsSection from "@/components/sections/testimonials";
import HowItWorks from "@/components/sections/how-it-works";
import AdditionalFeatures1 from "@/components/sections/additional-features-1";
import AdditionalFeatures2 from "@/components/sections/additional-features-2";
import FaqSection from "@/components/sections/faq";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <BackgroundAnimation />
      <Navigation />
      <HeroSection />
      <LogoTicker />
      <FeaturesBento />
      <AiShowcase />
      <ProductFeatures />
      <Integrations />
      <TestimonialsSection />
      <HowItWorks />
      <AdditionalFeatures1 />
      <AdditionalFeatures2 />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}