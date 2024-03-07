// Caminho da página: qsms/configuracoes/epis

'use client';

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional EpisPage.
const EpisPage = () => {
  // Estados para o valor da pesquisa, página atual e usuários ordenados.
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 20;


  // Dados dos usuários.
  const users = [
    // Seus dados de usuário aqui
    {
      id: 1,
      description: 'CAPACETE CLASSE B',
      ca: 498,
      expiry: '27-03-2018'
    },
    {
      id: 2,
      description: 'LUVA DE VAQUETA',
      ca: 11711,
      expiry: '07-10-2016'
    },
    {
      id: 3,
      description: 'PROTETOR AURICULAR TIPO PLUG',
      ca: 13027,
      expiry: '28-02-2018'
    },
    {
      id: 4,
      description: 'ÓCULOS DE SEGURANÇA INCOLOR',
      ca: 14990,
      expiry: '07-03-2028'
    },
    {
      id: 5,
      description: 'ÓCULOS DE SEGURANÇA FUMÊ',
      ca: 14990,
      expiry: '13-01-2020'
    },
    {
      id: 6,
      description: 'BOTINA DE SEGURANÇA C/ BIQ COMPOSITE',
      ca: 18056,
      expiry: '17-02-2017'
    },
    {
      id: 7,
      description: 'PERNEIRA CONF EM COURO SINTÉTICO',
      ca: 21270,
      expiry: '24-03-2019'
    },
    {
      id: 8,
      description: 'PROTETOR AURICULAR TIPO CONCHA',
      ca: 28089,
      expiry: '26-10-2020'
    },
    {
      id: 9,
      description: 'MÁSCARA PFF2 CONTRA POEIRAS E FUMOS MET',
      ca: 10578,
      expiry: '19-06-2017'
    },
    {
      id: 10,
      description: 'CINTO DE SEG TIPO PARA-QUEDISTA',
      ca: 11653,
      expiry: '04-04-2016'
    },
    {
      id: 11,
      description: 'ÓCULOS DE SEGURANÇA DANNY',
      ca: 9722,
      expiry: '26-11-2017'
    },
    {
      id: 12,
      description: 'ÓCULOS AMPLA VISAO',
      ca: 19072,
      expiry: '24-02-2019'
    },
    {
      id: 13,
      description: 'RESPIRADOR PURIF AR TIPO PEÇA SEMIFACIAL 3M',
      ca: 4115,
      expiry: '25-05-2020'
    },
    {
      id: 14,
      description: 'PROTETOR AURICULAR TIPO PLUG ULTRA MASTER',
      ca: 10043,
      expiry: '02-08-2016'
    },
    {
      id: 15,
      description: 'LUVA DE MALHA ALG REVEST LATEX - PROMAT',
      ca: 3814,
      expiry: '27-03-2018'
    },
    {
      id: 16,
      description: 'LUVA NITRILICA',
      ca: '00000',
      expiry: '29-04-2019'
    },
    {
      id: 17,
      description: 'LUVA DE LATEX NATURAL',
      ca: 6656,
      expiry: '30-09-2019'
    },
    {
      id: 18,
      description: 'LUVA DE BORRACHA NITRILICA - PROMAT',
      ca: 31944,
      expiry: '27-12-2017'
    },
    {
      id: 19,
      description: 'ÓCULOS DE SEGURANÇA - POLI-FERR',
      ca: 34082,
      expiry: '24-12-2018'
    },
    {
      id: 20,
      description: 'CAPACETE CLASSE A - ALPINISMO - MONTANA',
      ca: 14816,
      expiry: '09-12-2016'
    },
    {
      id: 21,
      description: 'CAPA DE CHUVA',
      ca: 28622,
      expiry: '08-04-2016'
    },
    {
      id: 22,
      description: 'BOTA DE BORRACHA CANO LONGO',
      ca: 737,
      expiry: '14-08-2018'
    },
    {
      id: 23,
      description: 'BOTINA TIPO COTUNO S/BIQUEIRA DE AÇO',
      ca: 17629,
      expiry: '15-12-2016'
    },
    {
      id: 24,
      description: 'CINTO DE SEGURANÇA/DISPOSITIVO TRAVA QUEDAS',
      ca: '0000000',
      expiry: '30-11-0001'
    },
    {
      id: 25,
      description: 'MACACÃO RF',
      ca: '00000',
      expiry: '30-04-2019'
    },
    {
      id: 26,
      description: 'BOTA',
      ca: '00000',
      expiry: '30-04-2019'
    },
    {
      id: 27,
      description: 'PROTETOR AURICULAR',
      ca: '00000',
      expiry: '30-04-2019'
    },
    {
      id: 28,
      description: 'ÓCULOS DE SEGURANÇA',
      ca: '00000',
      expiry: '30-04-2019'
    },
    {
      id: 29,
      description: 'CAPACETE COM JUGULAR',
      ca: '00000',
      expiry: '30-11-0001'
    },
    {
      id: 30,
      description: 'MÁSCARA SEMIFACIAL',
      ca: '00000',
      expiry: '30-04-2019'
    },
    {
      id: 31,
      description: 'CINTO TIPO PARAQUEDISTA',
      ca: '00000',
      expiry: '30-04-2019'
    },
    {
      id: 32,
      description: 'TALABARTE DUPLO',
      ca: '00000',
      expiry: '30-04-2019'
    },
    {
      id: 33,
      description: 'LUVA VAQUETA',
      ca: '00000',
      expiry: '30-04-2019	'
    },
    {
      id: 34,
      description: 'LUVA PIGMENTADA',
      ca: '00000',
      expiry: '30-04-2019'
    },
    {
      id: 35,
      description: 'MÁSCARA PFF2',
      ca: '00000',
      expiry: '30-04-2019'
    },
    {
      id: 36,
      description: 'LUVA NITRÍLICA',
      ca: '00000',
      expiry: '30-04-2019'
    },
    {
      id: 37,
      description: 'CAPACETE',
      ca: '000000',
      expiry: '31-07-2020'
    },
    {
      id: 38,
      description: 'PROTETOR FACIAL',
      ca: 1234,
      expiry: '23-09-2020'
    },
    {
      id: 39,
      description: 'GEL ANTISSÉPTICO',
      ca: '00000',
      expiry: '23-09-2020'
    },
    {
      id: 40,
      description: 'MÁSCARA DE PANO',
      ca: '00000',
      expiry: '23-09-2020'
    },
    {
      id: 41,
      description: 'MACACÃO TAYVEK',
      ca: '00000',
      expiry: '10-10-2019'
    },
    {
      id: 42,
      description: 'LUVA DE LATEX',
      ca: '00000',
      expiry: '06-10-2019'
    },
    {
      id: 43,
      description: 'BLUSA',
      ca: '00000',
      expiry: '15-09-2020'
    },
    {
      id: 44,
      description: 'MASCARA DE AR FACIAL INTEIRA',
      ca: '00000',
      expiry: '19-12-2020'
    },
    {
      id: 45,
      description: 'MÁSCARA DE AR PARA FUGA',
      ca: '00000',
      expiry: '19-12-2020'
    },
    {
      id: 46,
      description: 'OMBREIRA',
      ca: '00000',
      expiry: '19-12-2020'
    },
    {
      id: 47,
      description: 'LUVA PARA PROTEÇÃO CONTRA AGENTES MECÂNICOS',
      ca: 15578,
      expiry: '28-03-2018'
    },
    {
      id: 48,
      description: 'LUVA ISOLANTE DE BORRACHA',
      ca: '00000',
      expiry: '16-03-2021'
    },
    {
      id: 49,
      description: 'CALÇA RF LARANJA',
      ca: 31871,
      expiry: '12-12-2021'
    },
    {
      id: 50,
      description: 'JALECO RF LARANJA',
      ca: 31866,
      expiry: '12-12-2021'
    },
    {
      id: 51,
      description: 'CAMISAS MANGA LONGA',
      expiry: '08-04-2021'
    },
    {
      id: 52,
      description: 'CALÇA',
      expiry: '08-04-2021'
    },
    {
      id: 53,
      description: 'PROTETOR SOLAR',
      expiry: '14-04-2021'
    },
    {
      id: 54,
      description: 'ÁLCOOL GEL 70°',
      expiry: '14-04-2021'
    },
    {
      id: 55,
      description: 'ÁLCOOL LÍQUIDO 70°',
      expiry: '14-04-2021'
    },
    {
      id: 56,
      description: 'PROTETOR FACIAL ACRÍLICO',
      expiry: '14-04-2021'
    },
    {
      id: 57,
      description: 'LUVA COBERTURA',
      ca: 30370,
      expiry: '14-04-2021'
    },
    {
      id: 58,
      description: 'LUVA DE BORRACHA ISOLANTE CLASSE 0,par',
      ca: 29775,
      expiry: '14-04-2021'
    },
    {
      id: 59,
      description: 'MANGA DE BORRACHA ISOLANTE,CLASSE "0" 1,par',
      ca: 29588,
      expiry: '14-04-2021'
    },
    {
      id: 60,
      description: 'UNIFORME ANTICHAMA COMUM /JALECO',
      ca: 39403,
      expiry: '14-04-2021'
    },
    {
      id: 61,
      description: 'UNIFORME ANTICHAMA COMUM / CALÇA',
      ca: 39111,
      expiry: '14-04-2021'
    },
    {
      id: 62,
      description: 'CALÇADO DE SEGURANÇA SEM PARTES METÁLICAS',
      ca: 38396,
      expiry: '14-04-2021'
    },
    {
      id: 63,
      description: 'CAPACETE ABA FRONTAL',
      ca: 29638,
      expiry: '14-04-2021'
    },
    {
      id: 64,
      description: 'SUSPENSÃO PARA CAPACETE',
      ca: 29637,
      expiry: '14-04-2021'
    },
    {
      id: 65,
      description: 'VISEIRA',
      ca: 15920,
      expiry: '14-04-2021'
    },
    {
      id: 66,
      description: 'LUVA POLIÉSTER',
      ca: 29014,
      expiry: '14-04-2021'
    },
    {
      id: 67,
      description: 'BOTINA TIPO B',
      ca: 41423,
      expiry: '14-04-2021'
    },
    {
      id: 68,
      description: 'GARMIN ETREX 10',
      expiry: '14-04-2021'
    },
    {
      id: 69,
      description: 'CALÇADO TIPO BOTINA',
      ca: 62624,
      expiry: '22-04-2021	'
    },
    {
      id: 70,
      description: 'CAMISA DE MALHA',
      expiry: '26-04-2021'
    },
    {
      id: 71,
      description: 'CAPACETE CLASSE B',
      ca: 498,
      expiry: '27-04-2021'
    },
    {
      id: 72,
      description: 'CAPACETE CLASSE A',
      ca: 29637,
      expiry: '27-04-2021'
    },
    {
      id: 73,
      description: 'ÓCULOS DE SOL',
      ca: 15298,
      expiry: '27-04-2021'
    },
    {
      id: 74,
      description: 'PERNEIRA',
      ca: 14750,
      expiry: '27-04-2021'
    },
    {
      id: 75,
      description: 'ÓCULOS DE PROTEÇÃO CINZA',
      expiry: '27-04-2021'
    },
    {
      id: 76,
      description: 'lUVAS DE RASPA',
      expiry: '27-04-2021'
    },
    {
      id: 77,
      description: 'UNIFORME',
      expiry: '27-04-2021'
    },
    {
      id: 78,
      description: 'BOLSA PARA EPI',
      expiry: '27-04-2021'
    },
    {
      id: 79,
      description: 'BOLSA PARA LUVAS',
      expiry: '27-04-2021'
    },
    {
      id: 80,
      description: 'PROTETOR FACIAL COM VISEIRA',
      expiry: '27-04-2021'
    },
    {
      id: 81,
      description: 'CAPACETE DE SEGURANÇA ABA FRONTAL',
      expiry: '27-04-2021'
    },
    {
      id: 82,
      description: 'LUVAS ISOLANTES CLASSE 0',
      expiry: '27-04-2021'
    },
    {
      id: 83,
      description: 'BOTAS DE SEGURANÇA',
      ca: 28848,
      expiry: '11-09-2025'
    },
    {
      id: 84,
      description: 'FARDA',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 85,
      description: 'CINTO DE SEGURANÇA CONTRA QUEDAS',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 86,
      description: 'TRAVAQUEDAS',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 87,
      description: 'CAPACETE DE PROTEÇÃO',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 88,
      description: 'MÁSCARA DE FUGA',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 89,
      description: 'ÓCULOS DE SEGURANÇA',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 90,
      description: 'PROTETOR SOLAR',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 91,
      description: 'PROTETOR AURICULAR TIPO PLUG',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 92,
      description: 'RESPIRADOR FACIAL',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 93,
      description: 'BOTAS DE SEGURANÇA ISOLANTE',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 94,
      description: 'LUVAS DE PROTEÇÃO',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 95,
      description: 'MÁSCARA COM FILTRO QUÍMICO',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 96,
      description: 'LUVAS ISOLANTES DE BORRACHA',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 97,
      description: 'CAPACETE DE PROTEÇÃO ISOLANTE CLASSE B',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 98,
      description: 'RESPIRADOR SEMIFACIAL (PFF2)',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 99,
      description: 'UNIFORME OPERACIONAL',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 100,
      description: 'MÁSCARA DE FUGA',
      ca: 0,
      expiry: '01-01-2030'
    },
    {
      id: 101,
      description: 'AUSÊNCIA DE EPI PARA O RISCO IDENTIFICADO',
      ca: '0000000000001',
      expiry: '30-11-0001'
    },
  ];

  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredUsers = users.filter((user) => {
      const { id, description } = user;

      return (
        id.toString().includes(searchTerm) ||
        description.toLowerCase().includes(searchTerm) 
      );
    });

    // Ordena os usuários pela data de inclusão.
    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa esta vazia.
  const allUsers = searchValue === '' ? users : sortedUsers;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  // Renderização da interface da página.
  return (
    <div className="container mx-auto py-3">
      <h1 className="text-2xl font-bold mb-4 mt-6">
        Lista de EPI's cadastrados
      </h1>

      {/* Botão para voltar a página anterior */}
      <div className="flex justify-between">
        <a href="/qsms/configuracoes" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
          Voltar
        </a>
      </div>

      {/* Tabela com as descrições dos equipamentos. */}
      <table className="border-collapse border mt-10 border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              <label htmlFor="descricaoEPI" className="sr-only">Descrição do EPI</label>
              <input type="text" name="descricaoEpi" title='descrição do epi' id="descricaoEPI" placeholder='Descrição do EPI' className="w-full py-2 px-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500" />
            </th>
            
            <th className="border border-gray-300 px-4 py-2">
              <label htmlFor="numero" className="sr-only">Número C.A.</label>
              <input type="text" name="numero" title='número do c.a' id="numero" placeholder='Número C.A.' className="w-full py-2 px-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500" />
            </th>

            <th className="border border-gray-300 px-4 py-2">
              <label htmlFor="data" className="sr-only">Data</label>
              <input type="date" name="data" title='data' id="data" className="w-full py-2 px-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500" />
            </th>

            <th className="border border-gray-300 px-4 py-2">
              <button type="submit" title='cadastrar' className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
                Cadastrar
              </button>
            </th>
          </tr>
        </thead>
      </table>

      {/* Barra de pesquisa. */}
      <div className="flex justify-end mb-10 mt-10">
        <div className="flex mb-1">
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

      {/* Tabela com as descrições dos equipamentos. */} 
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 w-10">
            <th className="h-10 border-b border-r text-center border-gray-300 pr-5">
              ID
            </th>
            <th className="border-b border-r text-center border-gray-300 pr-5">
              Descrição
            </th>
            <th className="border-b border-r text-center border-gray-300 pr-5">
              C.A.
            </th>
            <th className="border-b border-r text-center border-gray-300 pr-5">
              Validade
            </th>
            <th className="border-b text-center border-gray-300 pr-5">
              Opções
            </th>
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
              <td className="border-b border-r text-center border-gray-300 pr-5">
                {user.ca}
              </td>
              <td className="border-b border-r text-center border-gray-300 pr-5">
                {user.expiry}
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

      {/* Botões de navegação - página anterior e próxima página */}
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

export default EpisPage;
