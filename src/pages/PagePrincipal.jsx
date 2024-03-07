'use client';
import React, { useState } from 'react';

function PagePrincipal() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    
    // lógica para fazer a pesquisa no search
    console.log(`Pesquisando: ${searchQuery}`);
  };

  return (
    <div className="flex justify-center flex-wrap items-center mt-10">
      <div className="grid gap-9 px-25 pt-10 lg:grid-cols-4">
        {/* 01 Card */}
        <a
          href="/administrador/home"
          className="h-16 w-56 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
          title="usuário"
        >
          <strong>Administrador</strong>
        </a>

        {/* 02 Card */}
        <a
          href="/qsms/configuracoes"
          className="h-16 w-56 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
          title="qsms"
        >
          <strong>QSMS</strong>
        </a>

        {/* 03 Card */}
        <a
          href="/financeiro/quadro de mandos"
          className="h-16 w-56 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
          title="financeiro"
        >
          <strong>Financeiro</strong>
        </a>

        {/* 04 Card */}
        <a
          href="/enel goias/home"
          className="h-16 w-56 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
          title="enel goias"
        >
          <strong>Enel Goias</strong>
        </a>
      </div>

      <div className="flex justify-center mt-64">
        <input
          type="text"
          className="border rounded-full py-6 px-8 w-96 border-gray-500 focus:outline-none focus:border-orange-500/40 hover:bg-stone-400/40 transition-colors duration-300"
          placeholder="Digite uma Solicitação ou um Módulo"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="botao" onClick={handleSearch}>
          Pesquisar
        </button>
      </div>
    </div>
  );
}

export default PagePrincipal;
