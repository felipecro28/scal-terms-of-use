
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
        
        <div className="flex gap-4">
          <a href="#demo" className="hidden sm:inline-block button-secondary text-sm">
            Demonstração
          </a>
          <a href="#acesso" className="button-primary text-sm">
            Acessar Sistema
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
