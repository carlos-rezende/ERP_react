// Caminho da página: patrimonio/home/almoxarifado k2/controle projetos/novo projeto

'use client';

// Importa a dependência 'react'  e o hook 'useState' do React.
import React, { useState } from 'react';

// Componente funcional NovoProjetoPage
function NovoProjetoPage() {
  // Define estados locais para armazenar dados do formulário.
  const [coordinator, setCoordinator] = useState("");
  const [segment, setSegment] = useState("");
  const [name, setName] = useState("");
  

// Função para lidar com o envio do formulário.
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Cria um objeto com os dados do formulário.
  const newCadastro = {
    coordinator,
    segment,
    name,
  };
};

  // Renderiza o formulário com campos e botões.
  return (
    <form onSubmit={handleSubmit} className='p-1'>
      <div className="flex items-center justify-center mt-32">
        <div className="w-screen max-w-2xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-10 mt-5 text-gray-900">Novo Projeto</h1>
  
          {/* Campos de nome do usuário e coordenador */}
          <div className="grid grid-cols-2 gap-4">
            <div className="my-4">
              <label htmlFor="name" className="block text-sm-8 font-bold text-gray-700">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
  
            <div className="my-4">
              <label htmlFor="coordinator" className="block text-sm-8 font-bold text-gray-700">Coordenador:</label>
              <select
                id="coordinator"
                name="coordinator"
                value={coordinator}
                onChange={(e) => setCoordinator(e.target.value)}
                className="mt-1 block w-60 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>Selecione o Funcionário</option>
                <option value="1">ACÁCIO DE MORAES VIZEU NETO</option>
                <option value="2">ADILIO AGUIAR REIS</option>
                <option value="3">ADILSON DA CONCEICAO</option>
                <option value="4">ADRIANO DOS SANTOS</option>
                <option value="5">ADRIANO ROCHA DO NASCIMENTO</option>
                <option value="6">ALAN FERRO LEAL</option>
                <option value="7">ALBERT MOTA FEITOSA</option>
                <option value="8">ADILSON DA CONCEICAO</option>
                <option value="9">FELIPE IZAQUE DA SILVA FERREIRA</option>
                <option value="10">GABRIEL DE SOUZA PEDRO</option>
              </select>
            </div>
          </div>
  
          {/* Campo de Segmento */}
          <div className="my-4">
            <label htmlFor="segment" className="block text-sm-8 font-bold text-gray-700">Segmento:</label>
            <select
              id="segment"
              name="segment"
              value={segment}
              onChange={(e) => setSegment(e.target.value)}
              className="mt-1 block w-60 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Selecione o Segmento</option>
              <option value="1">Reparo</option>
              <option value="2">Inspeção</option>
              <option value="3">Limpeza</option>
              <option value="4">Drops</option>
              <option value="5">Lifting Gear</option>
            </select>
          </div>
  
          {/* Botões de fechar e salvar */}
          <div className="grid grid-cols-2 gap-4 mt-16">
            <div className='flex justify-center'>
                <a href="/patrimonio/home/almoxarifado k2/controle projetos" className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                    Voltar
                </a>
            </div>
            <div className='flex justify-center'>
              <button type="submit" className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
  }
  
  export default NovoProjetoPage;