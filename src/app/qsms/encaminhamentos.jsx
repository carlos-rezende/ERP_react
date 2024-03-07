// Caminho da página: qsms/encaminhamentos

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';
// Importa o componente Link da biblioteca react-router-dom, que é usado para criar links de navegação  
// entre diferentes rotas, sem carregar a página inteira.
import { Link } from 'react-router-dom';

// Componente funcional EncaminhamentosPage.
const EncaminhamentosPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos usuários.
  const users = [
    {
      officer: "Romildo de Barros Garcao",
      dateOfInclusion: "01-03-2021 11:48:00",
      clinic: "Porangatu",
      scheduledDate: "24-02-2021",
      status: "Atrasado",
    },
    {
      officer: "Valdemir Pereira Barreto",
      dateOfInclusion: "01-03-2021 11:50:31",
      clinic: "Brasília Expertise",
      scheduledDate: "24-02-2021",
      status: "Atrasado",
    },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();

    const filteredUsers = users.filter((user) => {
      const {
        officer,
        dateOfInclusion,
        clinic,
        scheduledDate,
        status,
      } = user;

      const userFields = [
        officer,
        dateOfInclusion,
        clinic,
        scheduledDate,
        status,
      ];

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
    const sortedUsers = [...filteredUsers].sort((a, b) => new Date(a.dateOfInclusion) - new Date(b.dateOfInclusion));
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa esta vazia.
  const allUsers = searchValue === '' ? users : sortedUsers;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da interface da página.
  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Encaminhamentos</h1>

      {/* Página de Novo Encaminhamento */}
      <div className="flex justify-between mt-16 mb-16">
      {/* Botão Novo Encaminhamento */}
      <div className="flex items-center">
        <Link
          to="/qsms/encaminhamentos/novo encaminhamento"
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2"
        >
          Novo Encaminhamento
        </Link>
      </div>

      {/* Barra de Pesquisa */}
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


      {/* Tabela com descrições dos funcionários. */} 
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-48 h-10 border-r border-b border-gray-300 text-center">Funcionário</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Data da Inclusão</th>
              <th className="px-28 border-r border-b border-gray-300 text-center">Clínica</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Data Agendada</th>
              <th className="px-28 border-r border-b border-gray-300 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.officer}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.officer}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.dateOfInclusion}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.clinic}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.scheduledDate}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.status}</td>
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
      
      {/* Botões de paginação */}
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

export default EncaminhamentosPage;
