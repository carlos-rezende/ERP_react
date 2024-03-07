// Caminho da página: administrador/usuario/editar

// Importa o React e o hook useState do React.
import React, { useState } from 'react';


// Componente funcional EditarUser
const EditarUser = () => {
  // Estados para a barra de pesquisa, usuários, página atual e itens por página.
  const [searchValue, setSearchValue] = useState('');
  const [sortedUsers, setSortedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;


  // Dados dos usuários
  const users = [
    {
      id: 1,
      username: 'CARLOS ELI',
      email: 'carlos.test@test.com',
      login: 'carlos.eli',
      creationDate: '2022-06-22 18:33:27',
    },
    {
      id: 2,
      username: 'GUILHERME FARIAS GOMES',
      email: 'guilherme.test@test.com',
      login: 'guilherme.test',
      creationDate: '2023-05-19 12:07:18',
    },
    
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Filtra usuários com base no termo de pesquisa.
    const filteredUsers = users.filter((user) => {
      const { id, username, email } = user;

      return (
        id.toString().includes(searchTerm) ||
        username.toLowerCase().includes(searchTerm) ||
        email.toLowerCase().includes(searchTerm)
      );
    });

    // Ordena os usuários filtrados por ID.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? users : sortedUsers;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-3">
      <h1 className="text-2xl font-bold mb-4 mt-10">
        Configurações de Usuários
      </h1>

      {/* Botão para voltar para página anterior */}
      <div className="flex justify-end mt-16 mb-14">
        <a href="/administrador/usuario" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
          Voltar
        </a>
      </div>

      {/* Barra de pesquisa */}
      <div className="flex justify-end mb-16">
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

      {/* Tabela de Usuários */}
      <div className="overflow-x-auto">
        <table className="mw-full border-collapse border border-gray-300">
          <thead>
            {/* Cabeçalho da tabela */}
            <tr className="bg-gray-200">
              <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">ID</th>
              <th className="px-56 border-r border-b border-gray-300 text-center whitespace-nowrap">Nome de Usuário</th>
              <th className="px-44 border-r border-b border-gray-300 text-center whitespace-nowrap">Email</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Login</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Data de Criação</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.id}>
                  <td className="border-b border-r text-center border-gray-300 pr-5">
                    {user.id}
                  </td>
                  <td className="border-b border-r text-center border-gray-300 pr-5">
                    {user.username}
                  </td>
                  <td className="border-b border-r text-center border-gray-300 pr-5">
                    {user.email}
                  </td>
                  <td className="border-b border-r text-center border-gray-300 pr-5">
                    {user.login}
                  </td>
                  <td className="border-b border-r text-center border-gray-300 pr-5">
                    {user.creationDate}
                  </td>
                  <td className="border-b text-center border-gray-300 pr-4">
                    <div className="flex flex-row justify-center">
                      <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                        Editar
                      </button>
                      <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                        Excluir
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
    </div>
  );
};

export default EditarUser;
