// Caminho da página: patrimonio/almoxarifado/itens%20almoxarifado

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Import de ícones da React - Icon
import { BsTrash3 } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';

// Componente funcional ItensAlmoxarifadoPage.
const ItensAlmoxarifadoPage = () => {
    // Estados para controle da barra de pesquisa, página atual e usuários ordenados.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados das descrições.
  const specifications = [
    {
        description: "AGASALHO CHUVA/FRIO CONJ JAQUETA+CALCA, TECIDO IMPERM.",
        idProtheus: "4010400",
        brand: "Marca não especificada",
        type: "EPC",
        price: "R$ 0",
        options: "",
      },
      {
        description: "AGULHAO",
        idProtheus: "5060329",
        brand: "Marca não especificada",
        type: "EPI",
        price: "R$ 0",
        options: "",
      },
      {
        description: "ALICATE AMPERIMETRO MINIPA",
        idProtheus: "9010178",
        brand: "Marca não especificada",
        type: "MATERIAL",
        price: "R$ 0",
        options: "",
      },
      {
        description: "ALICATE BICO MEIA CANA",
        idProtheus: "9010067",
        brand: "Marca não especificada",
        type: "MATERIAL",
        price: "R$ 0",
        options: "",
      },
      {
        description: "ALICATE BOMBA DAGUA",
        idProtheus: "7010563",
        brand: "Marca não especificada",
        type: "MATERIAL",
        price: "R$ 0",
        options: "",
      },
      {
        description: "ALICATE DE CORTE DIAGONAL, COM CABO ISOLADO 1000 V, 6'",
        idProtheus: "5060308",
        brand: "Marca não especificada",
        type: "MATERIAL",
        price: "R$ 0",
        options: "",
      },
      {
        description: "ALICATE UNIVERSAL 8",
        idProtheus: "9010027",
        brand: "Marca não especificada",
        type: "MATERIAL",
        price: "R$ 0",
        options: "",
      },
    //   DAQUI
    {
        description: "ANEL DE ANCORAGEM COM OLHAL 1,50M",
        idProtheus: "Cadastro Manual",
        brand: "Marca não especificada",
        type: "EPI",
        price: "R$ 0",
        options: "",
      },
      {
        description: "ANEL DE ANCORAGEM COM OLHAL 2,00M",
        idProtheus: "Cadastro Manual",
        brand: "Marca não especificada",
        type: "EPI",
        price: "R$ 0",
        options: "",
      },
      {
        description: "BANDEIROLA PARA ESCADA",
        idProtheus: "6050264",
        brand: "Marca não especificada",
        type: "MATERIAL",
        price: "R$ 0",
        options: "",
      },
      {
        description: "BATERIA DURACELL 9V",
        idProtheus: "6050219",
        brand: "Marca não especificada",
        type: "MATERIAL",
        price: "R$ 0",
        options: "",
      },
      {
        description: "BOLSA PARA CARRETILHA",
        idProtheus: "Cadastro Manual",
        brand: "Marca não especificada",
        type: "EPC",
        price: "R$ 0",
        options: "",
      },
      {
        description: "BOLSA PARA EPI",
        idProtheus: "6050265",
        brand: "Marca não especificada",
        type: "EPC",
        price: "R$ 0",
        options: "",
      },
      {
        description: "BOLSA PARA LENÇOL ISOLANTE",
        idProtheus: "90Cadastro Manual",
        brand: "Marca não especificada",
        type: "EPC",
        price: "R$ 0",
        options: "",
      }
  ];

  // Função de manipulação de alteração da barra de pesquisa
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    // Filtra usuários com base no termo de pesquisa.
    const filteredUsers = specifications.filter((user) => {
      const {
        description,
        idProtheus,
        brand,
        type,
        price,
        options,
      } = user;
  
      const userFields = [
        description,
        idProtheus,
        brand,
        type,
        price,
        options,
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
    const sortedUsers = [...filteredUsers].sort((a, b) => a.description - b.description);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? specifications : sortedUsers;

  // Índices de início e fim da lista de usuários na página atual.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da interface da página.
  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Itens Almoxarifado - QT</h1>
      <p className="font-mono bg-gray-300 text-center mt-10">Itens</p>

      <div className="content-start flex justify-end mt-10">
        <a href="/patrimonio/almoxarifado" 
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3 mr-5">
          Voltar
        </a>

        <a href="/patrimonio/almoxarifado/itens almoxarifado/novo item" 
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3 mr-5">
          Novo Item
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
              <th className="px-80 h-10 border-r border-b border-gray-300 text-center">Descrição</th>
              <th className="px-32 border-r border-b border-gray-300 text-center">id_Protheus</th>
              <th className="px-32 border-r border-b border-gray-300 text-center">Marca</th>
              <th className="px-32 border-r border-b border-gray-300 text-center">Tipo</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Preço</th>
              <th className="px-32 border-r border-b border-gray-300 text-center">Opções</th>
            </tr>
          </thead>
          
          <tbody>
            {/* Renderiza as linhas da tabela com dados de usuários */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.description}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.description}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.idProtheus}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.brand}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.type}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.price}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center w-full">
                    {/* Ícones de editar e excluir. */}
                    <div className="flex items-center justify-center">
                      <div className="bg-teal-600 p-2 rounded-lg mt-2 flex">
                        <button className="flex items-center justify-center" title="Editar">
                          <AiOutlineEdit />
                        </button>
                      </div>
                      <div className="bg-red-500 p-2 rounded-lg ml-2 mt-2">
                        <button className="flex items-center justify-center" title="Excluir">
                          <BsTrash3 />
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

export default ItensAlmoxarifadoPage;