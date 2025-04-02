
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PoliticaDePrivacidade = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-scal-white">Política de Privacidade</h1>
          <p className="text-scal-white/70 mb-8">Última atualização: 28 de dezembro de 2023</p>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-scal-white/90 mb-4">
              Os serviços da Scal são fornecidos pela pessoa jurídica Scal Plataforma de Tecnologia de Serviços de Saúde LTDA ME, 
              inscrita no CNPJ sob o nº 18.758.067/0001-55.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Esta Política de Privacidade tem por finalidade demonstrar o compromisso da Scal com a privacidade e a proteção 
              dos dados pessoais coletados, estabelecendo as regras sobre a coleta, registro, armazenamento, uso, compartilhamento 
              e eliminação dos dados pessoais coletados.
            </p>
            
            {/* Adicionar aqui o restante do conteúdo da política de privacidade */}
            <p className="text-scal-white/90 mt-8 mb-4">
              Para saber mais detalhes sobre nossa Política de Privacidade completa, consulte nosso site oficial.
            </p>
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

export default PoliticaDePrivacidade;
