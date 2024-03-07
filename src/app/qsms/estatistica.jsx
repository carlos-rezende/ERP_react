// Caminho da página: qsms/estatistica

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional EstatisticaPage.
const EstatisticaPage = () => {
  // Estados para o valor da pesquisa, página atual e usuários ordenados.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos meses
  const months = [
    {
        realized: "A Realizar",
        jan: "120",
        fev: "96",
        mar: "158",
        abr: "64",
        may: "18",
        jun: "6",
        jul: "40",
        aug: "33",
        sept: "26",
        oct: "13",
        nov: "9",
        dec: "30",
    },
    {
        overdue: "Atrasados",
        jan: "61",
        fev: "20",
        mar: "118",
        abr: "14",
        may: "6",
        jun: "2",
        jul: "8",
        aug: "6",
        sept: "3",
        oct: "7",
        nov: "5",
        dec: "22",
    },
    {
        pending: "Pendente",
        jan: "5",
        fev: "13",
        mar: "83",
        abr: "14",
        may: "0",
        jun: "1",
        jul: "0",
        aug: "0",
        sept: "0",
        oct: "0",
        nov: "0",
        dec: "0",
    },
    {
        done: "Realizado",
        jan: "249",
        fev: "41",
        mar: "105",
        abr: "47",
        may: "118",
        jun: "12",
        jul: "29",
        aug: "8",
        sept: "0",
        oct: "0",
        nov: "0",
        dec: "4",
    }
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
    const filteredUsers = months.filter((user) => {
      const userFields = Object.values(user).map((value) =>
        typeof value === 'string' ? value.toUpperCase() : value.toString()
      );

      return userFields.some((field) => field.includes(searchTerm));
    });

    // Filtra os usuários em ordem alfabética.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.name - b.name);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? months : sortedUsers;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da interface da página.
  return (
    <div className="mx-auto max-w-full px-100 py-3">
      <h1 className="text-2xl font-bold mb-4 mt-10">Estatística</h1>

      {/* Barra de pesquisa. */}
      <div className="flex justify-end mb-16 mt-10">
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

      {/* Tabela com as descrições dos meses. */} 
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 max-w-full">
          <thead>
            <tr className="bg-gray-200 w-10">
            <th className="px-14 h-10 border-r border-b border-gray-300 text-center">Mês</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">Janeiro</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">Fevereiro</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">março</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">Abril</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">Maio</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">Junho</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">Julho</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">Agosto</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">Setembro</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">Outubro</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">Novembro</th>
            <th className="px-14 border-r border-b border-gray-300 text-center">Dezembro</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user, index) => (
                <tr key={index}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.realized} {user.overdue} {user.pending} {user.done} {/* Adicione os outros dados conforme necessário */}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.jan}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.fev}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.mar}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.abr}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.may}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.jun}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.jul}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.aug}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.sept}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.oct}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.sept}
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                      {user.dec}
                  </td>
                </tr>
              ))

              // Condição para caso não encontre o dado pesquisado, retorne a mensagem abaixo.
            ) : (
              <tr>
                <td colSpan="13" className="px-6 py-4 border-gray-300">
                Nenhum dado encontrado.
                </td>
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

export default EstatisticaPage;
