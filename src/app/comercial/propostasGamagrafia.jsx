// Caminho da página: comercial/home/propostas gamagrafias

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Import dos ícons da React-Icon
import { IoCheckboxOutline } from 'react-icons/io5';
import { FaRegEye } from 'react-icons/fa';

// Componente funcional PropostaGamagrafiaPage.
const PropostaGamagrafiaPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos clientes.
  const customer = [
    {
      id: "1",
      proposalCode: "0",
      customer: "Seaflux",
      date: "2018-02-22",
      validity: "365",
      lastUpdate: "2018-02-22 16:54:28",
      unit: "MG",
    },
    {
      id: "2",
      proposalCode: "0000",
      customer: "Equinor Brasil Energia Ltda",
      date: "2018-10-22",
      validity: "365",
      lastUpdate: "2018-10-22 07:59:16",
      unit: "MC",
    },
    {
      id: "3",
      proposalCode: "0000",
      customer: "K2",
      date: "2020-01-08",
      validity: "365",
      lastUpdate: "2020-01-08 14:17:16",
      unit: "SEDE",
    },
    {
      id: "4",
      proposalCode: "00000",
      customer: "GRUPO SIAO",
      date: "2018-04-05",
      validity: "365",
      lastUpdate: "2018-04-05 17:09:24",
      unit: "MG",
    },
    {
      id: "5",
      proposalCode: "00000",
      customer: "Relise Automação e Controle",
      date: "2020-03-31",
      validity: "365",
      lastUpdate: "2020-03-05 10:32:56",
      unit: "SEDE",

    },
    {
      id: "6",
      proposalCode: "104/2016 Rev. A",
      customer: "DUTOTEC SERVICOS E M",
      date: "2016-02-16",
      validity: "Validado por FERNANDO SILVA",
      lastUpdate: "2016-02-17 10:17:29",
      unit: "MG",
    },
    {
      id: "7",
      proposalCode: "1111111111111111",
      customer: "BRASFELS",
      date: "2019-07-30",
      validity: "35",
      lastUpdate: "2019-07-30 10:45:23",
      unit: "SEDE",
    },
    {
      id: "8",
      proposalCode: "123",
      customer: "CESTANK",
      date: "2018-05-11",
      validity: "30",
      lastUpdate: "2018-05-11 15:44:49",
      unit: "MG",
    },
    {
      id: "9",
      proposalCode: "216/2017",
      customer: "Actemium",
      date: "2018-01-01",
      validity: "365",
      lastUpdate: "2018-01-30 11:36:08",
      unit: "MG",
    },
    {
      id: "10",
      proposalCode: "307/2016",
      customer: "GRAMO",
      date: "2017-11-21",
      validity: "365",
      lastUpdate: "2017-11-21 10:40:22",
      unit: "MG",
    },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    const filteredUsers = customer.filter((user) => {
      const {
        proposalCode,
        customer,
        date,
        validity,
        lastUpdate,
        unit,
      } = user;
  
      const userFields = [
        proposalCode,
        customer,
        date,
        validity,
        lastUpdate,
        unit,
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
    
    // Filtra todos os usuários quando a caixa de pesquisa esta vazia.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.proposalCode - b.proposalCode);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia
  const allUsers = searchValue === '' ? customer : sortedUsers;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mt-16">Propostas Gamagrafia</h1>

      {/* Botão de voltar para página anterior. */}
      <div className="content-start flex justify-end mt-10 space-x-4">
        <a
          href="/comercial/home"
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2"
        >
          Voltar
        </a>
      </div>

      {/* Barra de pesquisa. */}
      <div className='content-start flex justify-end mb-4'>
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
    </div>

    {/* Tabela com descrições dos código proposta, clientes, data, validade, ultima atualização, etc... */}
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
          <th className="px-28 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Cod Proposta</th>
          <th className="px-40 border-r border-b border-gray-300 text-center whitespace-nowrap">Cliente</th>
          <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Data</th>
          <th className="px-40 border-r border-b border-gray-300 text-center whitespace-nowrap">Validade</th>
          <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Última Atualização</th>
          <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Unidade</th>
          <th className="px-24 border-r border-b border-gray-300 text-center whitespace-nowrap">Status</th>
          <th className="px-24 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
          </tr>
        </thead>
        <tbody>
        {/* Renderiza as linhas da tabela com dados da proposta, cliente, data, etc...s */}  
        {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
          displayedUsers.map((user) => (
            <tr key={user.id}>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.proposalCode}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.customer}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.date}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.validity}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.lastUpdate}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.unit}</td>
              <td className="border-b border-r text-center pr-4 border-gray-300">
                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                    {/* Ícone de validar */}
                    <div className="bg-teal-500 p-2 rounded-lg mt-2 flex">
                      <button className="flex items-center justify-center" title="Validar">
                        <IoCheckboxOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </td>
              <td className="border-b text-center pr-4 border-gray-300">
                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                    {/* Ícone de editar */}
                    <div className="bg-blue-300 p-2 rounded-lg ml-2 mt-2">
                      <button className="flex items-center justify-center" title="Editar">
                        <FaRegEye />
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))
        // Condição para caso não encontre o dado pesquisado, retorne a mensagem abaixo.
        ) : (
          <tr>
            <td colSpan="6" className="px-6 py-4 border-gray-300 text-center">Nenhum dado encontrado.</td>
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

export default PropostaGamagrafiaPage;