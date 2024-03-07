// Caminho da página: gamagrafia/home

// Importando o React.
import React from 'react';

// Componente funcional GamagrafiaHomePage.
function GamagrafiaHomePage() {
  return (
    <div className='text-center font-mono mt-16'>
      <h1 className="text-center bg-gray-300">Módulo Ensaios</h1>
      
      <div className="flex justify-center mt-10">
        <div className="flex gap-4">
          {/* 01 Card: Guia Operacional */}
          <a
            href="home/guia operacional"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="guia operacional"
          >
            {/* Título do card. */}
            <strong>Guia Operacional</strong>
          </a>
          {/* 02 Card: Boletim de Medição */}
          <a
            href="home/boletim de medicao"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="boletim de medição"
          >
            {/* Título do card. */}
            <strong>Boletim de Medição</strong>
          </a>
          {/* 03 Card: Procedimentos */}
          <a
            href="/gamagrafia/procedimentos"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="procedimentos"
          >
            {/* Título do card. */}
            <strong>Procedimentos</strong>
          </a>

          {/* 04 Card: Relatórios BM */}
          <a
            href="/gamagrafia/relatorios bm"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="relatórios bm"
          >
            {/* Título do card. */}
            <strong>Relatórios BM</strong>
          </a>

          {/* 05 Card: Configurações */}
          <a
            href="/gamagrafia/configuracoes"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="configurações"
          >
            {/* Título do card. */}
            <strong>Configurações</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

// Exporta o componente para ser utilizado em outros arquivos
export default GamagrafiaHomePage;
