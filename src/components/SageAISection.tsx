
const SageAISection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-[#8B5CF6]/10 to-[#D946EF]/10" id="sage">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(209,103,255,0.2)_0%,_transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-scal-orange font-museo uppercase tracking-wider text-sm font-medium mb-2 inline-block">
            Inteligência Artificial
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-scal-white">
            Conheça a <span className="text-[#D946EF]">Sage</span>
          </h2>
          <p className="text-scal-white/80 text-lg">
            Nossa assistente de IA que potencializa a área de relatórios e análises do Scal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video bg-[#2D1B69]/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg shadow-[#D946EF]/20 border border-[#8B5CF6]/20">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/L99Uo2wlWr0" 
                title="Sage AI Assistant" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-museo font-bold text-[#D946EF]">
              Sage: A inteligência que antecipa as suas necessidades
            </h3>
            
            <p className="text-scal-white text-lg">
              Nossa IA não apenas analisa dados — ela transforma insights em ações concretas.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-[#D946EF]/20 flex items-center justify-center mt-1 mr-3">
                  <div className="h-2 w-2 bg-[#D946EF] rounded-full"></div>
                </div>
                <p className="text-scal-white/90">
                  Enquanto você cuida dos pacientes, SAGE otimiza sua agenda, identifica padrões de cancelamento e implementa automaticamente processos comprovados para maximizar sua produtividade.
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-[#D946EF]/20 flex items-center justify-center mt-1 mr-3">
                  <div className="h-2 w-2 bg-[#D946EF] rounded-full"></div>
                </div>
                <p className="text-scal-white/90">
                  É como ter um analista, um gestor e um estrategista trabalhando 24/7 para sua clínica.
                </p>
              </li>
            </ul>
            
            <a href="#demo" className="inline-flex mt-4 bg-[#8B5CF6] text-white font-medium px-6 py-3 rounded-full transition-all hover:bg-opacity-90 hover:shadow-lg hover:shadow-[#8B5CF6]/30 focus:ring-2 focus:ring-[#8B5CF6]/50 focus:outline-none">
              Conheça a Sage em Ação
            </a>
          </div>
        </div>
        
        <div className="mt-20">
          <img 
            src="/lovable-uploads/36ca34ec-449f-4c59-ae5e-e04ecda18dd4.png" 
            alt="Sage AI Banner" 
            className="w-full h-auto rounded-2xl shadow-lg border border-[#8B5CF6]/20"
          />
        </div>
      </div>
    </section>
  );
};

export default SageAISection;
