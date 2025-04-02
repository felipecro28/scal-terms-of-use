
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
            O Scal está com <span className="text-scal-lime-green">nova identidade</span>
          </h2>
          <p className="text-scal-white/80 text-lg">
            Repensamos nossa marca para representar melhor nossos valores e nossa visão para o futuro da saúde.
            Este é o primeiro passo de uma grande transformação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-scal-green-cyan/20 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-scal-lime-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-scal-white mb-2">Nova identidade visual</h3>
                <p className="text-scal-white/80">
                  Cores vibrantes e formas modernas que refletem nossa missão de inovar no setor de saúde.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-scal-green-cyan/20 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-scal-lime-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-scal-white mb-2">Valores reforçados</h3>
                <p className="text-scal-white/80">
                  Nossa nova marca reflete nosso compromisso com inovação, confiança e excelência no cuidado com a saúde.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-scal-green-cyan/20 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-scal-lime-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-scal-white mb-2">Preparação para o futuro</h3>
                <p className="text-scal-white/80">
                  Esta renovação visual é o primeiro passo de uma jornada que trará muitas novidades para nossa plataforma.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-scal-green-cyan/20 flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-scal-lime-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-scal-white mb-2">Mesma confiabilidade</h3>
                <p className="text-scal-white/80">
                  Apesar da nova aparência, mantemos o mesmo compromisso com a qualidade e confiabilidade que você já conhece.
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
