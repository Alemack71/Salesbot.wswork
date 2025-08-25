import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap } from "lucide-react";
import salesbotHero from "@/assets/salesbot-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-tech-red/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-tech-red">
              <Bot className="w-6 h-6" />
              <span className="text-sm font-semibold tracking-wider uppercase">Inteligência Artificial</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Sales
              </span>
              <span className="bg-gradient-to-r from-tech-red to-cyber-glow bg-clip-text text-transparent animate-gradient-shift bg-300%">
                BOT
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Automatize suas vendas com inteligência artificial. Uma solução completa para qualquer comércio que deseja transformar dados em estratégias de persuasão e suporte à decisão.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Começar Agora
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-tech-red/50 hover:border-tech-red hover:bg-transparent hover:text-tech-red"
              >
                Ver Demonstração
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-tech-red">100%</div>
                <div className="text-sm text-muted-foreground">Automação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tech-red">IA</div>
                <div className="text-sm text-muted-foreground">Inteligente</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tech-red">24/7</div>
                <div className="text-sm text-muted-foreground">Operação</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-red/20 to-cyber-glow/20 blur-3xl transform scale-110"></div>
            <img 
              src={salesbotHero} 
              alt="SalesBot - Robô de Vendas com Inteligência Artificial"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-tech-red/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};