// Caminho da página: patrimonio/home/

import React from 'react';

function HomePatrimonioPage() {
  return (
    <div className="text-center font-mono mt-16">
      Módulo Ensaios
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 gap-3">
          {/* 01 Card */}
          <a
            href="/patrimonio/home/equipamentos"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="boletim de medição"
          >
            {/* Título do card. */}
            <strong>Equipamentos</strong>
          </a>

          {/* 02 Card */}
          <a
            href="/patrimonio/home/calibracao"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="procedimentos"
          >
            {/* Título do card. */}
            <strong>Calibração</strong>
          </a>

          {/* 03 Card */}
          <a
            href="/patrimonio/home/almoxarifado"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="almoxarifado"
          >
            {/* Título do card. */}
            <strong>Almoxarifado</strong>
          </a>

          {/* 04 Card */}
          <a
            href="/patrimonio/home/frota propria"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="configurações"
          >
            <strong>Frota Própria</strong>
          </a>

          {/* 05 Card */}
          <a
            href="/patrimonio/home/almoxarifado k2"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="almoxarifado k2"
          >
            {/* Título do card. */}
            <strong>Almoxarifado K2</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePatrimonioPage;
