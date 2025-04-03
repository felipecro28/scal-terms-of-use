
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import DemoForm from "../components/DemoForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DemoLanding = () => {
  return (
    <div className="min-h-screen gradient-bg font-funnel">
      {/* Header Space */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-scal-white hover:text-scal-lime-green transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Voltar para a página inicial
          </Link>
        </div>
        
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-10">
            <Badge variant="outline" className="bg-scal-lime-green/10 text-scal-lime-green border-scal-lime-green/20 mb-4">
              Demonstração Exclusiva
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-scal-white leading-tight">
              Transforme sua <span className="text-scal-lime-green">clínica</span> com um sistema completo de gestão
            </h1>
            <p className="text-xl text-scal-white/80 max-w-3xl mx-auto">
              Agende uma demonstração gratuita e descubra como o Scal pode otimizar sua operação, melhorar o atendimento ao paciente e aumentar sua lucratividade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-scal-dark-green/50 backdrop-blur-md rounded-xl overflow-hidden border border-scal-green-cyan/20 shadow-lg">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/L99Uo2wlWr0" 
                  title="Scal Demo Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-scal-dark-green/50 backdrop-blur-md rounded-xl p-8 border border-scal-green-cyan/20 shadow-lg">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-scal-lime-green">Por que o Scal?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-scal-lime-green/20 flex items-center justify-center mt-1 mr-3">
                      <div className="h-2 w-2 bg-scal-lime-green rounded-full"></div>
                    </div>
                    <p className="text-scal-white/90">
                      <span className="font-bold text-scal-lime-green">Sistema Completo</span> - Gestão financeira, agendamento, prontuários e muito mais em uma única plataforma
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-scal-lime-green/20 flex items-center justify-center mt-1 mr-3">
                      <div className="h-2 w-2 bg-scal-lime-green rounded-full"></div>
                    </div>
                    <p className="text-scal-white/90">
                      <span className="font-bold text-scal-lime-green">App para pacientes e profissionais</span> - Conecte sua equipe e seus pacientes como nunca antes
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-scal-lime-green/20 flex items-center justify-center mt-1 mr-3">
                      <div className="h-2 w-2 bg-scal-lime-green rounded-full"></div>
                    </div>
                    <p className="text-scal-white/90">
                      <span className="font-bold text-scal-lime-green">Inteligência Artificial</span> - Conte com a SAGE para otimizar seus processos e aumentar seus resultados
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-scal-lime-green/20 flex items-center justify-center mt-1 mr-3">
                      <div className="h-2 w-2 bg-scal-lime-green rounded-full"></div>
                    </div>
                    <p className="text-scal-white/90">
                      <span className="font-bold text-scal-lime-green">Baixo custo e fácil implementação</span> - Tecnologia avançada acessível para clínicas de todos os portes
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-scal-white text-center">
            Benefícios tangíveis para sua <span className="text-scal-lime-green">clínica</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-scal-dark-green/50 backdrop-blur-md border-scal-green-cyan/20 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-scal-lime-green/20 flex items-center justify-center">
                  <div className="text-scal-lime-green text-2xl font-bold">1</div>
                </div>
                <h3 className="text-xl font-bold text-scal-lime-green">Economia de Tempo</h3>
                <p className="text-scal-white/80">
                  Reduza o tempo gasto em tarefas administrativas em até 70% com automações inteligentes e processos otimizados.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-scal-dark-green/50 backdrop-blur-md border-scal-green-cyan/20 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-scal-lime-green/20 flex items-center justify-center">
                  <div className="text-scal-lime-green text-2xl font-bold">2</div>
                </div>
                <h3 className="text-xl font-bold text-scal-lime-green">Gestão Financeira Completa</h3>
                <p className="text-scal-white/80">
                  Controle total de receitas, despesas, convênios e visualização clara do desempenho financeiro da sua clínica.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-scal-dark-green/50 backdrop-blur-md border-scal-green-cyan/20 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-scal-lime-green/20 flex items-center justify-center">
                  <div className="text-scal-lime-green text-2xl font-bold">3</div>
                </div>
                <h3 className="text-xl font-bold text-scal-lime-green">Experiência do Paciente</h3>
                <p className="text-scal-white/80">
                  Melhore a satisfação dos pacientes com agendamento online, lembretes automáticos e acesso fácil a documentos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-scal-dark-green/50 backdrop-blur-md border-scal-green-cyan/20 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-scal-lime-green/20 flex items-center justify-center">
                  <div className="text-scal-lime-green text-2xl font-bold">4</div>
                </div>
                <h3 className="text-xl font-bold text-scal-lime-green">Prontuário Digital Completo</h3>
                <p className="text-scal-white/80">
                  Armazene todo o histórico do paciente em um só lugar, com segurança e conformidade com a LGPD.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-scal-dark-green/50 backdrop-blur-md border-scal-green-cyan/20 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-scal-lime-green/20 flex items-center justify-center">
                  <div className="text-scal-lime-green text-2xl font-bold">5</div>
                </div>
                <h3 className="text-xl font-bold text-scal-lime-green">Redução de No-shows</h3>
                <p className="text-scal-white/80">
                  Diminua faltas em até 60% com sistema inteligente de confirmações e lembretes automáticos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-scal-dark-green/50 backdrop-blur-md border-scal-green-cyan/20 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-scal-lime-green/20 flex items-center justify-center">
                  <div className="text-scal-lime-green text-2xl font-bold">6</div>
                </div>
                <h3 className="text-xl font-bold text-scal-lime-green">Análises com IA</h3>
                <p className="text-scal-white/80">
                  Inteligência artificial que analisa seus dados e sugere otimizações para aumentar seu faturamento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Comparison Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-scal-white text-center">
            <span className="text-scal-lime-green">Scal</span> vs. Outros Sistemas
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[768px]">
              <thead>
                <tr className="border-b border-scal-green-cyan/20">
                  <th className="text-left p-4 font-medium text-scal-white/90">Recursos</th>
                  <th className="p-4 text-center font-medium text-scal-lime-green">Scal</th>
                  <th className="p-4 text-center font-medium text-scal-white/60">Concorrentes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-scal-green-cyan/20">
                  <td className="p-4 text-scal-white/80">Sistema completo de gestão</td>
                  <td className="p-4 text-center text-scal-lime-green">✓</td>
                  <td className="p-4 text-center text-scal-white/60">Parcial</td>
                </tr>
                <tr className="border-b border-scal-green-cyan/20">
                  <td className="p-4 text-scal-white/80">Aplicativo para pacientes</td>
                  <td className="p-4 text-center text-scal-lime-green">✓</td>
                  <td className="p-4 text-center text-scal-white/60">Alguns</td>
                </tr>
                <tr className="border-b border-scal-green-cyan/20">
                  <td className="p-4 text-scal-white/80">Inteligência Artificial</td>
                  <td className="p-4 text-center text-scal-lime-green">✓</td>
                  <td className="p-4 text-center text-scal-white/60">Raro</td>
                </tr>
                <tr className="border-b border-scal-green-cyan/20">
                  <td className="p-4 text-scal-white/80">Fácil implementação</td>
                  <td className="p-4 text-center text-scal-lime-green">✓</td>
                  <td className="p-4 text-center text-scal-white/60">Complexo</td>
                </tr>
                <tr className="border-b border-scal-green-cyan/20">
                  <td className="p-4 text-scal-white/80">Suporte especializado</td>
                  <td className="p-4 text-center text-scal-lime-green">✓</td>
                  <td className="p-4 text-center text-scal-white/60">Limitado</td>
                </tr>
                <tr className="border-b border-scal-green-cyan/20">
                  <td className="p-4 text-scal-white/80">Custo-benefício</td>
                  <td className="p-4 text-center text-scal-lime-green">✓</td>
                  <td className="p-4 text-center text-scal-white/60">Baixo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-scal-white text-center">
            O que nossos clientes <span className="text-scal-lime-green">dizem</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-scal-dark-green/50 backdrop-blur-md border-scal-green-cyan/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-scal-lime-green">
                    <span className="text-2xl">★★★★★</span>
                  </div>
                  <p className="text-scal-white/80 italic mb-6">
                    "O Scal transformou completamente o funcionamento da minha clínica. Reduzi custos operacionais e aumentei o número de atendimentos em 30% no primeiro trimestre de uso."
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-scal-white">Dra. Amanda Silva</p>
                    <p className="text-scal-white/60 text-sm">Clínica Odontológica</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-scal-dark-green/50 backdrop-blur-md border-scal-green-cyan/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-scal-lime-green">
                    <span className="text-2xl">★★★★★</span>
                  </div>
                  <p className="text-scal-white/80 italic mb-6">
                    "Os pacientes adoram o aplicativo e a facilidade para agendar consultas. Nossa taxa de retorno aumentou em 40% desde que implementamos o sistema."
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-scal-white">Dr. Ricardo Mendes</p>
                    <p className="text-scal-white/60 text-sm">Clínica de Fisioterapia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-scal-dark-green/50 backdrop-blur-md border-scal-green-cyan/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-scal-lime-green">
                    <span className="text-2xl">★★★★★</span>
                  </div>
                  <p className="text-scal-white/80 italic mb-6">
                    "A implementação foi surpreendentemente rápida e o suporte é excepcional. Em apenas uma semana já estávamos utilizando todos os recursos do sistema."
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-scal-white">Dra. Carolina Freitas</p>
                    <p className="text-scal-white/60 text-sm">Clínica Multiespecialidades</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Form Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-scal-dark-green/50 backdrop-blur-md rounded-xl p-8 border border-scal-green-cyan/20 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-scal-white">
              Agende sua <span className="text-scal-lime-green">demonstração gratuita</span>
            </h2>
            <p className="text-scal-white/80 text-center mb-8">
              Preencha o formulário abaixo para agendar uma demonstração personalizada do sistema Scal.
              Nossa equipe entrará em contato para agendar no melhor horário para você.
            </p>
            
            <DemoForm />
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-scal-white mb-6">
            Pronto para transformar sua clínica com o <span className="text-scal-lime-green">Scal</span>?
          </h3>
          <p className="text-scal-white/80 mb-8">
            Junte-se às centenas de clínicas que já estão economizando tempo, 
            melhorando o atendimento e aumentando seus lucros com o Scal.
          </p>
          <Button 
            className="bg-scal-lime-green hover:bg-scal-lime-green/90 text-scal-dark-jungle font-medium py-2 px-6 rounded-md transition-colors"
            size="lg"
            onClick={() => {
              const formElement = document.getElementById('demo-form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Agendar demonstração agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoLanding;
