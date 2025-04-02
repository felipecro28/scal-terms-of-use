
const CTASection = () => {
  return (
    <section className="py-20 px-6 relative" id="acesso">
      <div className="absolute inset-0 bg-gradient-radial from-scal-green-cyan/10 to-transparent opacity-30"></div>
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto bg-scal-dark-green bg-opacity-80 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center border border-scal-green-cyan/20 shadow-xl shadow-scal-lime-green/5">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-scal-white">
            Comece agora com o <span className="text-scal-lime-green">novo Scal</span>
          </h2>
          <p className="text-scal-white/80 text-lg mb-10">
            Faça parte dessa transformação na saúde. Acesse o sistema atual ou agende uma demonstração para conhecer o futuro do Scal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#acesso" className="button-primary text-base">
              Acessar Sistema Atual
            </a>
            <a href="#demo" className="button-secondary text-base" id="demo">
              Agendar Demonstração do Novo Scal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
