// Caminho da página: unidades/home/centros de custo

// Importa o React e o hook useState do React.
import React, { useState } from 'react';


// Componente funcional CentrosDeCustoPage.
const CentrosDeCustoPage = () => {
  // Estados para a barra de pesquisa, usuários, página atual e itens por página.
  const [searchValue, setSearchValue] = useState('');
  const [sortedUsers, setSortedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;


  // Dados dos centros de custo.
  const costCenters = [
    {
      id: 109,
      description: "CONTROLADORIA - 110102002",
      unity: "SEDE-RJ",
    },
    {
      id: 115,
      description: "RECURSOS HUMANOS - 110102008",
      unity: "RH",
    },
    {
      id: 117,
      description: "TECNOLOGIA DA INFORMACAO - 110102010",
      unity: "SEDE-RJ",
    },
    {
      id: 120,
      description: "LOGISTICA/SERVICOS GERAIS - 110102013",
      unity: "RJ - Log",
    },
    {
      id: 124,
      description: "DIRETORIA GERAL - 110104001",
      unity: "NOR EPE",
    },
    {
      id: 199,
      description: "UN - BA - BRASKEM S/A - 110231004",
      unity: "BA",
    },
    {
      id: 201,
      description: "UN - BA - TORRES EOLICAS DO BRASI - 110231006",
      unity: "TB",
    },
    {
      id: 202,
      description: "UN - BA - CANTEIRO - 110231998",
      unity: "BA",
    },
    {
      id: 226,
      description: "UN - MACAE - CANTEIRO - 110237998",
      unity: "MC",
    },
    {
      id: 229,
      description: "JURIDICO - 110102014",
      unity: "SEDE",
    },
    {
      id: 230,
      description: "FINANCEIRO - 110102015",
      unity: "SEDE-RJ",
    },
    {
      id: 240,
      description: "UN - MG - DELP ENGENHARIA - 110230008",
      unity: "MG",
    },
    {
      id: 249,
      description: "UN - NOR - COELCE - 110233007",
      unity: "NOR COELCE",
    },
    {
      id: 252,
      description: "GERENCIA OPERACIONAL - SUL - 110301001",
      unity: "MG",
    },
    {
      id: 261,
      description: "GERENCIA ANDT - 110304001",
      unity: "ANDT",
    },
    {
      id: 262,
      description: "LICITACOES - 110304002",
      unity: "Lic RJ",
    },
    {
      id: 263,
      description: "PROJETOS I + D - 110304003",
      unity: "SEDE",
    },
    {
      id: 264,
      description: "MANUTENCAO - 110304004",
      unity: "Almo - MC",
    },
    {
      id: 265,
      description: "DESENVOLVIMENTO DE NEGOCIOS - 110304005",
      unity: "NOR EPE",
    },
    {
      id: 266,
      description: "PROCESSOS TRABALHISTAS EST. OP. - 110304006",
      unity: "SEDE",
    },
    {
      id: 279,
      description: "SGI - SISTEMA DE GESTAO INTEGRADA - 110102016",
      unity: "SGI/SMS",
    },
    {
      id: 284,
      description: "SUPERVISAO PROTECAO RADIOLOGICA - 110304007",
      unity: "SEDE-RJ",
    },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Filtra usuários com base no termo de pesquisa.
    const filteredUsers = costCenters.filter((user) => {
      const { id, description, unity } = user;

      return (
        id.toString().includes(searchTerm) ||
        description.toLowerCase().includes(searchTerm) ||
        unity.toLowerCase().includes(searchTerm)
      );
    });

    // Ordena os usuários filtrados por ID.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? costCenters : sortedUsers;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-3">
      <h1 className="text-2xl font-bold mb-4 mt-10">Centros de Custo</h1>

      {/* Botão para voltar para página anterior */}
      <div className="flex justify-between">
        <div className="mt-16 mb-5">
          <a href="/unidades/home/" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
            Voltar
          </a>
        </div>
      </div>

      {/* Barra de pesquisa */}
      <div className="flex justify-end mb-16 mt-16">
        <div className="flex mb-1">
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

      {/* Tabela com id, descrição e unidade */}
      <div className="overflow-x-auto">
        <table className="mw-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-16 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">ID</th>
              <th className="px-56 border-r border-b border-gray-300 text-center whitespace-nowrap">Descrição</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Unidade</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com os dados do ID, descrição e unidade */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.id}>
                  <td className="border-b border-r h-16 text-center border-gray-300 pr-5">
                    {user.id}
                  </td>
                  <td className="border-b border-r text-center border-gray-300 pr-5">
                    {user.description}
                  </td>
                  <td className="border-b border-r text-center border-gray-300 pr-5">
                    {user.unity}
                  </td>
                </tr>
              ))
              // Condição para caso não encontre o dado pesquisado, retorne a mensagem abaixo.
            ) : (
              <tr>
                <td colSpan="11" className="px-6 py-4 border-gray-300">Nenhum dado encontrado.</td>
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

export default CentrosDeCustoPage;


