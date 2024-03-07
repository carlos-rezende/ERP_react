// Caminho da página: qsms/configuracoes/funcoes/cadastrar

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

function FuncaoCadastro() {
  // Estado do formulário usando um objeto
  const [formulario, setFormulario] = useState({
    'Nome da Função': '',
    'Descrição da Função': '',
    'Escolaridade Desejável': '',
    'Experiência Mínima': '',
    'Experiência Desejável': '',
    'Conhecimento Mínimo': '',
    'Conhecimento Desejável': '',
    'Habilidades Mínimas': '',
    'Habilidades Desejáveis': '',
    'Funções Específicas': '',
    'Treinamentos': '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de manipulação dos dados, por exemplo, enviar para um servidor (json server).
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Formulário de Função</h1>
      {/* Formulário da página */}
      <form onSubmit={handleSubmit}>
        {Object.entries(formulario).map(([campo, valor]) => (
          <div key={campo} className="mb-4">
            <label htmlFor={campo} className="block font-bold text-gray-600">
              {campo}:
            </label>
            {campo === 'Descrição da Função' || campo === 'Conhecimento Mínimo' || campo === 'Treinamentos' ? (
              <textarea
                id={campo}
                name={campo}
                rows="5"
                placeholder={`${campo === 'Descrição da Função' ? 'Descrever a função de acordo com seu trabalho.' : campo === 'Treinamentos' ? 'Selecione Treinamentos' : `Insira ${campo.toLowerCase()}`}`}
                className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                value={valor}
                onChange={handleChange}
                required
              ></textarea>
            ) : (
              <input
                type="text"
                id={campo}
                name={campo}
                placeholder={`${campo === 'Nome da Função' ? 'Economista, Analista de Sistemas, Administrador, etc...' : campo === 'Escolaridade Desejável' ? 'Formação concluída' : campo === 'Experiência Mínima' ? '6 meses' : campo === 'Experiência Desejável' ? '1 ano' : campo === 'Conhecimento Desejável' ? 'Descrever conhecimentos desejáveis' : campo === 'Habilidades Mínimas' ? 'Descrever as minimas funções precisas.' : campo === 'Habilidades Desejáveis' ? 'Descrever a função de acordo com seu trabalho.' : campo === 'Funções Específicas' ? 'Obrigações específicas da função requerida' : ''}`}
                className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                value={valor}
                onChange={handleChange}
                required={campo === 'Descrição da Função' || campo === 'Conhecimento Mínimo' || campo === 'Conhecimento Desejável' || campo === 'Treinamentos'}
              />
            )}
          </div>
        ))}

        {/* Campo Treinamentos */}
        <div className="mb-4">
          <label htmlFor="Treinamentos" className="block text-sm-10 font-bold text-gray-700">
            Treinamentos:
          </label>
          <select
            id="Treinamentos"
            name="Treinamentos"
            value={formulario['Treinamentos']}
            onChange={handleChange}
            className="mt-4 h-8 block w-72 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 md:leading-loose"
          >
            <option value="" disabled>
              Selecione Treinamentos
            </option>
            <option value="1">NR-10 - SERVIÇOS DE ELETRICIDADE</option>
            <option value="2">NR-18 - INSTRODUTÓRIO DE SEGURANÇA</option>
            <option value="3">NR-20 - LÍQUIDOS INFLAMÁVEIS E COMBUSTÍVEIS</option>
            <option value="4">NR-33 - ESPAÇO CONFINADO</option>
            <option value="5">NR-35 - TRABALHO EM ALTURA</option>
            <option value="6">PRESERVAÇÃO AMBIENTAL</option>
          </select>
        </div>
        
        {/* Botão de Salvar */}
        <div className="mt-14 text-center">
          <button
            type="submit"
            className="py-3 px-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 mx-auto"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FuncaoCadastro;
