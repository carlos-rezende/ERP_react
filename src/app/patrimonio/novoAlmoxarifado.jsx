// Caminho da página: patrimonio/home/almoxarifado/novo almoxarifado

import React, { useState } from 'react';

const NovoAlmoxarifadoPage = () => {
  const [itens, setItens] = useState([
    { descricao: "", unidade: "" },
    // Adicione mais linhas SE for necessário.
  ]);

  const handleDescricaoChange = (index, value) => {
    const novosItens = [...itens];
    novosItens[index].descricao = value;
    setItens(novosItens);
  };

  const handleUnidadeChange = (index, value) => {
    const novosItens = [...itens];
    novosItens[index].unidade = value;
    setItens(novosItens);
  };

  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300 mt-20">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Descrição:</th>
            <th className="py-2 px-4 border-b">Unidade:</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={item.descricao}
                  onChange={(e) => handleDescricaoChange(index, e.target.value)}
                  className="w-full border border-gray-300 px-2 py-1"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <div className="flex flex-wrap items-center justify-center">
                  <label htmlFor={`unidade-${index}`} className="block text-sm-8 font-bold text-gray-700 mr-2"></label>
                  <select
                    id={`unidade-${index}`}
                    name={`unidade-${index}`}
                    value={item.unidade}
                    onChange={(e) => handleUnidadeChange(index, e.target.value)}
                    className="block w-60 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" disabled>Selecione uma Sede</option>
                    <option value="1">SEDE</option>
                    <option value="2">MG</option>
                    <option value="3">MC</option>
                    <option value="4">BA</option>
                    <option value="5">RN</option>
                    <option value="6">AM</option>
                    <option value="7">RJ</option>
                    <option value="8">ES</option>
                    <option value="9">PR</option>
                    <option value="10">TB</option>
                    <option value="11">NOR GNF</option>
                    <option value="12">NOR COELCE</option>
                    <option value="13">NOR GPG</option>
                    <option value="14">NOR COELBA</option>
                    <option value="15">NOR EPE</option>
                    <option value="16">NOR ELETRICA</option>
                    <option value="17">AL</option>
                    <option value="18">MS</option>
                    <option value="19">PA</option>
                    <option value="20">PE</option>
                    <option value="21">PA-Mil</option>
                    <option value="22">SE</option>
                    <option value="23">ESOP</option>
                    <option value="24">SG</option>
                    <option value="25">ANDT GNF</option>
                    <option value="26">NOR</option>
                    <option value="27">PC</option>
                    <option value="28">TEN</option>
                    <option value="29">SEDE-RJ</option>
                    <option value="30">K2-DIR</option>
                    <option value="31">SP</option>
                    <option value="32">K2-IND</option>
                    <option value="33">K2-DES</option>
                    <option value="34">GER SUL</option>
                    <option value="35">RJ-LOG</option>
                    <option value="36">GO</option>
                    <option value="37">LIC RJ</option>
                    <option value="38">RJ TRANSPETRO</option>
                    <option value="39">GPS</option>
                    <option value="40">MA</option>
                    <option value="41">ALMO - MG</option>
                    <option value="42">ALMO - MC</option>
                    <option value="43">SGI/SMS</option>
                    <option value="44">PROJ - K2</option>
                    <option value="45">RR</option>
                    <option value="46">MC COMPARTILHADO</option>
                    <option value="47">RJ</option>
                    <option value="48">DIVISÃO MECÂNICA</option>
                    <option value="49">UN - NOR - INSP ENEL GO 2</option>
                    <option value="50">CE</option>
                    <option value="51">RH</option>
                    <option value="52">RJ</option>
                    <option value="53">NTS</option>
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Botões para voltar e salvar */}
      <div className="flex justify-center items-center bg-white p-1">
          <a href="/patrimonio/home/almoxarifado/" className="h-12 w-28 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
            Voltar
          </a>
          <button type="submit" className="h-12 w-28 m-2 ml-20 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
            Salvar
          </button>
        </div>
    </div>
    
  );
};

export default NovoAlmoxarifadoPage;
