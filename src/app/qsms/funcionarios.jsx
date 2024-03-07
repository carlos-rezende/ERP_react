// Caminho da página: qsms/funcionarios

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional FuncionariosPage.
const FuncionariosPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;

  // Dados dos usuários
  const users = [
    {
        name: "CARLOS ELI REZENDE DE CAMPOS",
        costCenter: "TECNOLOGIA DA INFORMACAO - 110102010",
        role: "PROGRAMADOR JR",
        statusDocument: "PE-SMS-01 - SEDE",
        statusFunction: "OK",
        delayedExames: "0",
        expiredExamsxpiredThirty: "0",
        expiredExamsxpiredSixty: "1",
        expiredExamsxpiredNinety: "0",
        overdueTraining: "0",
        trainingOverdueThirty: "0",
        trainingOverdueSixty: "0",
        trainingOverdueNinety: "0",
      },
      {
        name: "GUILHERME FARIAS GOMES",
        costCenter: "TECNOLOGIA DA INFORMACAO - 110102010",
        role: "ESTAGIARIO TI",
        statusDocument: "Sem Documento",
        statusFunction: "Sem Documento",
        delayedExames: "Sem Documento",
        expiredExamsxpiredThirty: "Sem Documento",
        expiredExamsxpiredSixty: "Sem Documento",
        expiredExamsxpiredNinety: "Sem Documento",
        overdueTraining: "0",
        trainingOverdueThirty: "0",
        trainingOverdueSixty: "0",
        trainingOverdueNinety: "0",
      },
      {
        name: "BRUNO SOUZA SANTANA CAVALCANTE",
        costCenter: "TECNOLOGIA DA INFORMACAO - 110102010",
        role: "PROGRAMADOR JR",
        statusDocument: "PE-SMS-01 - SEDE",
        statusFunction: "OK",
        delayedExames: "0",
        expiredExamsxpiredThirty: "0",
        expiredExamsxpiredSixty: "1",
        expiredExamsxpiredNinety: "0",
        overdueTraining: "0",
        trainingOverdueThirty: "0",
        trainingOverdueSixty: "0",
        trainingOverdueNinety: "0",
      },
      {
        name: "JHONATAN CABRAL CORREA",
        costCenter: "TECNOLOGIA DA INFORMACAO - 110102010",
        role: "COORD DE TI",
        statusDocument: "Não",
        statusFunction: "SEDE-RJ",
        delayedExames: "0",
        expiredExamsxpiredThirty: "0",
        expiredExamsxpiredSixty: "0",
        expiredExamsxpiredNinety: "0",
        overdueTraining: "0",
        trainingOverdueThirty: "0",
        trainingOverdueSixty: "0",
        trainingOverdueNinety: "0",
      },
      {
        name: "BRUNO LEONARDO ROSA",
        costCenter: "INOVACOES - 110102019",
        role: "COORD INOV OTIMIZACA",
        statusDocument: "PE-SMS-01 - SEDE",
        statusFunction: "OK",
        delayedExames: "0",
        expiredExamsxpiredThirty: "0",
        expiredExamsxpiredSixty: "0",
        expiredExamsxpiredNinety: "0",
        overdueTraining: "0",
        trainingOverdueThirty: "0",
        trainingOverdueSixty: "0",
        trainingOverdueNinety: "0",
      },
      {
        name: "RONALD DE OLIVEIRA PEREIRA",
        costCenter: "LOGISTICA/SERVICOS GERAIS - 110102013",
        role: "COORD COMPRAS LOGISTICA",
        statusDocument: "PE-SMS-01 - SEDE",
        statusFunction: "OK",
        delayedExames: "0",
        expiredExamsxpiredThirty: "0",
        expiredExamsxpiredSixty: "0",
        expiredExamsxpiredNinety: "0",
        overdueTraining: "0",
        trainingOverdueThirty: "0",
        trainingOverdueSixty: "0",
        trainingOverdueNinety: "0",
      },
      {
        name: "ANA CAROLINA DE MENDONCA GARCIA",
        costCenter: "LOGISTICA/SERVICOS GERAIS - 110102013",
        role: 'ASSISTENTE COMPRAS',
        statusDocument: "PE-SMS-01 - SEDE",
        statusFunction: "OK",
        delayedExames: "0",
        expiredExamsxpiredThirty: "0",
        expiredExamsxpiredSixty: "1",
        expiredExamsxpiredNinety: "0",
        overdueTraining: "0",
        trainingOverdueThirty: "0",
        trainingOverdueSixty: "0",
        trainingOverdueNinety: "0",
      },
  ];

  // Função de manipulação de alteração da barra de pesquisa
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toUpperCase();
  
    const filteredUsers = users.filter((user) => {
      const {
        name,
        costCenter,
        role,
        statusDocument,
        statusFunction,
        delayedExames,
        expiredExamsxpiredThirty,
        expiredExamsxpiredSixty,
        expiredExamsxpiredNinety,
        overdueTraining,
        trainingOverdueThirty,
        trainingOverdueSixty,
        trainingOverdueNinety,
      } = user;
  
      const userFields = [
        name,
        costCenter,
        role,
        statusDocument,
        statusFunction,
        delayedExames,
        expiredExamsxpiredThirty,
        expiredExamsxpiredSixty,
        expiredExamsxpiredNinety,
        overdueTraining,
        trainingOverdueThirty,
        trainingOverdueSixty,
        trainingOverdueNinety,
      ];
  
      // Realiza a pesquisa tanto para strings quanto para números
      return userFields.some((field) => {
        if (typeof field === 'string') {
          return field.toUpperCase().includes(searchTerm);
        } else if (typeof field === 'number') {
          return field.toString().includes(searchTerm);
        }
        return false;
      });
    });
  
    const sortedUsers = [...filteredUsers].sort((a, b) => a.name - b.name);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa está vazia
  const allUsers = searchValue === '' ? users : sortedUsers;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);

  return (
    <div className="container py-3 w-full md:w-auto">
      <h1 className="text-2xl font-bold mb-4 mt-10">Lista de Funcionários</h1>

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

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 w-10">
              <th className="px-48 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Nome</th>
              <th className="px-48 border-r border-b border-gray-300 text-center whitespace-nowrap">Centro de Custo</th>
              <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Função</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Status Documento</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Status Função</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Exames Atrasados</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Vencendo em 30 dias</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Vencendo em 60 dias</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Vencendo em 90 dias</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Treinamentos Vencidos</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Vencendo em 30 dias</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Vencendo em 60 dias</th>
              <th className="px-14 border-r border-b border-gray-300 text-center whitespace-nowrap">Vencendo em 90 dias</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
              displayedUsers.map((user) => (
                <tr key={user.name}>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.name}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.costCenter}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-justify align-top w-full">{user.role}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.statusDocument}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.statusFunction}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.delayedExames}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.expiredExamsxpiredThirty}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.expiredExamsxpiredSixty}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.expiredExamsxpiredNinety}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.overdueTraining}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.trainingOverdueThirty}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.trainingOverdueSixty}</td>
                  <td className="px-2 py-3 border-r border-b border-gray-300 text-center align-top w-full">{user.trainingOverdueNinety}</td>
                    
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="px-6 py-4 border-gray-300">Nenhum dado encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-16">
        <button
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 px-4 py-3 mr-6"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Página Anterior
        </button>
        <button
          className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 px-4 py-2"
          disabled={endIndex >= allUsers.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default FuncionariosPage;