// Caminho da página: qsms/ordens de servico

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional OrdensSevico.
const OrdensSevico = () => {
  // Estados para o valor da pesquisa, página atual e usuários ordenados.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos usuários.
  const users = [
    {
        name: "GUILHERME FARIAS GOMES",
        role: 'ESTAGIARIO TI',
        intermittent: "Não",
        unit: "SEDE-RJ",
        costCenter: "TECNOLOGIA DA INFORMACAO",
        expiredExams: "0",
        totalBatteries: "0",
      },
      {
        name: "JHONATAN CABRAL CORREA",
        role: 'COORD DE TI',
        intermittent: "Não",
        unit: "SEDE-RJ",
        costCenter: "TECNOLOGIA DA INFORMACAO",
        expiredExams: "0",
        totalBatteries: "1",
      },
      {
        name: "CARLOS ELI REZENDE DE CAMPOS",
        role: 'PROGRAMADOR JR',
        intermittent: "Não",
        unit: "SEDE-RJ",
        costCenter: "TECNOLOGIA DA INFORMACAO",
        expiredExams: "0",
        totalBatteries: "1",
      },
      {
        name: "BRUNO SOUZA SANTANA CAVALCANTE",
        role: 'PROGRAMADOR JR',
        intermittent: "Não",
        unit: "SEDE-RJ",
        costCenter: "TECNOLOGIA DA INFORMACAO",
        expiredExams: "0",
        totalBatteries: "1",
      },
      {
        name: "MATHEUS FERREIRA DOS SANTOS DE JEZUS",
        role: 'ANAL DE COMPRAS',
        intermittent: "Não",
        unit: "RJ - Log",
        costCenter: "LOGISTICA/SERVICOS GERAIS",
        expiredExams: "1",
        totalBatteries: "1",
      },
      {
        name: "ANA CAROLINA DE MENDONCA GARCIA",
        role: 'ASSISTENTE COMPRAS',
        intermittent: "Não",
        unit: "RJ - Log",
        costCenter: "LOGISTICA/SERVICOS GERAIS",
        expiredExams: "0",
        totalBatteries: "1",
      },
      {
        name: "RONALD DE OLIVEIRA PEREIRA",
        role: 'COORD COMPRAS LOGISTA',
        intermittent: "Não",
        unit: "RJ - Log",
        costCenter: "LOGISTICA/SERVICOS GERAIS",
        expiredExams: "1",
        totalBatteries: "1",
      },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    const filteredUsers = users.filter((user) => {
      const {
        name,
        role,
        intermittent,
        unit,
        costCenter,
        expiredExams,
        totalBatteries,
        options,
      } = user;
  
      const userFields = [
        name,
        role,
        intermittent,
        unit,
        costCenter,
        expiredExams,
        totalBatteries,
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
  
    const sortedUsers = [...filteredUsers].sort((a, b) => a.name - b.name);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? users : sortedUsers;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Ordens de Serviço</h1>
      <p className="font-mono text-center bg-gray-300 mt-10 mb-10">Lista de Funcionários</p>

      <div className="flex justify-end mb-10 mt-5">
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

      {/* Tabela com as descrições funcionários. */} 
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-48 h-10 border-r border-b border-gray-300 text-center">Nome</th>
              <th className="px-28 border-r border-b border-gray-300 text-center">Função</th>
              <th className="px-14 border-r border-b border-gray-300 text-center">Intermitente</th>
              <th className="px-14 border-r border-b border-gray-300 text-center">Unidade</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Centro de Custo</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Exames Vencidos</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Total de Baterias</th>
              <th className="px-14 border-r border-b border-gray-300 text-center">Opções</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.name}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.name}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.role}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.intermittent}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.unit}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.costCenter}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.expiredExams}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.totalBatteries}</td>
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

            // Condição para caso não encontre o dado pesquisado, retorne a mensagem abaixo
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

export default OrdensSevico;