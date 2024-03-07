// Caminho da página: comercial/home

import React from 'react';

// Renderização da página ComercialHomePage.
function ComercialHomePage() {
  return (
    <div className="text-center font-mono mt-16">
      Módulo Comercial
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-2 gap-3">
          {/* 01 Card */}
          <a
            href="/comercial/home/propostas gamagrafias"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="propostas gamagrafias"
          >
            {/* Título do card. */}
            <strong>Propostas Gamagrafias</strong>
          </a>

          {/* 02 Card */}
          <a
            href="/comercial/home/cadastro de clientes"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="cadastro de clientes"
          >
            {/* Título do card. */}
            <strong>Cadastro de Clientes</strong>
          </a>  
        </div>
      </div>
    </div>
  );
}

export default ComercialHomePage;
