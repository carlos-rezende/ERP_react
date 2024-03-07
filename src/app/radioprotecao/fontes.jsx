// Caminho da página: radioproteção/home/fontes ou radioproteção/fontes

// ícones da page React - Icon.
import {AiOutlineHistory, AiOutlineEdit} from "react-icons/ai"
import {BsCalculator, BsChatDots} from "react-icons/bs"

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional FontesPage.
const FontesPage = () => {
    // Estados para controle da barra de pesquisa, página atual e usuários ordenados.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados das opções.
  const options = [
    {
      sourceNumber: "116",
      radiator: "487",
      initialActivity: "0.28 Ci em 20/06/2006",
      currentActivity: "0.19 Ci",
      usageLimit: "23/07/2181",
      exchangeLimit: "23/07/2181",
      folder: "5C 37",
      model: "Gamammat CS",
      cable: "Comando",
      testTemplate: "",
      focus: "N/A",
      unit: "-",
      moveDate: "18/06/2020",
      status: "SUSPENSO",
    },
    {
      sourceNumber: "1345",
      radiator: "449",
      initialActivity: "0.1 Ci em 11/06/2001",
      currentActivity: "0.06 Ci",
      usageLimit: "02/10/2131",
      exchangeLimit: "02/10/2131",
      folder: "5C 39",
      model: "Gamammat CS",
      cable: "Comando",
      testTemplate: "",
      focus: "N/A",
      unit: "-",
      moveDate: "18/06/2020",
      status: "SUSPENSO",
      action: "",
    },
    {
      sourceNumber: "462/6",
      radiator: "497",
      initialActivity: "0.3 Ci em 18/01/2007",
      currentActivity: "0.20 Ci",
      usageLimit: "20/02/2185",
      exchangeLimit: "20/02/2185",
      folder: "5C 38",
      model: "Gamammat CS",
      cable: "Comando",
      testTemplate: "",
      focus: "N/A",
      unit: "-",
      moveDate: "18/06/2020",
      status: "SUSPENSO",
      action: "",
    },
    {
      sourceNumber: "6696/V268",
      radiator: "-",
      initialActivity: "61 Ci em 13/03/2014",
      currentActivity: "0.00 Ci",
      usageLimit: "22/09/2014",
      exchangeLimit: "05/12/2014",
      folder: "08 13",
      model: "Gamammat TSI 3/1",
      cable: "11.38",
      testTemplate: "25.38",
      focus: "3,0 X 2,0",
      unit: "-",
      moveDate: "-",
      status: "DESATIVADO",
      action: "",
    },
    {
      sourceNumber: "6895/AC042",
      radiator: "-",
      initialActivity: "55 Ci em 03/02/2015",
      currentActivity: "0.00 Ci",
      usageLimit: "06/08/2015",
      exchangeLimit: "19/10/2015",
      folder: "09 28",
      model: "Sentinel 880 Sigma",
      cable: "11.70",
      testTemplate: "25.16",
      focus: "3,0 x 2,0",
      unit: "-",
      moveDate: "-",
      status: "DESATIVADO",
      action: "",
    },
    {
      sourceNumber: "7104/AC035",
      radiator: "-",
      initialActivity: "55 Ci em 03/02/2015",
      currentActivity: "0.00 Ci",
      usageLimit: "06/08/2015",
      exchangeLimit: "19/10/2015",
      folder: "09 19",
      model: "Sentinel 880 Delta",
      cable: "11.97",
      testTemplate: "Reserva",
      focus: "3,0 x 2,0",
      unit: "-",
      moveDate: "-",
      status: "DESATIVADO",
      action: "",
    },
    {
      sourceNumber: "7105/U356",
      radiator: "-",
      initialActivity: "48.52 Ci em 26/06/2013",
      currentActivity: "0.00 Ci",
      usageLimit: "13/12/2013",
      exchangeLimit: "25/02/2014",
      folder: "10 36",
      model: "Sentinel 880 Sigma",
      cable: "11.89",
      testTemplate: "",
      focus: "2,0 X 2,25",
      unit: "-",
      moveDate: "-",
      status: "DESATIVADO",
      action: "",
    },      
  ];

  // Função de manipulação de alteração da barra de pesquisa
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    // Filtra usuários com base no termo de pesquisa.
    const filteredUsers = options.filter((user) => {
      const {
        sourceNumber,
        radiator,
        initialActivity,
        currentActivity,
        usageLimit,
        exchangeLimit,
        folder,
        model,
        cable,
        testTemplate,
        focus,
        unit,
        moveDate,
        status,
        action,
      } = user;
  
      const userFields = [
        sourceNumber,
        radiator,
        initialActivity,
        currentActivity,
        usageLimit,
        exchangeLimit,
        folder,
        model,
        cable,
        testTemplate,
        focus,
        unit,
        moveDate,
        status,
        action,
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
    const sortedUsers = [...filteredUsers].sort((a, b) => a.sourceNumber - b.sourceNumber);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? options : sortedUsers;

  // Índices de início e fim da lista de usuários na página atual.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da interface da página.
  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Fontes em Operação</h1>
      <p className="font-mono bg-gray-300 text-center mt-10">Fontes</p>

      {/* Botão de voltar para página anterior. */}
      <div className="content-start flex justify-between mt-10">
      <a href="/radioprotecao/home"
        className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3">
        Voltar
      </a>
      {/* Botão para cadastrar a fonte. */}
      <a href="/radioprotecao/home/fontes/cadastrar fonte"
        className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3">
        Cadastrar Fonte
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

      {/* Primeiro Label. */}
      <div className="flex">
        <div className="mr-4">
          <label htmlFor="isotopo" className="mb-1 text-sm font-medium text-gray-600">
            Selecione:
          </label>
          <select
            id="isotopo"
            name="isotopo"
            defaultValue=""
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-10 mr-10"
          >
            <option value="" disabled>Selecione uma Opção</option>
            <option value="1">Isótipo</option>
            <option value="2">Césio-137</option>
            <option value="3">Irídio-192</option>
            <option value="4">Raio-X</option>
            <option value="5">Selênio-75</option>
          </select>
        </div>

        {/* Segundo label de Modelo. */}
        <div>
          <label htmlFor="modelo" className="mb-1 text-sm font-medium text-gray-600">
            Modelo:
          </label>
          <select
            id="modelo"
            name="modelo"
            defaultValue=""
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 mr-10"
          >
            <option value="" disabled>Selecione uma Opção</option>
            <option value="1">Modelo</option>
            <option value="2">Gamammat CS</option>
            <option value="3">Gamammat M10-IR</option>
            <option value="4">Gamammat M4-SE</option>
            <option value="5">Gamammat TSI 3/1</option>
            <option value="6">Gamammat TSI 5/1</option>
            <option value="7">Raio X - GE</option>
            <option value="8">Raio X - Super Lilliput</option>
            <option value="9">Sentinel 880 Delta</option>
            <option value="10">Sentinel 880 Sigma</option>
          </select>
        </div>

        {/* Terceiro label de Unidade. */}
        <div>
          <label htmlFor="unity" className="mb-1 text-sm font-medium text-gray-600">
            Selecione a Unidade:
          </label>
          <select
            id="unity"
            name="unity"
            defaultValue=""
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="" disabled>Localização</option>
            <option value="1">Todas</option>
            <option value="2">SEDE</option>
            <option value="3">MG</option>
            <option value="4">MC</option>
            <option value="5">BA</option>
            <option value="6">RN</option>
            <option value="7">AM</option>
            <option value="8">RJ</option>
            <option value="9">ES</option>
            <option value="10">PR</option>
            <option value="11">TB</option>
            <option value="12">NOR GNF</option>
            <option value="13">NOR COELCE</option>
            <option value="14">NOR GPG</option>
            <option value="15">NOR COELBA</option>
            <option value="16">NOR EPE</option>
            <option value="17">NOR ELETRICA</option>
            <option value="18">AL</option>
            <option value="19">MS</option>
            <option value="20">PA</option>
            <option value="21">PE</option>
            <option value="22">PA-Mil</option>
            <option value="23">SE</option>
            <option value="24">ESOP</option>
            <option value="25">SG</option>
            <option value="26">ANDT GNF</option>
            <option value="27">NOR</option>
            <option value="28">PC</option>
            <option value="29">TEN</option>
            <option value="30">SEDE-RJ</option>
            <option value="31">K2-DIR</option>
            <option value="32">SP</option>
            <option value="33">K2-IND</option>
            <option value="34">K2-DES</option>
            <option value="35">GER SUL</option>
            <option value="36">RJ-LOG</option>
            <option value="37">GO</option>
            <option value="38">LIC RJ</option>
            <option value="39">RJ TRANSPETRO</option>
            <option value="40">GPS</option>
            <option value="41">MA</option>
            <option value="42">ALMO - MG</option>
            <option value="43">ALMO - MC</option>
            <option value="44">SGI/SMS</option>
            <option value="45">PROJ - K2</option>
            <option value="46">RR</option>
            <option value="47">MC COMPARTILHADO</option>
            <option value="48">RJ</option>
            <option value="49">DIVISÃO MECÂNICA</option>
            <option value="50">UN - NOR - INSP ENEL GO 2</option>
            <option value="51">CE</option>
            <option value="52">RH</option>
            <option value="53">RJ</option>
            <option value="54">NTS</option>
          </select>
        </div>
      </div>

      {/* Tabela de número da fonte, irradiador, atividades inicial, etc */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-16 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Número da Fonte</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Irradiador</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Atividade Inicial</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Atividade Atual</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Limite de Uso</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Limite de Troca</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Pasta</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Modelo</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Cabo</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Gabarito de Teste</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Foco</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Unidade</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Data de Movimentação</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Status</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Ações</th>
            </tr>
          </thead>
          
          {/* Renderiza as linhas da tabela com os dados */}
          <tbody>
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.sourceNumber}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.sourceNumber}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.radiator}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.initialActivity}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.currentActivity}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.usageLimit}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.exchangeLimit}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.folder}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.model}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.cable}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.testTemplate}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.focus}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.unit}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.moveDate}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.status}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">
                    {/* Ícones de histórico. */}
                    <div className="flex items-center justify-center">
                      <div className="bg-green-500 p-2 rounded-lg mt-2 flex">
                        <button className="flex items-center justify-center" title="Histórico">
                          <AiOutlineHistory />
                        </button>
                      </div>
                      {/* Ícones de cálculo de atividade. */}
                      <div className="bg-gray-300 p-2 rounded-lg ml-2 mt-2">
                        <button className="flex items-center justify-center" title="Cálculo de Atividade">
                          <BsCalculator />
                        </button>
                      </div>
                      {/* Ícones de editar. */}
                      <div className="bg-teal-600 p-2 rounded-lg ml-2 mt-2">
                        <button className="flex items-center justify-center" title="Editar">
                          <AiOutlineEdit />
                        </button>
                      </div>
                      {/* Ícones de inserir observações. */}
                      <div className="bg-blue-500 p-2 rounded-lg ml-2 mt-2">
                        <button className="flex items-center justify-center" title="Inserir Observações">
                          <BsChatDots />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            // Exibe uma mensagem se nenhum dado for encontrado.
            ) : (
              <tr>
                <td colSpan="15" className="px-6 py-4 border-gray-300 text-center">Nenhum dado encontrado.</td>
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

export default FontesPage;