// Caminho da página: administrador/usuario

'use client';

// Teste com Json Server - Consumindo como uma API.
const url = "http://localhost:3000/cadastro";

// Importa a dependência 'react'  e o hook 'useState' do React.
import React, { useState } from 'react';

// Define um array de estados e tipos para serem utilizados posteriormente.
const estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
const tipos = ["Comum", "Coordenador", "Gerente", "Secretário", "RH", "TI"];

// Componente funcional CadastroPage
function CadastroPage() {
  // Define estados locais para armazenar dados do formulário.
  const [funcionario, setFuncionario] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [email, setEmail] = useState("");
  const [unidade, setUnidade] = useState("");
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  

// Função para lidar com o envio do formulário.
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Cria um objeto com os dados do formulário.
  const newCadastro = {
    funcionario,
    login,
    senha,
    confirmacaoSenha,
    email,
    unidade,
    tipoSelecionado,
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
    
    // Verifica se a requisição foi bem sucedida.
    if (response.ok) {
      // Limpa os campos do formulário se o POST for bem sucedido.
      setFuncionario('');
      setLogin('');
      setSenha('');
      setConfirmacaoSenha('');
      setEmail('');
      setUnidade('');
      setTipoSelecionado('');
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
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Criando Usuário</h1>

        {/* Dropdown de seleção para o funcionário */}
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

        {/* Campos de login e tipo de usuário */}
        <div className="grid grid-cols-2 gap-40">
          <div className="my-4">
            <label htmlFor="login" className="block text-sm-8 font-bold text-gray-700">Login:</label>
            <input
              type="text"
              id="login"
              name="login"
              placeholder="Digite seu Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="my-4">
            <label htmlFor="tipo" className="block text-sm-8 font-bold text-gray-700">Tipo:</label>
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

        {/* Campos de email e unidades */}
        <div className="grid grid-cols-2 gap-40">
          <div className="my-4">
            <label htmlFor="email" className="block text-sm-8 font-bold text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="my-4">
            <label htmlFor="unidade" className="block text-sm-8 font-bold text-gray-700">Unidade:</label>
            <select
              id="unidade"
              name="unidade"
              value={unidade}
              onChange={(e) => setUnidade(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Selecione uma Unidade</option>
              {estados.map((estado, index) => (
                <option key={index} value={estado}>{estado}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Campos de password e confirmação de password */}
        <div className="grid grid-cols-2 gap-40">
          <div className="my-4">
            <label htmlFor="senha" className="block text-sm-8 font-bold text-gray-700">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="my-4">
            <label htmlFor="confirmacaoSenha" className="block text-sm-8 font-bold text-gray-700">Confirme sua Senha:</label>
            <input
              type="password"
              id="confirmacaoSenha"
              name="confirmacaoSenha"
              placeholder="Confirme sua Senha"
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        
        {/* Botões de salvar e editar. */}
        <div className="grid grid-cols-2 gap-40 mt-6">
          <div className='flex justify-center'>
            <button type="submit" className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
              Salvar
            </button>
          </div>
          <div className='flex justify-center'>
            <a href='/administrador/usuario/editar' className="h-16 w-40 m-2 flex justify-center items-center bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
              Editar Usuário
            </a>
          </div>
        </div>

      </div>
    </div>
    </form>
  );
}

export default CadastroPage;