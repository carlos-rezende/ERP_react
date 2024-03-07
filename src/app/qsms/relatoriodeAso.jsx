// Caminho da página: qsms/pesquisas/relatoriodeaso

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional RelatoriodeAso.
const RelatoriodeAso = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos usuários.
  const users = [
    {
        name: "ALAN CAMPOS DE ALMEIDA",
        costCenter: "TUN - MACAE - EBR - 110237023",
        role: 'COORD OPERACOES',
        exams: "RX TORAX PA OIT",
        expiration: "04-04-2020",
      },
      {
        name: "CARLOS CESAR DA FONSECA RIBEIR",
        costCenter: 'SUPERVISAO PROTECAO RADIOLOGICA - 110304007',
        role: "SUP RADIOPROTECAO",
        exams: "TGP",
        expiration: "19-12-2019",
      },
      {
        name: "CESAR AUGUSTO RODRIGUES GOMES",
        costCenter: "GERENCIA OPERACIONAL - SUL - 110301001",
        role: 'GER OPERACOES',
        exams: "Hemograma com Plaquetometria + Reticulócitos (CBC+Reticulocytes)",
        expiration: "19-03-2019",
      },
      {
        name: "EDMAR CORREA DOS REIS",
        costCenter: "UN - BA - BRASKEM S/A - 110231004",
        role: "OP GAMAGRAFIA III",
        exams: "EXAME CLÍNICO",
        expiration: "11-09-2019",
      },
      {
        name: "ERNANI FONSECA DO CARMO",
        costCenter: "UN - MG - CONSTRUCAP - 110230017",
        role: "COORD DE END",
        exams: "AUDIOMETRIA",
        expiration: "27-09-2019",
      },
      {
        name: "FABIANO TELES LIMA",
        costCenter: "UN - MG - ENESA RADIOGRAFIA - 110230018",
        role: "OP GAMAGRAFIA III",
        exams: "Hemograma com Plaquetometria + Reticulócitos (CBC+Reticulocytes)",
        expiration: "21-09-2019",
      },
      {
        name: "JAQUIEL DE SOUZA BARBOSA",
        costCenter: "UN - ES - IMETAME - 110238005",
        role: "OP GAMAGRAFIA III",
        exams: "Hemograma com Plaquetometria + Reticulócitos (CBC+Reticulocytes)",
        expiration: "27-02-2020",
      },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    const filteredUsers = users.filter((user) => {
      const {
        name,
        costCenter,
        role,
        exams,
        expiration,
       
      } = user;
  
      const userFields = [
        name,
        costCenter,
        role,
        exams,
        expiration,
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
      <h1 className="text-2xl font-bold mb-4 mt-10">Lista de Funcionários</h1>

      {/* Botão de voltar. */}
      <div className="flex justify-between mt-16 mb-10">
      <div>
            <a
            href="/qsms/pesquisas"
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2"
            >
            Voltar
            </a>
        </div>

        {/* Barra de pesquisa. */}
        <div className="flex justify-end mb-10">
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
      </div>

      {/* Tabela com as descrições de nome, centro de custo, função, exame e vencimento. */} 
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-48 h-10 border-r border-b border-gray-300 text-center">Nome</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Centro de Custo</th>
              <th className="px-28 border-r border-b border-gray-300 text-center">Função</th>
              <th className="px-14 border-r border-b border-gray-300 text-center">Exame</th>
              <th className="px-14 border-r border-b border-gray-300 text-center">Vencimento</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.name}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.name}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.costCenter}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.role}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.exams}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.expiration}</td>
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

export default RelatoriodeAso;