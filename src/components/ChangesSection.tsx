
import { ArrowRight } from "lucide-react";

const ChangesSection = () => {
  return (
    <section className="py-20 px-6" id="mudancas">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-scal-orange font-museo uppercase tracking-wider text-sm font-medium mb-2 inline-block">
            Evoluindo para o futuro
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-scal-white">
            O Scal está de <span className="text-scal-lime-green">cara nova</span>
          </h2>
          <p className="text-scal-white/80 text-lg">
            Redesenhamos completamente a plataforma para oferecer uma experiência mais fluida, 
            intuitiva e poderosa. Conheça as principais mudanças do novo Scal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-scal-green-cyan/20 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-scal-lime-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-scal-white mb-2">Interface renovada</h3>
                <p className="text-scal-white/80">
                  Design moderno e responsivo, com foco na experiência do usuário e na facilidade de uso.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-scal-green-cyan/20 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-scal-lime-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-scal-white mb-2">Performance aprimorada</h3>
                <p className="text-scal-white/80">
                  Reescrevemos o código para tornar o sistema mais rápido e eficiente, mesmo com grandes volumes de dados.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-scal-green-cyan/20 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-scal-lime-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-scal-white mb-2">Novos recursos</h3>
                <p className="text-scal-white/80">
                  Adicionamos funcionalidades solicitadas pelos usuários e modernizamos os recursos existentes.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-scal-green-cyan/20 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-scal-lime-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-scal-white mb-2">Segurança reforçada</h3>
                <p className="text-scal-white/80">
                  Implementamos as mais recentes tecnologias de segurança para proteger seus dados e informações.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-scal-green-cyan/20 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-scal-lime-green/10 blur-3xl"></div>
            <div className="relative bg-scal-dark-green/40 border border-scal-green-cyan/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-scal-dark-jungle/70 rounded-xl p-6 mb-6">
                <div className="h-4 w-32 bg-scal-green-cyan/30 rounded-full mb-4"></div>
                <div className="h-3 w-full bg-scal-green-cyan/20 rounded-full mb-3"></div>
                <div className="h-3 w-5/6 bg-scal-green-cyan/20 rounded-full mb-3"></div>
                <div className="h-3 w-4/6 bg-scal-green-cyan/20 rounded-full"></div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 bg-scal-lime-green/20 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 w-20 bg-scal-green-cyan/30 rounded-full mb-2"></div>
                  <div className="h-3 w-32 bg-scal-green-cyan/20 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-scal-dark-jungle/70 rounded-lg"></div>
                <div className="h-24 bg-scal-dark-jungle/70 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangesSection;
