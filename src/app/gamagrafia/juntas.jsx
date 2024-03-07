// Caminho da página: gamagrafia/configuracoes/juntas

const JuntasPage = () => {
    return (
      <div className="container mx-auto my-8 mt-16">
        <h1 className="font-mono">Juntas</h1>

        {/* Botão para voltar a página anterior. */}
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
            {/* 1 */}
            <tr>
              <td className="border-r border-b border-gray-300 text-center">1</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø ½"'
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
            {/* 2 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">2</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø ¾"'
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
            {/* 3 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">3</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 1"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">4</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 1.½"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">5</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 2"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">6</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 2.½"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">7</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 3"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">8</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 4"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">9</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 6"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">10</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 8"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">11</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 10"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">12</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 12"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">13</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 14"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">14</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 16"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">15</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 18"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">16</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 20"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">17</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 22"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">18</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 24"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">19</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 26"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">20</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 28"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">21</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 36"'
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">22</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder="Chapa"
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
            {/* 4 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">23</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 5"'
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
            {/* 24 */}
            <tr>
              <td className="px-10 h-10 border-r border-b border-gray-300 text-center">24</td>
              <td className="px-3 border-r border-b border-gray-300 text-center">
                <input
                  type="text"
                  placeholder='Ø 55"'
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
  
  export default JuntasPage;
  