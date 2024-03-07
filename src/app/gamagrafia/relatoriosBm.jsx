// Caminho da página: gamagrafia/relatorios%20bm

// importando React;
import React from 'react';

// Função da página RelatoriosBmPage.
function RelatoriosBmPage() {
  return (
    <div className='text-center font-mono mt-16'>
      <h1 className="text-center font-mono bg-gray-300">Relatórios</h1>
      
      <div className="flex justify-center">
        <div className="align-middle px-25 pt-10 lg:grid-cols-3">
          {/* 01 Card */}
          <a
            href="relatorios BM/consolidado por cliente"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="exames"
          >
            {/* Título do card */}
            <strong>Consolidado por Cliente</strong>
          </a>
          {/* Botão de voltar para página anterior. */}
          <div className="flex justify-center mt-20 mb-10">
            <a href="/gamagrafia/home" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
              Voltar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatoriosBmPage;
