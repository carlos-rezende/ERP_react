// Caminho da página: qsms -> configurações -> exames
'use client';

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional ExamesPage.
const ExamesPage = () => {
  // Estados para o valor da pesquisa, página atual e usuários ordenados.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 20;


  // Dados dos exames.
  const exams = [
    {
      id: 1,
      description: 'EXAME CLÍNICO',
    },
    {
      id: 2,
      description: 'TGP'
    },
    {
      id: 3,
      description: 'AUDIOMETRIA'
    },
    {
      id: 4,
      description: 'AVALIAÇÃO PSICOSSOCIAL'
    },
    {
      id: 5,
      description: 'COLESTEROL'
    },
    {
      id: 6,
      description: 'AVALIAÇÃO PSICOSSOCIAL'
    },
    {
      id: 7,
      description: 'ELETROENCEFALOGRAMA'
    },
    {
      id: 8,
      description: 'TESTE DE ROOMBERG'
    },
    {
      id: 9,
      description: 'GLICEMIA'
    },
    {
      id: 10,
      description: 'Hemograma com Plaquetometria + Reticulócitos (CBC+Reticulocytes)'
    },
    {
      id: 11,
      description: 'RX DE TÓRAX PA'
    },
    {
      id: 12,
      description: 'TGO (HEPATOGRAMA - FIGADO)'
    },
    {
      id: 13,
      description: 'TGP (HEPATOGRAMA - FIGADO)'
    },
    {
      id: 14,
      description: 'RAIO X DE COLUNA LOMBO SACRA'
    },
    {
      id: 15,
      description: 'GAMA GT'
    },
    {
      id: 16,
      description: 'CARBOXIHEMOGLOBINA'
    },
    {
      id: 17,
      description: 'PLAQUETAS',
    },
    {
      id: 18,
      description: 'REAÇÃO DE VDRL (SIFILIS)'
    },
    {
      id: 19,
      description: 'AVALIAÇÃO OFTALMOLOGICA'
    },
    {
      id: 20,
      description: 'TESTE ERGOMÉTRICO'
    },
    {
      id: 21,
      description: 'CAPACIDADE VISUAL'
    },
    {
      id: 22,
      description: 'CREATININA (FUNCIONAMENTO RINS)'
    },
    {
      id: 23,
      description: 'FOSFATASE ALCALINA'
    },
    {
      id: 24,
      description: 'MACHADO GUERREIRO (CHAGAS)'
    },
    {
      id: 25,
      description: 'PARASITOLÓGICO DE FEZES'
    },
    {
      id: 26,
      description: 'RETICULOCITOS'
    },
    {
      id: 27,
      description: 'SUMARINO DE URINA/ROTINA DE URINA'
    },
    {
      id: 28,
      description: 'TRIGLICERIDIOS'
    },
    {
      id: 29,
      description: 'UREIA'
    },
    {
      id: 30,
      description: 'EXAME PSIQUIÁTRICO'
    },
    {
      id: 31,
      description: 'COAGULOGRAMA'
    },
    {
      id: 32,
      description: 'ÁCIDO HIPÚRICO E METIL HIPÚRICO'
    },
    {
      id: 33,
      description: 'ÁCIDO ÚRICO',
    },
    {
      id: 34,
      description: 'PSA (ANTÍGENO PROSTÁTICO)'
    },
    {
      id: 35,
      description: 'EAS (Elementos Anormais do Sedimento) - EXAME DE URINA'
    },
    {
      id: 36,
      description: 'EPF (Exame Parasitológico de Fezes)'
    },
    {
      id: 37,
      description: 'EPF (Exame Parasitológico de Fezes)'
    },
    {
      id: 38,
      description: 'EAS (elementos e sedimentos anormais) - EXAME DE URINA'
    },
    {
      id: 39,
      description: 'DOS. DE MANGANES (SANGUE)'
    },
    {
      id: 40,
      description: 'AVALIAÇÃO DE EQUILIBRIO (ROMBERG)'
    },
    {
      id: 41,
      description: 'LIPIDOGRAMA'
    },
    {
      id: 42,
      description: 'AUDIOMETRIA TONAL E VOCAL'
    },
    {
      id: 43,
      description: 'ACIDO TRANSMUCONICO'
    },
    {
      id: 44,
      description: 'PSA TOTAL'
    },
    {
      id: 45,
      description: 'RX COLUNA LOMBO_SACRA(3INC)'
    },
    {
      id: 46,
      description: 'RX COLUNA LOMBO_SACRA (3INC)'
    },
    {
      id: 47,
      description: 'RX TORAX PA OIT'
    },
    {
      id: 48,
      description: 'TONOMETRIA'
    },
    {
      id: 49,
      description: 'CONSULTA OFTALMOLOGICA REFRAÇÃO',
    },
    {
      id: 50,
      description: 'DOS. ÁCIDO TRANSMUCÔNICO'
    },
    {
      id: 51,
      description: 'FUNDOSCOPIA'
    },
    {
      id: 52,
      description: 'TESTE DE DALTONISMO'
    },
    {
      id: 53,
      description: 'AVALIAÇÃO ODOTOLOGICA'
    },
    {
      id: 54,
      description: 'ACIDO MANDELICO'
    },
    {
      id: 55,
      description: 'ACIDO HIPURICO'
    },
    {
      id: 56,
      description: 'ACIDO METIL HIPURICO'
    },
    {
      id: 57,
      description: 'ELETROCENFALOGRAMA'
    },
    {
      id: 58,
      description: 'HEMOGRAMA COMPLETO'
    },
    {
      id: 59,
      description: 'ESPERMOGRAMA'
    },
    {
      id: 60,
      description: 'ACETONA'
    },
    {
      id: 61,
      description: 'DOS. DE COBRE'
    },
    {
      id: 62,
      description: 'Realizar I.M.C. (Índice de Massa Corpórea)'
    },
    {
      id: 63,
      description: 'USG ABDOMINAL TOTAL'
    },
    {
      id: 64,
      description: 'COLESTEROL'
    },
    {
      id: 65,
      description: 'RAIO X MÃO DIREITA OBLÍQUO'
    },
    {
      id: 66,
      description: 'USG ABDOMINAL TOTAL'
    },
    {
      id: 67,
      description: 'GLICOSE'
    },
    {
      id: 68,
      description: 'CROMO'
    },
    {
      id: 69,
      description: 'GLICEMIA'
    },
    {
      id: 70,
      description: 'Anti-HVA-IgM'
    },
    {
      id: 71,
      description: 'GRUPO SANGUÍNEO E FATOR RH'
    },
    {
      id: 72,
      description: 'Hemograma com Plaquetometria + Reticulócitos'
    },
    {
      id: 73,
      description: 'ACIDO TRICLOROACÉTICO'
    },
    {
      id: 74,
      description: 'ACIDO TRICLOROCOMPOSTOS TOTAIS'
    },
    {
      id: 75,
      description: 'ACIDO DELTA AMINO LEVULÍNICO URINA'
    },
    {
      id: 76,
      description: 'ACIDO TRANS TRANS MUCÔNICO'
    },
    {
      id: 77,
      description: 'CHUMBO SERICO'
    },
    {
      id: 78,
      description: 'COBRE SERICO'
    },
    {
      id: 79,
      description: 'FERRO SÉRICO'
    },
    {
      id: 80,
      description: 'MANGANÊS SÉRICO'
    },
    {
      id: 81,
      description: 'NIGUEL URINA'
    },
    {
      id: 82,
      description: 'RX DE PUNHOS'
    },
    {
      id: 83,
      description: 'NIQUEL URINA'
    },
    {
      id: 84,
      description: 'HEXANODIONA 2,5'
    },
    {
      id: 85,
      description: 'RX DE COLUNA LOMBAR AP/P'
    },
    {
      id: 86,
      description: 'Níquel Sérico'
    },
    {
      id: 87,
      description: 'ZINCO SÉRICO'
    },
    {
      id: 88,
      description: 'METANOL URINA'
    },
    {
      id: 89,
      description: 'Mercúrio Urina'
    },
    {
      id: 90,
      description: 'vacina anti tetano'
    },
    {
      id: 91,
      description: 'VACINA ANTI-TÉTANO'
    },
    {
      id: 92,
      description: 'AVALIAÇÃO PSICOLÓGICA'
    },
    {
      id: 93,
      description: 'COLESTEROL HDL'
    },
    {
      id: 94,
      description: 'COLESTEROL LDL'
    },
    {
      id: 95,
      description: 'COLESTEROL VLDL'
    },
    {
      id: 96,
      description: 'FENOL URINÁRIO'
    },
    {
      id: 97,
      description: 'CAPACIDADE'
    },
    {
      id: 98,
      description: 'CAPACIDADE VISUAL'
    },
    {
      id: 99,
      description: 'Hemograma com Plaquetometria + Reticulócitos (CBC+Reticulocytes)'
    },
    {
      id: 100,
      description: 'CAPACIDADE VISUAL'
    },
    {
      id: 101,
      description: 'glicemia'
    },
    {
      id: 102,
      description: 'CREATINA'
    },
    {
      id: 103,
      description: 'ELETROCARDIOGRAMA'
    },
    {
      id: 104,
      description: 'GRUPO SAN'
    },
    {
      id: 105,
      description: 'ESPIROMETRIA'
    },
    {
      id: 106,
      description: 'HEMOGRAMA COM PLAQUETOMETRIA'
    },
    {
      id: 107,
      description: 'TESTE DE VISÃO DE CORES'
    },
    {
      id: 108,
      description: 'VHS'
    },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredUsers = exams.filter((user) => {
      const { id, description } = user;

      return (
        id.toString().includes(searchTerm) ||
        description.toLowerCase().includes(searchTerm) 
      );
    });

    // Filtra os usuários em ordem alfabética.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa esta vazia.
  const allUsers = searchValue === '' ? exams : sortedUsers;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da interface da página.
  return (
    <div className="container mx-auto py-3">
      <h1 className="text-2xl font-bold mb-4 mt-10">
        Configurações de Usuários
      </h1>
      {/* Botão de voltar para página anterior */}
      <div className="flex justify-start">
        <a href="/qsms/configuracoes" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
          Voltar
        </a>
      </div>

      {/* Barra de pesquisa. */}
      <div className="flex justify-end mb-10 mt-10">
        <div className="flex">
          <span className="mr-2 mt-2 font-bold">Pesquisar:</span>
          <input
            type="text"
            className="search"
            placeholder="Digite aqui..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Tabela com ID e descrições. */} 
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 w-10">
            <th className="h-10 border-b border-r text-center border-gray-300 pr-5">
              ID
            </th>
            <th className="border-b border-r text-center border-gray-300 pr-5">
              Descrição
            </th>
            <th className="border-b text-center border-gray-300 pr-5">Opções</th>
            <th className="border-b border-gray-300"></th>
          </tr>
        </thead>
        <tbody>
          {/* Renderiza as linhas da tabela com dados de usuários */}
          {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
            displayedUsers.map((user) => (
              <tr key={user.id}>
                <td className="border-b border-r text-center border-gray-300 pr-5">
                  {user.id}
                </td>
                <td className="border-b border-r text-center border-gray-300 pr-5">
                  {user.description}
                </td>
                <td className="border-b text-center border-gray-300 pr-4">
                  <div className="flex flex-row justify-center">
                    <button className="flex justify-center items-center px-2 py-2 ml-4 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300">
                      Editar
                    </button>
                    <button className="flex justify-center items-center px-2 py-2 ml-4 bg-red-700 hover:bg-red-500 rounded-lg text-white font-mono border border-gray-700 text-base transition duration-500 shadow-lg hover:shadow-xl active:shadow-2xl hover:text-gray-200 active:text-gray-200">
                      Excluir
                    </button>
                  </div>
                </td>
                <td className="border-b border-gray-300"></td>
              </tr>
            ))

            // Condição para caso não encontre o dado pesquisado, retorne a mensagem abaixo.
          ) : (
            <tr>
              <td colSpan="4">Nenhum exame encontrado.</td>
            </tr>
          )}

        </tbody>
      </table>
      {/* Botões de paginação */}
      <div className="flex justify-center mt-16">
        <button
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 px-4 py-3 mr-6"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Página Anterior
        </button>
        <button
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 px-4 py-2 mr-2"
          disabled={endIndex >= allUsers.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default ExamesPage;
