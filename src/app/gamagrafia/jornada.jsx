// Caminho da página: gamagrafia/configuracoes/jornada

import React from 'react';

const Tabela = () => {
    return (
      <div className="container mx-auto my-8 mt-16">
        <h1 className="font-mono">Jornadas</h1>

        {/* Botão para voltar a página. */}
        <div className="flex justify-end mt-8 mb-10">
            <a href="/gamagrafia/configuracoes" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
                Voltar
            </a>
        </div>

        {/* Dados da tabela. */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">#</th>
              <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Descrição</th>
              <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
            </tr>
          </thead>
          <tbody>
            {/* Segunda a Sexta */}
            <tr>
              <td className="border-r border-b border-gray-300 text-center">1</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="Segunda a Sexta"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botão para salvar e excluir. */}
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
            {/* Sábado */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">2</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="Sábado"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botão para salvar e excluir. */}
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
            {/* Domingo */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">3</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="Domingo"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botão para salvar e excluir. */}
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
            {/* Feriado */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">4</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="Feriado"
                  className="w-full p-1 border border-gray-300 rounded"
                />
              </td>
              {/* Botão para salvar e excluir. */}
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
              {/* Botão para salvar e excluir. */}
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
  
  export default Tabela;
  