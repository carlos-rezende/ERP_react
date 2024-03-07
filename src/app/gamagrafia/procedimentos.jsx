// Caminho da página: gamagrafia/procedimentos

'use client';

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional ProcedimentosPage.
const ProcedimentosPage = () => {
  // Estados para controle da barra de pesquisa, página atual e usuários ordenados.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 20;


  // Dados dos procedimentos.
  const procedure = [
    {
      id: 1,
      procedure: "PT RG 01 R04",
      diameter: "914 < T ≤ 1016",
      length: "0 < T ≤ 0",
      thickness: "2.9 < T ≤ 6.4",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "13",
      dff: "500",
      filmeClass: "Esp",
      filmeQuantity: "9",
      filmSize: "C",
      options: "",

    },
    {
      id: 2,
      procedure: "PT RG 01 R04",
      diameter: "914 < T ≤ 1016",
      length: "0 < T ≤ 0",
      thickness: "6.4 < T ≤ 9.5",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "12",
      dff: "500",
      filmeClass: "I",
      filmeQuantity: "9",
      filmSize: "C",
      options: "",
    },
    {
      id: 3,
      procedure: "PT RG 01 R04",
      diameter: "914 < T ≤ 1016",
      length: "0 < T ≤ 0",
      thickness: "9.5 < T ≤ 12.7",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "11",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "9",
      filmSize: "C",
      options: "",
    },
    {
      id: 4,
      procedure: "PT RG 01 R04",
      diameter: "914 < T ≤ 1016",
      length: "0 < T ≤ 0",
      thickness: "12.7 < T ≤ 19.1",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "10",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "9",
      filmSize: "E",
      options: "",
    },
    {
      id: 5,
      procedure: "PT RG 01 R04",
      diameter: "914 < T ≤ 1016",
      length: "0 < T ≤ 0",
      thickness: "19.1 < T ≤ 25.4",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "9",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "9",
      filmSize: "E",
      options: "", 
    },
    {
      id: 6,
      procedure: "PT RG 01 R04",
      diameter: "914 < T ≤ 1016",
      length: "0 < T ≤ 0",
      thickness: "25.4 < T ≤ 38.1",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "8",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "9",
      filmSize: "E",
      options: "",
    },
    {
      id: 7,
      procedure: "PT RG 01 R04",
      diameter: "914 < T ≤ 1016",
      length: "0 < T ≤ 0",
      thickness: "38.1 < T ≤ 51",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "7",
      dff: "600",
      filmeClass: "II",
      filmeQuantity: "9",
      filmSize: "E",
      options: "",
    },
    {
      id: 8,
      procedure: "PT RG 01 R04",
      diameter: "1016 < T ≤ 1168",
      length: "0 < T ≤ 0",
      thickness: "2.9 < T ≤ 6.4",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "13",
      dff: "500",
      filmeClass: "Esp",
      filmeQuantity: "10",
      filmSize: "C",
      options: "",
    },
    {
      id: 9,
      procedure: "PT RG 01 R04",
      diameter: "1016 < T ≤ 1168",
      length: "0 < T ≤ 0",
      thickness: "6.4 < T ≤ 9.5",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "12",
      dff: "500",
      filmeClass: "I",
      filmeQuantity: "10",
      filmSize: "C",
      options: "",
    },
    {
      id: 10,
      procedure: "PT RG 01 R04",
      diameter: "1016 < T ≤ 1168",
      length: "0 < T ≤ 0",
      thickness: "9.5 < T ≤ 12.7",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "11",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "10",
      filmSize: "C",
      options: "",
    },
    {
      id: 11,
      procedure: "PT RG 01 R04",
      diameter: "1016 < T ≤ 1168",
      length: "0 < T ≤ 0",
      thickness: "12.7 < T ≤ 19.1",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "10",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "10",
      filmSize: "E",
      options: "",
    },
    {
      id: 12,
      procedure: "PT RG 01 R04",
      diameter: "1016 < T ≤ 1168",
      length: "0 < T ≤ 0",
      thickness: "19.1 < T ≤ 25.4",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "9",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "10",
      filmSize: "E",
      options: "",
    },
    {
      id: 13,
      procedure: "PT RG 01 R04",
      diameter: "1016 < T ≤ 1168",
      length: "0 < T ≤ 0",
      thickness: "25.4 < T ≤ 38.1",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "8",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "10",
      filmSize: "E",
      options: "",
    },
    {
      id: 14,
      procedure: "PT RG 01 R04",
      diameter: "1016 < T ≤ 1168",
      length: "0 < T ≤ 0",
      thickness: "38.1 < T ≤ 51",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "7",
      dff: "600",
      filmeClass: "II",
      filmeQuantity: "10",
      filmSize: "E",
      options: "",
    },
    {
      id: 15,
      procedure: "PT RG 01 R04",
      diameter: "1168 < T ≤ 1321",
      length: "0 < T ≤ 0",
      thickness: "2.9 < T ≤ 6.4",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "13",
      dff: "500",
      filmeClass: "Esp",
      filmeQuantity: "11",
      filmSize: "C",
      options: "",
    },
    {
      id: 16,
      procedure: "PT RG 01 R04",
      diameter: "1168 < T ≤ 1321",
      length: "0 < T ≤ 0",
      thickness: "6.4 < T ≤ 9.5",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "12",
      dff: "500",
      filmeClass: "I",
      filmeQuantity: "11",
      filmSize: "C",
      options: "",
    },
    {
      id: 17,
      procedure: "PT RG 01 R04",
      diameter: "1168 < T ≤ 1321",
      length: "0 < T ≤ 0",
      thickness: "9.5 < T ≤ 12.7",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "11",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "11",
      filmSize: "C",
      options: "",
    },
    {
      id: 18,
      procedure: "PT RG 01 R04",
      diameter: "1168 < T ≤ 1321",
      length: "0 < T ≤ 0",
      thickness: "12.7 < T ≤ 19.1",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "10",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "11",
      filmSize: "E",
      options: "",
    },
    {
      id: 19,
      procedure: "PT RG 01 R04",
      diameter: "1168 < T ≤ 1321",
      length: "0 < T ≤ 0",
      thickness: "19.1 < T ≤ 25.4",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "9",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "11",
      filmSize: "E",
      options: "",
    },
    {
      id: 20,
      procedure: "PT RG 01 R04",
      diameter: "1168 < T ≤ 1321",
      length: "0 < T ≤ 0",
      thickness: "25.4 < T ≤ 38.1",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "8",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "11",
      filmSize: "E",
      options: "",
    },
    {
      id: 21,
      procedure: "PT RG 01 R04",
      diameter: "1168 < T ≤ 1321",
      length: "0 < T ≤ 0",
      thickness: "38.1 < T ≤ 51",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "7",
      dff: "600",
      filmeClass: "II",
      filmeQuantity: "11",
      filmSize: "E",
      options: "",
    },
    {
      id: 22,
      procedure: "PT RG 01 R04",
      diameter: "1321 < T ≤ 1422",
      length: "0 < T ≤ 0",
      thickness: "2.9 < T ≤ 6.4",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "13",
      dff: "500",
      filmeClass: "Esp",
      filmeQuantity: "12",
      filmSize: "C",
      options: "",
    },
    {
      id: 23,
      procedure: "PT RG 01 R04",
      diameter: "1321 < T ≤ 1422",
      length: "0 < T ≤ 0",
      thickness: "6.4 < T ≤ 9.5",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "12",
      dff: "500",
      filmeClass: "I",
      filmeQuantity: "12",
      filmSize: "C",
      options: "",
    },
    {
      id: 24,
      procedure: "PT RG 01 R04",
      diameter: "1321 < T ≤ 1422",
      length: "0 < T ≤ 0",
      thickness: "9.5 < T ≤ 12.7",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "11",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "12",
      filmSize: "C",
      options: "",
    },
    {
      id: 25,
      procedure: "PT RG 01 R04",
      diameter: "1321 < T ≤ 1422",
      length: "0 < T ≤ 0",
      thickness: "12.7 < T ≤ 19.1",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "10",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "12",
      filmSize: "E",
      options: "",
    },
    {
      id: 26,
      procedure: "PT RG 01 R04",
      diameter: "1321 < T ≤ 1422",
      length: "0 < T ≤ 0",
      thickness: "19.1 < T ≤ 25.4",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "9",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "12",
      filmSize: "E",
      options: "",
    },
    {
      id: 27,
      procedure: "PT RG 01 R04",
      diameter: "1321 < T ≤ 1422",
      length: "0 < T ≤ 0",
      thickness: "25.4 < T ≤ 38.1",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "8",
      dff: "500",
      filmeClass: "II",
      filmeQuantity: "12",
      filmSize: "E",
      options: "",
    },
    {
      id: 28,
      procedure: "PT RG 01 R04",
      diameter: "1321 < T ≤ 1422",
      length: "0 < T ≤ 0",
      thickness: "38.1 < T ≤ 51",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "6 ISO",
      wireIQI: "7",
      dff: "600",
      filmeClass: "II",
      filmeQuantity: "12",
      filmSize: "E",
      options: "",
    },
    {
      id: 29,
      procedure: "PT RG 01 R04",
      diameter: "1422 < T ≤ 1524",
      length: "0 < T ≤ 0",
      thickness: "2.9 < T ≤ 6.4",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "13",
      dff: "500",
      filmeClass: "Esp",
      filmeQuantity: "13",
      filmSize: "C",
      options: "",
    },
    {
      id: 30,
      procedure: "PT RG 01 R04",
      diameter: "1422 < T ≤ 1524",
      length: "0 < T ≤ 0",
      thickness: "6.4 < T ≤ 9.5",
      technique: "PSVS.pn",
      sourceType: "GAMA",
      focusSource: "4.25",
      typeIQI: "10 ISO",
      wireIQI: "12",
      dff: "500",
      filmeClass: "I",
      filmeQuantity: "13",
      filmSize: "C",
      options: "",
    },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredUsers = procedure.filter((user) => {
      const { id, role } = user;

      return (
        id.toString().includes(searchTerm) ||
        role.toLowerCase().includes(searchTerm) 
      );
    });

    // Ordena os usuários pelo nome.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa esta vazia.
  const allUsers = searchValue === '' ? procedure : sortedUsers;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);


  // Renderização da interface da página.
  return (
    <div className="container mx-auto py-3">
      <h1 className="text-2xl font-bold mb-4 mt-10">Procedimentos</h1>
      <p className="text-center bg-gray-300 font-mono mb-10 mt-10">Parametrizações Cadastradas</p>

      {/* Botão para voltar a página anterior. */}
      <div className="flex justify-end mt-10 mb-10">
        <a href="/gamagrafia/home" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
          Voltar
        </a>
      </div>
      
      {/* Dados da tabela com ID, procedimento, diametro, comprimento, espessura, etc. */}
      <table className="min-w-full border mr-4 border-gray-300">
        <thead>
          <tr>
            <th className="px-20 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">
              ID
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Procedimento
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Diametro
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Comprimento
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Espessura
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Tecnica
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Tipo Fonte
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Foco Fonte
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Tipo IQI	
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Fio IQI
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              DFF
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Classe Filme
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Quantidade Filmes
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center whitespace-nowrap">
              Dimensão Filme
            </th>
            <th className="px-20 border-r border-b border-gray-300 text-center">Opções</th>
          </tr>
        </thead>
        <tbody>

        {/* Renderiza as linhas da tabela com dados de usuários */}
        {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
          displayedUsers.map((user) => (
            <tr key={user.id}>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.id}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.procedure}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.diameter}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.length}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.thickness}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.technique}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.sourceType}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.focusSource}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.typeIQI}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.wireIQI}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.dff}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.filmeClass}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.filmeQuantity}
              </td>
              <td className="px-14 border-r border-b border-gray-300 text-center">
                {user.filmSize}
              </td>
              {/* Botão para editar os itens. */}
              <td className="border-b text-center border-gray-300 pr-4">
                <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Editar
                  </button>
                </div>
              </td>
            </tr>
          ))
        // Exibe uma mensagem se nenhum dado for encontrado.
        ) : (
          <tr>
            <td colSpan="4">Nenhum exame encontrado.</td>
          </tr>
        )}
        </tbody>
      </table>
      {/* Botões de paginação */}
      <div className="flex justify-center mt-16 mr-20">
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

export default ProcedimentosPage;
