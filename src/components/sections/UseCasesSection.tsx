import { Card } from "@/components/ui/card";
import { Car, Home, Shirt, Smartphone, Coffee, Gem } from "lucide-react";

export const UseCasesSection = () => {
  const useCases = [
    {
      icon: Car,
      title: "Automotivo",
      description: "Concessionárias e lojas de veículos usados. Recomendações baseadas em histórico, preferências e orçamento do cliente.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Home,
      title: "Imobiliário",
      description: "Imobiliárias e construtoras. Sugestões personalizadas de imóveis baseadas em localização, perfil familiar e investimento.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shirt,
      title: "Moda e Varejo",
      description: "Lojas de roupas e acessórios. Recomendações de estilo baseadas em compras anteriores e tendências.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Eletrônicos",
      description: "Lojas de tecnologia e eletrodomésticos. Sugestões de upgrades e produtos complementares inteligentes.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Coffee,
      title: "Comida e Bebidas",
      description: "Restaurantes e cafeterias. Recomendações de pratos e bebidas baseadas em pedidos anteriores.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Gem,
      title: "Luxo e Joias",
      description: "Joalherias e produtos de luxo. Recomendações exclusivas baseadas em perfil e ocasiões especiais.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Além do 
            <span className="bg-gradient-to-r from-tech-red to-cyber-glow bg-clip-text text-transparent ml-2">
              Automotivo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O SalesBot pode ser adaptado para qualquer tipo de comércio que deseja automatizar suas vendas 
            e oferecer experiências personalizadas aos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group p-8 bg-card/50 backdrop-blur border-border/50 hover:border-tech-red/50 hover:shadow-lg hover:shadow-tech-red/10 transition-all duration-300 cursor-pointer">
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-tech-red transition-colors">
                {useCase.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
              
              {/* <div className="mt-6 text-sm text-tech-red opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Saiba mais →
              </div> */}
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-tech-red/10 to-cyber-glow/10 border-tech-red/30">
            <h3 className="text-2xl font-bold mb-4">Seu setor não está aqui?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              O SalesBot é altamente customizável e pode ser adaptado para praticamente qualquer tipo de negócio.
            </p>
            <div className="text-tech-red font-semibold">
              Entre em contato para uma solução personalizada →
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};