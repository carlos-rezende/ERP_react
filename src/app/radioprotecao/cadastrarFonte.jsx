// Caminho da página: radioproteção/home/fontes/cadastrar fonte

'use client';


// Importa a dependência 'react'  e o hook 'useState' do React.
import React, { useState } from 'react';

// Componente funcional CadastrarFontePage
function CadastrarFontePage() {
  // Define estados locais para armazenar dados do formulário.
  const [number, setNumber] = useState('');
  const [model, setModel] = useState('');
  const [startDate, setStartDate] = useState('');
  const [inspectionReport, setInspectionReport] = useState('');
  const [irradiator, setIrradiator] = useState('');
  const [testTemplate, setTestTemplate] = useState('');
  const [halfLife, setHalfLife] = useState('');
  const [cable, setCable] = useState('');
  const [folder, setFolder] = useState('');
  const [radioactiveIsotype, setRadioactiveIsotype] = useState('');
  const [usageLimit, setUsageLimit] = useState('');
  const [focus, setFocus] = useState('');
  const [initialActivity, setInitialActivity] = useState('');
  const [exchangeLimit, setExchangeLimit] = useState('');
  const [status, setStatus] = useState('');
  const [dateOfInspection, setDateOfInspection] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cria um objeto com os dados do formulário.
    const newCadastro = {
      number,
      model,
      startDate,
      inspectionReport,
      irradiator,
      testTemplate,
      halfLife,
      cable,
      folder,
      radioactiveIsotype,
      usageLimit,
      focus,
      initialActivity,
      exchangeLimit,
      status,
    };
  };

  // Renderiza o formulário com campos e botões.
  return (
    <form onSubmit={handleSubmit} className="w-98">
      <div className="flex items-center justify-center mt-32">
        <div className="w-screen bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mt-10">Fontes</h1>

          {/* Botão para voltar para página anterior */}
          <div className="flex justify-start mt-16 mb-16">
            <a href="/radioprotecao/home/fontes" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 mt-5 mb-5 p-2">
              Voltar
            </a>
          </div>
          {/* Subtítulo. */}
          <p className="font-mono text-center bg-gray-300 mb-16">Cadastro de Fonte(*)campos obrigatórios</p>

          <div className="flex">
            <table className="table-fixed mt-16 mr-8">
              <tbody>
                {/* Número */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="number" className="block text-sm font-bold text-gray-700">Número(*):</label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      className="border border-black rounded-md px-2 py-1 w-52"
                    />
                  </td>
                </tr>
                {/* Modelo */}
                <tr>
                  <td className="border px-4 py-2">
                    <div className="my-4">
                      <label htmlFor="model" className="block text-sm-8 font-bold text-gray-700">Modelo:</label>
                      <select
                        id="model"
                        name="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="mt-1 block w-52 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="" disabled>Selecione</option>
                        <option value="1">Gamammat SE</option>
                        <option value="2">Gamammat CS</option>
                      </select>
                    </div>
                  </td>
                </tr>
                {/* Data Inicial */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="startDate" className="block text-sm font-bold text-gray-700">Data Inicial(*):</label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="border border-black rounded-md px-2 py-1 w-52"
                    />
                  </td>
                </tr>
                {/* Relatório Vistorial */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="inspectionReport" className="block text-sm font-bold text-gray-700">Relatório Vistorial(*):</label>
                    <input
                      type="text"
                      id="inspectionReport"
                      name="inspectionReport"
                      value={inspectionReport}
                      onChange={(e) => setInspectionReport(e.target.value)}
                      className="w-52 border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Selecionar Arquivo */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="inspectionReportFile" className="block text-xs font-bold text-gray-700">Arquivo:</label>
                    <input
                      type="file"
                      id="inspectionReportFile"
                      name="inspectionReportFile"
                      onChange={(e) => handleFileChange(e)}
                      className="w-52 border border-black rounded-md text-sm px-2 py-1"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Tabela 2: Irradiador, Gabarito de Teste, Meia Vida, Data Vistoria. */}
            <table className="border table-fixed mt-16 mr-8">
              <tbody>
                {/* Irradiador */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="irradiator" className="block text-sm font-bold text-gray-700">Irradiador(*):</label>
                    <select
                      id="irradiator"
                      name="irradiator"
                      value={irradiator}
                      onChange={(e) => setIrradiator(e.target.value)}
                      className="mt-1 block w-52 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="" disabled>Selecione</option>
                      <option value="1">S3973</option>
                      <option value="2">163</option>
                      <option value="3">S4486</option>
                    </select>
                  </td>
                </tr>
                {/* Gabarito de Teste */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="testTemplate" className="block text-sm font-bold text-gray-700">Gabarito de Teste(*):</label>
                    <input
                      type="text"
                      id="testTemplate"
                      name="testTemplate"
                      value={testTemplate}
                      onChange={(e) => setTestTemplate(e.target.value)}
                      className="w-52 border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Meia Vida */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="halfLife" className="block text-sm font-bold text-gray-700">Meia Vida(*):</label>
                    <input
                      type="text"
                      id="halfLife"
                      name="halfLife"
                      value={halfLife}
                      onChange={(e) => setHalfLife(e.target.value)}
                      className="w-52 border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Data Vistoria */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="dateOfInspection" className="block text-sm font-bold text-gray-700">Data Vistoria(*):</label>
                    <input
                      type="date"
                      id="dateOfInspection"
                      name="dateOfInspection"
                      value={dateOfInspection}
                      onChange={(e) => setDateOfInspection(e.target.value)}
                      className="w-52 border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Tabela 3: Cabo, Isótipo Radioativo, Limite de Uso, Pasta */}
            <table className="border table-fixed mt-16 mr-8">
              <tbody>
                {/* Cabo */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="cable" className="block text-sm font-bold text-gray-700">Cabo(*):</label>
                    <input
                      type="text"
                      id="cable"
                      name="cable"
                      value={cable}
                      onChange={(e) => setCable(e.target.value)}
                      className="w-52 border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Isótipo Radioativo */}
                <tr>
                  <td className="border px-4 py-2">
                    <div className="my-4">
                      <label htmlFor="radioactiveIsotype" className="block text-sm-8 font-bold text-gray-700">Isótipo Radioativo(*):</label>
                      <select
                        id="radioactiveIsotype"
                        name="radioactiveIsotype"
                        value={radioactiveIsotype}
                        onChange={(e) => setRadioactiveIsotype(e.target.value)}
                        className="mt-1 block w-52 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="" disabled>Selecione</option>
                        <option value="1">Césio - 137</option>
                        <option value="2">Cobalto - 60</option>
                        <option value="3">Selênio - 75</option>
                        <option value="4">Iridio - 192</option>
                        <option value="5">Raio - X</option>
                      </select>
                    </div>
                  </td>
                </tr>
                {/* Limite de Uso */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="usageLimit" className="block text-sm font-bold text-gray-700">Limite de Uso(*):</label>
                    <input
                      type="text"
                      id="usageLimit"
                      name="usageLimit"
                      value={usageLimit}
                      onChange={(e) => setUsageLimit(e.target.value)}
                      className="w-52 border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Pasta */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="folder" className="block text-sm font-bold text-gray-700">Pasta(*):</label>
                    <input
                      type="text"
                      id="folder"
                      name="folder"
                      value={folder}
                      onChange={(e) => setFolder(e.target.value)}
                      className="w-52 border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Tabela 4: Foco, Atividade Inicial em Ci, Status. */}
            <table className="border table-fixed mt-16 mr-8">
              <tbody>
                {/* Foco */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="focus" className="block text-sm font-bold text-gray-700">Foco(*):</label>
                    <input
                      type="text"
                      id="focus"
                      name="focus"
                      value={focus}
                      onChange={(e) => setFocus(e.target.value)}
                      className="w-52 border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Atividade Inicial em Ci */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="initialActivity" className="block text-sm font-bold text-gray-700">Atividade Inicial em Ci(*):</label>
                    <input
                      type="text"
                      id="initialActivity"
                      name="initialActivity"
                      value={initialActivity}
                      onChange={(e) => setInitialActivity(e.target.value)}
                      className="w-52 border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Limite de Troca */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="exchangeLimit" className="block text-sm font-bold text-gray-700">Limite de Troca(*):</label>
                    <input
                      type="text"
                      id="exchangeLimit"
                      name="exchangeLimit"
                      value={exchangeLimit}
                      onChange={(e) => setExchangeLimit(e.target.value)}
                      className="w-52 border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Status */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="status" className="block text-sm font-bold text-gray-700">Status(*):</label>
                    <select
                      id="status"
                      name="status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="mt-1 block w-52 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="" disabled>Selecione</option>
                      <option value="1">ATIVO</option>
                      <option value="2">DESATIVADO</option>
                      <option value="3">SUSPENSO</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-14 mb-14">
            <button type="submit" className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
              Cadastrar Fonte
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CadastrarFontePage;