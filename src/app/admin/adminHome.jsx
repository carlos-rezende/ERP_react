// Caminho da página: admin/home

import React from 'react';

// Renderização da página AdminHomePage.
function AdminHomePage() {
  return (
    <div className="text-center font-mono mt-16">
      Administrador
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-2 gap-3">
          {/* 01 Card */}
          <a
            href="/administrador/home/usuario"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="usuário"
          >
            {/* Título do card. */}
            <strong>Usuário</strong>
          </a>

          {/* 02 Card */}
          <a
            href="/administrador/home/modulos"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="módulos"
          >
            {/* Título do card. */}
            <strong>Módulos</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
