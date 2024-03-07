// Caminho da página: unidades/home

import React from 'react';
import { Link } from 'react-router-dom';

// Import de ícones da React-Icon
import { BsFillBuildingFill } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

// Renderização da página UnidadesPageHome.
function UnidadesPageHome() {
  return (
    <div className="text-center font-mono mt-20">
      {/* Botões */}
      <div className="flex justify-between mb-4">
        <Link to="/unidades" className="flex items-center border bg-gray-300 border-black p-2">
          <BsFillBuildingFill size={60} />
          <span className="ml-16">Unidades</span>
        </Link>
        <Link to="/centros-custo" className="flex items-center border bg-teal-300 border-black p-2">
          <FaRegMoneyBillAlt size={60} />
          <span className="ml-16">Centros de Custo</span>
        </Link>
        <Link to="/centros-pendentes" className="flex items-center border bg-red-400 border-black p-2">
          <FaRegMoneyBillAlt size={60} />
          <span className="ml-16">Centros Pendentes</span>
        </Link>
      </div>

      {/* Cards */}
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-2 gap-3">
          {/* 01 Card */}
          <a
            href="/unidades/home/unidades"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="unidades"
          >
            {/* Título do card. */}
            <strong>Unidades</strong>
          </a>

          {/* 02 Card */}
          <a
            href="/unidades/home/centros de custo"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="centros de custo"
          >
            {/* Título do card. */}
            <strong>Centros de Custo</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UnidadesPageHome;
