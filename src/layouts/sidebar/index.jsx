// Ícones importados da React-Icon
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MdOutlineSupportAgent, MdComputer, MdWorkOutline, MdOutlineBusiness, MdOutlinePlayLesson,
         MdGavel, MdAutoGraph, MdBusiness, 
         MdInsertChartOutlined } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { AiOutlineAppstore, AiOutlineWifi } from "react-icons/ai";
import { HiOutlineMap, HiOutlineAcademicCap, HiOutlineDocumentText } from "react-icons/hi";
import { TbReportAnalytics, TbPencilMinus, TbMap2 } from "react-icons/tb";
import { RiBuilding3Line, RiMap2Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";



const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  {/* itens do sub menu fechados */}
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleSubMenuClick = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  useEffect(() => {
    // Fechar o menu ao transitar de página, apenas se estiver em modo responsivo
    setSubMenuOpen(false);
  }, []);

 
  return (
    <>
      <li
        className={`link ${pathname.includes(data.name) && "text-blue-600"}`}
        onClick={() => {
          if (!subMenuOpen) {
            // Abre o submenu apenas se estiver fechado
            setSubMenuOpen(true);
          }
          handleSubMenuClick();
        }}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        // configuração do sub-menu / posição das letras
        className="flex-col pl-6 text-[0.8rem] font-normal overflow-hidden"
      >
        {data.menus?.map((menu) => (
          <li key={menu}>
            <NavLink
              to={`/${data.name}/${menu}`}
              className="link !bg-transparent capitalize"
              onClick={() => {
                handleSubMenuItemClick(false);
                handleSubMenuClick(!false);
              }}
            >
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? true : false);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  const handleMainMenuClick = () => {
    setOpen(!open); // Abre o menu principal
  }

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "22rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "22rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  {/* ícones da sidebar */}
  const subMenusList = [
    {
      name: "administrador",
      icon: RiBuilding3Line,
      menus: ["home" ,"usuario", "editar usuario", "modulos"],
    },
    {
      name: "qsms",
      icon: MdOutlineSupportAgent,
      menus: ["configuracoes", "funcoes", "epi's", "ppra", "controle de ASO's", "ordens de servico", "funcionarios", "pesquisas", "encaminhamentos", "estatistica", "epi's funcionario"],
    },
    {
      name: "gamagrafia",
      icon: TbReportAnalytics,
      menus: ["home", "guia operacional", "boletim de medicao", "procedimentos", "relatorios BM", "configuracoes"],
    },
    {
      name: "patrimonio",
      icon: MdOutlineBusiness,
      menus: ["home" ,"equipamentos", "calibracao", "almoxarifado", "frota propria", "almoxarifado k2"],
    },
    {
      name: "radioprotecao",
      icon: AiOutlineWifi,
      menus: ["home", "folha de informacoes","fontes", "relatorio fontes por frente", "folha de doses", "folha de doses applus"],
    },
    {
      name: "sgi",
      icon: MdInsertChartOutlined,
      menus: ["inspecoes e auditorias"],
    },
    {
      name: "comercial",
      icon: MdWorkOutline,
      menus: [ "home", "propostas gamagrafias", "cadastro de clientes"]
    },
    {
      name: "unidades",
      icon: MdBusiness,
      menus: ["home" ,"unidades", "centros de custo"],
    },
    
    {
      name: "treinamento e qualificações",
      icon: HiOutlineAcademicCap,
      menus: ["cadastrar", "relatórios", "relatório por treinamento", "relatório vencendo em 30 dias", "relatório vencendo em 60 dias",
      "relatório vencendo em 90 dias", "relatórios treinamentos vencidos", "relatório analítico treinamentos"],
    },
    {
      name: "coelba",
      icon: TbMap2,
      menus: ["coelba"],
    },
    {
      name: "equipamento de informática",
      icon: MdComputer,
      menus: ["inventário", "relatórios", "configurações"],
    },
    {
      name: "financeiro",
      icon: MdAutoGraph,
      menus: ["quadro de mandos", "backlog", "forecast", "depreciação", "configurações"],
    },
    {
      name: "coelce",
      icon: RiMap2Line,
      menus: ["coelce"],
    },
    {
      name: "políticas internas",
      icon: HiOutlineDocumentText,
      menus: ["home"],
    },
    {
      name: "jurídico",
      icon: MdGavel,
      menus: ["home"],
    },
    {
      name: "fiscal",
      icon: TbPencilMinus,
      menus: ["home"],
    },
    {
      name: "lições",
      icon: MdOutlinePlayLesson,
      menus: ["home", "cadastrar", "gerenciar"],
    },
    {
      name: "enel goias",
      icon: HiOutlineMap,
      menus: ["home"],
    },
  ];


  return (
    <div className="fixed">
      <div onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"}`}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className={`bg-white fixed text-gray shadow-xl z-[999]  ${
          open ? "w-[16rem]" : "md:w-[16rem]"
        } h-screen overflow-hidden md:relative`}
      >
        <div className="flex items-center justify-center align-middle gap-2.5 font-medium border-b py-5 border-slate-300  mx-3">
        <a href="/" title="ERP">
          <img
            src="/breve-paraquedista.png"
            width={150}
            alt="ERP"
            className={`flex items-center justify-center align-middle mx-3 ${open ? '' : 'ml-1'}`}
          />
        </a>
          <span className="text-xl whitespace-pre"></span>
        </div>

        <div className="flex flex-col h-screen">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-3 flex flex-col gap-3 font-medium overflow-x-hidden scrollbar-none  md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link" title="menu">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>

            {/* lógica para esconder os ícones do submenu */}
              <div className="border-y py-5 border-slate-300 ">
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-2">
                    <SubMenu data={menu} onSubMenuItemClick={handleMainMenuClick} />
                  </div>
                ))}
              </div>
          </ul>
          
        </div>
        {/* lógica da posição botão aberto e fechado */}
        <motion.div
          onClick={() => setOpen(!open)}
          animate={{
            rotate: open ? 0 : 180,
          }}
          transition={{ duration: 0 }}
          className={`absolute w-fit h-fit md:block z-50 right-2 ${open ? 'top-6' : 'mr-2 bottom-36'}`} // Alteração na classe
        >
          <IoIosArrowBack size={30} style={{ color: "#f97316" }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;