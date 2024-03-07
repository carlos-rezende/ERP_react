// Aqui estão TODAS as rotas para as páginas. React Route é uma biblioteca para lidar com a navegação
// entre as páginas do projeto. Ele diz ao React qual componente deve ser renderizado quando a URL 
// tem um determinado caminho. Renderiza MUITO mais rápido às páginas.

import { Route, Routes } from "react-router-dom"; // Importamos o Route e Routes
import RootLayout from "./layouts/RootLayout"; // Caminho para página

//------------------------------------------------------------------------------------------------------
// Página Principal
import PagePrincipal from "./pages/PagePrincipal";
//------------------------------------------------------------------------------------------------------
// Administrador
import AdminHomePage from "./app/admin/adminHome";
import Cadastro from "./app/admin/cadastro";
import EditarUser from "./app/admin/editarUser";
import ModulosPage from "./app/admin/modulos";
//------------------------------------------------------------------------------------------------------
// QSMS
import ExamesPage from "./app/qsms/exames";
import EpisPage from "./app/qsms/epis";
import FuncoesPage from "./app/qsms/funcoes";
import RelatoriosPage from "./app/qsms/relatorios";
import FuncaoCadastro from "./app/qsms/funcaoCadastro";
import PpraPage from "./app/qsms/ppra";
import PpraCadastro from "./app/qsms/ppraCadastro";
import ControleAsos from "./app/qsms/controleAso";
import OrdensServico from "./app/qsms/ordensServico";
import PesquisasPage from "./app/qsms/pesquisas";
import RelatoriodeAso from "./app/qsms/relatoriodeAso";
import PesquisarPcmso from "./app/qsms/pesquisarPcmso";
import PesquisarPpra from "./app/qsms/pesquisarPpra";
import FuncionariosPage from "./app/qsms/funcionarios";
import EncaminhamentosPage from "./app/qsms/encaminhamentos";
import NovoEncaminhamento from "./app/qsms/novoEncaminhamento";
import EstatisticaPage from "./app/qsms/estatistica";
import ConfiguracoesPage from "./app/qsms/configuracoes";
import EpisFuncionarioPage from "./app/qsms/episFuncionario";
//------------------------------------------------------------------------------------------------------
// Gamagrafia
import GamagrafiaPage from "./app/gamagrafia/gamagrafiaHome";
import BoletimMedicao from "./app/gamagrafia/boletimMedicao";
import NovoBoletimPage from "./app/gamagrafia/novoBoletim";
import ProcedimentosPage from "./app/gamagrafia/procedimentos";
import RelatoriosBmPage from "./app/gamagrafia/relatoriosBm";
import ConfiguracoesGamagrafiaPage from "./app/gamagrafia/configuracoesGamagrafia";
import ConsolidadoPorClientePage from "./app/gamagrafia/consolidadoPorCliente";
import JornadaPage from "./app/gamagrafia/jornada";
import GamagrafiaFilmesPage from "./app/gamagrafia/gamagrafiaFilmes";
import JuntasPage from "./app/gamagrafia/juntas";
import ServicosPage from "./app/gamagrafia/servicos";
import DescontinuidadesPage from "./app/gamagrafia/descontinuidades";
import GuiaOperacionalPage from "./app/gamagrafia/guiaOperacional";
import NovaGuiaOperacionalPage from "./app/gamagrafia/novaGuiaOperacional";
//------------------------------------------------------------------------------------------------------
// Patrimônio
import EquipamentosPage from "./app/patrimonio/equipamentos";
import HomePatrimonioPage from "./app/patrimonio/homePatrimonio";
import CalibracaoPage from "./app/patrimonio/calibracao";
import AlmoxarifadoPage from "./app/patrimonio/almoxarifado";
import NovoAlmoxarifadoPage from "./app/patrimonio/novoAlmoxarifado";
import FrotaPropriaPage from "./app/patrimonio/frotaPropria";
import AlmoxarifadoK2Page from "./app/patrimonio/almoxarifadoK2";
import CadastrarEquipamentosPage from "./app/patrimonio/cadastrarEquipamentos";
import ItensAlmoxarifadoPage from "./app/patrimonio/itensAlmoxarifado";
import EntregaMateriaisPage from "./app/patrimonio/entregaMateriais";
import ControleDeProjetosPage from "./app/patrimonio/controleProjetos";
import NovoProjetoPage from "./app/patrimonio/novoProjeto";
import ControleDeArmazemPage from "./app/patrimonio/controleArmazem";
import ControleDeArmazemComprasK2Page from "./app/patrimonio/armazemK2Compras";
//------------------------------------------------------------------------------------------------------
// Radioproteção
import RadioprotecaoHomePage from "./app/radioprotecao/radioprotecaoHome";
import FolhaDeInformacoesPage from "./app/radioprotecao/folhaDeInformacoes";
import FontesPage from "./app/radioprotecao/fontes";
import CadastrarFontePage from "./app/radioprotecao/cadastrarFonte";
import RelatorioFontesPorFrentePage from "./app/radioprotecao/relatorioFontesPorFrente";
import NovoRelatorioFrentePorFrentePage from "./app/radioprotecao/novoRelatorioFontesPorFrente";
import FolhaDeDosesPage from "./app/radioprotecao/folhaDeDoses";
import AdmitidosPage from "./app/radioprotecao/admitidos";
import DemitidosPage from "./app/radioprotecao/demitidos";
import FolhaDeDosesApplusPage from "./app/radioprotecao/folhaDeDosesApplus";
//------------------------------------------------------------------------------------------------------
// SGI 
import InspeçõesPage from "./app/sgi/inspecoes";
//------------------------------------------------------------------------------------------------------
// Comercial
import ComercialHomePage from "./app/comercial/comercialHome";
import PropostasGamagrafiaPage from "./app/comercial/propostasGamagrafia";
import CadastroDeClientes from "./app/comercial/cadastroClientes";
//------------------------------------------------------------------------------------------------------
// Unidades
import UnidadesPageHome from "./app/unidades/unidadesHome";
import CentrosDeCustoPage from "./app/unidades/centrosDeCusto";
import UnidadesBasePage from "./app/unidades/unidadesBases";
//------------------------------------------------------------------------------------------------------
//Treinamento e Qualificações
import CadastrarPage from "./app/treinamentoequalificacoes/cadastrar";
//------------------------------------------------------------------------------------------------------
// Coelba
import CoelbaPage from "./app/coelba/coelba";
//------------------------------------------------------------------------------------------------------
// Equipamento de Informática
import InventarioPage from "./app/equipamentoInformatica/inventario";
//------------------------------------------------------------------------------------------------------
// Financeiro
import QuadroPage from "./app/financeiro/quadromandos";
//------------------------------------------------------------------------------------------------------
// Coelce
import CoelcePage from "./app/coelce/coelce";
//------------------------------------------------------------------------------------------------------
// Políticas Internas
import HomePage from "./app/politicasInternas/home";
//------------------------------------------------------------------------------------------------------
// Jurídico
import HomeJuridico from "./app/juridico/home";
//------------------------------------------------------------------------------------------------------
// Fiscal
import FiscalHomePage from "./app/fiscal/home";
//------------------------------------------------------------------------------------------------------
// Lições
import LicoesHomePage from "./app/licoes/home";
//------------------------------------------------------------------------------------------------------
// Enel Goias
import EnelGoiasPage from "./app/enelGoias/home";
//------------------------------------------------------------------------------------------------------



