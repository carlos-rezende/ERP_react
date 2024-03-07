// Caminho da página: patrimonio/home/almoxarifado k2/controle de armazem compras

'use client';


// Importa a dependência 'react'  e o hook 'useState' do React.
import React, { useState } from 'react';


// Componente funcional ControleDeArmazemComprasK2Page.
function ControleDeArmazemComprasK2Page() {
  // Define estados locais para armazenar dados do formulário.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  const items = [
    {
        item: "ABAFADOR DE RUIDO MARK V",
        quantity: "98",
        stockMinimum: "50",
        inProjects: "5",
      },
      {
        item: "ABRACADEIRA",
        quantity: "200",
        stockMinimum: "400",
        inProjects: "0",
      },
      {
        item: "ABRACADEIRA NYLON PRETA 140 X 3.5MM C 100 UN",
        quantity: "50",
        stockMinimum: "200",
        inProjects: "0",
      },
      {
        item: "AGULHEIRO PNEUMATICO",
        quantity: "5",
        stockMinimum: "10",
        inProjects: "0",
      },
      {
        item: "ALFABETO DE AÇO PARA GRAVAÇÃO",
        quantity: "10",
        stockMinimum: "10",
        inProjects: "0",
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
        item,
        quantity,
        stockMinimum,
        inProjects
      } = user;
  
      const userFields = [
        item,
        quantity,
        stockMinimum,
        inProjects
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
  
    const sortedUsers = [...filteredUsers].sort((a, b) => a.items - b.items);
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
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-16 mt-5">Controle de Armazens - K2 - Compras</h1>
          <p className="font-mono text-center bg-gray-300">Armazem Principal - K2</p>

          {/* Botão para voltar para página anterior */}
          <div className="flex justify-end mt-10 mb-10">
            <a href="/patrimonio/home/almoxarifado k2" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
              Voltar
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
                  <th className="px-60 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Item</th>
                  <th className="px-24 border-r border-b border-gray-300 text-center whitespace-nowrap">Quantidade</th>
                  <th className="px-24 border-r border-b border-gray-300 text-center whitespace-nowrap">Estoque Mínimo</th>
                  <th className="px-24 border-r border-b border-gray-300 text-center whitespace-nowrap">Em Projetos</th>
                </tr>
              </thead>
              <tbody>
                {/* Renderiza as linhas da tabela com dados de usuários */}
                {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
                  displayedUsers.map((user) => (
                    <tr key={user.item}>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.item}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.quantity}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.stockMinimum}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.inProjects}
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

export default ControleDeArmazemComprasK2Page;