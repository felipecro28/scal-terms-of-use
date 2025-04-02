
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
          <div className="flex gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5585989371016&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20sistema%20Scal.%20"
              className="hidden sm:inline-flex button-secondary text-sm relative group overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 bg-scal-green-cyan/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Agendar uma demo</span>
            </a>
            <a href="https://app.sistemascal.com.br" className="button-primary text-sm">
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
          <div className="flex flex-col gap-3">
            <a 
              href="https://api.whatsapp.com/send?phone=5585989371016&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20sistema%20Scal.%20"
              className="button-secondary text-center group relative overflow-hidden"
              onClick={() => setMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 bg-scal-green-cyan/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Agendar uma demo</span>
            </a>
            <a 
              href="https://app.sistemascal.com.br" 
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
