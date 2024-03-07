// Caminho da página: radioprotecao/home

import React from 'react';

// Renderização da página RadioprotecaoHomePage.
function RadioprotecaoHomePage() {
  return (
    <div className="text-center font-mono mt-16">
      Radioproteção
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 gap-3">
          {/* 01 Card */}
          <a
            href="/radioprotecao/home/folha de informacoes"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="folha de informações"
          >
            {/* Título do card. */}
            <strong>Folha de Informações</strong>
          </a>

          {/* 02 Card */}
          <a
            href="/radioprotecao/home/fontes"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="fontes"
          >
            {/* Título do card. */}
            <strong>Fontes</strong>
          </a>

          {/* 03 Card */}
          <a
            href="/radioprotecao/home/relatorio fontes por frente"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="relatório fontes por frente"
          >
            {/* Título do card. */}
            <strong>Relatório Fontes por Frente</strong>
          </a>

          {/* 04 Card */}
          <a
            href="/radioprotecao/home/folha de doses"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="folha de doses"
          >
            {/* Título do card. */}
            <strong>Folha de Doses</strong>
          </a>

          {/* 05 Card */}
          <a
            href="/radioprotecao/home/folha de doses ERP"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="folha de doses ERP"
          >
            {/* Título do card. */}
            <strong>Folha de Doses ERP</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RadioprotecaoHomePage;
