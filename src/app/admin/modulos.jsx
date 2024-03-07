'use client';
// Importa o React e o hook useState do React.
import React, { useState } from 'react';

// Componente funcional ModulosPage
const ModulosPage = () => {
  // Estados para a barra de pesquisa, página atualm usuários ordenados e itens por página.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 20;


  // Dados dos usuários
  const users = [
    {
      id: 1,
      description: "Admin",
      creationDate: "2015-04-08 05:11:32",
      status: "",
      route: "/admin",
      options: "editar",
    },
    {
      id: 2,
      description: "Gamagrafia",
      creationDate: "2015-04-08 05:11:32",
      status: "",
      route: "/gamagrafia",
      options: "editar",
    },
    {
      id: 3,
      description: "Patrimônio",
      creationDate: "2015-04-08 05:11:32",
      status: "",
      route: "/patrimonio",
      options: "editar",
    },
    {
      id: 4,
      description: "Radioproteção",
      creationDate: "2015-05-25 10:34:09",
      status: "",
      route: "/radioprotecao",
      options: "editar",
    },
    {
      id: 5,
      description: "SGI",
      creationDate: "1970-12-31 23:00:00",
      status: "",
      route: "/sgi",
      options: "editar",
    },
    {
      id: 6,
      description: "Recursos Humanos",
      creationDate: "1970-12-31 23:00:00",
      status: "",
      route: "/rh",
      options: "editar",
    },
    {
      id: 7,
      description: "Notificações",
      creationDate: "1970-12-31 23:00:00",
      status: "",
      route: "/notificacoes",
      options: "editar",
    },
    {
      id: 8,
      description: "Comercial",
      creationDate: "1970-12-31 23:00:00",
      status: "",
      route: "/comercial",
      options: "editar",
    },
    {
      id: 9,
      description: "Ponto",
      creationDate: "1970-12-31 23:00:00",
      status: "",
      route: "/ponto",
      options: "editar",
    },
    {
      id: 10,
      description: "QSMS",
      creationDate: "1970-12-31 23:00:00",
      status: "",
      route: "/qsms",
      options: "editar",
    },
    {
      id: 11,
      description: "Unidades",
      creationDate: "1970-12-31 23:00:00",
      status: "",
      route: "/unidades",
      options: "editar",
    },
    {
      id: 12,
      description: "Solicitações",
      creationDate: "1970-12-31 23:00:00",
      status: "",
      route: "/solicitacoes",
      options: "editar",
    },
    {
      id: 13,
      description: "Treinamento e Qualificações",
      creationDate: "2017-07-24 09:18:39",
      status: "",
      route: "/treinamentos_home",
      options: "editar",
    },
    {
      id: 14,
      description: "HelpDesk",
      creationDate: "2018-03-05 14:12:07",
      status: "",
      route: "/helpdesk",
      options: "editar",
    },
    {
      id: 15,
      description: "Coelba",
      creationDate: "2018-04-17 14:34:51",
      status: "",
      route: "/coelba",
      options: "editar",
    },
    {
      id: 16,
      description: "Equipamentos de Informática",
      creationDate: "2018-04-30 09:13:34",
      status: "",
      route: "/equip_info",
      options: "",
    },
    {
      id: 17,
      description: "Financeiro",
      creationDate: "2018-06-12 08:44:277",
      status: "",
      route: "/financeiro",
      options: "editar",
    },
    {
      id: 18,
      description: "Coelce",
      creationDate: "2018-08-14 12:29:25",
      status: "",
      route: "/coelce",
      options: "editar",
    },
    {
      id: 19,
      description: "Políticas Internas",
      creationDate: "2021-05-13 08:46:23",
      status: "",
      route: "/politicas",
      options: "editar",
    },
    {
      id: 20,
      description: "Jurídico",
      creationDate: "2021-08-03 12:48:59",
      status: "",
      route: "/juridico",
      options: "editar",
    },
    {
      id: 21,
      description: "Fiscal",
      creationDate: "2021-09-20 13:28:26",
      status: "",
      route: "/fiscal",
      options: "editar",
    },
    {
      id: 22,
      description: "Lições",
      creationDate: "2021-10-13 17:02:22",
      status: "",
      route: "/licoes",
      options: "editar",
    },
    {
      id: 23,
      description: "Equatorial",
      creationDate: "2021-11-22 10:48:59",
      status: "",
      route: "/enelgoias",
      options: "editar",
    },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Filtra os usuários com base no termo de pesquisa.
    const filteredUsers = users.filter((user) => {
      const { id, description } = user;

      return (
        id.toString().includes(searchTerm) ||
        description.toLowerCase().includes(searchTerm) 
      );
    });

    // Ordena os usuários filtrados por ID.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa esta vazia.
  const allUsers = searchValue === '' ? users : sortedUsers;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);


  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Cadastro e Configuração dos Módulos</h1>
      {/* Formulário para inclusão de módulos. */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th colSpan="3" className="border border-gray-300 px-4 py-2 text-center text-sm">
              Inclusão de Módulos
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              <label htmlFor="descricaoModulo" className="sr-only">Descrição</label>
              <input
                type="text"
                name="descricaoModulo"
                title="Descrição do módulo"
                id="descricaoModulo"
                placeholder="Descrição do módulo"
                className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
              />
            </th>

            <th className="border border-gray-300 px-4 py-2">
              <label htmlFor="numero" className="sr-only">Rota</label>
              <input
                type="text"
                name="rota"
                title="Rota"
                id="numero"
                placeholder="/rota"
                className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
              />
            </th>
            <th className="border border-gray-300 px-4 py-2">
              <button
                type="submit"
                title="Cadastrar"
                className="bg-gray-800 hover:bg-gray-300 rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 py-2 px-4"
              >
                Cadastrar
              </button>
            </th>
          </tr>
        </thead>
      </table>

      {/* Barra de pesquisa. */}
      <div className="flex justify-end mb-16 mt-10">
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

      {/* Tabela de ID, desrição, data de criação, etc. */}
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border-b border-r text-center border-gray-300 pr-5">
              ID
            </th>
            <th className="border-b border-r text-center border-gray-300 pr-5">
              Descrição
            </th>
            <th className="border-b border-r text-center border-gray-300 pr-5">
              Data de Criação
            </th>
            <th className="border-b border-r text-center border-gray-300 pr-5">
              Status
            </th>
            <th className="border-b border-r text-center border-gray-300 pr-5">
              Rota
            </th>
            <th className="border-b border-r text-center border-gray-300 pr-5">
              Opções
            </th>
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
                {user.description}
              </td>
              <td className="border-b border-r text-center border-gray-300 pr-5">
                {user.creationDate}
              </td>
              <td className="border-b border-r text-center border-gray-300 pr-5">
                {user.status}
              </td>
              <td className="border-b border-r text-center border-gray-300 pr-5">
                {user.route}
              </td>
              <td className="border-b border-r text-center border-gray-300 pr-5">
                <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Editar
                  </button>
                </div>
              </td>
            </tr>
          ))
          // Condição para caso não encontre o dado pesquisado, retorne a mensagem abaixo.
        ) : (
          <tr>
            <td colSpan="4">Nenhum exame encontrado.</td>
          </tr>
        )}
        </tbody>
      </table>

      {/* Paginação - anterior ou próxima página */}
      <div className="flex justify-center mt-16">
        <button
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 px-4 py-3 mr-6"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Página Anterior
        </button>
        <button
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 px-4 py-2 mr-2"
          disabled={endIndex >= allUsers.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default ModulosPage;
