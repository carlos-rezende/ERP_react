// Importação da biblioteca React.
import React from 'react';

// Componente funcional ConfiguracoesPage.
function ConfiguracoesPage() {
  return (
    // Renderização da interface da página.
    <div className="text-center font-mono mt-16">
      Configurações
      <div className="text-center font-mono mt-5 bg-gray-300">Cadastro de informações do sistema</div>
      <div className="flex justify-center">
        {/* Container para os cards da página. */}
        <div className="grid gap-9 px-25 pt-10 lg:grid-cols-3">
          {/* 01 Card */}
          <a
            href="configuracoes/exames"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="exames"
          >
            {/* Título do card */}
            <strong>Exames</strong>
          </a>

          {/* 02 Card */}
          <a
            href="configuracoes/epis"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="epi's"
          >
            {/* Título do card */}
            <strong>EPI's</strong>
          </a>

          {/* 03 Card */}
          <a
            href="configuracoes/funcoes"
            className="h-16 w-64 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300"
            title="funções"
          >
            {/* Título do card */}
            <strong>Funções</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConfiguracoesPage;
