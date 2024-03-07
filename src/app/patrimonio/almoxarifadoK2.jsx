// Caminho da página: patrimonio/home/almoxarifado k2

'use client';


// Importa a dependência 'react'  e o hook 'useState' do React.
import React, { useState } from 'react';


// Componente funcional AlmoxarifadoK2Page.
function AlmoxarifadoK2Page() {
  // Define estados locais para armazenar dados do formulário.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  const items = [
    {
        description: "Armazem Principal K2",
        quantityOfItems: "3378",
        totalItemsInProject: "668",
      },
    //   Caso precise adicionar mais itens abaixo.
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  
  // Função de manipulação de alteração da barra de pesquisa
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    const filteredUsers = items.filter((user) => {
      const {
        description,
        quantityOfItems,
        totalItemsInProject,
      } = user;
  
      const userFields = [
        description,
        quantityOfItems,
        totalItemsInProject,
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
  
    const sortedUsers = [...filteredUsers].sort((a, b) => a.description - b.description);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia
  const allUsers = searchValue === '' ? items : sortedUsers;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da página
  return (
    <form onSubmit={handleSubmit} className='p-1'>
      <div className="flex items-center justify-center mt-32">
        <div className="w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-16 mt-5">Controle de Armazens - K2</h1>
          <p className="font-mono text-center bg-gray-300">Quantidade de Itens</p>

          {/* Botão para voltar para página anterior, Controle de projetos, controle de armazem, controle de armazem k2 - compras */}
          <div className="flex justify-end mt-10 mb-10">
            <a href="/patrimonio/home/" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
              Voltar
            </a>

            <a href="/patrimonio/home/almoxarifado k2/controle projetos" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2 ml-5">
              Controle de Projetos - K2
            </a>

            <a href="/patrimonio/almoxarifado/controle armazem"
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2 ml-5">
            Controle de Armazem - K2
            </a>

            <a href="/patrimonio/home/almoxarifado k2/controle de armazem compras"
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2 ml-5">
            Controle de Armazem - K2 - COMPRAS
            </a>
          </div>

          {/* Barra de pesquisa. */}
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

          <div className="overflow-x-auto mt-16">
            <table className="mw-full border-collapse border border-gray-300">
              <thead>
                {/* Cabeçalho da tabela */}
                <tr className="bg-gray-200">
                  <th className="px-28 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Descrição</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Quantidade de Itens</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Total de Itens em Projeto</th>
                </tr>
              </thead>
              <tbody>
                {/* Renderiza as linhas da tabela com dados de usuários */}
                {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
                  displayedUsers.map((user) => (
                    <tr key={user.description}>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.description}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.quantityOfItems}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.totalItemsInProject}
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
      </div>
    </form>
  );
}

export default AlmoxarifadoK2Page;