// Caminho da página: gamagrafia/home/boletim de medicao

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

import { AiOutlineEdit } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa';

// Componente funcional BoletimMedicao.
const BoletimMedicao = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos clientes.
  const customer = [
    {
        code: 1,
        client: "ESAB",
        period: "25/12/2015 a 25/01/2016",
        gos: "517",
        value: "R$ 383,67",
        actions: "Editar e Visualizar",
      },
      {
        code: 2,
        client: "PAREX",
        period: "25/12/2015 a 25/01/2016",
        gos: "535",
        value: "R$ 318,37",
        actions: "Editar e Visualizar",
      },
      {
        code: 3,
        client: "DELP",
        period: "25/12/2015 a 25/01/2016",
        gos: "515 - 516 - 519 - 520 - 521 - 524 - 523 - 528 - 529 - 530 - 534 - 538 - 539",
        value: "R$ 24.641,20",
        actions: "Editar e Visualizar",
      },
      {
        code: 4,
        client: "TG END",
        period: "25/12/2015 a 25/01/2016",
        gos: "522 - 531",
        value: "R$ 1.391,84",
        actions: "Editar e Visualizar",
      },
      {
        code: 5,
        client: "SOFIR DO BRASIL",
        period: "25/12/2015 a 25/01/2016",
        gos: "532 - 540",
        value: "R$ 1.700,00",
        actions: "Editar e Visualizar",
      },
      {
        code: 6,
        client: "QUALYSOLDA QUALYSOLD",
        period: "25/12/2015 a 25/01/2016",
        gos: "518 - 526 - 527 - 533",
        value: "R$ 746,94",
        actions: "Editar e Visualizar",
      },
      {
        code: 7,
        client: "POTENCIAL ENGENHARIA",
        period: "24/02/2016 a 26/03/2016",
        gos: "606 - 606 - 618 - 618 - 650 - 650 - 651 - 651",
        value: "R$ 6.551,02",
        actions: "Editar e Visualizar",
      },
      {
        code: 8,
        client: "ESAB",
        period: "24/02/2016 a 26/03/2016",
        gos: "619 - 619 - 620",
        value: "R$ 812,25",
        actions: "Editar e Visualizar",
      },
      {
        code: 9,
        client: "TG END",
        period: "24/02/2016 a 26/03/2016",
        gos: "631 - 631 - 633 - 633 - 642 - 642 - 648 - 648 - 655 - 655",
        value: "R$ 1.784,69",
        actions: "Editar e Visualizar",
      },
      {
        code: 10,
        client: "ANTONIO CLARET DA CO",
        period: "24/02/2016 a 26/03/2016",
        gos: "632 - 632 - 646 - 646",
        value: "R$ 564,00",
        actions: "Editar e Visualizar",
      },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    const filteredUsers = customer.filter((user) => {
      const {
        code,
        client,
        // Aqui determinamos como será feita a busca no search da página
        // period,
        // gos,
        // value,
        // actions,
      } = user;
  
      const userFields = [
        code,
        client,
        // period,
        // gos,
        // value,
        // actions,
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
    const sortedUsers = [...filteredUsers].sort((a, b) => a.name - b.name);
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
      <h1 className="text-2xl font-bold mt-16">Encaminhamentos</h1>

      {/* Botão de Novo boletim de medição. */}
      <div className="content-start flex justify-end mt-10 space-x-4">
        <a
          href="/gamagrafia/home"
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2"
        >
          Voltar
        </a>
        <a
          href="boletim de medicao/novo boletim"
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2"
        >
          Novo Boletim de Medição
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
            <th className="px-14 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Código B.M.</th>
            <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Cliente</th>
            <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Período</th>
            <th className="px-56 border-r border-b border-gray-300 text-center whitespace-nowrap">GOs</th>
            <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Valor</th>
            <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Ações</th>
          </tr>
        </thead>
        <tbody>
        {/* Renderiza as linhas da tabela com dados de usuários */}  
        {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
          displayedUsers.map((user) => (
            <tr key={user.code}>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.code}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.client}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.period}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.gos}</td>
              <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.value}</td>
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

export default BoletimMedicao;