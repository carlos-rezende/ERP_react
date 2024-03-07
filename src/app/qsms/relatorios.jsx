// Caminho da página: qsms/configuracoes/funcoes/relatorios

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional RelatoriosPage.
const RelatoriosPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados das funções de trabalho.
  const role = [
    {
      funcao:'ANALISTA DE SISTEMAS',
      descricao: 'Acompanhar projetos de melhorias dos sistemas; Planejar e executar alterações de versões e upgrades dos sistemas; Dar suporte à servidores Linux/Unix, Windows, instalando, configurando, atualizando servidores, sistemas de monitoração e de backup; Executar o service desk (suporte ao usuário); Controlar e administrara a correta utilização de programas e sistemas autorizados e com as devidas licenças de uso; Transformar um problema em uma solução através do uso de sistemas e recursos computacionais de hardware (parte física) ou software (parte lógica). Planejar e executar os processos de documentação, arquitetura, desenvolvimento, testes e evolução de sistemas de software. Gerenciar o fluxo de informações geradas e distribuídas por redes de computadores dentro de uma organização; Planejar e organizar o processamento, armazenamento, recuperação e disponibilidade das informações; Realizar levantamento de requisitos, análise, especificação, projeto do sistema, programação, testes, homologação, implantação e acompanhamento dos sistemas.',
      obrigacoesEspecificas: 'Gerar os backup das informações da organização Administrar os acessos a sistemas',
      escoladiradadeMinima: 'GRADUAÇÃO EM SISTEMAS DE INFORMAÇÃO/CIÊNCIAS DA COMPUTAÇÃO',
      escoladiradadeDesejavel: 'ESPECIALIZAÇÃO EM DESENVOLVIMENTO DE SISTEMAS',
      expMinima: '6 meses',
      expDesejavel: '2 anos',
      conhecimentoMinimo: 'SOFTWARE MSPROJECT,PRIMAVERAINGLES BASICOMETODOLOGIA/TECNICAS DE INTEGRAÇÃO DE SISTEMASINGLÊS TECNICOSOFTWARE AVANÇADO',
      conhecimentoDesejavel: 'INGLÊS | ESPANHOL	',
      habilidadeMinima: 'VISÃO SISTEMICAANÁLISE CRITICACONCENTRAÇÃOORGANIZAÇÃOPLANEJAMENTO',
      habilidadeDesejavel: 'LIDERANÇA, COMUNICAÇÃO, RELACIONAMENTO INTERPESSOAL',
    },
    {
      funcao:'GERENTE TÉCNICO',
      descricao: 'Garantir a qualidade dos processos da empresa já que possui certificação de nível III. Apoiar a operação nos requisitos técnicos aplicáveis. Planejar e orientar as atividades de segurança e meio ambiente. Desenvolver os procedimentos técnicos e de gestão. Estabelecer normas e administrar atividades para garantir a qualidade dos serviços prestados, identificando causas de problemas e orientando tecnicamente sua equipe na resolução dos mesmos, Garantir o melhor atendimento aos clientes, Garantir os treinamentos necessários aos profissionais; Apoiar a operação na resolução dos conflitos com os clientes. Avaliar a satisfação dos clientes e definir ações asssociadas a ele. E Garantir o cumprimento dos requisitos legais aplicáveis à gestão e manutenção dos certificados externos da empresa, Garantir o cumprimento dos requisitos de CNEN e a manutenção das autorizações para a operação dos serviços de gamagrafia e radiografia. Garantir que os requisitos do Plano Geral de Proteção Radiológica seja entendido e cumprido pelos colaboradores (IOE). Auditar Tecnicamente e realizar treinamento de Inspetores nível I e II, já que é um nível II.',
      obrigacoesEspecificas: 'Garantir a qualidade dos processos e apoio aos requisitos técnicos em geral.',
      escoladiradadeMinima: 'Graduação Engenharia',
      escoladiradadeDesejavel: 'ESPECIALIZAÇÃO NA ÁREA DE ATUAÇÃO',
      expMinima: '6 meses',
      expDesejavel: '10 anos',
      conhecimentoMinimo: 'Certificado como supervisor de proteção radiológicaConhecimento de requisitos legaisNormas técnicas de certificação ISO 9001, 14001 OHAs 1800PACOTE OFFICE.',
      conhecimentoDesejavel: 'Ser habilitado como auditor nas normas ISO 9001, 14001 OHAs 1800, INGLES FLUENTE',
      habilidadeMinima: 'Liderança, Dinamismo, Comunicação, Análise crítica, ORGANIZAÇÃO, Detalhista, Fluência verbal e escrita',
      habilidadeDesejavel: 'VISÃO CRITICA, GESTÃO DO TEMPO',
    },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();

    const filteredUsers = role.filter((user) => {
      const {
        funcao,
        descricao,
        obrigacoesEspecificas,
        escoladiradadeMinima,
        escoladiradadeDesejavel,
        expMinima,
        expDesejavel,
        conhecimentoMinimo,
        conhecimentoDesejavel,
        habilidadeMinima,
        habilidadeDesejavel,
      } = user;

      const userFields = [
        funcao,
        descricao,
        obrigacoesEspecificas,
        escoladiradadeMinima,
        escoladiradadeDesejavel,
        expMinima,
        expDesejavel,
        conhecimentoMinimo,
        conhecimentoDesejavel,
        habilidadeMinima,
        habilidadeDesejavel,
      ].map((field) => field.toUpperCase());
  
      return userFields.some((field) => field.includes(searchTerm));
    });

    // Filtra os usuários em ordem alfabética.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? role : sortedUsers;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da interface da página.
  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Lista de Relatórios</h1>

      {/* Botão de voltar */}
      <div className="flex justify-between items-center mt-10 mb-16"> {/* Adicione um elemento flexível e centralize verticalmente */}
        <div>
          <a
            href="/qsms/configuracoes/funcoes"
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2"
          >
            Voltar
          </a>
        </div>
        {/* Barra de pesquisa */}
        <div className="flex items-center">
          <span className="mr-2 mt-2 font-bold">Pesquisar:</span>
          <input
            type="text"
            className="search"
            placeholder="Digite aqui..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      
      {/* Tabela com as descrições de função, descrição, obrigações específicas, escolaridade mínima, etc. */} 
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 w-10">
              <th className="px-32 h-10 border-r border-b border-gray-300 text-center">Função</th>
              <th className="px-32 border-r border-b border-gray-300 text-center">Descrição</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Obrigações Específicas</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Escolaridade Mínima</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Escolaridade Desejável</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Experiência Mínima</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Experiência Desejável</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Conhecimento Mínimo</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Conhecimento Desejável</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Habilidade Mínima</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Habilidade Desejável</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.funcao}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.funcao}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.descricao}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.obrigacoesEspecificas}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.escoladiradadeMinima}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.escoladiradadeDesejavel}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.expMinima}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.expDesejavel}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.conhecimentoMinimo}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.conhecimentoDesejavel}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.habilidadeMinima}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.habilidadeDesejavel}</td>
                </tr>
              ))
            // Condição para caso não encontre o dado pesquisado, retorne a mensagem abaixo.
            ) : (
              <tr>
                <td colSpan="11" className="px-6 py-4 border-gray-300">Nenhuma função encontrada.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Botões de navegação - página anterior e próxima página */}
      <div className="flex justify-center mt-16">
        <button
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 px-4 py-3 mr-6"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Página Anterior
        </button>
        <button
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 px-4 py-2"
          disabled={endIndex >= allUsers.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default RelatoriosPage;