const App = () => {
  return (
    <RootLayout>
      <Routes>
        {/* Importando primeiramente a Rota abaixo, automáticamente importa em cima */}
        <Route path="/" element={<PagePrincipal />} />
        {/* ADMIN */}
        <Route path="/administrador/home" element={<AdminHomePage />} />
        <Route path="/administrador/home/usuario" element={<Cadastro />} />
        <Route path="/administrador/usuario" element={<Cadastro />} />
        <Route path="/administrador/usuario/editar" element={<EditarUser />} />
        <Route path="/administrador/editar usuario" element={<EditarUser />} />
        <Route path="administrador/modulos" element={<ModulosPage />} />
        <Route path="/administrador/home/modulos" element={<ModulosPage />} />
        {/* QSMS */}
        <Route path="/qsms/configuracoes" element={<ConfiguracoesPage />} />
        <Route path="qsms/funcoes" element={<FuncoesPage />} />
        <Route path="/qsms/configuracoes/exames" element={<ExamesPage />} />
        <Route path="/qsms/configuracoes/epis" element={<EpisPage />} />
        <Route path="/qsms/configuracoes/funcoes" element={<FuncoesPage />} />
        <Route path="qsms/configuracoes/funcoes/relatorios" element={<RelatoriosPage />} />
        <Route path="qsms/configuracoes/funcoes/cadastrar" element={<FuncaoCadastro />} />
        <Route path="qsms/epi's" element={<EpisPage />} />
        <Route path="qsms/ppra" element={<PpraPage />} />
        <Route path="qsms/controle de aso's" element={<ControleAsos />} />
        <Route path="/qsms/cadastrar" element={<PpraCadastro />} />
        <Route path="/qsms/ordens de servico" element={<OrdensServico />} />
        <Route path="qsms/pesquisas" element={<PesquisasPage />} />
        <Route path="qsms/pesquisas/pesquisarpcmso" element={<PesquisarPcmso />} />
        <Route path="qsms/pesquisas/pesquisarppra" element={<PesquisarPpra />} />
        <Route path="qsms/pesquisas/relatoriodeaso" element={<RelatoriodeAso />} />
        <Route path="qsms/funcionarios" element={<FuncionariosPage />} />
        <Route path="qsms/encaminhamentos" element={<EncaminhamentosPage />} />
        <Route path="qsms/encaminhamentos/novo encaminhamento" element={<NovoEncaminhamento />} />
        <Route path="qsms/estatistica" element={<EstatisticaPage />} />
        <Route path="/qsms/epi's funcionario" element={<EpisFuncionarioPage />} />
        {/* GAMAGRAFIA */}
        <Route path="/gamagrafia/home" element={<GamagrafiaPage />} />
        <Route path="/gamagrafia/home/guia operacional" element={<GuiaOperacionalPage />} />
        <Route path="/gamagrafia/home/guia operacional/nova guia operacional" element={<NovaGuiaOperacionalPage />} />
        <Route path="/gamagrafia/boletim de medicao" element={<BoletimMedicao />} />
        <Route path="gamagrafia/home/boletim de medicao" element={<BoletimMedicao />} />
        <Route path="gamagrafia/home/boletim de medicao/novo boletim" element={<NovoBoletimPage />} />
        <Route path="gamagrafia/boletim de medicao/novo boletim" element={<NovoBoletimPage />} />
        <Route path="gamagrafia/procedimentos" element={<ProcedimentosPage />} />
        <Route path="gamagrafia/relatorios bm" element={<RelatoriosBmPage />} />
        <Route path="gamagrafia/configuracoes" element={<ConfiguracoesGamagrafiaPage />} />
        <Route path="/gamagrafia/relatorios BM/consolidado por cliente" element={<ConsolidadoPorClientePage />} />
        <Route path="/gamagrafia/configuracoes/jornada" element={<JornadaPage />} />
        <Route path="/gamagrafia/configuracoes/filmes" element={<GamagrafiaFilmesPage />} />
        <Route path="gamagrafia/configuracoes/juntas" element={<JuntasPage />} />
        <Route path="gamagrafia/configuracoes/servicos" element={<ServicosPage />} />
        <Route path="gamagrafia/configuracoes/descontinuidades" element={<DescontinuidadesPage />} />
        <Route path="patrimonio/home/almoxarifado" element={<AlmoxarifadoPage />} />
        {/* PATRIMÔNIO */}
        <Route path="patrimonio/home" element={<HomePatrimonioPage />} />
        <Route path="/patrimonio/home/equipamentos" element={<EquipamentosPage />} />
        <Route path="patrimonio/equipamentos" element={<EquipamentosPage />} />
        <Route path="/patrimonio/home/calibracao" element={<CalibracaoPage />} />
        <Route path="patrimonio/calibracao" element={<CalibracaoPage />} />
        <Route path="patrimonio/almoxarifado" element={<AlmoxarifadoPage />} />
        <Route path="/patrimonio/home/frota propria" element={<FrotaPropriaPage />} />
        <Route path="patrimonio/frota propria" element={<FrotaPropriaPage />} />
        <Route path="patrimonio/almoxarifado k2" element={<AlmoxarifadoK2Page />} />
        <Route path="/patrimonio/home/almoxarifado k2" element={<AlmoxarifadoK2Page />} />
        <Route path="/patrimonio/home/cadastrar equipamentos" element={<CadastrarEquipamentosPage />} />
        <Route path="/patrimonio/almoxarifado/itens almoxarifado" element={<ItensAlmoxarifadoPage />} />
        <Route path="/patrimonio/home/almoxarifado/novo almoxarifado" element={<NovoAlmoxarifadoPage />} />
        <Route path="/patrimonio/almoxarifado/itens almoxarifado/novo item" element={<NovoAlmoxarifadoPage />} />
        <Route path="/patrimonio/home/almoxarifado/entrega materiais" element={<EntregaMateriaisPage />} />
        <Route path="/patrimonio/home/almoxarifado k2/controle projetos" element={<ControleDeProjetosPage />} />
        <Route path="/patrimonio/home/almoxarifado k2/controle projetos/novo projeto" element={<NovoProjetoPage />} />
        <Route path="/patrimonio/almoxarifado/controle armazem" element={<ControleDeArmazemPage />} />
        <Route path="/patrimonio/home/almoxarifado k2/controle de armazem compras" element={<ControleDeArmazemComprasK2Page />} />
         {/* RADIOPROTEÇÃO */}
        <Route path="/radioprotecao/home" element={<RadioprotecaoHomePage />} />
        <Route path="/radioprotecao/home/folha de informacoes" element={<FolhaDeInformacoesPage />} />
        <Route path="/radioprotecao/home/fontes" element={<FontesPage />} />
        <Route path="/radioprotecao/folha de informacoes" element={<FolhaDeInformacoesPage />} />
        <Route path="/radioprotecao/fontes" element={<FontesPage />} />
        <Route path="/radioprotecao/home/fontes/cadastrar fonte" element={<CadastrarFontePage />} />
        <Route path="/radioprotecao/home/relatorio fontes por frente" element={<RelatorioFontesPorFrentePage />} />
        <Route path="/radioprotecao/relatorio fontes por frente" element={<RelatorioFontesPorFrentePage />} />
        <Route path="/radioprotecao/home/relatorio fontes por frente/novo" element={<NovoRelatorioFrentePorFrentePage />} />
        <Route path="/radioprotecao/home/folha de doses" element={<FolhaDeDosesPage />} />
        <Route path="/radioprotecao/folha de doses" element={<FolhaDeDosesPage />} />
        <Route path="/radioprotecao/folha de doses/admitidos" element={<AdmitidosPage />} />
        <Route path="/radioprotecao/folha de doses/demitidos" element={<DemitidosPage />} />
        <Route path="/radioprotecao/home/folha de doses applus" element={<FolhaDeDosesApplusPage />} />
        <Route path="/radioprotecao/folha de doses applus" element={<FolhaDeDosesApplusPage />} />
        {/* SGI */}
        <Route path="/sgi/inspeções e auditorias" element={<InspeçõesPage />} />
        {/* COMERCIAL */}
        <Route path="/comercial/home" element={<ComercialHomePage />} />
        <Route path="/comercial/home/propostas gamagrafias" element={<PropostasGamagrafiaPage />} />
        <Route path="/comercial/propostas gamagrafias" element={<PropostasGamagrafiaPage />} />
        <Route path="/comercial/cadastro de clientes" element={<CadastroDeClientes />} />
        <Route path="/comercial/home/cadastro de clientes" element={<CadastroDeClientes />} />
        {/* UNIDADES */}
        <Route path="/unidades/home" element={<UnidadesPageHome />} />
        <Route path="/unidades/home/unidades" element={<UnidadesBasePage />} />
        <Route path="/unidades/unidades" element={<UnidadesBasePage />} />
        <Route path="/unidades/home/centros de custo" element={<CentrosDeCustoPage />} />
        <Route path="/unidades/centros de custo" element={<CentrosDeCustoPage />} />
        {/* TREINAMENTO E QUALIFICAÇÕES */}
        <Route path="/treinamento e qualificações/cadastrar" element={<CadastrarPage />} />
        {/* COELBA */}
        <Route path="/coelba/coelba" element={<CoelbaPage />} />
        {/* EQUIPAMENTOS DE INFORMÁTICA */}
        <Route path="/equipamento de informática/inventário" element={<InventarioPage />} />
        {/* FINANCEIRO */}
        <Route path="financeiro/quadro de mandos" element={<QuadroPage />} />
        {/* COELCE */}
        <Route path="/coelce/coelce" element={<CoelcePage />} />
        {/* POLÍTICAS INTERNAS */}
        <Route path="políticas internas/home" element={<HomePage />} />
        {/* JURÍDICO */}
        <Route path="jurídico/home" element={<HomeJuridico />} />
        {/* FISCAL */}
        <Route path="fiscal/home" element={<FiscalHomePage />} />
        {/* LIÇÕES */}
        <Route path="lições/home" element={<LicoesHomePage />} />
        {/* ENEL GOIAS */}
        <Route path="enel goias/home" element={<EnelGoiasPage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;