// Caminho da página: patrimonio/home/equipamentos ou patrimonio/equipamentos

'use client';

// Teste com Json Server - Consumindo como uma API.
const url = "http://localhost:3000/patrimonio/home/equipamentos";

// Importa a dependência 'react'  e o hook 'useState' do React.
import React, { useState } from 'react';


// Componente funcional EquipamentosPage
function EquipamentosPage() {
  // Define estados locais para armazenar dados do formulário.
  const [headOffice, setHeadOffice] = useState("");
  const [selectTheRegime, setSelectTheRegime] = ("");
  const [searchValue, setSearchValue] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Cria um objeto com os dados do formulário.
    const newCadastro = {
      headOffice,
      selectTheRegime,
    };
  
    // Tenta fazer uma requisição POST para a URL especificada.
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCadastro),
      });
  
      // Verifica se a requisição foi bem-sucedida.
      if (response.ok) {
        // Limpa os campos do formulário se o POST for bem-sucedido.
        setHeadOffice('');
        setSelectTheRegime('');
      } else {
        // Exibe um erro no console se o POST falhar.
        console.error('Falha ao salvar os cadastros:', response.status, response.statusText);
      }
    } catch (error) {
      // Exibe um erro no console se ocorrer um erro durante a requisição.
      console.error('Erro enquanto salva os cadastros:', error);
    }
  };
  
  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
  
    // Filtra usuários com base no termo de pesquisa.
    const filteredUsers = users.filter((user) => {
      const { id, username } = user;
  
      return (
        id.toString().includes(searchTerm) ||
        username.toLowerCase().includes(searchTerm)
      );
    });
  
    // Ordena os usuários filtrados por ID.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Renderiza o formulário com campos e botões.
  return (
    <form onSubmit={handleSubmit} className='p-1'>
      <div className="flex items-center justify-center mt-32">
        <div className="w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-16 mt-5">Equipamentos</h1>

          {/* Botão para voltar para página anterior e cadastrar equipamentos */}
          <div className="flex justify-end mt-10 mb-5">
            <a href="/patrimonio/home/" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
              Voltar
            </a>

            <a href="/patrimonio/home/cadastrar equipamentos" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2 ml-5">
              Cadastrar Equipamentos
            </a>
          </div>

          {/* Barra de pesquisa. */}
          <div className="flex justify-end mb-16 mt-16">
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
            <label htmlFor="headOffice" className="block text-sm-8 font-bold text-gray-700 mr-2">Todas:</label>
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

            <label htmlFor="selectTheRegime" className="block text-sm-8 font-bold text-gray-700 mr-2 ml-auto">
              Selecione o Regime:
            </label>
            <select
              id="selectTheRegime"
              name="selectTheRegime"
              value={selectTheRegime}
              onChange={(e) => setSelectTheRegime(e.target.value)}
              className="mt-1 block w-60 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Selecione o Regime</option>
              <option value="1">Próprio QT</option>
              <option value="2">Alugado QT</option>
              <option value="3">Próprio K2</option>
              <option value="4">Alugado K2</option>
            </select>
          </div>

          <div className="overflow-x-auto mt-16">
            <table className="mw-full border-collapse border border-gray-300">
              <thead>
                {/* Cabeçalho da tabela */}
                <tr className="bg-gray-200">
                  <th className="px-28 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Categoria</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Aplicação</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Fabricante</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Proprietário</th>
                  <th className="px-48 border-r border-b border-gray-300 text-center whitespace-nowrap">Descrição</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Serial</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Regime</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Patrimônio</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Centro de Custo</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Localização</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Data Movimentação</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Remetente</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Destinatário</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Status</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
                </tr>
              </thead>
              <tbody>

                {/* ADICIONAR ELEMENTOS QUANDO NECESSÁRIO. */}

                {/* Renderiza as linhas da tabela com dados de usuários
                {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
                  displayedUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.}
                      </td>
                      <td className="border-b border-r text-center border-gray-300 pr-5">
                        {user.}
                      </td>
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
                )} */}
                  </tbody>
                </table>
              </div>
          </div>
      </div>
    </form>
  );
}

export default EquipamentosPage;