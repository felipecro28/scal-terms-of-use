
import { Leaf, Heart, Zap } from "lucide-react";

const BrandConcept = () => {
  return (
    <section className="py-20 px-6" id="conceito">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-scal-orange font-museo uppercase tracking-wider text-sm font-medium mb-2 inline-block">
            Nossa Essência
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-scal-white">
            Uma identidade que <span className="text-scal-lime-green">conecta e transforma</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-scal-lime-green/10 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-scal-dark-green to-scal-dark-jungle/80 rounded-2xl p-8 border border-scal-green-cyan/30 shadow-xl shadow-scal-dark-jungle/30">
              <img 
                src="/lovable-uploads/fa6f11ea-7a14-451c-a820-1d5225655203.png" 
                alt="Logo Scal" 
                className="w-32 h-auto mb-8" 
              />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 bg-scal-lime-green/20 rounded-full flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-scal-lime-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-scal-white">Crescimento</h3>
                  <p className="text-sm text-scal-white/70">Evolução constante</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 bg-scal-green-cyan/20 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-scal-green-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-scal-white">Empatia</h3>
                  <p className="text-sm text-scal-white/70">Foco nas pessoas</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-scal-orange/20 rounded-full flex items-center justify-center">
                  <Zap className="h-5 w-5 text-scal-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-scal-white">Inovação</h3>
                  <p className="text-sm text-scal-white/70">Visão de futuro</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 text-scal-white/80">
            <p>
              A identidade visual do Scal foi pensada para traduzir a essência do que somos: uma plataforma que transforma processos em resultados reais. Inspirada no conceito de conexão, ela reflete a nossa missão de aproximar profissionais de saúde e pacientes, dados e insights, desafios e soluções.
            </p>
            <p>
              Mais do que um visual, é uma expressão do nosso propósito. Unimos precisão analítica, empatia humana e visão de futuro — uma combinação que se revela em cada detalhe: nas formas que equilibram geometria e fluidez, nas cores que transmitem confiança e acolhimento, e na tipografia que une clareza e personalidade.
            </p>
            <p>
              Nascemos de dentro do setor de saúde, entendendo suas dores e necessidades. Agora, com uma base sólida, estamos prontos para expandir para novos horizontes.
            </p>
            <p className="font-semibold">
              Nossa escolha pelo verde, em um mercado saturado de azul, simboliza exatamente isso: 
              <span className="text-scal-lime-green"> crescimento, vitalidade e evolução</span>. 
              Porque mais do que oferecer uma solução, queremos impulsionar uma nova era na saúde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandConcept;
