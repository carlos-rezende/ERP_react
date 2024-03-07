// Caminho da página: patrimonio/calibracao ou patrimonio/home/calibracao

'use client';

import { AiOutlineHistory, AiOutlineEdit, AiOutlineEye } from 'react-icons/ai';
import { RiAddFill } from 'react-icons/ri';

// Importa a dependência 'react'  e o hook 'useState' do React.
import React, { useState } from 'react';


// Componente funcional CalibracaoPage.
function CalibracaoPage() {
  // Define estados locais para armazenar dados do formulário.
  const [headOffice, setHeadOffice] = useState("");
  const [selectTheRegime, setSelectTheRegime] = useState("");
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 10;


    // Dados dos tipos.
    const types = [
      {
        type: "Acessório",
        application: "US",
        inUse: "Não",
        calibrated: "Não",
        costCenter: "ALMOXARIFADO",
        descriptionBrand: "BLOCO ESCALONADO - ?",
        owner: "QUALITEC",
        model: "Escal.(26x99)mm",
        serial: "?",
        regime: "Proprio QT",
        property: "QT-US-10/04",
        location: "Almo - MC",
        laboratory: "",
        certificate: "",
        calibrationDate: "",
        certifiedFile: "",
        firstUse: "",
        expirationDate: "",
        inCalibration: "Não",
        calibrationStartDate: "Data não informada",
        calibrationReturnDate: "Data não informada",
        supplier: "Fornecedor não localizado",
        cecoCalibration: "CECO não localizado",
        responsible: "Funcionário nao localizado",
        actions: "",
      },
      {
        type: "Acessório",
        application: "RG",
        inUse: "Não",
        calibrated: "Não",
        costCenter: "ALMOXARIFADO",
        descriptionBrand: "FITA DENSITOMETRICA - AGFA",
        owner: "QUALITEC",
        model: "SD 30",
        serial: "1506062",
        regime: "",
        property: "QT-RG-09/20",
        location: "Almo - MC",
        laboratory: "INTERMETRO",
        certificate: "0995/20",
        calibrationDate: "19/02/2020",
        certifiedFile: "",
        firstUse: "19/02/2020",
        expirationDate: "19/02/2021",
        inCalibration: "Não",
        calibrationStartDate: "Data não informada",
        calibrationReturnDate: "Data não informada",
        supplier: "Fornecedor não localizado",
        cecoCalibration: "CECO não localizado",
        responsible: "Funcionário nao localizado",
        actions: "",
      },
    ];

  // Filtra todos os usuários quando a caixa de pesquisa está vazia.
  const allUsers = searchValue === '' ? types : sortedUsers;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);


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
  
  // Função de manipulação de alteração da barra de pesquisa.
  const handleSearchChange = (user) => {
  const searchTerm = user.target.value.toLowerCase();

  // Filtra usuários com base no termo de pesquisa.
  const filteredUsers = types.filter((user) => {
    return Object.values(user).some((value) =>
      String(value).toLowerCase().includes(searchTerm)
    );
  });

  // Ordena os usuários filtrados por algum critério, se necessário.
  const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
  setSortedUsers(sortedUsers);
  setSearchValue(searchTerm);
};

  // Renderiza o formulário com campos e botões.
  return (
    <form onSubmit={handleSubmit} className='p-1'>
      <div className="flex items-center justify-center mt-32">
        <div className="w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-16 mt-10">Equipamentos Calibráveis</h1>

          {/* Botão para voltar para página anterior */}
          <div className="flex justify-end mt-10 mb-5">
            <a href="/patrimonio/home/" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
              Voltar
            </a>
          </div>

          {/* Barra de pesquisa. */}
          <div className="flex justify-end mb-16 mt-10">
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

          {/* Dropdown de seleção para o Sede e Regime. */}
          <div className="my-4 flex flex-wrap">
            <label htmlFor="headOffice" className="block text-sm font-bold text-gray-700 mt-3 mr-2">Selecione uma Descrição:</label>
            <select
              id="headOffice"
              name="headOffice"
              value={headOffice}
              onChange={(e) => setHeadOffice(e.target.value)}
              className="block mt-3 mb-10 w-52 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Selecione uma Descrição</option>
              <option value="1">ACFM</option>
              <option value="2">ACFM CORPO DE PROVA</option>
              <option value="3">ADR2000</option>
              <option value="4">ADR3000</option>
              <option value="5">ADR3000LITE</option>
              <option value="6">ADR4000</option>
              <option value="7">ALICATE AMPERIMETRO</option>
              <option value="8">ALICATE AMPERIMETRO DIGITAL</option>
              <option value="9">ALICATE VOLT-AMPERIMETRO</option>
              <option value="10">ANALISADOR DE GAS CO</option>
              <option value="11">ANALISADORDE GASES C/ IMPRESSORA</option>
              <option value="12">APARELHO ULTRASSOM</option>
              <option value="13">BALANÇA</option>
              <option value="14">BALANÇA ELETRÔNICA</option>
              <option value="15">BLOCO</option>
              <option value="16">BLOCO ESCALONADO AÇO CARBONO</option>
              <option value="17">BLOCO ASME 20</option>
              <option value="18">BLOCO ASME 38</option>
              <option value="19">BLOCO BOLO DE NOIVA</option>
              <option value="20">BLOCO CILINDRICO</option>
              <option value="21">BLOCO CURVO 1" 1/2 AÇO CARBONO</option>
              <option value="22">BLOCO CURVO 12" 50,50mm AÇO CARBONO</option>
              <option value="23">BLOCO CURVO 2" 1/2 AÇO CARBONO</option>
              <option value="24">BLOCO CURVO 3" 1/2 AÇO CARBONO</option>
              <option value="25">BLOCO CURVO 6" 1/2 AÇO CARBONO</option>
              <option value="26">BLOCO CURVO API</option>
              <option value="27">BLOCO CURVO ASME</option>
              <option value="28">BLOCO CURVO ASME - AÇO CARBONO</option>
              <option value="29">BLOCO CURVO ESCALONADO</option>
              <option value="30">BLOCO DE REFERÊNCIA</option>
              <option value="31">BLOCO DE REFERÊNCIA - 10 X 80 X 200mm - PLANO</option>
              <option value="32">BLOCO DS</option>
              <option value="33">BLOCO DSC</option>
              <option value="34">BLOCO DUREZA HB</option>
              <option value="35">BLOCO DUREZA HRC</option>
              <option value="36">BLOCO DUREZA VK</option>
              <option value="37">BLOCO ESCALONADO</option>
              <option value="38">BLOCO ESCALONADO PLANO</option>
              <option value="39">BLOCO ESCALONADO RADIOGRAFIA DIGITAL</option>
              <option value="40">BLOCO FURO RADIOGRAFIA DIGITAL</option>
              <option value="41">BLOCO IOW</option>
              <option value="42">BLOCO IOW</option>
              <option value="43">BLOCO MASSA</option>
              <option value="44">BLOCO PADRÃO DE CALIBRAÇÃO P/ PMI BUNKER S1 SORTER</option>
              <option value="45">BLOCO PADRÃO</option>
              <option value="46">BLOCO PADRÃO COMPOSTO</option>
              <option value="47">BLOCO PADRÃO DSU AWS</option>
              <option value="48">BLOCO PLANO</option>
              <option value="49">BLOCO PLANO AÇO CARBONO</option>
              <option value="50">BLOCO PLANO ASME</option>
              <option value="51">BLOCO PLANO ASME 20</option>
              <option value="52">BLOCO PLANO ASME 38</option>
              <option value="53">BLOCO PLANO ASME 75</option>
              <option value="54">BLOCO PLANO RTD</option>
              <option value="55">BLOCO RC AWS</option>
              <option value="56">BLOCO REFERÊNCIA</option>
              <option value="57">BLOCO US AUTOMÁTICO-AÇO CARBONO</option>
              <option value="58">BLOCO V1</option>
              <option value="59">BLOCO V1 AÇO CARBONO</option>
              <option value="60">BLOCO V1 AÇO CARBONO A36</option>
              <option value="61">BLOCO V2</option>
              <option value="62">BLOCO V2 AÇO CARBONO</option>
              <option value="63">CALIBRADOR DE PNEU</option>
              <option value="64">CALIBRE DE SOLDA</option>
              <option value="65">CALIBRE DE SOLDA FTBS</option>
              <option value="66">CALIBRE DE SOLDA HILO</option>
              <option value="67">CALIBRE SOLDA</option>
              <option value="68">CELULAR DE CARGA - 25 T</option>
              <option value="69">CELULAR DE CARGA - 25 TON</option>
              <option value="70">CELULAR DE CARGA - 25 TON / K2-1020</option>
              <option value="71">CORRELACIONADOR</option>
              <option value="72">CRONÔMETRO</option>
              <option value="73">CRONÔMETRO DIGITAL</option>
              <option value="74">DECIBELIMETRO</option>
              <option value="75">DENSITOMETRO</option>
              <option value="76">DETECTOR DE GAS</option>
              <option value="77">DETECTOR DE TENSÃO BT 50V-600V</option>
              <option value="78">DIGITAL ULTRASONIC FLAW DTECTOR</option>
              <option value="79">DIGITALIZADOR FILME</option>
              <option value="80">DIGITALIZADOR TELA FOSFORO</option>
              <option value="81">DIGITALIZADOR TELA FOSFORO - GE</option>
              <option value="82">DOPPLER PHASED</option>
              <option value="83">DOPPLER FLXCAN</option>
              <option value="83">DURÔMETRO DIGITAL</option>
              <option value="84">EDDY CURRENT</option>
              <option value="85">ESCALA DE AÇO</option>
              <option value="87">ESCALA DE ACRILICO</option>
              <option value="88">ESFERA DE AÇO</option>
              <option value="89">FILME PADRÃO</option>
              <option value="90">FITA DENSITOMETRICA</option>
              <option value="91">HARDWARE</option>
              <option value="92">HEXCORDER</option>
              <option value="92">HIDROMETRO</option>
              <option value="93">HOLIDAY DETECTOR</option>
              <option value="94">IQI FIO DUPLO</option>
              <option value="95">LOCALIZADOR DE TUBULAÇÃO METALICAS</option>
              <option value="96">LOCALIZADOR TUBO NÃO METAL</option>
              <option value="97">LUMINÁRIA LUZ NEGRA</option>
              <option value="98">LUXÍMETRO</option>
              <option value="99">LUXÍMETRO DIGITAL</option>
              <option value="100">MANOMETRO</option>
              <option value="101">MASSA PADRÃO</option>
              <option value="102">MEDIDOR CAMPO MAGNÉTICO RESIDUAL</option>
              <option value="103">MEDIDOR DE CAMADA UMIDA</option>
              <option value="104">MEDIDOR DE CAMPO MAGNÉTICO</option>
              <option value="105">MEDIDOR DE ESPESSURA</option>
              <option value="106">MEDIDOR DE ESPESSURA DE CAMADA DE REVESTIMENTO SECO</option>
              <option value="107">MEDIDOR DE PELÍCULA DE TINTA</option>
              <option value="108">MEDIDOR DE RESISTIVIDADE DO SOLO</option>
              <option value="109">MEDIDOR DE VAZÃO</option>
              <option value="110">MEDIDOR LUZ NEGRA</option>
              <option value="111">MEDIDOR DE TEMPERATURA</option>
              <option value="112">MICROMETRO</option>
              <option value="113">MONITOR 19"</option>
              <option value="114">MONITOR 20"</option>
              <option value="115">MONITOR AREA</option>
              <option value="116">MONITOR AREA FIXO</option>
              <option value="117">MONITOR PESSOAL</option>
              <option value="118">MONITOR VÍDEO</option>
              <option value="119">MULTÍMETRO</option>
              <option value="120">MULTÍMETRO</option>
              <option value="121">MULTÍMETRO</option>
              <option value="122">MULTÍMETRO DIGITAL</option>
              <option value="123">MULTÍMETRO DIGITAL - MINIPA</option>
              <option value="124">NEGATOSCOPIO</option>
              <option value="125">OMNISCAN MX2</option>
              <option value="126">PAQUÍMETRO</option>
              <option value="127">PAQUÍMETRO DE PROFUNDIDADE</option>
              <option value="128">PAQUÍMETRO DIGITAL</option>
              <option value="129">PAQUÍMETRO PROFUNDIDADE DE SULCO PNEU</option>
              <option value="130">PAQUÍMETRO UNIVERSAL</option>
              <option value="131">PARAFUSO ULTRASSÔNICO DE MATRIZ DE FASES</option>
              <option value="132">PASTILHA SENSORA</option>
              <option value="133">PCM</option>
              <option value="134">PHASED ARRAY</option>
              <option value="135">PHASED ARRAY - FLEXCAN 32/64</option>
              <option value="136">PMI - ESPECTOGRAMA RAIO - X</option>
              <option value="137">RÉGUA</option>
              <option value="138">RÉGUA GRADUADA</option>
              <option value="139">RMS2 ESCANER</option>
              <option value="140">RMS2 MÓDULO</option>
              <option value="141">SISTEMA INTEGRADO DE INSPEÇÃO</option>
              <option value="142">TELA FOSFORO</option>
              <option value="143">TERMOHIGROMETRO</option>
              <option value="144">TERMOHIGROMETRO - VIDRO</option>
              <option value="145">TERMÔMETRO DE LÍQUIDO EM VIDRO</option>
              <option value="146">TERMÔMETRO DE VIDRO</option>
              <option value="147">TERMÔMETRO DIGITAL</option>
              <option value="148">TERMÔMETRO DIGITAL INFRAVERMELHO</option>
              <option value="149">TERMÔMETRO INFRAVERMELHO</option>
              <option value="150">TERMOVISOR</option>
              <option value="151">TERRÔMETRO DIGITAL</option>
              <option value="152">TRANSDUTOR</option>
              <option value="153">TRANSFERIDOR DE ÂNGULO</option>
              <option value="154">TRENA</option>
              <option value="155">TRENA A LASER</option>
              <option value="156">TRENA FIBRA DE VIDRO</option>
              <option value="157">TUBO DECANTADOR</option>
              <option value="158">USM GO+</option>
              <option value="159">VOLTÍMETRO REGISTRADOR</option>
              <option value="160">YOKE</option>
              <option value="161">YOKE Y6 220 V</option>
            </select>

            <div className="my-4 flex flex-wrap ml-auto mb-10">
              <label htmlFor="headOffice" className="block text-sm font-bold text-gray-700 mr-2">
                Vencimento em Dias:
              </label>
              <select
                id="selectTheRegime"
                name="selectTheRegime"
                value={selectTheRegime}
                onChange={(e) => setSelectTheRegime(e.target.value)}
                className="block w-60 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>Vencimento em Dias</option>
                <option value="1">Vencido</option>
                <option value="2">30 dias</option>
                <option value="3">60 dias</option>
                <option value="5">Calibrados</option>
                <option value="6">Em Calibração</option>
              </select>
            </div>

            <div className="my-4 flex items-center">
              <label htmlFor="selectTheRegime" className="mr-2 text-sm font-bold text-gray-700">
                Selecione o Regime:
              </label>
              <select
                id="selectTheRegime"
                name="selectTheRegime"
                value={selectTheRegime}
                onChange={(e) => setSelectTheRegime(e.target.value)}
                className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="" disabled>Selecione o regime</option>
                <option value="1">Próprio QT</option>
                <option value="2">Alugado QT</option>
                <option value="3">Próprio K2</option>
                <option value="5">Alugado K2</option>
              </select>
            </div>

            <div className="justify-center ml-auto mt-20">
              <label htmlFor="data" className="sr-only">Data</label>
              <input type="date" name="data" title="data" id="data" className="w-full text-center py-2 px-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500" />
                <p className="text-center">Até</p>
              <label htmlFor="data" className="sr-only">Data</label>
              <input type="date" name="data" title="data" id="data" className="w-full text-center py-2 px-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500" />
            </div>


            <div className="my-4 flex items-center">
              <label htmlFor="selectTheRegime" className="mr-2 text-sm font-bold text-gray-700 ml-16">
                Selecione o Regime:
              </label>
              <select
                id="selectTheRegime"
                name="selectTheRegime"
                value={selectTheRegime}
                onChange={(e) => setSelectTheRegime(e.target.value)}
                className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="" disabled>Localização</option>
                <option value="1">Todas</option>
                <option value="2">SEDE</option>
                <option value="3">MG</option>
                <option value="4">MC</option>
                <option value="5">BA</option>
                <option value="6">RN</option>
                <option value="7">AM</option>
                <option value="8">RJ</option>
                <option value="9">ES</option>
                <option value="10">PR</option>
                <option value="11">TB</option>
                <option value="12">NOR GNF</option>
                <option value="13">NOR COELCE</option>
                <option value="14">NOR GPG</option>
                <option value="15">NOR COELBA</option>
                <option value="16">NOR EPE</option>
                <option value="17">NOR ELETRICA</option>
                <option value="18">AL</option>
                <option value="19">MS</option>
                <option value="20">PA</option>
                <option value="21">PE</option>
                <option value="22">PA-Mil</option>
                <option value="23">SE</option>
                <option value="24">ESOP</option>
                <option value="25">SG</option>
                <option value="26">ANDT GNF</option>
                <option value="27">NOR</option>
                <option value="28">PC</option>
                <option value="29">TEN</option>
                <option value="30">SEDE-RJ</option>
                <option value="31">K2-DIR</option>
                <option value="32">SP</option>
                <option value="33">K2-IND</option>
                <option value="34">K2-DES</option>
                <option value="35">GER SUL</option>
                <option value="36">RJ-LOG</option>
                <option value="37">GO</option>
                <option value="38">LIC RJ</option>
                <option value="39">RJ TRANSPETRO</option>
                <option value="40">GPS</option>
                <option value="41">MA</option>
                <option value="42">ALMO - MG</option>
                <option value="43">ALMO - MC</option>
                <option value="44">SGI/SMS</option>
                <option value="45">PROJ - K2</option>
                <option value="46">RR</option>
                <option value="47">MC COMPARTILHADO</option>
                <option value="48">RJ</option>
                <option value="49">DIVISÃO MECÂNICA</option>
                <option value="50">UN - NOR - INSP ENEL GO 2</option>
                <option value="51">CE</option>
                <option value="52">RH</option>
                <option value="53">RJ</option>
                <option value="54">NTS</option>
              </select>
            </div>

            <div className="overflow-x-auto mt-16">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-28 h-10 border-r border-b border-gray-300 text-center whitespace-nowrap">Tipo</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Aplicação</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Em Uso</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Calibrado</th>
                    <th className="px-48 border-r border-b border-gray-300 text-center whitespace-nowrap">Centro de Custo</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Descrição - Marca</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Proprietário</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Modelo</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Serial</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Regime</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Patrimônio</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Localização</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Laboratório</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Certificado</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Data Calibração</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Arquivo Certificado</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Primeiro Uso</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Vencimento</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Em Calibração</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Data Início Calibração</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Data Retorno Calibração</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Fornecedor</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">CECO Calibração</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Responsável</th>
                    <th className="px-28 border-r border-b border-gray-300 text-center whitespace-nowrap">Ações</th>
                  </tr>
                </thead>
                
                <tbody>
                  {/* Renderiza as linhas da tabela com dados de usuários */}
                  {Array.isArray(displayedUsers) && displayedUsers.length > 0 ? (
                    displayedUsers.map((user, index) => (
                      <tr key={index}>
                          <td className="border-b border-r text-center border-gray-300 pr-5">
                            {user.type}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.application}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.inUse}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.calibrated}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.costCenter}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.descriptionBrand}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.owner}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.model}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.serial}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.regime}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.property}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.location}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.laboratory}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.certificate}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.calibrationDate}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.certifiedFile}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.firstUse}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.expirationDate}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.inCalibration}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.calibrationStartDate}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.calibrationReturnDate}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.supplier}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.cecoCalibration}
                            </td>
                            <td className="border-b border-r text-center border-gray-300 pr-5">
                                {user.responsible}
                            </td>
                            <td className="border-b text-center border-gray-300 pr-4">
                            {/* Ícones de exibir histórico, criar calibração, editar e visualizar. */}
                            <div className="flex items-center justify-center">
                              <div className="bg-green-500 p-2 rounded-lg mt-2 mb-2 flex">
                                <button className="flex items-center justify-center" title="Exibir Histórico">
                                  <AiOutlineHistory />
                                </button>
                              </div>
                              <div className="bg-gray-300 p-2 rounded-lg ml-2 mt-2 mb-2">
                                <button className="flex items-center justify-center" title="Criar Calibração">
                                  <RiAddFill />
                                </button>
                              </div>
                              <div className="bg-teal-600 p-2 rounded-lg ml-2 mt-2 mb-2">
                                <button className="flex items-center justify-center" title="Editar">
                                  <AiOutlineEdit />
                                </button>
                              </div>
                              <div className="bg-blue-400 p-2 rounded-lg ml-2 mt-2 mb-2">
                                <button className="flex items-center justify-center" title="Visualizar Equipamento">
                                  <AiOutlineEye />
                                </button>
                              </div>
                            </div> 
                        </td>
                        </tr>
                    ))
                    // Condição para caso não encontre o dado pesquisado, retorne a mensagem abaixo.
                    ) : (
                    <tr>
                        <td colSpan="11" className="px-6 py-4 border-gray-300">Nenhum dado encontrado.</td>
                    </tr>
                    )}
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
      </div>
    </form>
  );
}

export default CalibracaoPage;