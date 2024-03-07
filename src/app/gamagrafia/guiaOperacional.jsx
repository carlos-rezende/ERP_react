// Caminho da página: gamagrafia/home/guia%20operacional

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';


import { AiOutlineEdit } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa';

// Componente funcional GuiaOperacionalPage.
const GuiaOperacionalPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos clientes.
  const customer = [
    {
        code: "946",
        unit: "MG",
        client: "QUALYSOLDA ENGENHARIA DE SOLDAGEM LTDA -",
        date: "13/01/2017",
        actions: "",
      },
      {
        code: "947",
        unit: "MG",
        client: "ANTONIO CLARET DA COSTA - EPP",
        date: "26/01/2017",
        actions: "",
      },
      {
        code: "948",
        unit: "MG",
        client: "PAREX CONSTRUCOES INDUSTRIAIS LTDA",
        date: "26/01/2017",
        actions: "",
      },
      {
        code: "949",
        unit: "MG",
        client: "PAREX CONSTRUCOES INDUSTRIAIS LTDA",
        date: "26/01/2017",
        actions: "",
      },
      {
        code: "950",
        unit: "MG",
        client: "ESAB INDUSTRIA E COMERCIO LTDA",
        date: "26/01/2017",
        actions: "",
      },
      {
        code: "951",
        unit: "MG",
        client: "ESAB INDUSTRIA E COMERCIO LTDA",
        date: "26/01/2017",
        actions: "",
      },
      {
        code: "952",
        unit: "MG",
        client: "QUALYSOLDA ENGENHARIA DE SOLDAGEM LTDA -",
        date: "26/01/2017",
        actions: "",
      },
      {
        code: "953",
        unit: "MG",
        client: "DELP ENGENHARIA MECANICA S/A",
        date: "06/02/2017",
        actions: "",
      },
      {
        code: "954",
        unit: "RN",
        client: "G & E MANUTENCAO E SERVICOS LTDA",
        date: "04/02/2017",
        actions: "",
      },
      {
        code: "955",
        unit: "RN",
        client: "G & E MANUTENCAO E SERVICOS LTDA",
        date: "07/02/2017",
        actions: "",
      },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    const filteredUsers = customer.filter((user) => {
      const {
        code,
        unit,
        client,
        date,
        actions,
      } = user;
  
      const userFields = [
        code,
        unit,
        client,
        date,
        actions,
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
    const sortedUsers = [...filteredUsers].sort((a, b) => a.code - b.code);
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
      <h1 className="text-2xl font-bold mt-16">Guias Operacionais</h1>

      {/* Botão de Novo boletim de medição. */}
      <div className="content-start flex justify-end mt-10 space-x-4">
        <a
          href="/gamagrafia/home"
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2"
        >
          Voltar
        </a>
        <a
          href="/gamagrafia/home/guia operacional/nova guia operacional"
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2"
        >
          Nova Guia Operacional
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

    {/* Tabela com descrições dos clientes, código b.b, período, gos, valor e ações. */}
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-14 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Código G.O.</th>
            <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Unidade</th>
            <th className="px-56 border-r border-b border-gray-300 text-center whitespace-nowrap">Cliente</th>
            <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Data</th>
            <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Ações</th>
          </tr>
        </thead>
        <tbody>
        {/* Renderiza as linhas da tabela com dados de usuários */}  
        {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
          displayedUsers.map((user) => (
            <tr key={user.code}>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.code}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.unit}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.client}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.date}</td>
              <td className="border-b text-center pr-4 border-gray-300">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                    {/* Ícone de visualizar */}
                    <div className="bg-green-500 p-2 rounded-lg mt-2 flex">
                        <button className="flex items-center justify-center" title="editar">
                            <AiOutlineEdit />
                        </button>
                    </div>
                    {/* Ícones de visualizar. */}
                    <div className="bg-teal-600 p-2 rounded-lg ml-2 mt-2">
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

export default GuiaOperacionalPage;