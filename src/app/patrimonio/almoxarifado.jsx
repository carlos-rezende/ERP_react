// Caminho da página: patrimonio/home/almoxarifado ou /patrimonio/almoxarifado

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

import { BsEye } from 'react-icons/bs';

// Componente funcional AlmoxarifadoPage.
const AlmoxarifadoPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos armazens.
  const warehouses = [
    {
        description: "Águas Lindas",
        numberOfItems: "175",
        unit: "GO",
        options: "",
      },
      {
        description: "Formosa",
        numberOfItems: "191",
        unit: "GO",
        options: "",
      },
      {
        description: "Porangatu",
        numberOfItems: "267",
        unit: "GO",
        options: "",
      },
      {
        description: "Luziâna",
        numberOfItems: "1355",
        unit: "GO",
        options: "",
      },
  ];

  // Função de manipulação de alteração da barra de pesquisa
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    const filteredUsers = warehouses.filter((user) => {
      const {
        description,
        numberOfItems,
        unit,
        options,
      } = user;
  
      const userFields = [
        description,
        numberOfItems,
        unit,
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
  
    const sortedUsers = [...filteredUsers].sort((a, b) => a.description - b.description);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? warehouses : sortedUsers;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da página.
  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Controle de Almoxarifado - QT</h1>
      <p className="font-mono text-center mt-10 bg-gray-300">Armazens - QT</p>

      {/* Botão de voltar para página anterior, botão de novo e entrega de materias. */}
      <div className="content-start flex justify-between mt-16">
        <a href="/patrimonio/home/" 
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3 mr-5">
          Voltar
        </a>
        
        <div className="flex">
          <a href="/patrimonio/home/almoxarifado/novo almoxarifado" 
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3">
            Novo
          </a>

          <a href="/patrimonio/almoxarifado/itens almoxarifado" 
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3 ml-5">
            Itens Almoxarifado - QT
          </a>

          <a href="/patrimonio/home/almoxarifado/entrega materiais" 
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3 ml-5">
            Entrega de Materiais
          </a>
        </div>
      </div>

      {/* Barra de pesquisa. */}
      <div className="flex justify-end mb-10 mt-16">
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

      {/* Detalhes da tabela com descrição, quantidade de itens, unidade e opções. */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 w-10">
            <th className="px-48 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Descrição</th>
            <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Quantidade de Itens</th>
            <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Unidade</th>
            <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.description}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.description}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.numberOfItems}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.unit}</td>
                  <td className="border-b text-center border-gray-300 pr-4">
                    {/* Ícones de opções. */}
                    <div className="flex items-center justify-center">
                      <div className="bg-blue-400 p-2 rounded-lg mt-2 mb-2 flex">
                        <button className="flex items-center justify-center" title="Visualizar">
                          <BsEye />
                        </button>
                      </div>
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

export default AlmoxarifadoPage;