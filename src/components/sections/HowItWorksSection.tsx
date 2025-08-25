import { Card } from "@/components/ui/card";
import { UserCheck, Database, Brain, MessageSquare } from "lucide-react";
import totemInterface from "@/assets/totem-interface.png";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Identificação do Cliente",
      description: "Cliente insere a placa do veículo no totem interativo. O sistema identifica automaticamente se é um cliente novo ou recorrente.",
      number: "01"
    },
    {
      icon: Database,
      title: "Análise de Dados",
      description: "Para clientes recorrentes, o algoritmo processa histórico de compras, preferências e hábitos de consumo junto com o estoque disponível.",
      number: "02"
    },
    {
      icon: Brain,
      title: "IA Preditiva",
      description: "Utilizando algoritmos de machine learning, o sistema calcula probabilidades e gera recomendações altamente personalizadas.",
      number: "03"
    },
    {
      icon: MessageSquare,
      title: "Leads Qualificados",
      description: "Dados são convertidos automaticamente em leads qualificados e enviados para a equipe de vendas via WhatsApp.",
      number: "04"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Como Funciona o SalesBot</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma jornada completa desde a identificação do cliente até a geração de leads qualificados, 
            potencializada por inteligência artificial e algoritmos preditivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-tech-red to-tech-red-dark rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-tech-red/30 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyber-glow rounded-full flex items-center justify-center text-xs font-bold text-background">
                      {step.number}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-tech-red transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-red/20 to-cyber-glow/20 blur-2xl transform rotate-3 scale-105"></div>
            <Card className="relative z-10 p-4 bg-card/80 backdrop-blur border-tech-red/20">
              <img 
                src={totemInterface} 
                alt="Interface do Totem Interativo SalesBot"
                className="w-full h-94 object-cover rounded-lg" // define altura e corta excesso
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">Totem Interativo</h4>
                <p className="text-sm text-muted-foreground">
                  Interface intuitiva que serve como ponto de convergência entre experiência digital e análise algorítmica.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};