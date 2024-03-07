// Caminho da página: gamagrafia/configuracoes/descontinuidades

// importando react.
import React from 'react';

// Definindo um componente funcional DescontinuidadesPage.
const DescontinuidadesPage = () => {
    return (
      // Container principal da página.
      <div className="container mx-auto my-8 mt-16">
        <h1 className="font-mono">Descontinuidades</h1>

        {/* Botão de voltar para página anterior. */}
        <div className="flex justify-end mt-8 mb-10">
            <a href="/gamagrafia/configuracoes" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
                Voltar
            </a>
        </div>

        {/* Tabela principal. */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">#</th>
              <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Descrição</th>
              <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
            </tr>
          </thead>
          <tbody>
            {/* 1 */}
            <tr>
              <td className="border-r border-b border-gray-300 text-center">1</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="MORDEDURA EXTERNA"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
                <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 2 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">2</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="FALTA DE FUSAO"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 3 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">3</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="FALTA DE PENETRACAO"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">4</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="CONCAVIDADE"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 5 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">5</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="ESCORIA EM LINHA"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 6 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">6</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="SEM DESCONTINUIDADE"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 7 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">7</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="INCLUSAO DE TUNGSTENIO"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 8 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">8</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="INCLUSAO ESCORIA"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 9 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">9</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="POROSIDADE"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 10 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">10</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="TRINCA"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 11 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">11</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="PORO VERMICULAR"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 12 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">12</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="MORDEDURA NA RAIZ"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 13 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">13</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="PASSE OCO"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
            {/* 14 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">14</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="EXCESSO PENETRACAO"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                    Excluir
                  </button>
                </div>
              </td>
            </tr>

            {/* ID */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">ID</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="Descrição"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              <td className="border-b text-center border-gray-300 pr-4">
              <div className="flex flex-row justify-center">
                  <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Salvar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DescontinuidadesPage;
  