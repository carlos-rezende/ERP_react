// Caminho da página: gamagrafia/configuracoes/servicos

import React from 'react';

const ServicosPage = () => {
    return (
      <div className="container mx-auto my-8 mt-16">
        <h1 className="font-mono">Serviços</h1>

        {/* Botão de voltar para página anterior. */}
        <div className="flex justify-end mt-8 mb-10">
            <a href="/gamagrafia/configuracoes" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
                Voltar
            </a>
        </div>

        {/* Dados da tabela com #, descrição e opções. */}
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
                  placeholder="KM"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botões de salvar e excluir. */}
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
                  placeholder="DIÁRIA LAB MÓVEL"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botões de salvar e excluir. */}
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
                  placeholder="PERMANÊNCIA"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botões de salvar e excluir. */}
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
                  placeholder="MOBILIZAÇÃO"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botões de salvar e excluir. */}
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
                  placeholder="DESMOBILIZAÇÃO"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botões de salvar e excluir. */}
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
                  placeholder="CQS"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botões de salvar e excluir. */}
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
                  placeholder="BUSCA / ENTREGA"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botões de salvar e excluir. */}
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
                  placeholder="FILME REPARO"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botões de salvar e excluir. */}
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
              {/* Botão de salvar. */}
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
  
  export default ServicosPage;
  