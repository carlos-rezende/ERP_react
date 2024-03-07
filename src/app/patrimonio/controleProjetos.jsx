// Caminho da página: patrimonio/home/almoxarifado k2/controle projetos

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional ControleDeProjetosPage.
const ControleDeProjetosPage = () => {
    // Estados para controle da barra de pesquisa, página atual e usuários ordenados.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos usuários.
  const users = [
    {
      name: "PROJETO MV29",
      coordinator: "MAURO LUIZ DO NASCIMENTO LIMA",
      segment: "Reparo",
      quantityOfItems: "668",
      quantityOfItemsReturned: "0",
      quantityOfItemsConsumed: "0",
      occurrencePending: "0",
      occurrenceApproved: "0",
      occurrenceRejected: "0",
    },
    {
      name: "PROJETO MV18",
      coordinator: "MAURO LUIZ DO NASCIMENTO LIMA",
      segment: "Inspeção",
      quantityOfItems: "0",
      quantityOfItemsReturned: "0",
      quantityOfItemsConsumed: "0",
      occurrencePending: "0",
      occurrenceApproved: "0",
      occurrenceRejected: "0",
    },
    {
      name: "PROJETO ANCHIETA",
      coordinator: "LUAN RAMOS DA SILVA",
      segment: "Inspeção",
      quantityOfItems: "0",
      quantityOfItemsReturned: "0",
      quantityOfItemsConsumed: "0",
      occurrencePending: "0",
      occurrenceApproved: "0",
      occurrenceRejected: "0",
    },
    {
      name: "PROJETO FLUMINENSE",
      coordinator: "ISACK DA COSTA SOUZA",
      segment: "Inspeção",
      quantityOfItems: "0",
      quantityOfItemsReturned: "0",
      quantityOfItemsConsumed: "0",
      occurrencePending: "0",
      occurrenceApproved: "0",
      occurrenceRejected: "0",
    },
    {
      name: "PROJETO MARICÁ",
      coordinator: "MARCUS VINICIUS GARUZI ALVES",
      segment: "Inspeção",
      quantityOfItems: "0",
      quantityOfItemsReturned: "0",
      quantityOfItemsConsumed: "0",
      occurrencePending: "0",
      occurrenceApproved: "0",
      occurrenceRejected: "0",
    },
    {
      name: "PROJETO MV22",
      coordinator: "CARLOS ALBERTO GENUNCIO PAULA",
      segment: "Inspeção",
      quantityOfItems: "0",
      quantityOfItemsReturned: "0",
      quantityOfItemsConsumed: "0",
      occurrencePending: "0",
      occurrenceApproved: "0",
      occurrenceRejected: "0",
    },
    {
      name: "PROJETO SAQUAREMA	",
      coordinator: "ULISSES MOREIRA SANTIAGO",
      segment: "Inspeção",
      quantityOfItems: "0",
      quantityOfItemsReturned: "0",
      quantityOfItemsConsumed: "0",
      occurrencePending: "0",
      occurrenceApproved: "0",
      occurrenceRejected: "0",
    },
    {
      name: "PROJETO FRADE",
      coordinator: "JONAS DE LIMA OLIVEIRA",
      segment: "Inspeção",
      quantityOfItems: "0",
      quantityOfItemsReturned: "0",
      quantityOfItemsConsumed: "0",
      occurrencePending: "0",
      occurrenceApproved: "0",
      occurrenceRejected: "0",
      },
      {
        name: "PROJETO BRAVO",
        coordinator: "GABRIEL DE SOUZA PEDRO",
        segment: "Inspeção",
        quantityOfItems: "0",
        quantityOfItemsReturned: "0",
        quantityOfItemsConsumed: "0",
        occurrencePending: "0",
        occurrenceApproved: "0",
        occurrenceRejected: "0",
      },
      {
        name: "PROJETO MV24",
        coordinator: "DOUGLAS JACOB DA CONCEICAO",
        segment: "Inspeção	",
        quantityOfItems: "0",
        quantityOfItemsReturned: "0",
        quantityOfItemsConsumed: "0",
        occurrencePending: "0",
        occurrenceApproved: "0",
        occurrenceRejected: "0",
      },
      {
        name: "PROJETO KINGMAKER",
        coordinator: "MARIO JORGE DE OLIVEIRA RODRIG",
        segment: "Inspeção",
        quantityOfItems: "0",
        quantityOfItemsReturned: "0",
        quantityOfItemsConsumed: "0",
        occurrencePending: "0",
        occurrenceApproved: "0",
        occurrenceRejected: "0",
      },
      {
        name: "PROJETO ILHABELA",
        coordinator: "GILDSON PEREIRA DE FREITAS",
        segment: "Inspeção",
        quantityOfItems: "0",
        quantityOfItemsReturned: "0",
        quantityOfItemsConsumed: "0",
        occurrencePending: "0",
        occurrenceApproved: "0",
        occurrenceRejected: "0",
      },
      {
        name: "PROJETO MV20",
        coordinator: "LEONARDO FERREIRA VALENTE DA S",
        segment: "Inspeção",
        quantityOfItems: "0",
        quantityOfItemsReturned: "0",
        quantityOfItemsConsumed: "0",
        occurrencePending: "0",
        occurrenceApproved: "0",
        occurrenceRejected: "0",
      },
      {
        name: "Fluminense insp",
        coordinator: "PAULO RODRIGO LOPES",
        segment: "Inspeção	",
        quantityOfItems: "0",
        quantityOfItemsReturned: "0",
        quantityOfItemsConsumed: "0",
        occurrencePending: "0",
        occurrenceApproved: "0",
        occurrenceRejected: "0",
      },
      
  ];

  // Função de manipulação de alteração da barra de pesquisa
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    // Filtra usuários com base no termo de pesquisa.
    const filteredUsers = users.filter((user) => {
      const {
        name,
        coordinator,
        segment,
        quantityOfItems,
        quantityOfItemsReturned,
        quantityOfItemsConsumed,
        occurrencePending,
        occurrenceApproved,
        occurrenceRejected,
      } = user;
  
      const userFields = [
        name,
        coordinator,
        segment,
        quantityOfItems,
        quantityOfItemsReturned,
        quantityOfItemsConsumed,
        occurrencePending,
        occurrenceApproved,
        occurrenceRejected,
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
  
    // Ordena os usuários pelo nome.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.name - b.name);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? users : sortedUsers;

  // Índices de início e fim da lista de usuários na página atual.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da interface da página.
  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Controle de Projetos - K2</h1>
      <p className="font-mono bg-gray-300 text-center mt-10">Projetos - K2</p>

      <div className="content-start flex justify-between mt-10">
      <a href="/patrimonio/home/almoxarifado k2/"
        className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3">
        Voltar
      </a>

      <a href="/patrimonio/home/almoxarifado k2/controle projetos/novo projeto"
        className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3">
        Novo Projeto
      </a>
    </div>

      {/* Barra de pesquisa */}
      <div className="flex justify-end mb-10 mt-10">
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

      {/* Tabela de usuários */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-80 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Nome</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Coordenador</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Segmento</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Quantidade de Itens</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Quantidade de Itens Devolvido</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Quantidade de Itens Consumido</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Ocorrência Pendente</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Ocorrência Aprovada</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Ocorrência Rejeitada</th>
            </tr>
          </thead>
          
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.name}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.name}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.coordinator}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.segment}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.quantityOfItems}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.quantityOfItemsReturned}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.quantityOfItemsConsumed}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.occurrencePending}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.occurrenceApproved}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.occurrenceRejected}</td>
                </tr>
              ))
              // Exibe uma mensagem se nenhum dado for encontrado.
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

export default ControleDeProjetosPage;