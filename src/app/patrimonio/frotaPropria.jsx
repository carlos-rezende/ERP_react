// Caminho da página: patrimonio/frota%20propria ou patrimonio/home/frota%20propria
'use client';

import { BsEye } from 'react-icons/bs';

// Teste com Json Server - Consumindo como uma API.
const url = "http://localhost:5173/patrimonio/frota%20propria";

// Importa a dependência 'react' e o hook 'useState' do React.
import React, { useState } from 'react';

// Define um array de estados e tipos para serem utilizados posteriormente.
const cars = [
    {
      brand: "FIAT",
      model: "UNO MILLE FIRE FLEX",
      year: "2005/2006",
      licensePlate: "HDK7193",
      purchasePrice: "R$ 16,307.00",
      costCenter: "CORPORATIVO",
      location: "SEDE",
      dateOfMovement: "05/01/2018",
      recipient: "Sem Funcionário",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE FIRE FLEX",
      year: "2007/2008",
      licensePlate: "HFX0192",
      purchasePrice: "R$ 20,170.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "STRADA FIRE FLEX",
      year: "2007/2008",
      licensePlate: "HHP13",
      purchasePrice: "R$ 27,970.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE FIRE FLEX",
      year: "2007/2008",
      licensePlate: "HH",
      purchasePrice: "R$ 23,031.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE FIRE FLEX",
      year: "2008/2008",
      licensePlate: "HIK4891",
      purchasePrice: "R$ 24,530.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE FIRE FLEX",
      year: "2008/2008",
      licensePlate: "H",
      purchasePrice: "R$ 24,858.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FORD",
      model: "F250 XLT F21",
      year: "2008/2008",
      licensePlate: "Hjj5730",
      purchasePrice: "R$ 130,774.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE ECONOMY",
      year: "2008/2009",
      licensePlate: "HjK6",
      purchasePrice: "R$ 28,386.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE ECONOMY",
      year: "2008/2009",
      licensePlate: "HjK6",
      purchasePrice: "R$ 28,386.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE ECONOMY",
      year: "2008/2009",
      licensePlate: "HjK92",
      purchasePrice: "R$ 28,386.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2008/2009",
      licensePlate: "HJU2493",
      purchasePrice: "R$ 29,389.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2008/2009",
      licensePlate: "HJU2491",
      purchasePrice: "R$ 29,389,00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2008/2009",
      licensePlate: "HJU7315",
      purchasePrice: "R$ 27,240.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2009/2009",
      licensePlate: "HKC6893",
      purchasePrice: "R$ 27,240.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "PUNTO ELX 1.4",
      year: "2009/2009",
      licensePlate: "HKO1214",
      purchasePrice: "R$ 39,049.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "PUNTO ELX 1.4",
      year: "2009/2009",
      licensePlate: "HKO1233",
      purchasePrice: "R$ 39,049.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "MMC",
      model: "L200 4X4 GL ANO",
      year: "2009/2009",
      licensePlate: "HKR6056",
      purchasePrice: "R$ 78,271.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2009/2010",
      licensePlate: "HK",
      purchasePrice: "R$ 27,398.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2009/2010",
      licensePlate: "HKT0",
      purchasePrice: "R$ 27,398.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "SIENA ELX FLEX",
      year: "2009/2010",
      licensePlate: "HLJ5",
      purchasePrice: "R$ 37,245.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "MMC",
      model: "L200 4X4 GL",
      year: "2009/2010",
      licensePlate: "HLX8830",
      purchasePrice: "R$ 74,471.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2009/2010",
      licensePlate: "HKT0",
      purchasePrice: "R$ 28,382.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2010/2010",
      licensePlate: "HMY",
      purchasePrice: "R$ 29,031.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2010/2010",
      licensePlate: "HNA1466",
      purchasePrice: "R$ 29,031.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2010/2010",
      licensePlate: "HNA1464",
      purchasePrice: "R$ 29,031.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2010/2010",
      licensePlate: "HNA1474",
      purchasePrice: "R$ 29,031.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "HYUNDAI",
      model: "HR HDB",
      year: "2008/2009",
      licensePlate: "HEH9315",
      purchasePrice: "R$ 52,000.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2010/2011",
      licensePlate: "HOD7882",
      purchasePrice: "R$ 29,160.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2010/2011",
      licensePlate: "HOD7892",
      purchasePrice: "R$ 29,160.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2010/2011",
      licensePlate: "HOD7889",
      purchasePrice: "R$ 29,160.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "MMC",
      model: "L200 4X4 GL",
      year: "2010/2011",
      licensePlate: "HNM1019",
      purchasePrice: "R$ 79,601.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2011/2012",
      licensePlate: "HAX3301",
      purchasePrice: "R$ 29,027.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2011/2012",
      licensePlate: "HAX3275",
      purchasePrice: "R$ 29,027.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
  },
    {
      brand: "FIAT",
      model: "UNO MILLE WAY ECONOMY",
      year: "2011/2012",
      licensePlate: "HAX3326",
      purchasePrice: "R$ 29,027.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "LINEA",
      year: "2011/2012",
      licensePlate: "HIQ9826",
      purchasePrice: "R$ 61,900.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "BRAVO",
      year: "2011/2012",
      licensePlate: "HIQ9827",
      purchasePrice: "R$ 64,900.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
    {
      brand: "FIAT",
      model: "BRAVO",
      year: "2011/2012",
      licensePlate: "HIQ9829",
      purchasePrice: "R$ 64,900.00",
      costCenter: "***",
      location: "SEDE",
      dateOfMovement: "",
      recipient: "",
      status: "Entregue",
      options: "",
    },
];

// Componente funcional FrotaPropriaPage.
function FrotaPropriaPage() {
  // Define estados locais para armazenar dados do formulário.
  const [headOffice, setHeadOffice] = useState("");
  const [searchValue, setSearchValue] = useState('');
  const [sortedUsers, setSortedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const handleSubmit = async (e) => {
    // Código do handleSubmit permanece inalterado
  };

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
  
    // Filtra usuários com base no termo de pesquisa.
    const filteredUsers = cars.filter((user) => {
      const { brand, model, year, status } = user;
  
      return (
        brand.toLowerCase().includes(searchTerm) ||
        model.toLowerCase().includes(searchTerm) ||
        year.toLowerCase().includes(searchTerm) ||
        status.toLowerCase().includes(searchTerm)
      );
    });
  
    // Ordena os usuários filtrados por ID.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };
  

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? cars : sortedUsers;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderiza o formulário com campos e botões.
  return (
    <form onSubmit={handleSubmit} className='p-1'>
      <div className="flex items-center justify-center mt-32">
        <div className="w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-14 mt-5">Frota Própria</h1>

          {/* Botão para voltar para página anterior */}
          <div className="flex justify-end mt-10 mb-16">
            <a href="/patrimonio/home/" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
              Voltar
            </a>
          </div>

          {/* Barra de pesquisa. */}
          <div className="flex justify-end mb-16">
            <div className="flex mb-1">
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

          {/* Dropdown de seleção para o Sede e Regime. */}
          <div className="my-4 flex flex-wrap">
            <label htmlFor="headOffice" className="block text-sm-8 font-bold text-gray-700 mr-2">Sede:</label>
            <select
              id="headOffice"
              name="headOffice"
              value={headOffice}
              onChange={(e) => setHeadOffice(e.target.value)}
              className=" block w-60 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Selecione uma Sede</option>
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

          <div className="overflow-x-auto mt-16">
            <table className="mw-full border-collapse border border-gray-300">
              <thead>
                {/* Cabeçalho da tabela */}
                <tr className="bg-gray-200">
                  <th className="px-28 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Marca</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Modelo</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Ano</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Placa</th>
                  <th className="px-48 border-r border-b border-gray-300 text-center whitespace-nowrap">Valor da Compra</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Centro de Custo</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Localização</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Data de Movimentação</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Destinatário</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Status</th>
                  <th className="px-16 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
                </tr>
              </thead>
              <tbody>


                {/* Renderiza as linhas da tabela com dados. */}
                {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
                  displayedUsers.map((user, index) => (
                    <tr key={`${user.brand}-${user.licensePlate}-${index}`}>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.brand}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.model}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.year}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.licensePlate}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.purchasePrice}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.costCenter}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.location}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.dateOfMovement}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.recipient}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.status}
                      </td>
                      <td className="border-b text-center border-gray-300">
                        {/* Ícones de visualizar. */}
                        <div className="flex items-center justify-center">
                          <div className="bg-blue-400 p-2 rounded-lg mt-2 mb-2 flex">
                            <button className="flex items-center justify-center" title="Visualizar">
                              <BsEye />
                            </button>
                          </div>
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
          </div>
      </div>
    </form>
  );
}

export default FrotaPropriaPage;