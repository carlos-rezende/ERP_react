// Caminho da página: gamagrafia/configuracoes/filmes

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional GamagrafiaFilmesPage.
const GamagrafiaFilmesPage = () => {
  const [classe, setClasse] = useState("");
  
  // Fazer o post request do cadastro. (acrescentar a lógica do código caso precise)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newCadastro = {
      classe,
    };
    
    // POST REQUEST do cadastro.
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCadastro),
      });
      // Se o POST REQUEST ter sucesso, vai limpar o campo dos formulários.
      if (response.ok) {
        setClasse('');
      // Caso o POST request falhe, retorna esta mensagem.
      } else {
        console.error('Falha ao salvar os cadastros:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro enquanto salva os cadastros:', error);
    }
  };

  // Função que renderiza uma linha da tabela.
  const renderTableRow = (id, descricaoPlaceholder) => (
    <tr key={id}>
      <td className="border-r border-b border-gray-300 text-center">{id}</td>
      {/* Coluna de Descrição com input */}
      <td className="px-3 border-r border-b border-gray-300 text-center">
        <input
          type="text"
          placeholder={descricaoPlaceholder}
          className="w-full p-1 border border-gray-300 rounded"
        />
      </td>

      {/* Coluna de Classe com Select */}
      <td className="border-r border-b border-gray-300 text-center">
        <div className="flex items-center justify-center">
            <label htmlFor={`classe_${id}`} className="block text-sm-8 font-bold text-gray-700 border-gray-300"></label>
            <select
                id={`classe_${id}`}
                name={`classe_${id}`}
                value={classe}
                onChange={(e) => setClasse(e.target.value)}
                className="mt-1 block w-60 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value="" disabled>Selecione uma Classe</option>
                <option value="1">Classe I</option>
                <option value="2">Classe II</option>
            </select>
        </div>
      </td>
      {/* Coluna de opções com botões Salvar e Excluir */}
      <td className="border-b text-center border-gray-300 pr-4">
        <div className="flex flex-row justify-center">
          <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
            Salvar
          </button>
          <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
            Excluir
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="container mx-auto my-8 mt-16">
      <h1 className="font-mono">Filmes</h1>
      
      <div className="flex justify-end mt-8 mb-10">
        <a href="/gamagrafia/configuracoes" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
          Voltar
        </a>
      </div>

      {/* Dados da tabela. */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">#</th>
            <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Descrição</th>
            <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Classe</th>
            <th className="px-10 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Opções</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRow(1, '3½x5½"')}
          {renderTableRow(2, '3½x5½"')}
          {renderTableRow(3, '3½x8½"')}
          {renderTableRow(4, '3½x8½"')}
          {renderTableRow(5, '3½x17"')}
          {renderTableRow(6, '3½x17"')}
          {renderTableRow(7, '4½x8½"')}
          {renderTableRow(8, '4½x8½"')}
          {renderTableRow(9, '4½x17"')}
          {renderTableRow(10, '4½x17"')}
          {renderTableRow(11, '7x8½"')}
          {renderTableRow(12, '7x8½"')}
          {renderTableRow(13, '7x17"')}
          {renderTableRow(14, '7x17"')}
          {renderTableRow(15, '8x14"')}
          {renderTableRow(16, '8x14"')}
          {renderTableRow(17, '14x17"')}
          {renderTableRow(18, '14x17"')}
          {/* Adicione mais itens caso seja preciso. */}
          {renderTableRow('ID', 'Descrição')}
        </tbody>
      </table>
    </div>
  );
};

export default GamagrafiaFilmesPage;
