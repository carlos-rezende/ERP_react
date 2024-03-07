// Caminho da página: radioprotecao/home/relatorio fontes por frente/novo
'use client';


// Importa a dependência 'react'  e o hook 'useState' do React.
import React from 'react';


// Componente funcional NovoRelatorioFrentePorFrentePage
function NovoRelatorioFrentePorFrentePage() {
  // Define estados locais para armazenar dados do formulário.
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  

  // Renderiza o formulário com campos e botões.
  return (
    <form onSubmit={handleSubmit} className='p-1'>
      <div className="flex items-center justify-center mt-32">
        <div className="w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-16 mt-5">Gerar Relatórios de Fontes por Frente de Trabalho</h1>

          {/* Botão para voltar a página anterior */}
          <div className="flex justify-end mt-10 mb-5">
            <a href="/radioprotecao/home/relatorio fontes por frente" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2 ml-7">
              Voltar
            </a>
            {/* Botão para carregar os itens  */}
            <button type="submit" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2 ml-5">
              Carregar
            </button>
          </div>

          {/* Campo de data inicial. */}
          <div className="flex font-mono">
            <div className="flex flex-col mr-4">
              <label htmlFor="startDate" className="mb-1">Data Inicial</label>
              <div className="flex">
                <input type="date" id="startDate" name="startDate" className="border border-black" />
              </div>
            </div>
            {/* Campo de data final. */}
            <div className="flex flex-col">
              <label htmlFor="endDate" className="mb-1">Data Final</label>
              <div className="flex">
                <input type="date" id="endDate" name="endDate" className="border border-black" />
              </div>
            </div>
        </div>

        {/* Cabeçalho da tabela com empresa, endereço, cidade, uf, etc...*/}
        <div className="overflow-x-auto mt-16">
          <table className="mw-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
              <th className="px-28 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Empresa</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Endereço</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Cidade</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">UF</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Resp. Empresa</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Resp. Prestadora</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Irradiador</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">N° Detector</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Início</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Término</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Frente F/M</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">N° Fonte</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Período D/N</th></tr>
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
            {/* Botão para salvar os dados */}
            <div className="flex justify-center mt-16 mb-10">
              <button type="submit" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2 ml-5">
                Salvar
              </button>
            </div>
        </div>
      </div>
    </form>
  );
}

export default NovoRelatorioFrentePorFrentePage;