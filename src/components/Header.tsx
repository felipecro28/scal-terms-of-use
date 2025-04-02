
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        scrolled ? "bg-scal-dark-jungle bg-opacity-80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/fa6f11ea-7a14-451c-a820-1d5225655203.png" 
            alt="Logo Scal" 
            className="h-8 md:h-10"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <a href="#conceito" className="text-scal-white/80 hover:text-scal-lime-green transition-colors text-sm">
              Nova Identidade
            </a>
            <a href="#servicos" className="text-scal-white/80 hover:text-scal-lime-green transition-colors text-sm">
              Serviços
            </a>
            <a href="#mudancas" className="text-scal-white/80 hover:text-scal-lime-green transition-colors text-sm">
              Mudanças
            </a>
          </nav>
          
          <div className="flex gap-4">
            <a href="#demo" className="hidden sm:inline-block button-secondary text-sm">
              Demonstração
            </a>
            <a href="#acesso" className="button-primary text-sm">
              Acessar Sistema
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-scal-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-scal-dark-jungle bg-opacity-95 backdrop-blur-lg p-6 border-t border-scal-green-cyan/10 shadow-lg">
          <nav className="flex flex-col gap-4 mb-6">
            <a 
              href="#conceito" 
              className="text-scal-white/80 hover:text-scal-lime-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nova Identidade
            </a>
            <a 
              href="#servicos" 
              className="text-scal-white/80 hover:text-scal-lime-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#mudancas" 
              className="text-scal-white/80 hover:text-scal-lime-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mudanças
            </a>
          </nav>
          <div className="flex flex-col gap-3">
            <a 
              href="#demo" 
              className="button-secondary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demonstração
            </a>
            <a 
              href="#acesso" 
              className="button-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acessar Sistema
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
