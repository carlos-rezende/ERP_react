// Caminho da página: gamagrafia/boletim de medicao/novo boletim

'use client';

// Teste com Json Server - Consumindo como uma API.
const url = "http://localhost:3000/novoBoletim";

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional NovoBoletimPage.
function NovoBoletimPage() {
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
      // Caso o POST Request falhe, irá gerar a mensagem abaixo.
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
        <h1 className="text-2xl font-bold text-center text-gray-900">Selecionar Dados para Criar Boletim Mensal</h1>
        <p className="text-center font-mono bg-gray-300 mt-2">(campos obrigatórios)</p>

        <div className="my-4">
          <label htmlFor="client" className="block text-sm-8 font-bold text-gray-700">Cliente:</label>
          <select
            id="client"
            name="client"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            className="mt-1 block w-60 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>Selecione o Cliente</option>
            <option value="1">CONSTRUMENTAL - MG - MATOZINHOS</option>
            <option value="2">ARECCO BRASIL LTDA - SP - SAO PAULO</option>
            <option value="3">ADRISAM - CE - FORTALEZA</option>
            <option value="4">ALUSA - SP - SAO PAULO</option>
            <option value="5">ALUSA ENGENHARIA S.A - ES - ANCHIETA</option>
            <option value="6">ALUSA PERNAMBUCO - PE - IPOJUCA</option>
            <option value="7">ALUSA - RJ - ITABORAI</option>
            <option value="8">ANGLOGOLD - MG - SANTA BARBARA</option>
            <option value="9">ANGLOGOLD ASHANTI CO - MG - NOVA LIMA</option>
            <option value="10">ANGLOGOLD ASHANTI CO - MG - SABARA</option>
          </select>
        </div>

        {/* Proposta e Obra*/}
        <div className="grid grid-cols-2 gap-40">
          <div className="my-4">
            {/* Label para selecionar os itens da Proposta. */}
          <label htmlFor="proposed" className="block text-sm-8 font-bold text-gray-700">Selecione a Proposta:</label>
          <select
            id="proposed"
            name="proposed"
            value={proposed}
            onChange={(e) => setProposed(e.target.value)}
            className="mt-1 block w-60 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>Selecione a Proposta</option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
          </select>
          </div>

          {/* Label para selecionar os itens da Obra. */}
          <div className="my-4">
            <label htmlFor="project" className="block text-sm-8 font-bold text-gray-700">Selecione a Obra:</label>
            <select
              id="project"
              name="project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Selecione a Obra</option>
              <option value="1">CORPO DE PROVA</option>
              <option value="2">PRIME</option>
              <option value="3">QUALIFICAÇÃO</option>
              <option value="4">QUALIFICAÇÃO DE EPS</option>
              <option value="5">QUALIFICAÇÃO DE PROCEDIMENTO</option>
              <option value="6">QUALIFICAÇÃO DE SOLDADOR</option>
              <option value="7">QUALYSOLDA</option>
              <option value="8">TECNODUTO</option>
            </select>
          </div>
        </div>

        {/* Data inicial e data final. */}
        <div className="grid grid-cols-2 gap-40">
          <div className="my-4">
            <label htmlFor="startDate" className="block text-sm-8 font-bold text-gray-700">Data Início</label>
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
            <label htmlFor="endDate" className="block text-sm-8 font-bold text-gray-700">Data Final:</label>
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

        {/* Botão para voltar a página anterior. */}
        <div className="grid grid-cols-2 gap-40 mt-6">
          <div className="flex justify-between">
            <a href="/gamagrafia/boletim de medicao" className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
              Voltar
            </a>
          </div>
          <div className='flex justify-center'>
            <button type="submit" className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">Carregar Boletim</button>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

export default NovoBoletimPage;