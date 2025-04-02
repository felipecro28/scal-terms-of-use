
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LGPD = () => {
  return (
    <div className="min-h-screen bg-scal-dark-jungle font-funnel">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-scal-white hover:text-scal-lime-green transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Voltar para a página inicial
          </Link>
        </div>
        
        <div className="bg-scal-dark-green/50 backdrop-blur-md rounded-xl p-8 border border-scal-green-cyan/20 shadow-lg mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-scal-white">Lei Geral de Proteção de Dados (LGPD)</h1>
          <p className="text-scal-white/70 mb-8">Última atualização: 28 de dezembro de 2023</p>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-scal-white/90 mb-6">
              A Empresa Scal Tecnologia disponibiliza um e-mail para solicitações dos titulares de dados pessoais no exercício dos seus direitos em respeito a Lei nº 13.908/2018 (Lei Geral de Proteção de Dados).
            </p>
            
            <p className="text-scal-white/90 mb-6">
              Todas as comunicações realizadas através dos e-mails serão analisadas e respondidas no prazo de 15 (quinze) dias.
            </p>
            
            <div className="bg-scal-dark-jungle/50 rounded-lg p-6 border border-scal-green-cyan/10 mt-8">
              <h2 className="text-xl font-semibold text-scal-lime-green mb-4">Informações de Contato</h2>
              <p className="text-scal-white/90 mb-2">
                <span className="font-semibold">DPOs responsáveis:</span> Thiago Coelho e Almiro Araújo
              </p>
              <p className="text-scal-white/90">
                <span className="font-semibold">E-mail de contato:</span>{" "}
                <a 
                  href="mailto:dpo@appscal.com.br" 
                  className="text-scal-lime-green hover:text-scal-lime-green/80 transition-colors"
                >
                  dpo@appscal.com.br
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link 
            to="/" 
            className="button-primary text-base"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LGPD;
