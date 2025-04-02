
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermosDeUso = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-scal-white">Termos de Uso</h1>
          <p className="text-scal-white/70 mb-8">Este Termo de uso foi atualizado em 28 de Dezembro de 2023</p>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-xl md:text-2xl font-bold text-scal-white mb-4">TERMOS E CONDIÇÕES DE USO</h2>
            <p className="text-scal-white/90 mb-4">
              O presente Termo, dispõe das condições gerais de uso dos serviços oferecidos pela Scal Plataforma de Tecnologia de Serviços de Saúde LTDA ME, 
              inscrita no CNPJ sob o nº. 18.758.067/0001-55, gestora do SCAL, que pode ser acessada pelo site https://appscal.com.br e seus subdomínios.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Para exata compreensão e interpretação dos direitos e obrigações previstos no presente Termo, serão adotadas as seguintes definições em adição às definições do Termo Geral:
            </p>
            
            <p className="text-scal-white/90 mb-4">
              a) APLICATIVO: Um programa de software integrado ao Scal, chamado de "Scal Profissional" nas lojas de aplicativos Google Play e App Store, 
              projetado exclusivamente para ser executado em celulares e de uso comum para as entidades em saúde.<br />
              b) SOFTWARE SCAL: Plataforma on-line no modelo de negócio SaaS (Software as a Service) da empresa Scal que oferece um hub de serviços, 
              tais como: agenda digital, gestão financeira, prontuários eletrônicos, relatórios, gerenciador de vendas, gerenciador de leads e muito mais.<br />
              c) PACIENTES: Indivíduos que buscam cuidados e/ou estão sob os cuidados de profissionais de saúde.<br />
              d) APLICATIVO CLIENTE: Um programa de software da empresa Scal, chamado de "Meu Scal" nas lojas de aplicativos Google Play e App Store, 
              projetado para ser executado em celulares e de uso exclusivo dos pacientes.<br />
              e) PRONTO AGENDEI: Website no modelo de marketplace vinculada a empresa Scal, hospedada no site www.prontoagendei.com.br e/ou outros domínios.<br />
              f) PARCEIROS/TERCEIROS: Entidades ou indivíduos que colaboram mutuamente para atingir objetivos comuns do Scal.<br />
              g) USUÁRIO: Pessoa responsável pela gestão da plataforma Scal.<br />
              h) PRONTUÁRIO ELETRÔNICO: Registro digital das informações relacionadas a saúde de um paciente, incluindo histórico, diagnósticos, tratamentos e outros detalhes relevantes.<br />
              i) PLANO PRÉ-PAGO: É o plano em que o Usuário paga pelos serviços de forma antecipada. Ou seja, antes de utilizá-los.<br />
              j) PLANO PÓS-PAGO: Pós-pago é um tipo de modalidade em que o Usuário paga pelos serviços depois de utilizá-los. Ou seja, paga por aquilo que consumiu em um período de 30 (trinta) dias.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              O USUÁRIO (pessoa física ou jurídica) deve aceitar todas as cláusulas constantes neste termo e demais condições disponíveis no site.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Ao aceitar eletronicamente os Termos de Uso, o USUÁRIO, automaticamente, adere e concorda integralmente com os termos, 
              condições e políticas do SCAL, presentes neste documento, como em todos os outros disponíveis nas plataformas de acesso ao SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Este documento é dotado de plenos efeitos jurídicos entre SCAL e USUÁRIO, em relação aos serviços oferecidos. 
              Por esse motivo, é importante que o USUÁRIO leia todo o conteúdo com atenção.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 1ª – DO OBJETO</h3>
            <p className="text-scal-white/90 mb-4">
              O objeto do presente Termo é a disponibilização do SOFTWARE SCAL e seus subdomínios, ferramentas destinadas aos profissionais 
              de saúde para atendimento clínico e de gestão administrativa e financeira de sua atividade.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              1.1. Todas as informações inseridas pelo USUÁRIO nas plataformas de acesso ao SOFTWARE SCAL, serão de sua única e exclusiva responsabilidade.
            </p>
            
            {/* Continuação dos termos - Clausulas subsequentes */}
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 2ª – ACEITAÇÃO DOS TERMOS, CRIAÇÃO DE CONTA E UTILIZAÇÃO PELO USUÁRIO</h3>
            {/* Conteúdo da cláusula 2 */}
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 3ª – DO PAGAMENTO</h3>
            {/* Conteúdo da cláusula 3 */}
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 4ª – DA RESCISÃO CONTRATUAL</h3>
            {/* Conteúdo da cláusula 4 */}
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 5ª – DOS DADOS PESSOAIS FORNECIDOS PELO USUÁRIO</h3>
            {/* Conteúdo da cláusula 5 */}
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 6ª – DAS OBRIGAÇÕES DAS PARTES</h3>
            {/* Conteúdo da cláusula 6 */}
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 7ª – DO PRAZO</h3>
            {/* Conteúdo da cláusula 7 */}
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 8ª – DA PROPRIEDADE INTELECTUAL</h3>
            {/* Conteúdo da cláusula 8 */}
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 9ª – DAS DISPOSIÇÕES GERAIS</h3>
            {/* Conteúdo da cláusula 9 */}
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

export default TermosDeUso;
