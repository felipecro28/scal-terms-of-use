
import { Smartphone, Users, Bot, Globe } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 relative" id="servicos">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(19,145,110,0.15)_0%,_transparent_60%)] pointer-events-none"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-scal-orange font-museo uppercase tracking-wider text-sm font-medium mb-2 inline-block">
            Conheça
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-scal-white">
            Nossos <span className="text-scal-lime-green">Serviços</span>
          </h2>
          <p className="text-scal-white/80 text-lg">
            Uma plataforma completa para profissionais de saúde e pacientes, com soluções inovadoras 
            para transformar a experiência de atendimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            icon={<Smartphone />}
            title="App Scal Profissional"
            description="Gerencie sua agenda, pacientes e finanças com facilidade através do nosso aplicativo desenvolvido exclusivamente para profissionais de saúde."
          />
          <ServiceCard
            icon={<Users />}
            title="App Scal Pacientes"
            description="Uma experiência digital completa que permite aos pacientes agendar consultas, acessar resultados e manter um histórico de saúde organizado."
          />
          <ServiceCard
            icon={<Bot />}
            title="Secretária com IA"
            description="Nossa assistente virtual inteligente automatiza tarefas administrativas, gerencia agendamentos e mantém uma comunicação eficaz com os pacientes."
          />
          <ServiceCard
            icon={<Globe />}
            title="Software completo para web"
            description="Plataforma web robusta e completa com todas as ferramentas necessárias para a gestão eficiente da sua prática ou clínica."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
