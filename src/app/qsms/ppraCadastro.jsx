// Caminho da página: qsms/cadastrar

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional PpraCadastro.
function PpraCadastro() {
  const [nomeFuncao, setNomeFuncao] = useState('');
  const [descricaoFuncao, setDescricaoFuncao] = useState('');
  const [escolaridadeDesejavel, setEscolaridadeDesejavel] = useState('');
  const [experienciaMinima, setExperienciaMinima] = useState('');
  const [experienciaDesejavel, setExperienciaDesejavel] = useState('');
  const [conhecimentoMinimo, setConhecimentoMinimo] = useState('');
  const [conhecimentoDesejavel, setConhecimentoDesejavel] = useState('');
  const [habilidadesMinimas, setHabilidadesMinimas] = useState('');
  const [habilidadesDesejaveis, setHabilidadesDesejaveis] = useState('');
  const [treinamentos, setTreinamentos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Caso queira testar Json Server, acrescentar o código abaixo.
  };

  // Renderização da interface da página.
  return (
    <div className="max-w-screen-lg	 mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Dados do PPRA / PCMSO para Cadastro</h1>
      <form onSubmit={handleSubmit}>
        {/* Formulário com textos e datas. */}
        <div className="mb-4">
          <label htmlFor="nomeFuncao" className="block font-bold text-gray-600">Unidade:</label>
          <input
            type="text"
            placeholder='Rio de Janeiro, Bahia, São Paulo, etc...'
            id="nomeFuncao"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            value={nomeFuncao}
            onChange={(e) => setNomeFuncao(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descricaoFuncao" className="block font-bold text-gray-600">UF:</label>
          <textarea
            id="descricaoFuncao"
            placeholder='RJ, SP, BA, MG, ETC...'
            rows="1"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            value={descricaoFuncao}
            onChange={(e) => setDescricaoFuncao(e.target.value)}
            required
          ></textarea>
        </div>
        
        <div className="mb-4">
          <label htmlFor="escolaridadeDesejavel" className="block font-bold text-gray-600">Escopo da Atividade:</label>
          <input
            type="text"
            placeholder='Formação concluída'
            id="escolaridadeDesejavel"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            value={escolaridadeDesejavel}
            onChange={(e) => setEscolaridadeDesejavel(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="experienciaMinima" className="block font-bold text-gray-600">Dados do Estabelecimento:</label>
          <input
            type="text"
            placeholder='6 meses'
            id="experienciaMinima"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            value={experienciaMinima}
            onChange={(e) => setExperienciaMinima(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="experienciaDesejavel" className="block font-bold text-gray-600">Data Elaboração:</label>
          <input
            type="text"
            placeholder='1 ano'
            id="experienciaDesejavel"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            value={experienciaDesejavel}
            onChange={(e) => setExperienciaDesejavel(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="conhecimentoMinimo" className="block font-bold text-gray-600">Vencimento:</label>
          <textarea
            id="conhecimentoMinimo"
            placeholder='Descrever a função de acordo com seu trabalho.'
            rows="1"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            value={conhecimentoMinimo}
            onChange={(e) => setConhecimentoMinimo(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="conhecimentoDesejavel" className="block font-bold text-gray-600">Identificador PPRA:</label>
          <textarea
            id="conhecimentoDesejavel"
            placeholder='Identificador PPRA'
            rows="1"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            value={conhecimentoDesejavel}
            onChange={(e) => setConhecimentoDesejavel(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="habilidadesMinimas" className="block font-bold text-gray-600">Periodo do Contrato:</label>
          <textarea
            id="habilidadesMinimas"
            placeholder='De 12/02/2023 à 26/10/2025'
            rows="1"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            value={habilidadesMinimas}
            onChange={(e) => setHabilidadesMinimas(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="habilidadesDesejaveis" className="block font-bold text-gray-600">Numero do Contrato:</label>
          <textarea
            id="habilidadesDesejaveis"
            placeholder='Número do Contrato'
            rows="1"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            value={habilidadesDesejaveis}
            onChange={(e) => setHabilidadesDesejaveis(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Dropdown com centros de custo */}
        <div className="my-4">
          <label htmlFor="treinamentos" className="block text-sm-10 font-bold text-gray-700">Centros de Custo:</label>
          <select
            id="treinamentos"
            name="treinamentos"
            value={treinamentos}
            onChange={(e) => setTreinamentos(e.target.value)}
            className="mt-4 h-8 block w-72 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 md:leading-loose"
          >
            <option value="" disabled>Selecione uma Opção</option>
            <option value="1">CONTROLADORIA</option>
            <option value="2">RECURSOS HUMANOS</option>
            <option value="3">TECNOLOGIA DA INFORMAÇÃO</option>
            <option value="4">LOGÍSTICA / SERVIÇOS GERAIS</option>
            <option value="5">DIRETORIA GERAL</option>
            <option value="6">UN - BA - BRASKEM S/A</option>
            <option value="6">UN - BA - TORRES EOLICAS DO BRASIL</option>
            <option value="6">UN - BA - CANTEIRO</option>
          </select>
        </div>
        {/* Caso queira adicionar, seguir o padrão acima ou como desejado */}

        {/* Botões para salvar e voltar para página anterior. */}
        <div className="mt-14 text-center flex justify-center py-12">
          <button
            type="submit"
            className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2 px-6 mx-10"
          >
            Salvar
          </button>
          <a href="/qsms/ppra" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-3 px-6 mx-10">
            Voltar
          </a>
        </div>
      </form>
    </div>
  );
}

export default PpraCadastro;