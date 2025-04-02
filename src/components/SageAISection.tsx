
import { Badge } from "@/components/ui/badge";

const SageAISection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white" id="sage">
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="text-[#FB7F26] font-museo uppercase tracking-wider text-sm font-medium mb-2 inline-block">
            Inteligência Artificial
          </span>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B241C]">
              Conheça a <span className="text-[#FB7F26]">Sage</span>
            </h2>
            <Badge variant="outline" className="bg-[#FB7F26]/10 text-[#FB7F26] border-[#FB7F26]/20 ml-2">
              Em breve
            </Badge>
          </div>
          
          <p className="text-[#0B241C]/80 text-lg mb-4">
            Nossa assistente de IA que potencializa a área de relatórios e análises do Scal.
          </p>
          
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            <Badge variant="outline" className="bg-[#0B241C]/5 text-[#0B241C] border-[#0B241C]/10 text-sm px-3 py-1">
              <span className="font-bold mr-1">S</span>cal
            </Badge>
            <Badge variant="outline" className="bg-[#0B241C]/5 text-[#0B241C] border-[#0B241C]/10 text-sm px-3 py-1">
              <span className="font-bold mr-1">A</span>vançado
            </Badge>
            <Badge variant="outline" className="bg-[#0B241C]/5 text-[#0B241C] border-[#0B241C]/10 text-sm px-3 py-1">
              <span className="font-bold mr-1">G</span>estão
            </Badge>
            <Badge variant="outline" className="bg-[#0B241C]/5 text-[#0B241C] border-[#0B241C]/10 text-sm px-3 py-1">
              <span className="font-bold mr-1">E</span>xpertise
            </Badge>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-video bg-[#0B241C]/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-[#0B241C]/10">
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
        
        <div className="space-y-6 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-museo font-bold text-[#FB7F26]">
            Sage: A inteligência que antecipa as suas necessidades
          </h3>
          
          <p className="text-[#0B241C] text-lg">
            Nossa IA não apenas analisa dados — ela transforma insights em ações concretas.
          </p>
          
          <ul className="space-y-4 text-left mx-auto max-w-xl">
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-[#FB7F26]/20 flex items-center justify-center mt-1 mr-3">
                <div className="h-2 w-2 bg-[#FB7F26] rounded-full"></div>
              </div>
              <p className="text-[#0B241C]/90">
                Enquanto você cuida dos pacientes, SAGE otimiza sua agenda, identifica padrões de cancelamento e implementa automaticamente processos comprovados para maximizar sua produtividade.
              </p>
            </li>
            <li className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-[#FB7F26]/20 flex items-center justify-center mt-1 mr-3">
                <div className="h-2 w-2 bg-[#FB7F26] rounded-full"></div>
              </div>
              <p className="text-[#0B241C]/90">
                É como ter um analista, um gestor e um estrategista trabalhando 24/7 para sua clínica.
              </p>
            </li>
          </ul>
          
          <div className="pt-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5585989371016&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20sistema%20Scal.%20" 
              className="inline-flex mt-4 bg-gradient-to-r from-[#FB7F26] to-[#FB7F26]/80 text-white font-medium px-6 py-3 rounded-full transition-all hover:bg-opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-[#FB7F26]/50 focus:ring-2 focus:ring-[#FB7F26]/50 focus:outline-none duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar uma demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SageAISection;
