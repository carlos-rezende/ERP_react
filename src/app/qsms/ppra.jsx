// Caminho da Página: qsms/ppra

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional PprPage.
const PprPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos usuários.
  const users = [
    {
        id: 1,
        unit: 'SEDE',
        identifier: "PE-SMS-01",
        fu: "MG",
        city: "Ibirite",
        costCenters: "CONTROLADORIA; RECURSOS HUMANOS;",
        preparation: "11/03/2022",
        expirationDate: "atualizar",
        contract: "11/03/2022	",
        endOfContract: "10/03/2023",
        contractNumber: "000001"
      },
      {
          id: 2,
          unit: 'DOW ARATU',
          identifier: "PE-SMS-12",
          fu: "BA",
          city: "SALVADOR",
          costCenters: "UN - BA - CANTEIRO",
          preparation: "31/01/2022",
          expirationDate: "atualizar",
          contract: "31/01/2022",
          endOfContract: "31/01/2023",
          contractNumber: "000"
      },
      {
          id: 3,
          unit: 'MONSANTO DO BRASIL LTDA;',
          identifier: "PE-SMS-04",
          fu: "BA",
          city: "CAMAÇARI",
          costCenters: "UN - BA - CANTEIRO",
          preparation: "29/01/2022",
          expirationDate: "atualizar",
          contract: "29/01/2022",
          endOfContract: "29/01/2023",
          contractNumber: "4512504643"
      },
      {
          id: 4,
          unit: 'Petróleo Brasileiro S.A.',
          identifier: "PE-SMS-50",
          fu: "SP",
          city: "",
          costCenters: "UN - MG - CANTEIRO",
          preparation: "12/03/2020",
          expirationDate: "atualizar",
          contract: "26/04/2019",
          endOfContract: "12/03/2021",
          contractNumber: "58750110173.18.2",
      },
      {
          id: 5,
          unit: 'BRASKEM S/A',
          identifier: "PE-SMS-06",
          fu: "BA / AL",
          city: "CAMAÇARI",
          costCenters: "BRASKEM S/A; UN - BA - BRASKEM S/A; UN - AL - BRASKEM S/A; UN - AL - BRASKEM",
          preparation: "16/02/2022",
          expirationDate: "atualizar",
          contract: "16/02/2022",
          endOfContract: "16/02/2023",
          contractNumber: "110231004",
      },
      {
          id: 6,
          unit: 'IMETAME macaé',
          identifier: "PE-SMS-47",
          fu: "Rj",
          city: "macaé",
          costCenters: "UN - ES - IMETAME",
          preparation: "02/06/2020",
          expirationDate: "atualizar",
          contract: "02/06/2020",
          endOfContract: "02/06/2020",
          contractNumber: "00000000",
      },
      {
          id: 7,
          unit: 'ENEL CE',
          identifier: "PE-SMS-07",
          fu: "CE",
          city: "JUAZEIRO DO NORTE	",
          costCenters: "UN - NOR - COELCE",
          preparation: "17/01/2020",
          expirationDate: "atualizar",
          contract: "17/01/2020",
          endOfContract: "17/01/2021",
          contractNumber: "0000002",
      },
      {
          id: 8,
          unit: 'NATURGY_END-RJ / CEG RIO S.A',
          identifier: "PE-SMS-38",
          fu: "RJ",
          city: "SÃO CRISTÓVÃO",
          costCenters: "atualizar",
          preparation: "21/03/2019",
          expirationDate: "",
          contract: "Sem Data",
          endOfContract: "Sem Data",
          contractNumber: "4115000201",
      },
      {
          id: 9,
          unit: 'NATURGY- ENGENHARIA',
          identifier: "PE-SMS-39",
          fu: "RJ",
          city: "",
          costCenters: "",
          preparation: "28/01/2020",
          expirationDate: "atualizar",
          contract: "Sem Data",
          endOfContract: "Sem Data",
          contractNumber: "000000",
      },
      {
          id: 10,
          unit: 'DELP MG',
          identifier: "PE-SMS-36",
          fu: "MG",
          city: "VESPASIANO",
          costCenters: "UN - MG - DELP ENGENHARIA",
          preparation: "03/01/2022",
          expirationDate: "02/01/2024",
          contract: "03/01/2022",
          endOfContract: "02/01/2024",
          contractNumber: "000000",
      },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    const filteredUsers = users.filter((user) => {
      const {
        id,
        unit,
        identifier,
        fu,
        city,
        costCenters,
        preparation,
        expirationDate,
        contract,
        endOfContract,
        contractNumber,
      } = user;
  
      const userFields = [
        id.toString(), // Converte o ID para string para incluir na pesquisa.
        unit,
        identifier,
        fu,
        city,
        costCenters,
        preparation,
        expirationDate,
        contract,
        endOfContract,
        contractNumber,
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
    
    // Filtra os usuários em ordem alfabética.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? users : sortedUsers;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da interface da página.
  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">PPRA / PCMSO</h1>

      {/* Botão de Novo Documento */}
      <div className="flex justify-between mt-10 mb-10">
        <div>
            <a
            href="/qsms/cadastrar"
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2"
            >
            Novo Documento
            </a>
        </div>

        {/* Barra de pesquisa. */}
        <div className="flex justify-end mb-10">
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
      </div>

      {/* Tabela com as descrições da unidade, identificação, uf, cidade, centro de custo, data de elaboração, etc. */} 
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 w-10">
              <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">ID</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Unidade</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Identificador</th>
              <th className="px-10 border-r border-b border-gray-300 text-center whitespace-nowrap">UF</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Cidade</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Centros de Custo</th>
              <th className="px-24 border-r border-b border-gray-300 text-center whitespace-nowrap">Data Elaboração</th>
              <th className="px-24 border-r border-b border-gray-300 text-center whitespace-nowrap">Data Vencimento</th>
              <th className="px-24 border-r border-b border-gray-300 text-center whitespace-nowrap">Início de Contrato</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Fim do Contrato</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Número Contrato</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.id}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.unit}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.identifier}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.fu}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.city}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.costCenters}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.preparation}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                    <div className="flex justify-center items-center h-full">
                      <button
                        className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 px-4 py-2"
                        onClick={() => handleUpdate(user.expirationDate)}
                      >
                        Atualizar
                      </button>
                    </div>
                  </td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.contract}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.endOfContract}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.contractNumber}</td>
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

export default PprPage;