import { Bot } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-tech-blue to-cyber-glow rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">
                Sales<span className="text-tech-blue">BOT</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Automatize suas vendas com inteligência artificial. Uma solução completa para transformar dados em estratégias de persuasão.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Solução</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Como Funciona</div>
              <div>Benefícios</div>
              <div>Casos de Uso</div>
              <div>Tecnologia</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>vitorb@wontstop.work</div>
              <div>+55 (51) 99627-9724</div>
              <div>WhatsApp 24/7</div>
              <div>www.salesbot.wswork.com.br</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 SalesBot. Todos os direitos reservados. | Desenvolvido com IA para automatização de vendas.</p>
        </div>
      </div>
    </footer>
  );
};