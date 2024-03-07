// Caminho da página: patrimonio/almoxarifado/controle%20armazem

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional ControleDeArmazemPage.
const ControleDeArmazemPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos items.
  const items = [
    {
        item: "ABAFADOR DE RUIDO MARK V",
        quantity: "98",
        stockMinimum: "50",
        inProjects: "5",
        consumed: "0",
        occurrenceApproved: "",
        options: "",
      },
      {
        item: "ABRACADEIRA NYLON PRETA 140 X 3.5MM C 100 UN",
        quantity: "50",
        stockMinimum: "200",
        inProjects: "0",
        consumed: "0",
        occurrenceApproved: "",
        options: "",
      },
      {
        item: "AGULHEIRO PNEUMATICO",
        quantity: "5",
        stockMinimum: "10",
        inProjects: "0",
        consumed: "0",
        occurrenceApproved: "",
        options: "",
      },
      {
        item: "ALFABETO DE AÇO PARA GRAVAÇÃO",
        quantity: "10",
        stockMinimum: "10",
        inProjects: "0",
        consumed: "0",
        occurrenceApproved: "",
        options: "",
      },
  ];

  // Função de manipulação de alteração da barra de pesquisa
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    const filteredUsers = items.filter((user) => {
      const {
        item,
        stockMinimum,
        inProjects,
        consumed,
        occurrenceApproved,
        options,
      } = user;
  
      const userFields = [
        item,
        stockMinimum,
        inProjects,
        consumed,
        occurrenceApproved,
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
  
    const sortedUsers = [...filteredUsers].sort((a, b) => a.item - b.item);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? items : sortedUsers;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da página.
  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Controle de Armazem - K2</h1>
      <p className="font-mono text-center mt-10 bg-gray-300">Armazem Principal - K2</p>

      {/* Botão de voltar para página anterior e botão de novo. */}
      <div className="content-start flex justify-between mt-16">
        <a href="/patrimonio/home/almoxarifado k2" 
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3 mr-5">
          Voltar
        </a>

        {/* SOMENTE COM BANCO DE DADOS. */}
        <div className="flex">
          <a href="/patrimonio/home/almoxarifado/novo item" 
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3">
            Novo Item
          </a>

          {/* SOMENTE COM BANCO DE DADOS. */}
          <a href="/patrimonio/almoxarifado/enviar item" 
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3 ml-5">
            Enviar Item
          </a>
          {/* SOMENTE COM BANCO DE DADOS. */}  
          <a href="/patrimonio/home/almoxarifado/relatorio materiais" 
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3 ml-5">
            Relatório Materiais
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
            <th className="px-72 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Item</th>
            <th className="px-28 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Quantidade</th>
            <th className="px-16 border-r border-b border-gray-300 text-center whitespace-nowrap">Estoque Mínimo</th>
            <th className="px-16 border-r border-b border-gray-300 text-center whitespace-nowrap">Em Projetos</th>
            <th className="px-16 border-r border-b border-gray-300 text-center whitespace-nowrap">Consumido</th>
            <th className="px-16 border-r border-b border-gray-300 text-center whitespace-nowrap">Ocorrência Aprovada</th>
            <th className="px-48 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.item}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.item}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.quantity}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.stockMinimum}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.inProjects}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.consumed}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.occurrenceApproved}</td>
                  <td className="border-b text-center border-gray-300 pr-4">
                    {/* Botão de editar e excluir itens */}
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

export default ControleDeArmazemPage;