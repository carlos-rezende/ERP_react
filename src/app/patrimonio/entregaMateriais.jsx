// Caminho da página: patrimonio/home/almoxarifado/entrega materiais

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Importando ícone do React-Icon
import { AiOutlineEdit } from 'react-icons/ai';

// Componente funcional EntregaMateriaisPage.
const EntregaMateriaisPage = () => {
    // Estados para controle da barra de pesquisa, página atual e usuários ordenados.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

   // Dados dos usuários.
   const users = [
    {
        name: "CESAR AUGUSTO RODRIGUES GOMES",
        role: "GER OPERACOES",
        costCenter: "GERENCIA OPERACIONAL - SUL - 110301001",
        team: "DIVISÃO MECÂNICA",
        options: "",
      },
      {
        name: "EDMAR CORREA DOS REIS",
        role: "OP GAMAGRAFIA III",
        costCenter: "UN - BA - BRASKEM S/A - 110231004",
        team: "NORDESTE",
        options: "",
      },
      {
        name: "ERNANI FONSECA DO CARMO",
        role: "COORD DE END",
        costCenter: "UN - MG - CONSTRUCAP - 110230017",
        team: "NORDESTE",
        options: "",
      },
      {
        name: "FABIANO TELES LIMA",
        role: "OP GAMAGRAFIA III",
        costCenter: "UN - MG - ENESA RADIOGRAFIA - 110230018",
        team: "NORDESTE",
        options: "",
      },
      {
        name: "JOSE CARLOS DA FONSECA",
        role: "OP GAMAGRAFIA III",
        costCenter: "UN - MG - DELP ENGENHARIA - 110230008",
        team: "MINAS GERAIS e ESPIRITO SANTO",
        options: "",
      },
      {
        name: "MIGUEL FERREIRA NETO",
        role: "OP GAMAGRAFIA I",
        costCenter: "UN - AL - BRASKEM - 110202008",
        team: "NORDESTE",
        options: "",
      },
      {
        name: "VANDERSON BARCELOS M MARTINS",
        role: "COORD OPERACOES",
        costCenter: "UN - ES - IMETAME - 110238005",
        team: "MINAS GERAIS e ESPIRITO SANTO",
        options: "",
      },
      {
        name: "ROBERT MAGNO DIAS COSTA",
        role: "COORD PROJETOS",
        costCenter: "UN - BA - TORRES EOLICAS DO BRASI - 110231006",
        team: "RENOVAVEIS (TORREBRAS)",
        options: "",
      },
      {
        name: "ROGERIO MAJELLA LOPES PINTO",
        role: "ADVOGADO",
        costCenter: "JURIDICO - 110102014",
        team: "Sem Equipe",
        options: "",
      },
  ];

  // Função de manipulação de alteração da barra de pesquisa
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    // Filtra usuários com base no termo de pesquisa.
    const filteredUsers = users.filter((user) => {
      const {
        name,
        role,
        costCenter,
        team,
        options,
      } = user;
  
      const userFields = [
        name,
        role,
        costCenter,
        team,
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
  
    // Ordena os usuários pelo nome.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.users - b.users);
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
    <div className="container py-3 w-screen md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Controle de Entrega de Materiais - QT</h1>
      <p className="font-mono bg-gray-300 text-center mt-10">Lista de Funcionários - QT</p>

      {/* Botão de voltar para página anterior. */}
      <div className="content-start flex justify-end mt-10">
        <a href="/patrimonio/home/almoxarifado/" 
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3 mr-5">
          Voltar
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

      {/* Tabela com nomes, funções, centro de custo, equipe e opções */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-80 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Nome</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Função</th>
              <th className="px-52 border-r border-b border-gray-300 text-center whitespace-nowrap">Centro de Custo</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Equipe</th>
              <th className="px-16 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
            </tr>
          </thead>
          
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.name}>
                 <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.name}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.role}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.costCenter}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.team}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                    {/* Ícones de editar. */}
                    <div className="flex items-center justify-center">
                      <div className="bg-green-500 p-2 rounded-lg mt-2 flex">
                        <button className="flex items-center justify-center" title="Editar">
                          <AiOutlineEdit />
                        </button>
                      </div>
                    </div>
                  </td>
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

export default EntregaMateriaisPage;