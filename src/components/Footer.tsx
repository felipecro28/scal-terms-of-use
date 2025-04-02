
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-scal-dark-jungle border-t border-scal-green-cyan/20 py-10 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/fa6f11ea-7a14-451c-a820-1d5225655203.png" 
              alt="Logo Scal" 
              className="h-8" 
            />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-scal-white/70 text-sm">
              &copy; {currentYear} Scal. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
