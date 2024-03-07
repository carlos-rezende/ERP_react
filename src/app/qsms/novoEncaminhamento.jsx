// Caminho da página: qsms/encaminhamentos/novo encaminhamento

'use client';

// Teste com o Json Server (retorna como uma api).
const url = "http://localhost:3000/cadastro";

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Tipos de encaminhamento disponíveis para seleção.
const tipos = ["SEMESTRAL", "ANUAL", "BIENAL", "ÚNICO", "ÚNICO APÓS 6 MESES", "TRIENAL", "QUINQUENAL", "ADMISSIONAL E DEMISSIONAL"];

// Componente funcional NovoEncaminhamento.
function NovoEncaminhamento() {
  // Estados para os campos do formulário.
  const [funcionario, setFuncionario] = useState("");
  const [clinica, setClinica] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [observacao, setObservacao] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  

// Função para lidar com o envio do formulário.
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Elementos do formulário do cadastro.
  const newCadastro = {
    funcionario,
    clinica,
    endereco,
    telefone,
    observacao,
    tipoSelecionado,
  };
  // Lógica para enviar o formulário, por exemplo, através de uma requisição POST.
};

  // Renderização da interface da página.
  return (
    <form onSubmit={handleSubmit} className='p-1'>
    <div className="flex items-center justify-center mt-32">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Criando Usuário</h1>

        {/* Seleção do funcionário */}
        <div className="my-4">
          <label htmlFor="funcionario" className="block text-sm-8 font-bold text-gray-700">Funcionário:</label>
          <select
            id="funcionario"
            name="funcionario"
            value={funcionario}
            onChange={(e) => setFuncionario(e.target.value)}
            className="mt-1 block w-60 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" disabled>Selecione um Funcionário</option>
            <option value="1">Guilherme Gomes</option>
            <option value="2">Carlos Eli</option>
            <option value="3">Bruno Souza</option>
            <option value="4">Delio Diaz</option>
            <option value="5">Jhonatan Cabral</option>
          </select>
        </div>

        {/* Nome da clínica e tipo de exames */}
        <div className="grid grid-cols-2 gap-40">
          <div className="my-4">
            <label htmlFor="clinica" className="block text-sm-8 font-bold text-gray-700">Clínica:</label>
            <textarea
              type="text"
              id="clinica"
              name="clinica"
              placeholder="Digite o nome da clínica"
              value={clinica}
              onChange={(e) => setClinica(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="2"  // Ajusta a altura desejada definindo o número de linhas.
            />
          </div>

          <div className="my-4">
            <label htmlFor="tipo" className="block text-sm-8 font-bold text-gray-700">Tipo de Exames:</label>
            <select
              id="tipo"
              name="tipo"
              value={tipoSelecionado}
              onChange={(e) => setTipoSelecionado(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Selecione um Tipo</option>
              {tipos.map((tipoOpcao) => (
                <option key={tipoOpcao} value={tipoOpcao}>{tipoOpcao}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Telefone da clínica e observações */}
        <div className="grid grid-cols-2 gap-40">
          <div className="my-4">
            <label htmlFor="telefone" className="block text-sm-8 font-bold text-gray-700">Telefone da Clínica:</label>
            <input
              type="number"
              id="telefone"
              name="telefone"
              placeholder="Digite so telefone da clínica"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="my-4">
            <label htmlFor="observacao" className="block text-sm-8 font-bold text-gray-700">Observações:</label>
            <textarea
               id="observacao"
               name="observacao"
               placeholder="Digite as observações"
               value={observacao}
               onChange={(e) => setObservacao(e.target.value)}
               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
               rows="4"  // ajusta a altura desejada definindo o número de linhas
            />
          </div>
        </div>
        
        {/* Endereço da clínica */}
        <div className="grid grid-cols-2 gap-40">
          <div className="my-4">
            <label htmlFor="endereco" className="block text-sm-8 font-bold text-gray-700">Endereço da Clínica:</label>
            <textarea
              type="text"
              id="endereco"
              name="endereco"
              placeholder="Digite sua Senha"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"  // ajusta a altura desejada definindo o número de linhas
            />
          </div>
        </div>
        
        {/* Botão para salvar os elementos */}
        <div className="justify-center gap-40 mt-6">
          <div className='flex justify-center'>
            <button type="submit" className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}

export default NovoEncaminhamento;