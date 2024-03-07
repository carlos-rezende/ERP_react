// Caminho da página: patrimonio/home/cadastrar equipamentos

'use client';

// Teste com Json Server - Consumindo como uma API.
const url = "http://localhost:3000/patrimonio/home/cadastrar equipamentos";

// Importa a dependência 'react'  e o hook 'useState' do React.
import React, { useState } from 'react';


// Componente funcional EquipamentosPage
function CadastrarEquipamentosPage() {
  // Define estados locais para armazenar dados do formulário.
  const [headOffice, setHeadOffice] = useState("");
  const [selectTheRegime, setSelectTheRegime] = ("");
  const [description, setDescription] = useState('');
  const [serial, setSerial] = useState('');
  const [invoice, setInvoice] = useState('');
  const [brand, setBrand] = useState('');
  const [numberPatrimony, setNumberPatrimony] = useState('');
  const [valuePurchase, setValuePurchase] = useState('');
  const [model, setModel] = useState('');
  const [descriptionOfUse, setDescriptionOfUse] = useState('');
  const [supplier, setSupplier] = useState('');
  const [producer, setProducer] = useState('');
  const [datePurchase, setDatePurchase] = useState('');
  const [depreciationRate, setDepreciationRate] = useState('');
  const [owner, setOwner] = useState('');
  const [calibrable, setCalibrable] = useState('');
  const [frequencyMonths, setFrequencyMonths] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Cria um objeto com os dados do formulário.
    const newCadastro = {
      headOffice,
      selectTheRegime,
    };
  
    // Tenta fazer uma requisição POST para a URL especificada.
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCadastro),
      });
  
      // Verifica se a requisição foi bem-sucedida.
      if (response.ok) {
        // Limpa os campos do formulário se o POST for bem-sucedido.
        setHeadOffice('');
        setSelectTheRegime('');
      } else {
        // Exibe um erro no console se o POST falhar.
        console.error('Falha ao salvar os cadastros:', response.status, response.statusText);
      }
    } catch (error) {
      // Exibe um erro no console se ocorrer um erro durante a requisição.
      console.error('Erro enquanto salva os cadastros:', error);
    }
  };
  

  // Renderiza o formulário com campos e botões.
  return (
    <form onSubmit={handleSubmit} className='p-1'>
      <div className="flex items-center justify-center mt-32">
        <div className="w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mt-10">Cadastrar Equipamentos</h1>

          {/* Botão para voltar para página anterior */}
          <div className="flex justify-end mt-10 mb-5">
            <a href="/patrimonio/home/equipamentos" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 mt-5 mb-5 p-2">
              Voltar
            </a>
          </div>
          {/* Subtítulo. */}
          <p className="font-mono text-center bg-gray-300 mb-16">Dados do Equipamento</p>

          {/* Dropdown de seleção para o Sede e Regime. */}
          <div className="my-4 flex flex-wrap">
            <label htmlFor="headOffice" className="block text-sm-8 font-bold text-gray-700 mr-2">Categoria(*):</label>
            <select
              id="headOffice"
              name="headOffice"
              value={headOffice}
              onChange={(e) => setHeadOffice(e.target.value)}
              className="block w-60 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-black border-x-2 border-y-2"
            >
              <option value="" disabled>Selecione uma Categoria</option>
              <option value="1">Instrumento</option>
              <option value="2">Padrão</option>
              <option value="3">Acessório</option>
              <option value="4">Hardware</option>
            </select>

            <label htmlFor="selectTheRegime" className="block text-sm-8 font-bold text-gray-700 mr-2 ml-auto">Selecione a Aplicação:</label>
            <select
              id="selectTheRegime"
              name="selectTheRegime"
              value={selectTheRegime}
              onChange={(e) => setSelectTheRegime(e.target.value)}
              defaultValue=""
              className="mt-1 block w-60 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-black border-x-2 border-y-2"
            >
              <option value="" disabled>Selecione a Aplicação</option>
              <option value="1">RD</option>
              <option value="2">UT</option>
              <option value="3">VD</option>
              <option value="4">PM</option>
              <option value="5">LP</option>
              <option value="6">Prot. Catódica</option>
              <option value="7">ND</option>
              <option value="8">RG</option>
              <option value="9">US</option>
              <option value="10">PMI</option>
              <option value="11">TH</option>
              <option value="12">AD</option>
              <option value="13">IS</option>
              <option value="14">RM</option>              
            </select>
          </div>

          <div className="flex">
            {/* Tabela 1: Descrição, serial, nota fiscal. */}
            <table className="table-fixed mt-16 mr-8">
              <tbody>
                {/* Descrição */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="description" className="block text-sm font-bold text-gray-700">Descrição(*):</label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Serial */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="serial" className="block text-sm font-bold text-gray-700">Serial(*):</label>
                    <input
                      type="text"
                      id="serial"
                      name="serial"
                      value={serial}
                      onChange={(e) => setSerial(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Nota Fiscal */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="invoice" className="block text-sm font-bold text-gray-700">Nota Fiscal(*):</label>
                    <input
                      type="text"
                      id="invoice"
                      name="invoice"
                      value={invoice}
                      onChange={(e) => setInvoice(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Tabela 2: Marca, Número Patrimônio, Valor Compra. */}
            <table className="table-fixed mt-16 mr-8">
              <tbody>
                {/* Marca */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="brand" className="block text-sm font-bold text-gray-700">Marca(*):</label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Número de patrimônio */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="numberPatrimony" className="block text-sm font-bold text-gray-700">Número de Patrimônio(*):</label>
                    <input
                      type="text"
                      id="numberPatrimony"
                      name="numberPatrimony"
                      value={numberPatrimony}
                      onChange={(e) => setNumberPatrimony(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Valor Compra */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="valuePurchase" className="block text-sm font-bold text-gray-700">Valor Compra(*):</label>
                    <input
                      type="text"
                      id="valuePurchase"
                      name="valuePurchase"
                      value={valuePurchase}
                      onChange={(e) => setValuePurchase(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Tabela 3: Modelo, Descrição de uso, Fornecedor */}
            <table className="table-fixed mt-16 mr-8">
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="model" className="block text-sm font-bold text-gray-700">Modelo(*):</label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="descriptionOfUse" className="block text-sm font-bold text-gray-700">Descrição de Uso(*):</label>
                    <input
                      type="text"
                      id="descriptionOfUse"
                      name="descriptionOfUse"
                      value={descriptionOfUse}
                      onChange={(e) => setDescriptionOfUse(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="supplier" className="block text-sm font-bold text-gray-700">Fornecedor(*):</label>
                    <input
                      type="text"
                      id="supplier"
                      name="supplier"
                      value={supplier}
                      onChange={(e) => setSupplier(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Tabela 4: Fabricante, Data Compra, Taxa Depreciação. */}
            <table className="table-fixed mt-16 mr-8">
              <tbody>
                {/* Marca */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="producer" className="block text-sm font-bold text-gray-700">Frabricante(*):</label>
                    <input
                      type="text"
                      id="producer"
                      name="producer"
                      value={producer}
                      onChange={(e) => setProducer(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Número de patrimônio */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="datePurchase" className="block text-sm font-bold text-gray-700">Data Compra(*):</label>
                    <input
                      type="date"
                      id="datePurchase"
                      name="datePurchase"
                      value={datePurchase}
                      onChange={(e) => setDatePurchase(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
                {/* Valor Compra */}
                <tr>
                  <td className="border px-4 py-2">
                    <label htmlFor="depreciationRate" className="block text-sm font-bold text-gray-700">Taxa Depreciação(*):</label>
                    <input
                      type="text"
                      id="depreciationRate"
                      name="depreciationRate"
                      value={depreciationRate}
                      onChange={(e) => setDepreciationRate(e.target.value)}
                      className="w-full border border-black rounded-md px-2 py-1"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Propriedade e Regime */}
          <div>
            <h2 className="text-center mt-16 font-mono bg-gray-300">Propriedade</h2>
            <div className="flex">
              {/* Proprietário */}
              <div className="flex-1">
                <label htmlFor="owner" className="block text-sm font-bold text-gray-700 mt-10 mb-2">Proprietário(*):</label>
                <input
                  type="text"
                  id="owner"
                  name="owner"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  className="w-full border border-black rounded-md px-2 py-1"
                />
              </div>

              {/* Regime */}
              <div className="flex-1 ml-4 mt-10">
                <label htmlFor="selectTheRegime" className="block text-sm-8 font-bold text-gray-700">
                  Selecione o Regime:
                </label>
                <select
                  id="selectTheRegime"
                  name="selectTheRegime"
                  value={selectTheRegime}
                  onChange={(e) => setSelectTheRegime(e.target.value)}
                  defaultValue=""
                  className="mt-2 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2 border-black border-x-2 border-y-2"
                >
                  <option value="" disabled>Selecione o Regime</option>
                  <option value="1">Próprio QT</option>
                  <option value="2">Alugado QT</option>
                  <option value="3">Próprio K2</option>
                  <option value="4">Alugado K2</option>
                </select>
              </div>
            </div>
          </div>

          {/* Calibração e Frequência em meses */}
          <div>
            <h2 className="text-center mt-16 font-mono bg-gray-300">Calibração</h2>
            <div className="flex">
              {/* Calibrável */}
              <div className="flex-1">
                <label className="block text-sm font-bold text-gray-700 mt-10 mb-2">Calibrável(*):</label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="calibrableSim"
                    name="calibrable"
                    checked={calibrable === 'Sim'}
                    onChange={() => setCalibrable('Sim')}
                    className="mr-2 appearance-none border border-gray-300 rounded w-6 h-6 checked:bg-green-600 checked:border-transparent focus:outline-none"
                  />
                  <label htmlFor="calibrableSim" className="text-sm text-black">Sim</label>

                  <input
                    type="checkbox"
                    id="calibrableNao"
                    name="calibrable"
                    checked={calibrable === 'Não'}
                    onChange={() => setCalibrable('Não')}
                    className="ml-4 appearance-none border border-gray-300 rounded w-6 h-6 checked:bg-red-500 checked:border-transparent focus:outline-none"
                  />
                  <label htmlFor="calibrableNao" className="text-sm text-black ml-2">Não</label>
                </div>
              </div>

              {/* Frequência em Meses */}
              <div className="flex-1 ml-4">
                <label htmlFor="frequencyMonths" className="block text-sm font-bold text-gray-700 mt-10 mb-2">Frequência em Meses(*):</label>
                <input
                  type="text"
                  id="frequencyMonths"
                  name="frequencyMonths"
                  value={frequencyMonths}
                  placeholder="12 meses"
                  onChange={(e) => setFrequencyMonths(e.target.value)}
                  className="w-full border border-black rounded-md px-2 py-1"
                />
              </div>
            </div>
          </div>   
        </div>
      </div>
    </form>
  );
}

export default CadastrarEquipamentosPage;