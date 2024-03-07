// Caminho da página: qsms/pesquisas

// Importação da biblioteca React.
import React from 'react';

// Componente funcional PesquisasPage.
function PesquisasPage() {
  return (
    // Renderização da interface da página.
    <div className='text-center font-mono mt-16'>
      <h1 className="text-center font-mono bg-gray-300">Pesquisas</h1>
      <div className="flex justify-center">

        {/* Container para os cards da página. */}
        <div className="grid gap-9 px-25 pt-10 lg:grid-cols-3">
          {/* 01 Card */}
          <a
            href="pesquisas/pesquisarpcmso"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="pesquisar pcmso"
          >
            {/* Título do card */}
            <strong>Pesquisar PCMSO</strong>
          </a>

          {/* 02 Card */}
          <a
            href="pesquisas/pesquisarppra"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="pesquisar ppra"
          >
            {/* Título do card */}
            <strong>Pesquisar PPRA</strong>
          </a>

          {/* 03 Card */}
          <a
            href="pesquisas/relatoriodeaso"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="relatórios de aso's oendentes"
          >
            {/* Título do card */}
            <strong>Relatórios de ASO's Pendentes</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PesquisasPage;
