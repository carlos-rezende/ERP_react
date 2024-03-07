// Caminho da página: radioprotecao/home/folha de doses applus

// Importa o React e o hook useState do React.
import React, { useState } from 'react';

// importando ícone da React-Icon
import { AiOutlineEye } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

// Componente funcional FolhaDeDosesApplusPage.
const FolhaDeDosesApplusPage = () => {
  // Estados para a barra de pesquisa, usuários, página atual e itens por página.
  const [searchValue, setSearchValue] = useState('');
  const [sortedUsers, setSortedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;


  // Dados dos usuários
  const users = [
    {
      id: 1,
      username: "ALAN CAMPOS DE ALMEIDA",
      role: "COORD OPERACOES",
    },
    {
      id: 2,
      username: "CARLOS CESAR DA FONSECA RIBEIR",
      role: "SUP RADIOPROTECAO",
    },
    {
      id: 3,
      username: "CESAR AUGUSTO RODRIGUES GOMES",
      role: "GER OPERACOES",
    },
    {
      id: 4,
      username: "EDMAR CORREA DOS REIS",
      role: "OP GAMAGRAFIA III",
    },
    {
      id: 5,
      username: "ERNANI FONSECA DO CARMO",
      role: "COORD DE END",
    },
    {
      id: 6,
      username: "FABIANO TELES LIMA",
      role: "OP GAMAGRAFIA III",
    },
    {
      id: 7,
      username: "FABIO PEREIRA MOREIRA",
      role: "OP GAMAGRAFIA III",
    },
    {
      id: 8,
      username: "JAQUIEL DE SOUZA BARBOSA",
      role: "OP GAMAGRAFIA III",
    },
    {
      id: 9,
      username: "JORGE RABELO DE SANTANA",
      role: "OP GAMAGRAFIA I",
    },
    {
      id: 10,
      username: "JOSE CARLOS DA FONSECA",
      role: "OP GAMAGRAFIA III",
    },
    {
      id: 11,
      username: "JUSSIMAR CORREIA DOS REIS",
      role: "INSP GAMAGRAFIA",
    },
    {
      id: 12,
      username: "LEANDRO DE OLIVEIRA CARNEIRO",
      role: "OP GAMAGRAFIA II B",
    },
    {
      id: 13,
      username: "LEANDRO MARTINS LESQUIVES",
      role: "OP GAMAGRAFIA I",
    },
    {
      id: 14,
      username: "LEANDRO SILVA MELO",
      role: "SUP TECNICO",
    },
    {
      id: 15,
      username: "MARCOS ANTONIO ALVES",
      role: "OP GAMAGRAFIA II B",
    },
    {
      id: 16,
      username: "MIGUEL FERREIRA NETO",
      role: "OP GAMAGRAFIA I",
    },
    {
      id: 17,
      username: "NILTON DA SILVA DANTAS",
      role: "INSP GAMAGRAFIA",
    },
    {
      id: 18,
      username: "ROBERT MAGNO DIAS COSTA",
      role: "COORD PROJETOS",
    },
    {
      id: 19,
      username: "RODRIGO PINTO DE CAMPOS",
      role: "OP GAMAGRAFIA II A",
    },
    {
      id: 20,
      username: "ROGERIO TEODOMIRO DE SOUZA",
      role: "OP GAMAGRAFIA II B",
    },
    {
      id: 21,
      username: "SERGIO RICARDO LIMA DE VERCOSA",
      role: "GER DESIGN NEG",
    },
    {
      id: 22,
      username: "VANDERSON BARCELOS M MARTINS",
      role: "COORD OPERACOES",
    },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Filtra usuários com base no termo de pesquisa.
    const filteredUsers = users.filter((user) => {
      const { id, username, role } = user;

      return (
        id.toString().includes(searchTerm) ||
        username.toLowerCase().includes(searchTerm) ||
        role.toLowerCase().includes(searchTerm)
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
      <h1 className="text-2xl font-bold mb-4 mt-10">Folha de Doses Applus+</h1>
      <p className="font-mono bg-gray-300 text-center mt-16">Funcionários</p>

      {/* Botão para voltar para página anterior */}
      <div className="flex justify-between">
        <div className="mt-16 mb-5">
          <a href="/radioprotecao/home" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
            Voltar
          </a>
        </div>
        {/* Página de admitidos. */}
        <div className="flex mt-16 mb-5">
          <a href="" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2 mr-5">
            Admitidos
          </a>
          {/* Página de demitidos. */}
          <a href="" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
            Demitidos
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

      {/* Tabela com nome, função e opções */}
      <div className="overflow-x-auto">
        <table className="mw-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-56 border-r border-b border-gray-300 text-center whitespace-nowrap">Nome</th>
              <th className="px-44 border-r border-b border-gray-300 text-center whitespace-nowrap">Função</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.id}>
                  <td className="border-b border-r text-center border-gray-300 pr-5">
                    {user.username}
                  </td>
                  <td className="border-b border-r text-center border-gray-300 pr-5">
                    {user.role}
                  </td>
                  {/* Botão de Visualizar */}
                  <td className="border-b text-center border-gray-300 pr-4">
                    <div className="inline-block p-2 rounded-lg ml-2 mt-2 mb-2 bg-blue-400">
                      <button className="flex items-center justify-center" title="Visualizar">Visualizar
                        <AiOutlineEye className="ml-3" />
                      </button>
                    </div>
                    {/* Botão de Excluir */}
                    <div className="inline-block p-2 rounded-lg ml-2 mt-2 mb-2 bg-red-500">
                      <button className="flex items-center justify-center" title="Visualizar">Excluir
                        <BsTrash className="ml-3" />
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

export default FolhaDeDosesApplusPage;


