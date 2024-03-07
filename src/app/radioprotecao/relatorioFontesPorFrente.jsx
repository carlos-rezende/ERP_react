// Caminho da página: radioprotecao/home/relatorio fontes por frente

'use client';

// Importa a dependência 'react'  e o hook 'useState' do React.
import React, { useState } from 'react';


// Componente funcional RelatorioFontesPorFrente
function RelatorioFontesPorFrente() {
  // Define estados locais para armazenar dados do formulário.
  const [searchValue, setSearchValue] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  
  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
  
    // Filtra usuários com base no termo de pesquisa.
    const filteredUsers = newCadastro.filter((user) => {
      const { referenceMonth, period, creationDate, actions } = user;
  
      return (
        referenceMonth.toString().includes(searchTerm) ||
        period.toString().includes(searchTerm)
      );
    });
  
    // Ordena os usuários filtrados por ID.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.referenceMonth - b.referenceMonth);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Renderiza a página.
  return (
    <form onSubmit={handleSubmit} className='p-1'>
      <div className="flex items-center justify-center mt-32">
        <div className="w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-16 mt-5">Fontes por Frente de Trabalho</h1>
          <p className="font-mono text-center bg-gray-300">Relatórios Fontes por Frente de Trabalho</p>

          {/* Botão para voltar para página anterior. */}
          <div className="flex justify-end mt-10 mb-5">
            <a href="/radioprotecao/home" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
              Voltar
            </a>
            
            {/* Botão para página de novo conteúdo. */}
            <a href="/radioprotecao/home/relatorio fontes por frente/novo" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2 ml-5">
              Novo
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
          {/* Dados da tabela com Mês de referência, período, data da criação e ações */}
          <div className="overflow-x-auto mt-16">
            <table className="mw-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-28 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Mês de Referência</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Período</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Data da Criação</th>
                  <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Ações</th>
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

export default RelatorioFontesPorFrente;