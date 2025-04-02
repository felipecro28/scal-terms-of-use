
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
          <p className="text-scal-white/70 mb-8">Este Aviso de Privacidade foi atualizado em 15 de Dezembro de 2021.</p>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-scal-white/90 mb-4">
              Na Scal Tecnologia Ltda doravante apenas ("Sistema Scal"), reconhecemos a importância de proteger suas informações pessoais e estamos comprometidos em processá-las com responsabilidade e em conformidade com as leis de proteção de dados aplicáveis ​​em todos os países em que operamos.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              No curso normal de suas atividades comerciais, a SISTEMA SCAL coleta, usa e,às vezes, compartilha informações para executar suas operações cotidianas. Este Aviso de Privacidade descreve as práticas gerais de privacidade do SISTEMA SCAL que se aplicam à coleta e uso de tais informações pessoais.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">TIPOS DE INFORMAÇÕES PESSOAIS QUE COLETAMOS</h2>
            <p className="text-scal-white/90 mb-4">
              Ao descrever nossa coleta, uso e compartilhamento de informações neste Aviso, nos referimos à nossa coleta e uso de "Informações Pessoais". 
            </p>
            
            <p className="text-scal-white/90 mb-4">
              "Informações Pessoais", conforme usado neste Aviso, é qualquer informação relacionada a uma pessoa física identificada ou identificável. Exemplos de informações pessoais incluem nome e sobrenome, endereço para correspondência, endereço de e-mail, informações de faturamento, endereço IP, outras informações de contato on-line ou número de telefone.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">COMO COLETAMOS SUAS INFORMAÇÕES PESSOAIS</h2>
            <ol className="list-decimal pl-6 mb-6 text-scal-white/90">
              <li className="mb-2">Coletamos as informações que você nos fornece em envios voluntários opcionais, como formulários de inscrição, perfis de usuários, inscrições para recebimento de informações, inscrições em solicitações de serviço ao cliente e downloads e aplicativos móveis.</li>
              <li className="mb-2">Podemos coletar algumas informações pessoais automaticamente. Isso é descrito abaixo em "Coleta de dados passiva".</li>
              <li className="mb-2">Também podemos obter informações, incluindo informações pessoais, de fontes de terceiros. Se combinarmos informações de terceiros diretamente com as Informações Pessoais que coletamos, trataremos as informações combinadas como Informações Pessoais e lidaremos com elas de acordo com este Aviso. Além disso, observe que podemos solicitar a terceiros a coleta de Informações Pessoais em nosso nome, como provedores de plataforma de mídia social e, nesses casos, o terceiro se compromete a cumprir este Aviso e todas as leis de proteção de dados aplicáveis.</li>
            </ol>
            
            <p className="text-scal-white/90 mb-4">Nós coletamos informações pessoais de três maneiras:</p>
            
            <h3 className="text-xl font-bold text-scal-white mt-6 mb-3">Coleta Passiva de Dados</h3>
            
            <h4 className="text-lg font-bold text-scal-white mt-6 mb-2">Serviços baseados em localização</h4>
            <p className="text-scal-white/90 mb-4">
              Para que eventualmente seja necessário fornecer serviços de localização em seus produtos e ou serviços, a SISTEMA SCAL, seus parceiros e licenciados podem coletar, usar e compartilhar dados de localização precisos, incluindo a localização geográfica em tempo real de seu computador ou dispositivo móvel. Esses dados de localização são coletados anonimamente de forma a não identificar você pessoalmente e poderão ser usados pela SISTEMA SCAL, seus parceiros e licenciados para fornecer e melhorar produtos e serviços de localização. Por exemplo, podemos compartilhar sua localização geográfica com provedores de aplicativos quando você optar por usar serviços de localização. Alguns serviços de localização que poderão ser oferecidos pela SISTEMA SCAL podem requerer a inclusão de suas informações pessoais.
            </p>
            
            <h4 className="text-lg font-bold text-scal-white mt-6 mb-2">Ferramentas de análise</h4>
            <p className="text-scal-white/90 mb-4">
              Usamos ferramentas de análise e outras tecnologias de terceiros, como Google Analytics, Facebook Analytics e DoubleClick Cookies, para coletar informações não pessoais na forma de várias métricas de uso e usuário ao usar o site da SISTEMA SCAL ou usar nossos serviços (o nosso website e nossos serviços são referidos como "Sites e / ou Serviços" neste Aviso). Essas ferramentas e tecnologias coletam e analisam determinados tipos de informações, incluindo cookies, endereços IP, identificadores de dispositivo e software, URLs de referência e saída, informações de uso e comportamento no local, estatísticas e estatísticas de uso de recursos, histórico de uso e compra, endereço MAC ID do dispositivo e outras informações semelhantes.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              As empresas de análise de terceiros que coletam informações em nosso Site se / ou Serviços e outros produtos e / ou serviços on-line podem combinar as informações coletadas com outras informações coletadas independentemente de outros sites e / ou outros produtos e serviços on-line ou móveis relacionados a eles, suas atividades através de sua rede de sites, bem como produtos e serviços on-line e / ou móveis. Muitas dessas empresas coletam e usam informações em suas próprias políticas de privacidade.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Além do uso de tecnologias conforme descrito neste documento, podemos permitir que determinadas empresas terceiras nos ajudem a personalizar anúncios que acreditamos que possam ser de seu interesse, com base no uso de nossos Sites e/ ou Serviços e a coletar e usar dados sobre o uso de nossos Sites e / ou Serviços. Para mais informações sobre essa prática, consulte a seção "Tecnologias de publicidade de terceiros" abaixo.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Você pode desativar o cookie DoubleClick visitando a página de desativação de publicidade do Google ou pode desativar o Google Analytics visitando a página de desativação do Google Analytics e / ou de outras ferramentas de coleta.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              O Google tem informações adicionais disponíveis sobre suas Diretrizes de privacidade de remarketing e restrições.
            </p>
            
            <h4 className="text-lg font-bold text-scal-white mt-6 mb-2">Cookies</h4>
            <p className="text-scal-white/90 mb-4">
              Podemos usar uma variedade de métodos, incluindo "cookies" para coletar informações.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              <strong>O que é um cookie?</strong><br />
              Cookies são arquivos de texto contendo pequenas quantidades de informações que são baixadas para o seu dispositivo quando você visita um site. Os cookies são enviados de volta ao site de origem em cada visita subsequente ou a outro site que reconheça esse cookie. Os cookies são úteis porque permitem que um site reconheça o dispositivo de um usuário. 
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Os cookies executam vários trabalhos diferentes, como permitir que você navegue entre as páginas de maneira eficiente, lembrando-se de suas preferências e, em geral, aprimore a experiência do usuário. Eles também podem ajudar a garantir que os anúncios que você vê on-line sejam mais relevantes para você e seus interesses.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Os cookies usados ​​em nossos Sites e / ou Serviços por categoria são descritos abaixo.
            </p>
            
            <h5 className="text-lg font-semibold text-scal-white mt-4 mb-2">Cookies de desempenho</h5>
            <p className="text-scal-white/90 mb-4">
              A SISTEMA SCAL coleta cookies em nosso Site e / ou Serviço para capturar informações sobre visitas a páginas (por exemplo, "cookies de desempenho"). Essas informações são anônimas e a SISTEMA SCAL usa essas informações apenas internamente para fornecer o conteúdo mais eficaz aos nossos visitantes. As informações do cookie são usadas para avaliar a popularidade da página, analisar padrões de tráfego em nossos Sites e / ou Serviços e orientar o desenvolvimento de outras melhorias em nossos Sites e / ou Serviços.
            </p>
            
            <h5 className="text-lg font-semibold text-scal-white mt-4 mb-2">Cookies de segmentação, desempenho e funcionalidade</h5>
            <p className="text-scal-white/90 mb-4">
              Em nossos programas de e-mail, a SISTEMA SCAL emprega alguns métodos de rastreamento (por exemplo, "cookies de segmentação, desempenho e funcionalidade"). Rastreamos o acesso por meio de um pixel de rastreamento no e-mail – o que significa que rastreamos quem abre nossas mensagens de e-mail e quando você abre nossas mensagens de e-mail; e rastreamos "cliques" através de URLs codificadas – o que significa que rastreamos se você clica nos links contidos em nossas mensagens de e-mail. Essas informações são usadas internamente apenas para nos ajudar a entregar mensagens relevantes e não são compartilhadas com terceiros.
            </p>
            
            <h5 className="text-lg font-semibold text-scal-white mt-4 mb-2">Funcionalidade e Cookies necessários</h5>
            <p className="text-scal-white/90 mb-4">
              A SISTEMA SCAL não exige que você aceite cookies e poderá cancelar seu consentimento para o uso de cookies a qualquer momento, ajustando as configurações de privacidade do seu navegador, no entanto, algumas funcionalidades em nossos Sites (por exemplo, "cookies de funcionalidade"), nosso produto ou serviço, processo de saída, e os Serviços podem ser desativados se você se recusar a aceitar cookies (por exemplo, "cookies necessários").
            </p>
            
            <h5 className="text-lg font-semibold text-scal-white mt-4 mb-2">Optando por Cookies</h5>
            <p className="text-scal-white/90 mb-4">
              Ao usar os Sites e Serviços, você concorda com o posicionamento dos cookies mencionados acima. Você pode, no entanto, configurar seu navegador para notificá-lo quando receber um cookie, dando a você a chance de decidir se deseja ou não o aceitar. Você também pode alterar suas configurações de cookies por meio de opções de preferência em nossos Sites e / ou Serviços, quando aplicável. Vamos indicar que, ao selecionar suas preferências, usaremos um cookie para lembrar suas preferências.
            </p>
            
            <h4 className="text-lg font-bold text-scal-white mt-6 mb-2">Tecnologias de Publicidade de Terceiros</h4>
            <p className="text-scal-white/90 mb-4">
              Além de usar cookies e tecnologias relacionadas, conforme descrito acima, também podemos permitir que determinadas empresas terceiras nos ajudem a personalizar anúncios que acreditamos ser de interesse dos usuários e coletar e usar outros dados sobre atividades de usuários em nossos Sites e / ou Serviços (por exemplo, para permitir que eles adaptem anúncios em serviços de terceiros). Essas empresas podem exibir anúncios que também podem colocar cookies e acompanhar o comportamento do usuário. Essas empresas podem usar informações sobre o comportamento do usuário para fornecer anúncios personalizados em vários serviços e produtos. No decurso da prestação destes serviços, produtos ou colocação de anúncios, estas empresas podem colocar ou reconhecer um cookie único no seu computador, e pode registrar informações para esses cookies com base em suas atividades em qualquer um de nossos Sites e / ou Serviços e em sites de terceiros. Cada uma dessas empresas usa essas informações de cookies de acordo com suas próprias políticas de privacidade e segurança. Se você deseja que essas informações não sejam usadas para veicular anúncios segmentados, você pode cancelar o recebimento, conforme indicado neste Aviso. Por favor, note que isso não o impede de receber publicidade. Você continuará recebendo anúncios genéricos.
            </p>
            
            <h4 className="text-lg font-bold text-scal-white mt-6 mb-2">Informações pessoais relacionadas a crianças</h4>
            <p className="text-scal-white/90 mb-4">
              Não buscamos ou coletamos intencionalmente Informações Pessoais de usuários com menos de 16 anos, exceto na medida em que a SISTEMA SCAL precise coletar informações pessoais limitadas de crianças (mas não de seus endereços de e-mail), onde a escola infantil ou o MEC tenha contratado a SISTEMA SCAL para coletar as informações pessoais das crianças para o contexto educacional autorizado pela escola ou pelo MEC. As crianças não estão autorizadas a criar uma conta sem o consentimento expresso dos pais ou responsáveis.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              No caso de sabermos que coletamos informações pessoais de uma Criança sem o consentimento dos pais ou tutor sendo obtido por sua escola ou pelo MEC, ou se descobrirmos que uma Criança nos forneceu Informações Pessoais além do que solicitamos quando ele ou ela inscrever-se em qualquer um dos nossos Sites e / ou Serviços, excluiremos essas informações o mais rápido possível. Se você acredita que uma Criança pode ter nos fornecido Informações Pessoais além do que é solicitado ao se inscrever em qualquer um de nossos Sites e / ou Serviços, ou que a escola não obteve consentimento dos pais ou responsáveis ​​pelas Crianças, entre em contato conosco em privacidade@appscal.com.br.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Não obstante qualquer disposição em contrário contida neste Aviso, se você for uma Criança (conforme definido acima) e seus pais ou responsáveis ​​se inscreveram em nossos Sites e / ou Serviço, você entende que seus pais ou responsáveis ​​podem visualizar todas as informações contidas na sua conta ou associadas a ela.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">COMO USAMOS SUAS INFORMAÇÕES PESSOAIS</h2>
            <p className="text-scal-white/90 mb-4">
              Nós só usamos seus dados conforme expressamente estabelecido neste Aviso. Se surgir uma necessidade de usar seus dados para um propósito secundário, forneceremos a você um Aviso prévio de tal uso.
            </p>
            
            <h4 className="text-lg font-bold text-scal-white mt-6 mb-2">Comunicação e respondendo a solicitações</h4>
            <p className="text-scal-white/90 mb-4">
              Usamos suas informações, incluindo Informações Pessoais para fornecer suporte ao cliente, processar transações, responder a solicitações de usuários, enviar boletins informativos e atualizações, enviar ofertas especiais e anúncios, buscar suas opiniões e comentários e conectar usuários a sites da SISTEMA SCAL e / ou Serviços e aos produtos e serviços de nossos parceiros e licenciados.
            </p>
            
            <h4 className="text-lg font-bold text-scal-white mt-6 mb-2">Otimização</h4>
            <p className="text-scal-white/90 mb-4">
              Usamos suas informações, incluindo Informações Pessoais, métricas comportamentais e outras informações não pessoalmente identificáveis ​​para operar, fornecer, melhorar e manter nossos Sites e Serviços, para desenvolver novos produtos e serviços, para evitar abusos e fraudes, para personalizar e exibir anúncios e outros conteúdos para você e para outros fins administrativos e internos.
            </p>
            
            <h4 className="text-lg font-bold text-scal-white mt-6 mb-2">Propaganda</h4>
            <p className="text-scal-white/90 mb-4">
              Usamos suas informações, incluindo informações pessoais, métricas comportamentais, dados de localização geográfica, dados demográficos e preferências de marketing para personalizar e exibir anúncios e outros conteúdos para você.
            </p>
            
            <h4 className="text-lg font-bold text-scal-white mt-6 mb-2">Funcionalidades de Partilha</h4>
            <p className="text-scal-white/90 mb-4">
              Poderemos usar suas informações, incluindo Informações Pessoais e qualquer outra informação que você envie diretamente ou através de meios passivos para fornecer várias maneiras de se conectar e compartilhar conteúdo (por exemplo, conteúdo da web, vídeos gerados). Por exemplo, podemos fornecer a você a oportunidade de enviar por e-mail um link para determinado conteúdo para outra pessoa. Para usar esse recurso, podemos exigir que você forneça determinadas Informações Pessoais, incluindo seu endereço de e-mail e o endereço de e-mail de cada pessoa para quem você envia o link.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Também podemos permitir que você compartilhe links para conteúdo com usuários de vários serviços de terceiros (por exemplo, redes sociais, serviços de pesquisa e compartilhamento). Ao compartilhar links usando um desses serviços de terceiros, se você ainda não tiver efetuado login no serviço de terceiros, precisará fornecer credenciais de login para ele. Você está fornecendo as informações de registro ou credenciais de login para o serviço de terceiros diretamente para esse terceiro e não para nós. Ao usar qualquer um desses serviços de terceiros para compartilhar links para conteúdo, você nos permite acessar, usar e divulgar qualquer informação relacionada à sua conta em cada serviço de terceiros (como seu nome de usuário e informações de perfil) que está disponível para nós. através do serviço de terceiros.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Mais especificamente, nossos Sites e / ou Serviços podem usar interfaces com sites de mídia social, como Facebook, LinkedIn, Twitter e outros. Se você optar por "curtir" ou compartilhar informações de nossos Sites e / ou Serviços por meio desses serviços, deverá revisar o Aviso de privacidade desse serviço. Se você é um membro de um site de mídia social, as interfaces podem permitir que o site de mídia social conecte sua visita ao site a suas informações pessoalmente identificáveis, resultando na exibição pública do mesmo.
            </p>
            
            <h4 className="text-lg font-bold text-scal-white mt-6 mb-2">Base jurídica para o processamento de informações pessoais (apenas visitantes da UE)</h4>
            <p className="text-scal-white/90 mb-4">
              Se você é um visitante e seu domicílio é na Europa, nossa base legal para coletar e usar as informações pessoais descritas acima dependerá das informações pessoais em questão e do contexto específico em que as coletamos.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              No entanto, normalmente coletaremos informações pessoais somente quando tivermos o seu consentimento para fazê-lo, quando precisarmos das informações pessoais para realizar um contrato com você ou se o processamento for do nosso interesse legítimo e não for substituído por seus interesses de proteção de dados ou direitos e liberdades fundamentais.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Se solicitarmos que você forneça informações pessoais para cumprir uma exigência legal ou para realizar um contato com você, deixaremos isso claro no momento relevante e informaremos se a provisão de suas informações pessoais é obrigatória ou não (assim como as possíveis consequências se você não fornecer suas informações pessoais).
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Da mesma forma, se coletarmos e usarmos suas informações pessoais com base em nossos interesses legítimos (ou de terceiros), deixaremos claro para você, no momento relevante, quais são esses interesses legítimos.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Se você tiver dúvidas ou precisar de mais informações sobre a base legal sobre a qual coletamos e usamos suas informações pessoais, entre em contato conosco no e-mail: privacidade@appscal.com.br
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">RAZÕES QUE COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS</h2>
            <p className="text-scal-white/90 mb-4">
              Nós não compartilhamos suas informações pessoais com terceiros, exceto conforme indicado neste documento. Podemos compartilhar suas informações pessoais conforme necessário para manter operações comerciais, operacionais, e de legítimos interesse e em cumprimento de fase pré-contratual, como com nossos licenciados e parceiros, visando atender a utilização do Sistema SCAL e suas funcionalidades conforme exigido por lei ou para responder ao processo legal; manter a segurança de nossos produtos; proteger os clientes, funcionários, direitos ou propriedade da SISTEMA SCAL; como parte de uma fusão ou aquisição; ou com o seu consentimento expresso.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">ONDE ARMAZENAMOS E PROCESSAMOS SUAS INFORMAÇÕES PESSOAIS</h2>
            <p className="text-scal-white/90 mb-4">
              Os dados pessoais coletados pela SISTEMA SCAL podem ser armazenados e processados ​​em sua região, no Brasil e em qualquer outro país. Os locais de armazenamento são escolhidos para operar eficientemente, melhorar o desempenho e criar redundâncias para proteger os dados no caso de uma falha ou outro problema. Tomamos medidas para garantir que os dados que coletamos sob este Aviso sejam processados ​​de acordo com as disposições deste Aviso e com os requisitos da lei aplicável, onde quer que os dados estejam localizados. Podemos transferir dados pessoais da União Europeia ou do Espaço Econômico Europeu ("UE") para outros países, alguns dos quais não foram determinados pela Comissão Europeia para ter um nível adequado de proteção de dados.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              A SISTEMA SCAL está em conformidade com a Lei Geral de Proteção de Dados, LGPD bem como da GDPR com relação à coleta, uso e retenção de informações pessoais transferidas do Brasil, da União Europeia e Estados Unidos.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Em conformidade com os Princípios da Lei de proteção de Dados – LGPD, a SISTEMA SCAL se compromete a resolver reclamações sobre sua privacidade e nossa coleta ou uso de suas informações pessoais. Indivíduos da EU com dúvidas ou preocupações sobre o uso de seus Dados Pessoais devem entrar em contato conosco em privacidade@appscal.com.br.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">ONDE ARMAZENAMOS E PROCESSAMOS SUAS INFORMAÇÕES PESSOAIS</h2>
            <p className="text-scal-white/90 mb-4">
              É possível que, eventualmente, o terceiro com quem compartilhamos os seus dados se encontre fora do Brasil. Nestes casos, nos certificamos de que essa transferência ocorra em estrita observância à legislação brasileira.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Além disso, nos certificaremos de que essa transferência ocorra apenas para os países que possuem um grau de segurança similar ao previsto pela legislação brasileira e para países com nível adequado de proteção de dados pessoais, ou mediante a concessão de garantias de proteção de confidencialidade, integridade e disponibilidade, ou ainda quando a Autoridade Nacional de Proteção de Dados Pessoais assim autorizar.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Quando usamos sistemas de armazenamento em nuvem, seus dados também podem ser tratados fora do Brasil. Nessas hipóteses, buscamos escolher os melhores fornecedores internacionais, assim reconhecidos pelo mercado e devidamente adequados à Lei Geral de Proteção de Dados Pessoais vigente no Brasil como na lei de privacidade do seu respetivo país.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">COMO GARANTIMOS SUAS INFORMAÇÕES PESSOAIS</h2>
            <p className="text-scal-white/90 mb-4">
              O SISTEMA SCAL usa uma variedade de tecnologias e procedimentos de segurança para ajudar a proteger seus dados pessoais de acesso, uso ou divulgação não autorizados. Enquanto implementamos salvaguardas projetadas para proteger suas informações, sabemos que nenhum sistema de segurança é impenetrável e devido à natureza inerente da Internet, não podemos garantir que os dados, durante a transmissão pela Internet ou enquanto armazenados em nossos sistemas ou sob nossos cuidados, estejam absolutamente salvos de qualquer tipo ou tentativa de intrusão por pessoas maliciosas.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">QUANTO TEMPO RETER SUA INFORMAÇÃO PESSOAL</h2>
            <p className="text-scal-white/90 mb-4">
              Nós manteremos as informações pessoais que coletamos de você, onde houver necessidade comercial legítima em andamento (por exemplo, para fornecer um serviço que você solicitou ou para cumprir os requisitos legais, fiscais ou contábeis aplicáveis).
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Quando não tivermos uma necessidade comercial legítima em andamento para processar suas informações pessoais, excluiremos ou anonimizaremos seus dados ou, se isso não for possível (por exemplo, porque suas informações pessoais foram armazenadas em arquivos de backup), então armazenaremos com segurança as informações pessoais e realizaremos o isolamento de qualquer processamento adicional até que a exclusão seja possível.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">COMO ACESSAR E CONTROLAR SUAS INFORMAÇÕES PESSOAIS</h2>
            <p className="text-scal-white/90 mb-4">
              Você pode exercer seus direitos entrando em contato conosco em privacidade@appscal.com.br.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Respondemos a todas as solicitações que recebemos de pessoas que desejam exercer seus direitos de proteção de dados de acordo com as leis de proteção de dados aplicáveis.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">AVISO RELATIVO À TOMADA DE DECISÃO AUTOMATIZADA E AO PERFILAMENTO</h2>
            <p className="text-scal-white/90 mb-4">
              Em alguns casos, nosso uso de suas informações pessoais pode resultar em decisões automatizadas sendo tomadas (incluindo a criação de perfis). Decisões automatizadas significam que uma decisão sobre você é tomada automaticamente com base em uma determinação computacional (usando algoritmos de software), sem a nossa revisão humana. Por exemplo, usamos decisões automatizadas para fornecer publicidade segmentada em nossos Serviços que podem ser de seu interesse. Você pode optar por não receber publicidade direcionada, clicando em "Descadastrar-se" na parte inferior do e-mail de publicidade recebido.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">AVISO RELATIVO A PRÁTICAS DE PRIVACIDADE DE TERCEIROS E MÍDIA SOCIAL</h2>
            <p className="text-scal-white/90 mb-4">
              Este Aviso de Privacidade aplica-se exclusivamente aos nossos Sites e/ou Serviços. Nosso site inclui links para outros sites afiliados. Se você acessar esses sites e enviar informações pessoais, estará sujeito aos Avisos de privacidade aplicáveis ​​a esses sites. Encorajamos você a ler atentamente o Aviso de privacidade de qualquer site que visitar.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">COMO ENTRAR EM CONTATO CONOSCO</h2>
            <p className="text-scal-white/90 mb-4">
              Para exercer os direitos dos seus titulares de dados, entre em contato com privacidade@appscal.com.br.
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">ENCARREGADO DE PROTEÇÃO DE DADOS</h2>
            <p className="text-scal-white/90 mb-4">
              A SISTEMA SCAL disponibiliza os seguintes meios para que você possa entrar em contato conosco para exercer seus direitos de titular: privacidade@appscal.com.br.
            </p>
            
            <p className="text-scal-white/90 mb-4">
              Caso tenha dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, você pode entrar em contato com o nosso Encarregado de Proteção de Dados Pessoais, através dos seguintes canais:
            </p>
            
            <h3 className="text-xl font-bold text-scal-white mt-6 mb-4">DADOS DO ENCARREGADO (ART.41 DA LGPD)</h3>
            <p className="text-scal-white/90 mb-1">Nome: Thiago Coelho e Almiro Araújo</p>
            <p className="text-scal-white/90 mb-1">Cargo: Gestor</p>
            <p className="text-scal-white/90 mb-1">Horário de atendimento: de segunda a sexta-feira, das 9h às 18hs</p>
            <p className="text-scal-white/90 mb-1">Canal: Exclusivamente por e-mail.</p>
            <p className="text-scal-white/90 mb-4">E-mail para orientação e esclarecimento de dúvidas: privacidade@appscal.com.br</p>
            
            <p className="text-scal-white/90 mb-1">SISTEMA SCAL</p>
            <p className="text-scal-white/90 mb-1">SCAL PLATAFORMA DE TECNOLOGIA DE SERVICOS EM SAUDE LTDA – SCAL TECNOLOGIA</p>
            <p className="text-scal-white/90 mb-4">CNPJ: 18.758.067/0001-55</p>
            
            <p className="text-scal-white/90 mb-4">
              Se você é um residente da UE, você também tem o direito de registrar uma reclamação com a proteção de dados aplicável ou outra autoridade de supervisão ("DPA"). Você pode encontrar uma lista de DPAs em: https://www.dataprotection.ie/docs/Home/4.htm
            </p>
            
            <h2 className="text-2xl font-bold text-scal-white mt-8 mb-4">ALTERAÇÕES AO AVISO</h2>
            <p className="text-scal-white/90 mb-4">
              Por favor, note que este Aviso de Privacidade pode mudar de tempos em tempos. Você é encorajado a revisar periodicamente este Aviso de Privacidade para se manter informado sobre como estamos protegendo suas informações pessoais
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
