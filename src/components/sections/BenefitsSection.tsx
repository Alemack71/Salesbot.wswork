import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Clock, Users, Shield, Zap } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Recomendações Precisas",
      description: "Algoritmos de ML analisam histórico e preferências para gerar recomendações com alta taxa de conversão."
    },
    {
      icon: TrendingUp,
      title: "Aumento nas Vendas",
      description: "Leads qualificados e personalizados resultam em maior taxa de fechamento e satisfação do cliente."
    },
    {
      icon: Clock,
      title: "Operação 24/7",
      description: "Funciona continuamente, capturando leads e oportunidades mesmo fora do horário comercial."
    },
    {
      icon: Users,
      title: "Experiência Personalizada",
      description: "Cada cliente recebe uma experiência única baseada em seu perfil e histórico de interações."
    },
    {
      icon: Shield,
      title: "Dados Seguros",
      description: "Proteção total dos dados dos clientes com criptografia e conformidade com LGPD."
    },
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Instalação e configuração simplificadas para começar a automatizar vendas rapidamente."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Por que Escolher o 
            <span className="bg-gradient-to-r from-tech-red to-cyber-glow bg-clip-text text-transparent ml-2">
              SalesBot
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma solução completa que combina conveniência ao consumidor, precisão nas recomendações 
            e eficiência operacional para seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-tech-red/50 hover:shadow-lg hover:shadow-tech-red/10 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-tech-red/20 to-cyber-glow/20 rounded-2xl flex items-center justify-center group-hover:from-tech-red/30 group-hover:to-cyber-glow/30 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-tech-red" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-tech-red transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};