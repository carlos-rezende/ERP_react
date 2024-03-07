// Caminho da página: gamagrafia/relatorios BM/consolidado por cliente

'use client';

// Teste com Json Server - Consumindo como uma API.
const url = "http://localhost:3000/novoBoletim";

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';


// Componente funcional ConsolidadoPorCliente.
function ConsolidadoPorCliente() {
  const [client, setClient] = useState("");
  const [proposed, setProposed] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [project, setProject] = useState("");
  

// Fazer o post request do cadastro.
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Elementos do formulário do cadastro.
  const newCadastro = {
    client,
    proposed,
    startDate,
    endDate,
    project,
  };
  
  // POST REQUEST do cadastro.
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCadastro),
    });
    
    if (response.ok) {
      // Se o POST REQUEST ter sucesso, vai limpar o campo dos formulários.
      setClient('');
      setProposed('');
      setStartDate('');
      setEndDate('');
      setProject('');
    } else {
      // Caso o POST request falhe, retorna esta mensagem.
      console.error('Falha ao salvar os cadastros:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Erro enquanto salva os cadastros:', error);
  }
};

  return (
    <form onSubmit={handleSubmit} className='p-1'>
    <div className="flex items-center justify-center mt-32">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-10 mt-5">Consolidado por Cliente</h1>


        {/* Início do período e fim do período */}
        <div className="grid grid-cols-2 gap-40">
          <div className="my-4">
            <label htmlFor="startDate" className="block text-sm-8 font-bold text-gray-700">Início do Período:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              placeholder="Data Ínicio"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="my-4">
            <label htmlFor="endDate" className="block text-sm-8 font-bold text-gray-700">Fim do Período:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Selecione a proposta */}
        <div className="grid grid-cols-2 gap-40">
          <div className="my-4">
          <label htmlFor="proposed" className="block text-sm-8 font-bold text-gray-700">Selecione uma Opção:</label>
          <p className="text-xs whitespace-nowrap mb-5">*Se nenhuma unidade for escolhida, o relatório irá carregar todas as informações</p>
          <select
            id="proposed"
            name="proposed"
            value={proposed}
            onChange={(e) => setProposed(e.target.value)}
            className="mt-1 block w-60 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>Selecione a Proposta</option>
            <option value="1">MG</option>
            <option value="2">MC</option>
            <option value="3">RN</option>
            <option value="4">BA</option>
          </select>
          </div>
        </div>

        {/* Botão para voltar a página. */}
        <div className="grid grid-cols-2 gap-40 mt-6">
          <div className="flex justify-center">
            <a href="/gamagrafia/relatorios BM" className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
              Voltar
            </a>
          </div>
          
          {/* Botão para gerar relatório. */}
          <div className='flex justify-center'>
            <button type="submit" className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
              Gerar Relatório
            </button>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

export default ConsolidadoPorCliente;