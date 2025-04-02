
import { ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-scal-dark-jungle border-t border-scal-green-cyan/20 py-10 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <img 
              src="/lovable-uploads/fa6f11ea-7a14-451c-a820-1d5225655203.png" 
              alt="Logo Scal" 
              className="h-8 mb-4" 
            />
            <p className="text-scal-white/70 text-sm max-w-xs">
              Uma plataforma completa que transforma processos em resultados reais na saúde.
            </p>
          </div>
          
          <div>
            <h3 className="text-scal-white font-semibold mb-4">Documentos Legais</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/termos-de-uso" 
                  className="text-scal-white/70 hover:text-scal-lime-green transition-colors inline-flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Termos de Uso
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="/politica-de-privacidade" 
                  className="text-scal-white/70 hover:text-scal-lime-green transition-colors inline-flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="/lgpd" 
                  className="text-scal-white/70 hover:text-scal-lime-green transition-colors inline-flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LGPD
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-scal-white font-semibold mb-4">Acesso</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#acesso" className="text-scal-white/70 hover:text-scal-lime-green transition-colors">
                  Acessar Sistema
                </a>
              </li>
              <li>
                <a href="#demo" className="text-scal-white/70 hover:text-scal-lime-green transition-colors">
                  Solicitar Demonstração
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-scal-green-cyan/10 pt-6 text-center">
          <p className="text-scal-white/70 text-sm">
            &copy; {currentYear} Scal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
