
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
            
            <p className="text-scal-white/90 mb-4">
              1.2. O SOFTWARE SCAL não se responsabiliza pela integridade ou legitimidade das informações importadas e/ou exportadas de/ou por terceiros e/ou parceiros do SCAL. Apesar disso, o SOFTWARE SCAL se reserva o direito de retirar de sua base de dados quaisquer parceiros e/ou USUÁRIOS que não atendam aos padrões de ética, qualidade e boa-fé, cuja principal preocupação é promover um ambiente seguro e confiável para os seus USUÁRIOS. Portanto, os USUÁRIOS, desde já, isentam o SOFTWARE SCAL de qualquer responsabilidade por práticas contrárias ao estabelecido neste termo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              1.3. O USUÁRIO reconhece e aceita que a contratação ou utilização de serviços de parceiros e/ou terceiros que possuam serviços de integração com o SCAL, o faz por sua conta e risco, sendo exclusivamente de ambas as partes a responsabilidade por todas as obrigações delas decorrentes, sejam fiscais, trabalhistas, consumeristas ou de qualquer outra natureza.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              1.4. Em nenhum caso, o SCAL será responsável por indenização a qualquer dano e/ou prejuízo que o USUÁRIO possa sofrer devido à contratação destes serviços (item 1.3) de terceiros e/ou parceiros do SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              1.5. Nas ações judiciais que o SCAL seja réu e cujos fatos dizem respeito às relações do USUÁRIO com seus clientes e/ou terceiros, individualmente ou não, este USUÁRIO será chamado ao processo, devendo arcar com todas as obrigações daí decorrentes, ainda que não figure como parte no processo ou em negociações.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              1.6. O USUÁRIO concorda que o SCAL somente terá como forma de proteger o correto uso de suas plataformas e serviços, com a exclusão do USUÁRIO do SOFTWARE SCAL, sem qualquer reembolso ou indenização, caso fique verificado a realização de atividades fraudulentas ou em desacordo com o presente Termo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              1.7. Os critérios previstos para a avaliação e aplicação da sanção prevista no item anterior, serão definidos pelo SOFTWARE SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              1.8. O SOFTWARE SCAL não aceitará e retirará da sua base de dados, os USUÁRIOS que não coadunem com seus princípios, especialmente os de proteção ao consumidor, assim como a boa-fé contratual e dignidade da pessoa humana.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 2ª – ACEITAÇÃO DOS TERMOS, CRIAÇÃO DE CONTA E UTILIZAÇÃO PELO USUÁRIO</h3>
            <p className="text-scal-white/90 mb-4">
              2.1. Para fazer uso do SCAL, o USUÁRIO deverá se cadastrar para poder se habilitar no SOFTWARE SCAL, concordando com os Termos de Uso. Serão informados ao SOFTWARE SCAL todos os dados exigidos, inclusive dados pessoais, como número de CPF (Cadastro de Pessoa Física), e responsabilizar-se-á o USUÁRIO civil e criminalmente pela veracidade das informações, inclusive perante terceiros, obrigando-se também, a manter seus dados atualizados. O USUÁRIO deverá informar também, obrigatoriamente, um endereço de e-mail válido de uso único e exclusivo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.2 O SCAL não se responsabiliza, de nenhuma maneira e, em nenhuma hipótese, pela utilização indevida dos serviços ou pelas atividades de seus USUÁRIOS no SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.3. O LOGIN e a SENHA são de acesso exclusivo do USUÁRIO, que deverá mantê-lo em sigilo, razão pela qual o SOFTWARE SCAL não se responsabiliza por eventual manipulação não autorizada dessas informações por terceiros.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.4. O USUÁRIO deverá informar ao SCAL, imediatamente, a respeito de qualquer uso não autorizado de sua conta, bem como o acesso não autorizado por terceiros a esta.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.5. O SCAL poderá, a qualquer momento, exigir a comprovação dos dados informados no cadastro, mediante cópia ou imagem de documentos, podendo, até que sejam cumpridas as exigências, suspender o fornecimento do serviço. Havendo comprovação de inconsistência dos dados, o serviço poderá ser cancelado em definitivo, a critério do SCAL, sem prejuízo das sanções cabíveis.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.6. O SOFTWARE SCAL somente poderá ser utilizado por pessoas com capacidade legal para fazê-lo. Pessoas que não gozem dessa capacidade, inclusive menores de idade, ou pessoas que tenham cometido infrações a este Termo, e, consequentemente tenham sido inabilitadas, estão advertidas das sanções legais do Código Civil, notadamente, dos artigos 166, inciso I, 171, inciso I e 180 da lei n° 10.406/02.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Parágrafo primeiro: Menores de idade estão impedidos de navegar ou fazer uso do SOFTWARE SCAL ou, ainda, de ter suas informações repassadas sem o consentimento dos pais ou responsável legal.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Parágrafo segundo: Menores de 18 anos poderão acessar o aplicativo Meu Scal e o Pronto Agendei, direcionados aos pacientes, sob a supervisão dos pais ou responsável legal, que assumam a responsabilidade pelo uso adequado. O SCAL não se responsabiliza pelo uso inadequado da plataforma e reserva o direito de solicitar comprovação de autorização parental. O acesso implica na concordância dos termos.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.7. O SOFTWARE SCAL estará à disposição do USUÁRIO com um nível de serviço de no mínimo 99,02% (noventa e nove vírgula zero dois por cento) do tempo de disponibilidade, com exceção de manutenções previstas ou imprevistas, casos fortuitos e de força maior, que serão informados mediante comunicado pelo próprio SOFTWARE SCAL, através de qualquer uma de suas plataformas. Eventuais erros, ou imperfeições que possam surgir ao longo da prestação dos serviços ou do fornecimento do conteúdo, não ocasionarão responsabilidade ao SCAL, em razão de serem problemas inerentes à atividade de informática.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.8. O USUÁRIO tem ciência e concorda que o SCAL poderá realizar alterações nas suas plataformas, na própria sistemática de gestão do negócio ou quaisquer outras alterações relacionadas ao empreendimento, sem a necessidade de confirmação e/ou ciência do USUÁRIO. Por esse motivo, o USUÁRIO deverá acessar com frequência as plataformas para manter-se atualizado a respeito das políticas e regras envolvendo o SOFTWARE SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.9. O USUÁRIO tem ciência e concorda que o SCAL, por motivos próprios e sem a necessidade de confirmação e/ou ciência do USUÁRIO, poderá deixar de fornecer os serviços e/ou conteúdo ou parte dele(s), para executar ações necessárias para a melhor prestação do serviço. Nesses casos o USUÁRIO ficará impossibilitado de acessar os serviços e/ou conteúdo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.10. O nome que o USUÁRIO utiliza no SOFTWARE SCAL, não poderá ser ofensivo. O SCAL poderá recusar qualquer solicitação de cadastro ou cancelar cadastro já realizado, se entender que viola as políticas e regras estabelecidas neste e em todos os termos SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.11. Caso o USUÁRIO do plano grátis, bem como aqueles assinantes dos planos onerosos que não estejam mais ativos, deixem de utilizar as plataformas SCAL por prazo igual ou superior a 180 (cento e oitenta) dias, o SCAL poderá, a seu próprio critério, realizar o cancelamento do cadastro e exclusão de dados, incluindo-se todas as informações incorporadas ao sistema.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.12. O USUÁRIO tem ciência dos valores cobrados pelo SCAL (constantes na plataforma), os quais fazem referência à utilização e disponibilização do SOFTWARE SCAL, objeto deste Termo, que devem ser pagos de acordo com o plano escolhido e as regras dispostas no ato da contratação.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Parágrafo único: Os preços dos serviços oferecidos pelo SCAL, bem como, demais condições comerciais ofertadas, poderão ser consultados na área do assinante, na fatura enviada por e-mail ou na proposta comercial, enviada previamente ao USUÁRIO.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.13. O USUÁRIO e o SCAL têm obrigação de respeitar todas as leis e regulamentos infralegais e supralegais em vigor, especialmente no que se refere às normas de segurança de privacidade e, ainda, as políticas do SCAL e de seus parceiros comerciais divulgadas e quaisquer de suas plataformas.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.14. O USUÁRIO deverá seguir as regras relacionadas à sua atividade profissional, a respeito do armazenamento de dados dos seus clientes/pacientes.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.15. O USUÁRIO deverá manter seu equipamento atualizado com as exigências das plataformas SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.16. O suporte tecnológico fornecido pelo SCAL em favor do USUÁRIO é realizado mediante os níveis de suporte n.º "1" e "2", os quais são definidos conforme a natureza da falha e/ou eventual bug. Fica registrado que o suporte prestado pelo SCAL, poderá ser efetivado mediante uma função de administração "master", ou seja, sem necessidade de pedido prévio de login e senha ao usuário. O suporte será prestado conforme orientações a seguir:
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.16.1. Através dos Canais disponíveis: Chat online integrado ao sistema, e-mail ou por WhatsApp;
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.16.2. O Idioma utilizado no suporte técnico será o Português do Brasil;
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.16.3. O suporte será prestado de Segunda a sexta-feira (exceto feriados nacionais ou feriados municipais, onde se localiza a sede do SCAL), das 8h às 12h e 13h30 às 18h (horário oficial de Brasília);
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.16.4. O SCAL poderá disponibilizar um técnico para atendimento nas instalações do USUÁRIO em situações nas quais o suporte por telefone ou remoto não forem suficientes para resolução do problema, mediante aprovação de orçamento específico e agendamento.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.16.5. Os problemas no sistema que necessitam correção podem se enquadrar em uma das seguintes severidades, para os quais se acordam os prazos de resposta:
            </p>
            
            <p className="text-scal-white/90 mb-4">
              a) Prioridade Alta: situações em que o SCAL não está em condições de ser operado ou não está funcional, tornando-se impossível ao USUÁRIO operá-lo ou executar alguma função essencial para a qual o SCAL é rotineiramente utilizado. Nesta situação o SCAL compromete-se a responder o atendimento em até 1 (hum) dia útil.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              b) Prioridade Média: situações em que determinadas funções do SCAL não estão operacionais e/ou quando sistema apresenta erros, porém é possível operá-lo e sua funcionalidade, embora prejudicada, não é comprometida. Atendimento respondido em até 2 (dois) dias úteis.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              c) Prioridade Baixa: situações em que ocorram erros de menor importância, problemas que não influam na operação e funcionalidade do sistema. Respostas aos atendimentos realizados no máximo em até 7 (sete) dias úteis.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.17. O USUÁRIO do SCAL tem o direito de criar um perfil no PRONTO AGENDEI.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.18. O perfil mencionado no item "2.17" acima, poderá ser criado através dos meios dispostos pelo SCAL, de todos os seus subdomínios, websites e aplicativos disponibilizados ao USUÁRIO. Serão incluídas informações profissionais, a saber: Nome, e-mail, WhatsApp, telefone fixo, profissão, número do conselho profissional, perfis nas redes sociais, áreas de atuação, locais de atendimento, método de pagamento, tipo de atendimento, se aceita Plano de Saúde ou não, com inserção de foto. Após a criação de tal perfil pelo USUÁRIO, este poderá publicá-lo, ficando disponível no PRONTO AGENDEI e poderá ainda, ser encontrado por qualquer pessoa com acesso à internet. O USUÁRIO poderá desativar o seu perfil a qualquer momento, no mesmo ambiente em que foi criado.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Parágrafo único: O SCAL se reserva no direito de solicitar ao USUÁRIO, a qualquer tempo, novas informações. Essas novas informações poderão ser solicitadas futuramente, para a melhor prestação do serviço e necessidades internas do SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.19. Como política comercial do SCAL, o USUÁRIO poderá utilizar a plataforma por 30 (trinta) dias consecutivos, desde sua adesão ao presente Termo. Ao final deste período, na hipótese de o USUÁRIO não ficar satisfeito com o oferecido, O SCAL devolverá ao USUÁRIO 100% (cem por cento) do valor pago pela contratação, desde que o USUÁRIO tenha cumprido todos os requisitos abaixo, antes de solicitar o cancelamento:
              a) Ter cadastrado pelo menos 5 (cinco) pacientes;
              b) Ter criado pelo menos 2 (dois) modelos de prontuários eletrônicos;
              c) Ter realizado 5 (cinco) agendamentos, e pelo menos, uma venda (só uma).
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Parágrafo único: o Reembolso total dessa restituição, será feito mediante solicitação, apenas ao USUÁRIO que tiver executado todas as condições dispostas nesta cláusula e não tenha ficado satisfeito com as funcionalidades oferecidas pelo SCAL. Em hipótese alguma, será feito o reembolso dos valores pagos ao USUÁRIO que não tenha cumprido todos os requisitos presentes neste termo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.20. O SCAL disponibilizará exclusivamente ao USUÁRIO dos planos pagos, para cada conta que este possua no SOFTWARE SCAL, 1GB para o armazenamento e inclusão de documentos.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              2.21. O SCAL disponibilizará um Treinamento para o USUÁRIO, o qual poderá ser on-line, por vídeos gravados. Caso o USUÁRIO tenha interesse em um novo treinamento on-line, em prazo inferior a um ano da realização do Treinamento Básico, poderá realizá-lo mediante aviso prévio e pagamento da taxa que será informada pelo SCAL, à época da solicitação feita pelo USUÁRIO.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 3ª – DO PAGAMENTO</h3>
            <p className="text-scal-white/90 mb-4">
              3.1. Pela disponibilização do SOFTWARE SCAL, em quaisquer de suas plataformas, o USUÁRIO pagará o valor e a forma de pagamento escolhida no ato da contratação, de acordo com o informado na plataforma/site.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              3.2. O SCAL poderá direcionar o USUÁRIO a um de seus parceiros comerciais para realizar o pagamento, o qual poderá solicitar o cadastro do USUÁRIO. Neste caso, o SCAL não será responsável pela relação entre USUÁRIO e TERCEIRO.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              3.3. Para a contratação de serviços de terceiros ou outros serviços do próprio SCAL, que não seja a disponibilização prevista neste termo, serão aplicados os valores informados em quaisquer das plataformas de terceiros ou do SCAL, sendo que o SCAL não guardará qualquer responsabilidade com o serviço de terceiros.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              3.4. Quanto ao pagamento dos valores pela disponibilização do SOFTWARE SCAL ou qualquer outro serviço disponibilizado, o SCAL poderá ser intermediado por terceiros, por utilizar meios de pagamentos alheios ao SCAL. Neste caso, o SCAL compartilhará informações sobre as transações comerciais com o TERCEIRO e permitirá que o USUÁRIO possa autorizar o TERCEIRO a realizar os débitos e transferências de fundos.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              3.5. Os preços de todas as Assinaturas poderão ser ajustados automaticamente, a cada ano ou com maior frequência, conforme permitido pela legislação vigente e, segundo o índice IPCA (Índice de Preços ao Consumidor Amplo), ou outro índice equivalente aplicável ao Scal. Caso o índice do mês de reajuste seja negativo, os valores dos planos não sofrerão alterações.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Parágrafo único: o USUÁRIO do plano mensal terá o reajuste mencionado nesta cláusula, considerando para tanto, a data da sua primeira assinatura referente ao plano mensal SCAL.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 4ª – DA RESCISÃO CONTRATUAL</h3>
            <p className="text-scal-white/90 mb-4">
              4.1. O USUÁRIO que optar por não renovar o contrato, deverá comunicar ao SCAL por meio da área disponível na plataforma, qual seja, "Assinaturas e cobranças", e-mail ou chat, a sua intenção de não renovação. Caso haja outra opção de realizar a comunicação prevista nesta cláusula, esta será a forma a ser utilizada pelo usuário.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              4.2. A comunicação de não renovação deste termo somente será válida, se realizada em até 2 (dois) dias úteis anteriores ao vencimento da próxima fatura do plano contratado.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              4.3. Salvo exceções previstas neste documento, a solicitação de cancelamento do USUÁRIO não dará direito ao reembolso de valores já pagos, em nenhuma hipótese.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Parágrafo primeiro: O presente Termo assegura ao USUÁRIO o direito de arrependimento, conforme dispõe o Artigo 49 do Código de Defesa do Consumidor, permitindo-lhe desistir da contratação no prazo de 07 (sete) dias corridos, contados a partir da data de aceitação do presente termo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Parágrafo segundo: Caso o USUÁRIO exerça o direito de arrependimento dentro do período estipulado, o SCAL compromete-se a efetuar a restituição integral dos valores pagos, incluindo-se eventuais taxas e encargos, em até 30 (trinta) dias corridos, a partir da data de recebimento da solicitação de arrependimento.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Parágrafo terceiro: Em caso de renovação do(s) plano(s), que poderá ser automática ou não, conforme escolha do USUÁRIO no ato da contratação, o USUÁRIO não terá o direito de arrependimento e a restituição dos valores, previstos neste Termo..
            </p>
            
            <p className="text-scal-white/90 mb-4">
              4.4. O USUÁRIO terá o prazo de 30 (trinta) dias, após o cancelamento do plano contratado, para solicitar a exportação de seus dados. A disponibilização solicitada ocorrerá no prazo de 15 (quinze) dias úteis. Após este prazo, o SCAL não garantirá mais a disponibilidade dos dados do USUÁRIO.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              4.5. Após 4 (quatro) dias do vencimento da fatura, o SCAL poderá bloquear o USUÁRIO quando não conseguir sucesso na cobrança dos valores contratados. Poderá ainda, rescindir o presente termo após 30 (trinta) dias de inadimplência.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              4.6. O bloqueio por falta de pagamento, não isentará o USUÁRIO do pagamento dos valores cobrados antes e após o bloqueio. Somente não serão cobrados valores após o pedido de cancelamento do USUÁRIO que esteja em dia com suas obrigações financeiras.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              4.7. Para recuperar suas informações, o USUÁRIO bloqueado ou inabilitado deverá quitar suas obrigações financeiras.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              4.8. O não pagamento dos valores até a data de vencimento, sujeitará o USUÁRIO inadimplente em multa de 2% (dois por cento), por qualquer atraso, além de juros de mora de 1% (um por cento) ao mês.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              4.9. O USUÁRIO do plano pós-pago que efetuar o pagamento da fatura em atraso, terá sua conta reativada e/ou reabilitada, podendo fazer o uso dos serviços SCAL pelo período mensal restante, até o vencimento da próxima fatura.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Parágrafo único: Em caso de atraso no pagamento, o USUÁRIO reconhece e concorda que a data de vencimento da próxima cobrança e/ou fatura, permanecerá inalterada e continuará a ser na data originalmente estipulada. O atraso no pagamento não afetará a data de vencimento subsequente, independentemente de quaisquer atrasos anteriores.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              4.10. O USUÁRIO do plano pré-pago, terá 30 dias consecutivos de acesso à sua conta, a partir do pagamento da fatura, conforme do plano escolhido.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 5ª – DOS DADOS PESSOAIS FORNECIDOS PELO USUÁRIO</h3>
            <p className="text-scal-white/90 mb-4">
              5.1. O USUÁRIO deve fornecer suas informações pessoais de forma precisa e completa, colaborar ativamente e aceitar as alterações necessárias a serem feitas pelo SCAL, conforme previsto neste termo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              5.2. Caso o USUÁRIO não aceite as práticas adotadas pelo Scal ou deseje ser notificado previamente antes de sua utilização, deverá realizar programação, a seu critério, em seu Web Browser com estas opções, caso seu Browser disponha deste recurso. Ressalta-se que, caso o USUÁRIO opte por realizar este bloqueio, a experiência de utilização do SOFTWARE SCAL poderá ser comprometida.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              5.3. O SCAL poderá, a seu critério, fazer uso das informações armazenadas nos seus bancos de dados, conforme os termos e condições presentes na Política de Privacidade.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              5.4. As informações anônimas ofertadas pelo USUÁRIO, registradas através do uso do sistema, serão utilizadas para o mapeamento de informações do mercado e formação de estatísticas do SCAL. O USUÁRIO, através de seu cadastro, uso e fornecimento de informações, de forma deliberada, aceita o presente Termo e condições previstas na Política de Privacidade acerca do uso de suas informações.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              5.5. O SOFTWARE SCAL ressalta que eventuais informações de caráter sigiloso protegido pela legislação brasileira e resoluções da categoria profissional, não serão repassadas a terceiros.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              5.6. Não concordando o USUÁRIO com o presente Termo e tendo procedido com o cancelamento de seu CADASTRO, seus dados serão removidos para futuras consultas a partir da data de remoção, ou seja, ações anteriores à referida decisão (cancelamento), continuarão armazenadas e utilizadas conforme os interesses do SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              5.7. Para realizar o cancelamento do CADASTRO, o USUÁRIO, único responsável pela conta, deverá solicitá-lo através da plataforma SCAL, via chat ou e-mail (suporte@appscal.com.br), mediante apresentação de provas de sua insatisfação, que serão analisadas pelo SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              5.8. É expressamente proibida a utilização de qualquer dispositivo, SOFTWARE SCAL ou demais recursos que possam interferir nas atividades e/ou operações do SOFTWARE SCAL, contas ou bancos de dados. Ressalta-se que qualquer tentativa ou atividade que venha a violar ou contrariar a legislação de direito de propriedade intelectual e/ou proibições elencadas no presente Termo, tornarão os responsáveis passíveis das devidas ações legais, além das sanções aqui previstas, bem como, responsável por indenizações relacionadas a eventuais danos causados.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              5.9. O USUÁRIO concorda expressamente que o SCAL e/ou qualquer de seus parceiros, poderão enviar aos seus USUÁRIOS, por qualquer meio de comunicação, mensagens informativas, acerca de avisos específicos, referentes aos serviços prestados, bem como, de caráter comercial, incluindo ofertas de seus parceiros, novidades na plataforma e demais informações.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              5.10. O USUÁRIO expressa consentimento que o SCAL irá coletar, tratar e compartilhar os dados necessários para o cumprimento do pactuado, conforme disposto na LGPD e demais leis referentes à utilização de dados.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 6ª – DAS OBRIGAÇÕES DAS PARTES</h3>
            <p className="text-scal-white/90 mb-4">
              6.1. É terminantemente proibido pelo presente Termo, suas políticas e/ou lei vigente, a introdução pelo USUÁRIO de qualquer informação que englobe dados, legendas e/ou imagens de caráter ilícito, que viole as regras médicas e/ou de outros profissionais de saúde, conteúdo violento e/ou discriminatório, conteúdo utilizado para falsificar, omitir e/ou simular endereços de IP na tentativa de ocultação de identidade, médica e de demais profissionais de saúde, toda e qualquer tentativa de explorar, rastrear ou testar a conteúdo compreendido por vírus que, programas ou códigos que possam danificar e/ou roubar dados, informações ou acerca do funcionamento de outros computadores, quaisquer atividades que violem a legislação acerca da propriedade intelectual, toda e qualquer atividade vedada na legislação pertinente, no código de ética vulnerabilidade do SOFTWARE SCAL, bem como toda e qualquer atividade que se caracterize ilícito penal ou contravenção.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.2. É de exclusiva responsabilidade do USUÁRIO, velar pela legalidade de suas atividades e informações cadastradas junto ao SOFTWARE SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.3. O SCAL não se responsabiliza, em nenhuma hipótese, acerca das atividades e informações cadastradas pelo USUÁRIO, podendo realizar a exclusão dos USUÁRIOS que descumpram as normas descritas no presente Termo, independente de prévio aviso.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.4. O USUÁRIO será o único e exclusivo responsável por qualquer transgressão das normas aqui aduzidas, que resulte em infração a direitos intelectuais de terceiros, perante o SCAL ou TERCEIROS, estando o SCAL isento de qualquer responsabilidade ante o titular destes direitos.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.5. Além das atividades/atitudes proibidas já expressas no presente Termo, o USUÁRIO não poderá realizar manipulação nas informações e/ou no valor do SOFTWARE SCAL, cometer agressão, calúnia, injúria ou difamação contra o SCAL e/ou demais USUÁRIOS, usar qualquer tipo de mecanismo a fim de recuperar ou indexar no todo ou parte dos serviços do SOFTWARE SCAL, coletar informações sobre os USUÁRIOS para qualquer intuito sem autorização, fazer envio de conteúdo e/ou propaganda enganosa dizendo ser parte e/ou patrocinado/autorizado pelo SCAL, criar cadastros com informações falsas ou fraudulentas, propagar vírus, defeitos, cavalos de troia ou qualquer item de característica destrutiva.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.6. Caso o USUÁRIO realize qualquer comportamento/atividade proibida, o mesmo poderá ser punido com suspensão ou cancelamento de seu cadastro como USUÁRIO do SOFTWARE SCAL, sem prejuízo das medidas legais cabíveis.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.7. Se houver a verificação ou a suspeita de algum USUÁRIO estar violando qualquer condição prevista no presente Termo ou que esteja realizando qualquer atividade considerada ilícita, além das medidas elencadas neste Termo, os dados do USUÁRIO infrator serão devidamente encaminhados às autoridades competentes para que sejam tomadas as medidas judiciais cabíveis.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.8. O SCAL é um mero fornecedor on-line do SOFTWARE SCAL destinado aos profissionais de saúde, com o intuito de auxiliar o atendimento clínico, gestão administrativa e financeira. Assim, depende única e exclusivamente do USUÁRIO, verificar a veracidade das informações, não tendo o SCAL como garantir inteiramente todas as informações e/ou dados inseridos em sua plataforma, sendo referidas informações de conhecimento público.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.9. O SCAL, através de ferramentas de comunicação, tenta realizar conserto e/ou verificação das informações definidas pelo USUÁRIO como errôneas ou inexatas, trabalhando também com um canal de comunicação, visando facilitar as interações entre o USUÁRIO e o conteúdo de apoio e estudo. Dessa forma, o acesso e utilização do SOFTWARE SCAL não garantirão ao USUÁRIO informações de seu interesse.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.10. O USUÁRIO se declara ciente acerca das condições de recebimento e utilização do SOFTWARE SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.11. O USUÁRIO não responsabilizará o SCAL pela ausência de diligência ao verificar uma informação disponibilizada, sendo de sua total e exclusiva responsabilidade. Diante disso, através da concordância com o presente Termo, o USUÁRIO está ciente de que não poderá ajuizar ação judicial contra o SCAL, caso venha a sofrer prejuízo de qualquer forma e/ou qualificação em decorrência das informações presentes na plataforma SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.12. Qualquer dano, prejuízo ou perda no equipamento eletrônico do USUÁRIO, causado por falhas no sistema, na internet ou no servidor, ainda, decorrente de conduta de terceiros, força maior ou caso fortuito, não serão de responsabilidade do SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.13. O SCAL não se responsabilizará por qualquer vírus que possa realizar ataque ao equipamento do USUÁRIO, em consequência de acesso, utilização ou navegação no SOFTWARE SCAL em decorrência da internet ou transferência de dados.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.14. Não poderá ser atribuída ao SCAL, nenhuma responsabilidade, nem exigência de pagamento por lucro cessante, em decorrência de prejuízos resultantes de dificuldades técnicas e/ou falhas nos sistemas ou na internet.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.15. O SOFTWARE SCAL poderá, eventualmente, se encontrar indisponível por motivos técnicos ou falhas da internet, bem como por caso fortuito ou força maior, fatos alheios ao controle do SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.16. Em decorrência do descumprimento do previsto neste Termo e demais políticas da plataforma ou pela violação a qualquer lei ou direitos de terceiros, o USUÁRIO indenizará o SCAL, diretores, administradores, colaboradores, empregadores e representantes, incluindo honorários advocatícios e perdas e danos, por qualquer diligência promovida por outros USUÁRIOS ou terceiros decorrentes de suas atividades no SOFTWARE SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.17. Caso o SCAL venha a ser interpelado judicialmente como réu, em decorrência de fatos ocasionados por um USUÁRIO, este será chamado ao processo, devendo arcar com todos os ônus decorrentes desses fatos, nos Termos do artigo 338 e seguintes do Código de Processo Civil (CPC).
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.18. O presente Termo não gera nenhum contrato de sociedade, de mandato, franquia ou relação de trabalho entre o SCAL e o USUÁRIO.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              6.19. O SCAL não se responsabiliza por eventuais obrigações tributárias que venham a recair sobre as atividades do USUÁRIO, haja vista que seu intuito é guarnecer o USUÁRIO com conhecimento e ferramenta para atuar de forma serena no seu dia a dia.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 7ª – DO PRAZO</h3>
            <p className="text-scal-white/90 mb-4">
              7.1. O presente Termo de Uso possui prazo indeterminado, passando a vigorar a partir da data do aceite eletrônico realizado.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              7.2. O SCAL poderá rescindir a prestação de seus serviços a qualquer momento, mediante prévia e expressa comunicação ao USUÁRIO, devendo este realizar a quitação de eventuais débitos existentes e/ou realizar o pagamento de indenização decorrente de lesão a terceiros, em consequência de mau uso do SOFTWARE SCAL pelo USUÁRIO.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              7.3. Este Termo poderá ainda ser rescindido, de pleno direito, independentemente de haver notificação ou interpelação, judicial ou extrajudicial, caso haja violação a qualquer de suas regras, por qualquer das partes, que venha a impedir a continuidade da execução do objeto do mesmo, caso o usuário, de qualquer forma, venha a comprometer a imagem pública do SCAL e/ou de qualquer empresa/pessoa associada a este na prestação de seus serviços, caso o USUÁRIO utilize práticas que violem a lei, ordem pública ou o presente Termo e sua Política de Privacidade, bem como em decorrência do não pagamento dos valores referentes aos serviços.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 8ª – DA PROPRIEDADE INTELECTUAL</h3>
            <p className="text-scal-white/90 mb-4">
              8.1. O uso comercial da expressão "SCAL", seja como marca, nome e patente, são de titularidade do SCAL e estão protegidos pela legislação pertinente, sendo proibido o uso indevido ou a reprodução parcial ou total dos referidos conteúdos, salvo mediante autorização expressa pelo SCAL.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              8.2. O SOFTWARE SCAL poderá transferir o USUÁRIO a sites ou plataformas de terceiros, não sendo o SCAL responsável por conteúdos, práticas e/ou serviços ofertados nos mesmos.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              8.3. A reprodução, exibição, distribuição e/ou alteração da marca ou qualquer propriedade do SCAL deverá obrigatoriamente ser precedida de autorização escrita, uma vez o simples uso do SOFTWARE SCAL pelo USUÁRIO não significa a cessão ou a transferência dos direitos sobre sua propriedade intelectual, bem como a de terceiros.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold text-scal-white mt-8 mb-4">CLÁUSULA 9ª – DAS DISPOSIÇÕES GERAIS</h3>
            <p className="text-scal-white/90 mb-4">
              9.1. O USUÁRIO poderá realizar solicitação de cancelamento pelo SOFTWARE SCAL ou por link próprio caso não deseje mais receber referidas mensagens.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.2. Objetivando melhoria e aprimoramento dos serviços prestados, o SCAL poderá realizar, a qualquer tempo, alterações nas condições do presente Termo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.3. O SCAL poderá realizar alterações, no intuito de atender as últimas condições de mercado e desenvolvimento tecnológico, conforme seu critério, seja em forma ou em conteúdo, suspender ou cancelar a qualquer tempo qualquer serviço, produto, utilidade e/ou aplicação disponibilizado por si ou terceiros, ainda, alterar os preços e/ ou serviços oferecidos na Plataforma e SOFTWARE SCAL, podendo avisar previamente o USUÁRIO, inclusive acerca dos serviços disponíveis no SOFTWARE SCAL, elencados neste Termo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.4. O USUÁRIO que não concorde com as alterações realizadas e publicadas, deverá interromper o uso do SOFTWARE SCAL e solicitar o cancelamento de suas informações, conforme procedimentos descritos no presente Termo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.5. Havendo cancelamento decorrente de discordância com as alterações realizadas no presente Termo, o vínculo contratual entre o SOFTWARE SCAL e o USUÁRIO deixará de existir, desde que não haja nenhuma pendência financeira.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.6. Não havendo manifestação contrária às alterações realizadas no presente Termo, será entendido que o USUÁRIO concordou tacitamente com as modificações e o Termo continuará vinculando as partes.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.7. Caso haja tolerância do SCAL com o USUÁRIO que descumpriu qualquer das regras e obrigações presentes neste Termo, referido fato não será considerado novação ou renúncia de quaisquer direitos, constituindo apenas mera liberalidade na qual não impedirá de o SCAL reivindicar a posteriori o estrito cumprimento das condições aqui impostas, a qualquer tempo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.8. É expressamente proibido o USUÁRIO ceder ou transferir o seu CADASTRO para terceiros ou USUÁRIOS diversos. Entretanto, o SCAL, independentemente de qualquer prévio aviso ou notificação, poderá a qualquer tempo, ceder os serviços do SOFTWARE SCAL, total ou parcialmente, para empresas parceiras ou de seu grupo econômico.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.9. O USUÁRIO declara estar ciente e concorda que a legislação aplicável diante da sua relação com o SOFTWARE SCAL é, e sempre será, a brasileira.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.10. O USUÁRIO declara e consente expressamente com as seguintes disposições:<br />
              a) Ser maior de 18 (dezoito anos) e possuir capacidade jurídica. Caso tenha menos de 18 (dezoito) anos, deverá ter expressa concordância dos seus pais ou representantes legais;<br />
              b) Não desfrutar dos serviços objeto deste Termo para qualquer transação ilícita ou compra/venda de produtos e/ou serviços ilícitos;<br />
              c) Manter total sigilo de sua SENHA cadastrada, não fornecendo para terceiros;<br />
              d) Realizar instalação e preservar atualizado programas Anti Spywares, Anti-vírus e os demais que impeçam violação do SOFTWARE SCAL;<br />
              e) Notificar imediatamente ao SCAL, caso tome ciência de qualquer violação de segurança associada ao serviço ou uso não autorizado de seu LOGIN e SENHA;<br />
              f) Possuir condições financeiras compatíveis para arcar com os pagamentos, custos e despesas consequentes deste Termo;<br />
              g) Que leu e aceita os termos, condições, cláusulas e itens contidos neste Termo, razão pelo qual o aceita por livre e espontânea vontade;<br />
              h) Reconhece que este Termo formaliza-se e vincula as partes com a sua aceitação eletrônica feita pelo USUÁRIO, o que se fará mediante clique no botão "Aceito Termo de Uso".
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.11. Dessa forma, o USUÁRIO concorda inteiramente com as disposições presentes neste Termo, comprometendo-se a respeitar as condições nele previstas, de forma irrevogável e irretratável, como também, a fazer a utilização dos serviços oferecidos de maneira legal e benéfica.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.12. Ao realizar a aceitação do presente Termo, o USUÁRIO autoriza, de logo e expressamente, o uso gratuito de sua imagem, voz e nome nos métodos de divulgação de campanhas do SCAL, no que tange a carteira de clientes, tendo ou não a indicação de seu nome, durante a vigência de cada uma das referidas campanhas.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              9.13. As partes signatárias do presente Termo elegem o Foro da Comarca de Fortaleza-CE, como competente para dirimir qualquer conflito decorrente da relação prevista no objeto deste contrato.
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

export default TermosDeUso;
