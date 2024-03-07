// Caminho da página: radioprotecao/home/folha de informacoes


// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional FolhaDeInformacoesPage.
const FolhaDeInformacoesPage = () => {
    // Estados para controle da barra de pesquisa, página atual e usuários ordenados.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados das opções.
  const options = [
    {
      id: 1,
      sourceNumber: "Vazio",
      irradiator: "032",
      ciActivity: "-",
      tbqActivity: "-",
      paste: "5C 43",
      isotype: "-",
      model: "Gamammat M4-SE",
      cable: "Crawler",
      testTemplate: "-",
      focus: "-",
      un: "MC",
      comments: "Chave na RP",
    },
    {
      id: 2,
      sourceNumber: "Vazio",
      irradiator: "037",
      ciActivity: "-",
      tbqActivity: "-",
      paste: "5A 04",
      isotype: "-",
      model: "Gamammat M4-SE",
      cable: "Crawler",
      testTemplate: "-",
      focus: "-",
      un: "MC",
      comments: "Chave na RP",
    },
    {
      id: 3,
      sourceNumber: "Vazio",
      irradiator: "038",
      ciActivity: "-",
      tbqActivity: "-",
      paste: "5A 05",
      isotype: "-",
      model: "Gamammat M4-SE",
      cable: "Crawler",
      testTemplate: "-",
      focus: "-",
      un: "MC",
      comments: "Chave na RP",
    },
    {
      id: 4,
      sourceNumber: "Vazio",
      irradiator: "377",
      ciActivity: "-",
      tbqActivity: "-",
      paste: "5A 06",
      isotype: "-",
      model: "Gamammat M10-IR",
      cable: "Crawler",
      testTemplate: "-",
      focus: "-",
      un: "MC",
      comments: "Chave na RP",
    },
    {
      id: 5,
      sourceNumber: "Vazio",
      irradiator: "379",
      ciActivity: "-",
      tbqActivity: "-",
      paste: "5A 07",
      isotype: "23/07/2181",
      model: "Gamammat M10-IR",
      cable: "Crawler",
      testTemplate: "-",
      focus: "-",
      un: "MC",
      comments: "Chave na RP",
    },
    {
      id: 6,
      sourceNumber: "Vazio",
      irradiator: "487",
      ciActivity: "0.28 Ci em 20/06/2006",
      tbqActivity: "0.19 Ci",
      paste: "23/07/2181",
      isotype: "23/07/2181",
      model: "Gamammat CS",
      cable: "Comando",
      testTemplate: "-",
      focus: "-",
      un: "MC",
      comments: "Chave na RP",
    },
    {
      id: 7,
      sourceNumber: "1345",
      irradiator: "449",
      ciActivity: "0.06",
      tbqActivity: "0.00",
      paste: "5C 39",
      isotype: "Césio - 137",
      model: "Gamammat CS",
      cable: "Comando",
      testTemplate: "-",
      focus: "N/A",
      un: "MC",
      comments: "Chave na RP",
    },
    {
      id: 8,
      sourceNumber: "116",
      irradiator: "487",
      ciActivity: "0.19",
      tbqActivity: "0.01",
      paste: "5C 37",
      isotype: "Césio - 137",
      model: "Gamammat CS",
      cable: "Comando",
      testTemplate: "-",
      focus: "N/A",
      un: "MC",
      comments: "Chave na RP",
    },  
  ];

  // Função de manipulação de alteração da barra de pesquisa
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    // Filtra usuários com base no termo de pesquisa.
    const filteredUsers = options.filter((user) => {
      const {
        sourceNumber,
        irradiator,
        ciActivity,
        tbqActivity,
        paste,
        isotype,
        model,
        cable,
        testTemplate,
        focus,
        un,
        comments,
      } = user;
  
      const userFields = [
        sourceNumber,
        irradiator,
        ciActivity,
        tbqActivity,
        paste,
        isotype,
        model,
        cable,
        testTemplate,
        focus,
        un,
        comments,
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
      <h1 className="text-2xl font-bold mb-4 mt-10">Folha de Informações</h1>
      <p className="font-mono bg-gray-300 text-center mt-10">Folha de Informações sobre Fontes Radioativas e Blindagens</p>

      {/* Botão de voltar para página anterior. */}
      <div className="content-start flex justify-between mt-10">
        <a href="/radioprotecao/home"
        className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3">
          Voltar
      </a>
      {/* Botão para imprimir o conteúdo da página. */}
      <div className="flex flex-row justify-center">
        <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
          Imprimir Folha
        </button>
      </div>
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

      <div className="flex">
        {/* Primeiro Label. */}
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
            <option value="1" disabled>Localização</option>
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

      {/* Tabela de números, irradiador, atividades, etc */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-16 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Número da Fonte</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Irradiador</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Atividade CI</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Atividade TBq</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Pasta</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Isótopo</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Modelo</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Cabo</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Gabarito de Teste</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Foco</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">UN</th>
              <th className="px-32 border-r border-b border-gray-300 text-center whitespace-nowrap">Obsevações</th>
            </tr>
          </thead>

          <tbody>
            {/* Renderiza as linhas da tabela com os dados. */}
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.sourceNumber}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.irradiator}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.ciActivity}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.tbqActivity}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.paste}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.isotype}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.model}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.cable}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.testTemplate}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.focus}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.un}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.comments}</td>
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

export default FolhaDeInformacoesPage;