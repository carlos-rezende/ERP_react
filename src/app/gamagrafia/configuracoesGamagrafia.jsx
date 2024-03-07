import React from 'react';

function ConfiguracoesGamagrafiaPage() {
  return (
    <div className='text-center font-bold mt-16'>
      <h1 className="text-center bg-gray-300 font-mono">Configurações Gramagrafia</h1>
      <div className="flex justify-center">
        {/* Container para os cards da página. */}
        <div className="flex gap-6 px-6 pt-6 mt-16 overflow-x-auto">
          {/* 01 Card */}
          <a
            href="/gamagrafia/configuracoes/jornada"
            className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="jornada"
          >
            {/* Título do card */}
            <strong>Jornada</strong>
          </a>

          {/* 02 Card */}
          <a
            href="/gamagrafia/configuracoes/filmes"
            className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="filmes"
          >
            {/* Título do card */}
            <strong>Filmes</strong>
          </a>

          {/* 03 Card */}
          <a
            href="/gamagrafia/configuracoes/juntas"
            className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="juntas"
          >
            {/* Título do card */}
            <strong>Juntas</strong>
          </a>

          {/* 04 Card */}
          <a
            href="/gamagrafia/configuracoes/servicos"
            className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="serviços"
          >
            {/* Título do card */}
            <strong>Serviços</strong>
          </a>

          {/* 05 Card */}
          <a
            href="/gamagrafia/configuracoes/descontinuidades"
            className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="descontinuidades"
          >
            {/* Título do card */}
            <strong>Descontinuidades</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConfiguracoesGamagrafiaPage;
