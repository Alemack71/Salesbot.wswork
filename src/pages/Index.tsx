import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="como-funciona">
          <HowItWorksSection />
        </div>
        <div id="beneficios">
          <BenefitsSection />
        </div>
        <div id="casos-uso">
          <UseCasesSection />
        </div>
        <div id="contato">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
