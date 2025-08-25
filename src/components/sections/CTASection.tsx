import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-glow/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-card/80 backdrop-blur border-tech-blue/20 text-center">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Pronto para Revolucionar 
                <span className="bg-gradient-to-r from-tech-blue to-cyber-glow bg-clip-text text-transparent block lg:inline lg:ml-3">
                  Suas Vendas?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Junte-se às empresas que já estão usando inteligência artificial para automatizar vendas 
                e gerar leads qualificados 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="cta" size="lg" className="group">
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Demonstração
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-tech-blue/50 hover:border-tech-blue">
                <Phone className="w-4 h-4 mr-2" />
                Falar com Especialista
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-tech-blue/20 to-cyber-glow/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <div className="font-semibold">Telefone</div>
                  <div className="text-sm text-muted-foreground">+55 (11) 99999-9999</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-tech-blue/20 to-cyber-glow/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-sm text-muted-foreground">contato@salesbot.wswork.com.br</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-tech-blue/20 to-cyber-glow/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">Atendimento 24/7</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};