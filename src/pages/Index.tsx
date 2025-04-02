
import { ChevronDown, LineChart, Shield, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import ChangesSection from "@/components/ChangesSection";
import CTASection from "@/components/CTASection";
import ServicesSection from "@/components/ServicesSection";
import BrandConcept from "@/components/BrandConcept";
import SageAISection from "@/components/SageAISection";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg font-funnel">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(19,145,110,0.2)_0%,_transparent_50%)] pointer-events-none"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-scal-lime-green/5 blur-3xl"></div>
        
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-scal-dark-green/70 backdrop-blur-sm px-4 py-2 rounded-full border border-scal-green-cyan/20 mb-6">
              <span className="h-2 w-2 bg-scal-lime-green rounded-full mr-2 animate-pulse"></span>
              <p className="text-sm font-medium text-scal-white">Novidade</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              Apresentando a <span className="text-scal-lime-green">nova marca Scal</span>
            </h1>
            
            <p className="text-xl text-scal-white/90 mb-10 max-w-2xl mx-auto">
              Uma nova identidade visual que reflete nossa evolução, valores e visão de futuro para o ecossistema de saúde.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <a href="https://app.sistemascal.com.br" className="button-primary text-base">
                Acessar Sistema
              </a>
              <Link 
                to="/demo" 
                className="button-secondary text-base relative group overflow-hidden"
              >
                <span className="absolute inset-0 bg-scal-green-cyan/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Conhecer Nova Marca</span>
              </Link>
            </div>
            
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-scal-green-cyan/30 to-scal-lime-green/30 rounded-3xl blur-lg opacity-50"></div>
              <div className="relative bg-scal-dark-green/40 backdrop-blur-md rounded-3xl p-4 border border-scal-green-cyan/20 shadow-2xl animate-float overflow-hidden">
                <AspectRatio ratio={16/9} className="rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/eb6fe3ca-2ec3-4c17-b154-3739b6fba02b.png"
                    alt="Nova Identidade Visual Scal" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#conceito" 
            className="text-scal-white/70 flex flex-col items-center hover:text-scal-lime-green transition-colors"
          >
            <span className="mb-2 text-sm">Descubra nossa nova identidade</span>
            <ChevronDown className="animate-bounce" />
          </a>
        </div>
      </section>
      
      <BrandConcept />
      
      <ServicesSection />
      
      <SageAISection />
      
      <ChangesSection />
      
      {/* Features Section */}
      <section className="py-20 px-6" id="features">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-scal-orange font-museo uppercase tracking-wider text-sm font-medium mb-2 inline-block">
              Recursos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-scal-white">
              Uma plataforma <span className="text-scal-lime-green">completa</span>
            </h2>
            <p className="text-scal-white/80 text-lg">
              O Scal foi desenvolvido para atender todas as suas necessidades com 
              ferramentas poderosas e uma interface intuitiva.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap />}
              title="Ultra Rápido"
              description="Interface otimizada e tempos de carregamento reduzidos para uma experiência fluida e sem interrupções."
            />
            <FeatureCard
              icon={<Shield />}
              title="Segurança Máxima"
              description="Proteção de dados avançada com criptografia de ponta a ponta e autenticação em dois fatores."
            />
            <FeatureCard
              icon={<LineChart />}
              title="Análises Detalhadas"
              description="Painéis personalizáveis com métricas em tempo real para acompanhar o desempenho do seu negócio."
            />
          </div>
        </div>
      </section>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
