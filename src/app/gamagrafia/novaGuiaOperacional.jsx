export default function NovaGuiaOperacionalPage() {

    return (
      <main className="grid min-h-full px-6 py-24 bg-gray-300 place-items-center sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">GAMAGRAFIA - NOVA GUIA OPERACIONAL</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">PÁGINA NOVA GUIA OPERACIONAL</h1>
          <p className="font-mono "></p>
          <p className="mt-6 text-xl text-black leading-7">PÁGINA DE TESTE. SOMENTE COM BANCO DE DADOS</p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a href="/gamagrafia/home/guia%20operacional" className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Voltar
            </a>
            <a href="/" className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Contate ao Suporte <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    )
  }