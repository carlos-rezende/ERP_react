// Caminho da página: qsms/epi's funcionario

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional EpisFuncionarioPage.
const EpisFuncionarioPage = () => {
  // Estados para o valor da pesquisa, página atual e usuários ordenados.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos usuários.
  const users = [
    {
        name: "CARLOS ELI REZENDE DE CAMPOS",
        role: "PROGRAMADOR JR",
        unit: "SEDE-RJ",
        costCenter: "TECNOLOGIA DA INFORMACAO",
        options: "",
      },
      {
        name: "GUILHERME FARIAS GOMES",
        role: "ESTAGIARIO TI",
        unit: "SEDE-RJ",
        costCenter: "TECNOLOGIA DA INFORMACAO",
        options: "",
      },
      {
        name: "BRUNO SOUZA SANTANA CAVALCANTE",
        role: "PROGRAMADOR JR",
        unit: "SEDE-RJ",
        costCenter: "TECNOLOGIA DA INFORMACAO",
        options: "",
        
      },
      {
        name: "JHONATAN CABRAL CORREA",
        role: "COORD DE TI",
        unit: "SEDE-RJ",
        costCenter: "TECNOLOGIA DA INFORMACAO",
        options: "",
      },
      {
        name: "BRUNO LEONARDO ROSA",
        role: "COORD INOV OTIMIZACA",
        unit: "ANDT",
        costCenter: "INOVACOES",
        options: "",
      },
      {
        name: "RONALD DE OLIVEIRA PEREIRA",
        role: "COORD COMPRAS LOGISTICA",
        unit: "RJ - Log",
        costCenter: "LOGISTICA/SERVICOS GERAIS",
        options: "",
      },
      {
        name: "ANA CAROLINA DE MENDONCA GARCIA",
        role: 'ASSISTENTE COMPRAS',
        unit: "RJ - Log",
        costCenter: "LOGISTICA/SERVICOS GERAIS",
        options: "",
      },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    const filteredUsers = users.filter((user) => {
      const {
        name,
        role,
        unit,
        costCenter,
        options,
      } = user;
  
      const userFields = [
        name,
        role,
        unit,
        costCenter,
        options,
      ];
  
      // Realiza a pesquisa tanto para strings quanto para números.
      return userFields.some((field) => {
        if (typeof field === 'string') {
          return field.toUpperCase().includes(searchTerm);
        } else if (typeof field === 'number') {
          return field.toString().includes(searchTerm);
        }
        return false;
      });
    });
    
    // Filtra os usuários em ordem alfabética.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.name - b.name);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? users : sortedUsers;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

    
  // Renderização da interface da página.
  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Funcionários</h1>

      {/* Barra de pesquisa. */}
      <div className="flex justify-end mb-16 mt-10">
        <div className="flex">
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

      {/* Tabela com as descrições de nome, função, unidade, centro de custo e visualizar. */} 
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-48 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Nome</th>
              <th className="px-48 border-r border-b border-gray-300 text-center whitespace-nowrap">Função</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Unidade</th>
              <th className="px-48 border-r border-b border-gray-300 text-center whitespace-nowrap">Centro de Custo</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Visualizar</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.name}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">{user.name}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">{user.role}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">{user.unit}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">{user.costCenter}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                    <div className="flex justify-center items-center h-full">
                      <button
                        className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 px-4 py-2"
                        onClick={() => handleUpdate(user.options)}
                      >
                        Editar
                      </button>
                    </div>
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

export default EpisFuncionarioPage;