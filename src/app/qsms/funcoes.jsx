// Caminho da página: qsms/configuracoes/funcoes

'use client';

// Importação da biblioteca React e do Hook useState.
import React, { useState } from 'react';

// Componente funcional FuncoesPage.
const FuncoesPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedUsers, setSortedUsers] = useState([]);
  const itemsPerPage = 20;


  // Dados das funções.
  const role = [
    {
      id: 1,
      role: 'ANALISTA DE SISTEMA',
    },
    {
      id: 2,
      role: 'GERENTE TÉCNICO',
    },
    {
      id: 3,
      role: 'INSPETOR DE QUALIDADE',
    },
    {
      id: 4,
      role: 'INSPETOR US',
    },
    {
      id: 5,
      role: 'OPERADOR DE ENSAIOS',  
    },
    {
      id: 6,
      role: 'VIGIA',
    },
    {
      id: 7,
      role: 'CONTADOR',
    },
    {
      id: 8,
      role: 'COORD COMPRAS LOGIST',
    },
    {
      id: 9,
      role: 'COMPRADOR',
    },
    {
      id: 10,
      role: 'AUXILIAR END',
    },
    {
      id: 11,
      role: 'ANALISTA RECURSOS HUMANOS',
    },
    {
      id: 12,
      role: 'SUP RADIOPROTECAO', 
    },
    {
      id: 13,
      role: 'TEC SEG TRABALHO',
    },
    {
      id: 14,
      role: 'GERENTE',
    },
    {
      id: 15,
      role: 'INSP QUALID TRAINEE',
    },
    {
      id: 16,
      role: 'GER PROJETOS',
    },
    {
      id: 17,
      role: 'APRENDIZ END',
    },
    {
      id: 18,
      role: 'TEC DE LICITACOES',
    },
    {
      id: 19,
      role: 'ENGENHEIRO', 
    },
    {
      id: 20,
      role: 'AUX PROT CATODICA',
    },
    {
      id: 21,
      role: 'COOR DE PROJETOS',
    },
    {
      id: 22,
      role: 'MECANICO',
    },
    {
      id: 23,
      role: 'ANALISTA DE PESSOAL',
    },
    {
      id: 24,
      role: 'INSP US PHASED ARRAY',
    },
    {
      id: 25,
      role: 'AUX OPERAÇÃO',
    },
    {
      id: 26,
      role: 'APRENDIZ ADM',
    },
    {
      id: 27,
      role: 'ENGENHEIRO I',
    },
    {
      id: 28,
      role: 'AUX INSPECAO', 
    },
    {
      id: 29,
      role: 'SUP TECNICO',
    },
    {
      id: 30,
      role: 'ANALISTA PROCESSO E GESTÃO',
    },
    {
      id: 31,
      role: 'ASS RECURSOS HUMANOS', 
    },
    {
      id: 32,
      role: 'G TEC. AVAN INSPECAO',
    },
    {
      id: 33,
      role: 'SUPERV.COMISSIONAM.',
    },
    {
      id: 34,
      role: 'SUPERV. RADIOGRAFIA',
    },
    {
      id: 35,
      role: 'PROGRAMADOR',
    },
    {
      id: 36,
      role: 'COORD. DE DEPT PESSOAL',
    },
    {
      id: 37,
      role: 'INSP GAMAGRAFIA',
    },
    {
      id: 38,
      role: 'OP GAMAGRAFIA II B', 
    },
    {
      id: 39,
      role: 'AJUDANTE ULTRASSON',
    },
    {
      id: 40,
      role: 'COORD OPERACOES',
    },
    {
      id: 41,
      role: 'AUX. DE FATURAMENTO', 
    },
    {
      id: 42,
      role: 'SUP. RADIOPROTECAO I', 
    },
    {
      id: 43,
      role: 'OPERADOR MANUTENCAO',  
    },
    {
      id: 44,
      role: 'INSPETOR LAUDISTA',
    },
    {
      id: 45,
      role: 'DIRETOR GERAL',
    },
    {
      id: 46,
      role: 'OP GAMAGRAFIA III',
    },
    {
      id: 47,
      role: 'AUTONOMO', 
    },
    {
      id: 48,
      role: 'TEC PLANEJAMENTO',
    },
    {
      id: 49,
      role: 'GER DESIGN NEG',
    },
    {
      id: 50,
      role: 'INSP DE MONTAGEM I',  
    },
    {
      id: 51,
      role: 'AUX ESCRITORIO', 
    },
    {
      id: 52,
      role: 'AUX PROJETOS', 
    },
    {
      id: 53,
      role: 'OP GAMAGRAFIA II A', 
    },
    {
      id: 54,
      role: 'COORD.ADMIN.FINANC.',
    },
    {
      id: 55,
      role: 'COORD REC HUMANOS', 
    },
    {
      id: 56,
      role: 'INSP DE MONTAGEM II', 
    },
    {
      id: 57,
      role: 'OP GAMAGRAFIA I',
    },
    {
      id: 58,
      role: 'ASS ADMINISTRATIVO',
    },
    {
      id: 59,
      role: 'CONTROLLER',
    },
    {
      id: 60,
      role: 'AUX LOGISTICA', 
    },
    {
      id: 61,
      role: 'DIRETOR ADM E FINANC', 
    },
    {
      id: 62,
      role: 'ANALISTA LICITAÇÕES',
    },
    {
      id: 63,
      role: 'ANALISTA SUPORTE',
    },
    {
      id: 64,
      role: 'AUXILIAR COORDENAÇÃO',
    },
    {
      id: 65,
      role: 'SUP PROJETOS', 
    },
    {
      id: 66,
      role: 'INSP QUALIDADE II',
    },
    {
      id: 67,
      role: 'ADVOGADO', 
    },
    {
      id: 68,
      role: 'FATURISTA',
    },
    {
      id: 69,
      role: 'COORD PROT CATODICA',
    },
    {
      id: 70,
      role: 'SUP QUALIDADE',
    },
    {
      id: 71,
      role: 'INSP GAMAGRAFIA QUALIDADE',
    },
    {
      id: 72,
      role: 'ASS TEC PROT CATODICA', 
    },
    {
      id: 73,
      role: 'ASS OPERAÇÃO',
    },
    {
      id: 74,
      role: 'TEC PROTECAO CATODIC', 
    },
    {
      id: 75,
      role: 'INSP QUALIDADE I',
    },
    {
      id: 76,
      role: 'INSPETOR QUALIDADE III',
    },
    {
      id: 77,
      role: 'ANALISTA FINANCEIRO',
    },
    {
      id: 78,
      role: 'COOR DE PLAN E PROCESSOS',  
    },
    {
      id: 79,
      role: 'TEC SEG TRABALHO II',
    },
    {
      id: 80,
      role: 'DIRETOR',  
    },
    {
      id: 81,
      role: 'SUPERVISOR FINANCEIRO', 
    },
    {
      id: 82,
      role: 'INSPETOR ULTRASSOM II',
    },
    {
      id: 83,
      role: '	TEC ELAB PROJETOS I', 
    },
    {
      id: 84,
      role: 'GER OPERACOES',
    },
    {
      id: 85,
      role: 'DIRETOR TECNICO',  
    },
    {
      id: 86,
      role: 'INSPETOR ULTRASSOM I', 
    },
    {
      id: 87,
      role: 'ESTAGIARIO', 
    },
    {
      id: 88,
      role: 'AUX SERVICOS GERAIS', 
    },
    {
      id: 89,
      role: 'SUPERINT. AM. LATINA', 
    },
    {
      id: 90,
      role: 'ANALISTA PROJ E GESTAO', 
    },
    {
      id: 91,
      role: 'DIRETOR (A) FINANCEIRO', 
    },
    {
      id: 92,
      role: 'RECEPCIONISTA',
    },
    {
      id: 93,
      role: 'AUXILIAR ADMINISTRATIVO',
    },
    {
      id: 94,
      role: 'ASS COORDENACAO',
    },
    {
      id: 95,
      role: 'GERENTE TRANS TECNOL',
    },
    {
      id: 96,
      role: 'AUX. DEPT PESSOAL',
    },
    {
      id: 97,
      role: 'ANALISTA DE CONTROLADORIA',
    },
    {
      id: 98,
      role: 'ALMOXARIFE',
    },
    {
      id: 99,
      role: 'INSPETOR AUDITOR',
    },
    {
      id: 100,
      role: 'SUP CONT QUALIDADE', 
    },
    {
      id: 101,
      role: 'INSP QUALIDADE PMI', 
    },
    {
      id: 102,
      role: 'ANALISTA DE QSMS',
    },
    {
      id: 103,
      role: 'AUX COMPRAS',
    },
    {
      id: 104,
      role: 'ANALISTA PROC GESTAO I',
    },
    {
      id: 105,
      role: 'COORD CONTROLADORIA',
    },
    {
      id: 106,
      role: 'SUP OPERACIONAL', 
    },
    {
      id: 107,
      role: 'COORD ELETRICA', 
    },
    {
      id: 108,
      role: 'AUX. DE GAMAGRAFIA', 
    },
    {
      id: 109,
      role: 'INSPETOR DE ULTRASSOM', 
    },
    {
      id: 110,
      role: 'INSP GAMAGRAFIA LAUDISTA', 
    },
    {
      id: 111,
      role: 'SUPERVISOR ELÉTRICO',
    },
    {
      id: 112,
      role: 'AUX ADM FINANCEIRO',
 
    },
    {
      id: 113,
      role: 'ANALISTA DE SGI',
    },
    {
      id: 114,
      role: 'TOPOGRAFO II',
    },
    {
      id: 115,
      role: 'AUX TOPOGRAFIA', 
    },
    {
      id: 116,
      role: 'TEC ELAB PROJETOS',  
    },
    {
      id: 117,
      role: 'TOPOGRAFO',  
    },
    {
      id: 118,
      role: 'ENCARREGADO PARA CONTROLE E GESTÃO', 
    },
    {
      id: 119,
      role: 'TOPOGRAFO IV', 
    },
    {
      id: 120,
      role: 'ELETRICISTA', 
    },
    {
      id: 121,
      role: 'SUPERVISOR',  
    },
    {
      id: 122,
      role: 'GER TEC. AV INSPEÇÃO', 
    },
    {
      id: 123,
      role: 'TOPOGRAFO III', 
    },
    {
      id: 124,
      role: 'GERENTE ADM FINANC',
    },
    {
      id: 125,
      role: 'INSP GAMAGRAFIA I',
    },
    {
      id: 126,
      role: 'SUPERVISOR OBRA I',
    },
    {
      id: 127,
      role: 'SUPERVISOR OBRA II',
    },
    {
      id: 128,
      role: 'SUPERVISOR OBRA III',
    },
    {
      id: 129,
      role: 'ASSIST FATURAMENTO', 
    },
    {
      id: 130,
      role: 'AJUDANTE OPERACIONAL',
    },
    {
      id: 131,
      role: 'TEC DOCUMENTAÇÃO', 
    },
    {
      id: 132,
      role: 'SUP ACESSO DE CORDAS',
    },
    {
      id: 133,
      role: 'ANALISTA DE PROCESSOS E GESTAO II', 
    },
    {
      id: 134,
      role: 'GERENTE ELETRICO',
    },
    {
      id: 135,
      role: 'AUX TEC DE CATÓDICA',
    },
    {
      id: 136,
      role: 'AUX PROJETOS I',  
    },
    {
      id: 137,
      role: 'COORD DE LICITACOES', 
    },
    {
      id: 138,
      role: 'ELETRICISTA A',
    },
    {
      id: 139,
      role: 'ELETRICISTA B', 
    },
    {
      id: 140,
      role: 'ELETROTECNICO',
    },
    {
      id: 141,
      role: 'SUP ADMINISTRATIVO',  
    },
    {
      id: 142,
      role: 'COORD DE END', 
    },
    {
      id: 143,
      role: 'ANALISTA FISCAL JUNIOR', 
    },
    {
      id: 144,
      role: 'ANALISTA ADMINISTRATIVO',  
    },
    {
      id: 145,
      role: 'APRENDIZ LOGISTICA',
    },
    {
      id: 146,
      role: 'CADASTRADOR', 
    },
    {
      id: 147,
      role: 'CADASTRADOR CLAND',
    },
    {
      id: 148,
      role: 'COMPRADOR JUNIOR',
    },
    {
      id: 149,
      role: 'SUP DE EQUIPE', 
    },
    {
      id: 150,
      role: 'SUP. PROT. CATODICA',
    },
    {
      id: 151,
      role: 'SUPERVISOR DE CAMPO',
    },
    {
      id: 152,
      role: 'TEC SEG TRAB JR',
    },
    {
      id: 153,
      role: 'INSPETOR DE RADIOGRAFIA',
    },
    {
      id: 154,
      role: 'OPERADOR DE GAMAGRAFIA II',
    },
    {
      id: 155,
      role: 'COORD. DE AUDITORIA E FINANÇAS',
    },
    {
      id: 156,
      role: 'GERENTE CONTABIL', 
    },
    {
      id: 157,
      role: 'AJUDANTE DE MANUTENÇÃO', 
    },
    {
      id: 158,
      role: 'OPERADOR DE ENSAIOS DESTRUTIVOS I',
    },
    {
      id: 159,
      role: 'OPERADOR DE ENSAIOS NÃO DESTRUTIVOS', 
    },
    {
      id: 160,
      role: 'ENSAIOS NÃO DESTRUTIVOS III', 
    },
    {
      id: 161,
      role: 'OP DE GAMAGRAFIA',
    },
    {
      id: 162,
      role: 'OP DE GAMAGRAFIA IA',
    },
    {
      id: 163,
      role: 'SUP OP DE END',
    },
    {
      id: 164,
      role: 'COORDENADOR',
    },
    {
      id: 165,
      role: 'SUPERVISOR PARADA',
    },
    {
      id: 166,
      role: 'INSP EQ ESC IND IV	',
    },
    {
      id: 167,
      role: 'ESTAGIARIO TI',
    },
    {
      id: 168,
      role: 'COORD DE TI', 
    },
    {
      id: 169,
      role: 'ANALISTA DE COMPRAS',
    },
    {
      id: 170,
      role: 'AUX OPERACOES I.',
    },
    {
      id: 171,
      role: 'PINTOR ESCA IND II',
    },
    {
      id: 172,
      role: 'PINTOR ESCALADOR IND',
    },
    {
      id: 173,
      role: 'INSP EQUIP ESC IND I',
    },
    {
      id: 174,
      role: 'INSP EQ ESC IND II',
    },
    {
      id: 175,
      role: 'INSP EQ ESC IND III',
    },
    {
      id: 176,
      role: 'INSP NAV ESC IND II',
    },
    {
      id: 177,
      role: 'PINTOR ESC IND I',
    },
    {
      id: 178,
      role: 'INSP NAV ESC IND III',
    },
    {
      id: 179,
      role: 'AUX OPER ESCAL INDUS',
    },
    {
      id: 180,
      role: 'AUX OPERACOES II',
    },
    {
      id: 181,
      role: 'SOLDADOR ESC IND I',
    },
    {
      id: 182,
      role: 'CALD ESC INDUST I', 
    },
    {
      id: 183,
      role: 'CALD ESC IND III',
    },
    {
      id: 184,
      role: 'CALD ESC INDUSTRIA',
    },
    {
      id: 185,
      role: 'COORD FINANCEIRO',
    },
    {
      id: 186,
      role: 'TEC OPER PLANEJAMENTO',
    },
    {
      id: 187,
      role: 'ESTAGIARIO ADM',
    },
    {
      id: 188,
      role: 'TEC INST ESCAL INDUS',
    },
    {
      id: 189,
      role: 'ELET ESC INDUSTRIAL I',
    },
    {
      id: 190,
      role: 'TEC ELETR ESC IND',
    },
    {
      id: 191,
      role: 'TEC ELETROTECNICA',
    },
    {
      id: 192,
      role: 'TEC INSTRUMENTACAO',
    },
    {
      id: 193,
      role: 'CALDEIREIRO II',
    },
    {
      id: 194,
      role: 'COORD ACESSO POR CORD',
    },
    {
      id: 195,
      role: 'CALDEIREIRO I',
    },
    {
      id: 196,
      role: 'INSP EQUIP ESC INDUS',
    },
    {
      id: 197,
      role: 'MECA ESC IND I',
    },
    {
      id: 198,
      role: 'MECA ESC IND III',
    },
    {
      id: 199,
      role: 'MECANICO I',
    },
    {
      id: 200,
      role: 'MONTADOR DE ESTRUTURA',
    },
    {
      id: 201,
      role: 'ASS CONT E GESTAO', 
    },
    {
      id: 202,
      role: 'AUXILIAR DE ACESSO',
    },
    {
      id: 203,
      role: 'SUP ACESSO DE CORDAS',
    },
    {
      id: 204,
      role: 'ASSIST FISCAL', 
    },
    {
      id: 205,
      role: 'ANALISTA CONTABIL JUNIOR',
    },
    {
      id: 206,
      role: 'ASSISTENTE DE QUALIDADE',
    },
    {
      id: 207,
      role: 'COORDENADOR DE QHSE',
    },
    {
      id: 208,
      role: 'AUX TECNICO', 
    },
    {
      id: 209,
      role: 'COORD ENERGIAS RENOVÁVEIS',
    },
    {
      id: 210,
      role: 'TEC MECANICA',
    },
    {
      id: 211,
      role: 'ANALISTA SISTEMAS SR',
    },
    {
      id: 212,
      role: 'PLANEJADOR',
    },
    {
      id: 213,
      role: 'ANALISTA SISTEMAS JR', 
    },
    {
      id: 214,
      role: 'SOLDADOR ESC IND II',
    },
    {
      id: 215,
      role: 'CALDEIREIRO',
    },
    {
      id: 216,
      role: 'PSICOLOGA',
    },
    {
      id: 217,
      role: 'AUX ADM DAS OPERAÇÕES',
    },
    {
      id: 218,
      role: 'ASSISTENTE COMPRAS',  
    },
    {
      id: 219,
      role: 'INSP QUALID ESC IND',
    },
    {
      id: 220,
      role: 'ASSISTENTE DE ALMOXARIFADO',
    },
    {
      id: 221,
      role: 'ANALISTA CONTÁBIL',
    },
    {
      id: 222,
      role: 'ANALISTA FINANCEIRO SENIOR',
    },
    {
      id: 223,
      role: 'ANALISTA DE PROJETOS',
    },
    {
      id: 224,
      role: 'ASS LOGÍSTICA',
    },
    {
      id: 225,
      role: 'ANALISTA DE OPERAÇÕES',
    },
    {
      id: 226,
      role: 'ANALISTA RESPONSÁVEL SEG. DO TRABALHO', 
    },
    {
      id: 227,
      role: 'ASSISTENTE GESTÃO DOCUMENTAL',
    },
    {
      id: 228,
      role: 'ASSISTENTE DE LICITAÇÕES',
    },
    {
      id: 229,
      role: 'ASSISTENTE ADMINISTRATIVO FINANCEIRO',
    },
    {
      id: 230,
      role: 'ASSISTENTE ADMINISTRATIVO DE RECURSOS HUMANOS',
    },
    {
      id: 231,
      role: 'COORDENADOR DE LOGÍSTICA',
    },
    {
      id: 232,
      role: 'AUXILIAR ADMINISTRATIVO FINANÇAS',
    },
    {
      id: 233,
      role: 'DIRETOR DESENVOLVIMENTO DE NEGÓCIOS',
    },
    {
      id: 234,
      role: 'ENGENHEIRO OTIMIZAÇÃO OPERACIONAL',
    },
    {
      id: 235,
      role: 'ENGENHEIRO SUPERVISOR',
    },
    {
      id: 236,
      role: 'SUP TECNICO DE INFORMAÇÃO',
    },
    {
      id: 237,
      role: 'TECNICO SEGURANÇA DO TRABALHO I',
    },
    {
      id: 238,
      role: 'ANAL DE LOGISTICA',
    },
    {
      id: 239,
      role: 'ASS TI',
    },
    {
      id: 240,
      role: 'ASS CONTÁBIL',
    },
    {
      id: 241,
      role: 'AUX ELÉTRICA',
    },
    {
      id: 242,
      role: 'GER DESENV NEGOCIOS',
    },
    {
      id: 243,
      role: 'INSP END ESC INDUSTRIAL',
    },
    {
      id: 244,
      role: 'INSP DE PINTURA',
    },
    {
      id: 245,
      role: 'OP DE CONVÉS',
    },
    {
      id: 246,
      role: 'SOLDADOR ESCALADOR INDUSTRIAL',
    },
    {
      id: 247,
      role: 'TEC ELETR ESC IND II',
    },
    {
      id: 248,
      role: 'GERENTE ENERGIAS RENOVAVÉIS',
    },
    {
      id: 249,
      role: 'GERENTE ADNT',
    },
    {
      id: 250,
      role: 'GERENTE NORCONTROL',
    },
    {
      id: 251,
      role: 'GERENTE REGIONAL',
    },
    {
      id: 252,
      role: 'INSP END II',
    },
    {
      id: 253,
      role: 'INSPETOR AUDITOR QA-QC',
    },
    {
      id: 254,
      role: 'INSPETOR MONTAGEM III', 
    },
    {
      id: 255,
      role: 'INSPETOR QUALIDADE TRAINEE END',
    },
    {
      id: 256,
      role: 'INSPETOR SEGURANÇA DO TRABALHO',
    },
    {
      id: 257,
      role: 'SECRETÁRIO TÉCNICO',
    },
    {
      id: 258,
      role: 'AUXILIAR LOGÍSTICA / FROTA',
    },
    {
      id: 259,
      role: 'INSP EQUIPAMENTO',
    },
    {
      id: 260,
      role: 'INS PINT ESC IND III',
    },
    {
      id: 261,
      role: 'INS PINT ESC IND II',
    },
    {
      id: 262,
      role: 'ANAL FISCAL SENIOR', 
    },
    {
      id: 263,
      role: 'INSP QUALIDADE',
    },
    {
      id: 264,
      role: 'ASSIST DE ALMOXARIFA',
    },
    {
      id: 265,
      role: 'ASSISTENTE DE DEPARTAMENTO PESSOAL',
    },
    {
      id: 266,
      role: 'ANAL DE MEIO AMBIENT',   
    },
    {
      id: 267,
      role: 'COORD FINANCEIRO',
    },
    {
      id: 268,
      role: 'COORD PROJETOS', 
    },
    {
      id: 269,
      role: 'SUP DE CONTROLE',
    },
    {
      id: 270,
      role: 'INSP QUALID ESC IND',
    },
    {
      id: 271,
      role: 'TÉCNICO DE ELABORAÇÃO DE PROJETOS II',
    },
    {
      id: 272,
      role: 'ANAL LICITACOES SENI',
    },
    {
      id: 273,
      role: 'ANALISTA COMERCIAL',
    },
    {
      id: 274,
      role: 'ENGENHEIRO DE PETRÓLEO.',
    },
    {
      id: 275,
      role: 'ASSISTENTE ADMINISTRATIVO',
    },
    {
      id: 276,
      role: 'AUXILIAR DE ALMOXARIFE',
    },
    {
      id: 277,
      role: 'ASS ADMINISTRATIVO I',
    },
    {
      id: 278,
      role: 'BACKOFFICE',
    },
    {
      id: 279,
      role: 'ELETROTECNICO AT',
    },
    {
      id: 280,
      role: 'ASSIST ADM I',
    },
    {
      id: 281,
      role: 'AUX ALMOXARIFE I',
    },
    {
      id: 282,
      role: 'SUP CAMPO',
    },
    {
      id: 283,
      role: 'COORDENADOR OPERACIONAL',
    },
    {
      id: 284,
      role: 'COORD. INSPEÇÃO E DILIGENCIAMENTO',
    },
    {
      id: 285,
      role: 'TEC ELAB PROJETOS II',
    },
    {
      id: 286,
      role: 'SUP DE FISCALIZACAO',
    },
    {
      id: 287,
      role: 'TEC PROJ ELÉTRICOS',
    },
    {
      id: 288,
      role: 'GERENTE DE REC HUMAN',
    },
    {
      id: 289,
      role: 'ASSIST FINANCEIRO', 
    },
    {
      id: 290,
      role: 'ASSISTENTE DE DP', 
    },
    {
      id: 291,
      role: 'ADMINISTRATIVO',
    },
    {
      id: 292,
      role: 'ASS ADMINISTRATIVO',
    },
    {
      id: 293,
      role: 'COORDENADOR DE INOVAÇÃO E OTIMIZAÇÃO',  
    },
    {
      id: 294,
      role: 'SOLDADOR ESC IND III', 
    },
    {
      id: 295,
      role: 'SUP DE ACESSO',  
    },
    {
      id: 296,
      role: 'SUP DE ACESSO II',    
    },
    {
      id: 297,
      role: 'SUP DE ACESSO III',   
    },
    {
      id: 298,
      role: 'SUP DE ACESSO IV',     
    },
    {
      id: 299,
      role: 'SUP DE LOGISTICA',     
    },
    {
      id: 300,
      role: 'SUP MONTAGEM COMISSI',     
    },
    {
      id: 301,
      role: 'ANAL DE CONT E GESTÃO',
    },
    {
      id: 302,
      role: 'ASS. COORDEN. INSP',
    },
    {
      id: 303,
      role: 'ASSISTENTE QSMS',
    },
    {
      id: 304,
      role: 'COORD. FINANC / FISCAL', 
    },
    {
      id: 305,
      role: 'ANAL CONTABIL PLENO',
    },
    {
      id: 306,
      role: 'ANALIST FATURAMENTO', 
    },
    {
      id: 307,
      role: 'OP GAMAGRAFIA II', 
    },
    {
      id: 308,
      role: 'INSP REVEST NACE 2', 
    },
    {
      id: 309,
      role: 'INSPETOR DE SOLDA N1',
    },
    {
      id: 310,
      role: 'INSPETOR DE SOLDA N2', 
    },
    {
      id: 311,
      role: 'INSP DUTOS', 
    },
    {
      id: 312,
      role: 'INSPETOR DE SOLDAGEM',
    },
    {
      id: 313,
      role: 'INSP REVESTIMENTO', 
    },
    {
      id: 314,
      role: 'SUPERVISOR DE CQ',
    },
    {
      id: 315,
      role: 'SUPERVISOR CIVIL I', 
    },
    {
      id: 316,
      role: 'SUPERVISOR CIVIL III', 
    },
    {
      id: 317,
      role: 'SUPERVISOR DE QUALIDADE I',
    },
    {
      id: 318,
      role: 'SUPERVISOR DE QUALIDADE III',
    },
    {
      id: 319,
      role: 'SUPERVISOR DE PLANEJAMENTO III',
    },
    {
      id: 320,
      role: 'SUPERVISOR DE SALA TÉCNICA', 
    },
    {
      id: 321,
      role: 'SUPERVISOR ELETRICISTA I',
    },
    {
      id: 322,
      role: 'SUPERVISOR DE MONTAGEM I',
    },
    {
      id: 323,
      role: 'SUPERVISOR DE MONTAGEM III',
    },
    {
      id: 324,
      role: 'SUPERVISOR DE DOCUMENTAÇÃO I',
    },
    {
      id: 325,
      role: 'SUPERVISOR DE DOCUMENTAÇÃO III', 
    },
    {
      id: 326,
      role: 'SUPERVISOR DE COMISSIONAMENTO I', 
    },
    {
      id: 327,
      role: 'SUPERVISOR DE COMISSIONAMENTO III', 
    },
    {
      id: 328,
      role: 'ADVOGADO/CONTRATOS',
    },
    {
      id: 329,
      role: 'GEOLOGO',  
    },
    {
      id: 330,
      role: 'COOR COMER MINERAÇÃO', 
    },
    {
      id: 331,
      role: 'AUXILIAR ADMINISTRATIVO I',
    },
    {
      id: 332,
      role: 'SUPERVISOR ELETRICISTA III',
    },
    {
      id: 333,
      role: 'AUXILIAR DE TOPOGRAFO I',      
    },
    {
      id: 334,
      role: 'TOPOGRAFO I',     
    },
    {
      id: 335,
      role: 'AUX DE ALMOXARIFADO',     
    },
    {
      id: 336,
      role: 'ENCA DE ALMOXARIFADO',     
    },
    {
      id: 337,
      role: 'AUX ADMINISTRATIVO',     
    },
    {
      id: 338,
      role: 'SUP DE RIGGER',     
    },
    {
      id: 339,
      role: 'TEC PROT CATODICA',     
    },
    {
      id: 340,
      role: 'TEC PROT CATODICA 2',     
    },
    {
      id: 341,
      role: 'AUX TEC PROT CAT 3',
    },
    {
      id: 342,
      role: 'OPER GAMAGRAFIA',
    },
    {
      id: 343,
      role: 'CALD ESC INDUST II',
    },
    {
      id: 344,
      role: 'CONTROL DE RELAT III',
    },
    {
      id: 345,
      role: 'COORDENADOR COMERCIAL',
    },
    {
      id: 346,
      role: 'INSP EQ ESC IND VII',
    },
    {
      id: 347,
      role: 'INSP EQUIP ESC IND V',
    },
    {
      id: 348,
      role: 'ASS. PESS.OPERATIVO',
    },
    {
      id: 349,
      role: 'INSP QUA ESC IND III',
    },
    {
      id: 350,
      role: 'INSP SOLDA',
    },
    {
      id: 351,
      role: 'PINTOR ESC.IND III',
    },
    {
      id: 352,
      role: 'PROGRAMADOR JR.',
    },
    {
      id: 353,
      role: 'TEC. INSTRUMENTAÇÃO I', 
    },
    {
      id: 354,
      role: 'TEC SEG TRAB AMBIENT', 
    },
    {
      id: 355,
      role: 'CONTROL DE RELAT I',
    },
    {
      id: 356,
      role: 'CONTROL DE RELAT II',
    },
    {
      id: 357,
      role: 'INSP NAV ESC IND I',
    },
    {
      id: 358,
      role: 'COORD DE DRONES',
    },
    {
      id: 359,
      role: 'AJUDANTE GERAL',
    },
    {
      id: 360,
      role: 'CADISTA',
    },
    {
      id: 361,
      role: 'INSP SOLDA N1',
    },
    {
      id: 362,
      role: 'INSP REVESTIMENTO',
    },
    {
      id: 363,
      role: 'INSP DUTOS',
    },
    {
      id: 364,
      role: 'INSP DE SOLDA N1', 
    },
    {
      id: 365,
      role: 'AUX END',
    },
    {
      id: 366,
      role: 'SCANNER TECH 1',
    },
    {
      id: 367,
      role: 'SCANNER TECH III',
    },
    {
      id: 368,
      role: 'ANAL CONTABIL E AUD',
    },
    {
      id: 369,
      role: 'ASS DE QUALIDADE',
    },
    {
      id: 370,
      role: 'ANALISTA DE COMPRAS',
    },
    {
      id: 371,
      role: 'ASS DE TI',
    },
    {
      id: 372,
      role: 'ASS PESS OPERATIVO'
    },
    {
      id: 373,
      role: 'ASSIS FISCAL',
    },
    {
      id: 374,
      role: 'AUX COORDENACAO',
    },
    {
      id: 375,
      role: 'COORD COMERCIAL',
    },
    {
      id: 376,
      role: 'COORD DE OPERACOES',
    },
    {
      id: 377,
      role: 'COORD DE PROJETOS',
    },
    {
      id: 378,
      role: 'COORD FINANC/FISCAL',
    },
    {
      id: 379,
      role: 'COORD INOV OTIMIZACA',
    },
    {
      id: 380,
      role: 'COORD INSPECAO E DIL',
    },
    {
      id: 381,
      role: 'ANALISTA ADMINISTRATIVO',
    },
    {
      id: 382,
      role: 'ASSIST QUALIDADE',
    },
    {
      id: 383,
      role: 'ASSISTENTE DE RH',
    },
    {
      id: 384,
      role: 'ASSISTENTE DE TI',
    },
    {
      id: 385,
      role: 'INSP REVEST NACE 2',
    },
    {
      id: 386,
      role: 'TEC DOCUMENTACAO',
    },
    {
      id: 387,
      role: 'ANAL PROJ E GESTAO - OPERACIONAL',      
    },
    {
      id: 388,
      role: 'AUX INSPENCAO',      
    },
    {
      id: 389,
      role: 'AUX OPERACAO',     
    },
    {
      id: 390,
      role: 'INSP QUALIDADE III',      
    },
    {
      id: 391,
      role: 'TEC PROT CATODICA 3',     
    },
    {
      id: 392,
      role: 'ANAL PROC E GESTÃO',      
    },
    {
      id: 393,
      role: 'SUP. PROJETOS',      
    },
    {
      id: 394,
      role: 'ANAL PROJ E GESTAO',     
    },
    {
      id: 395,
      role: 'ANAL FINANCEIRO',     
    },
    {
      id: 396,
      role: 'ANAL CONTABIL JUNIOR',      
    },
    {
      id: 397,
      role: 'ANAL SGI',    
    },
    {
      id: 398,
      role: 'GER TEC.AV INSPECAO',     
    },
    {
      id: 399,
      role: 'COORD ENERGIAS RENOV',
    },
    {
      id: 400,
      role: 'ANAL DE COMPRAS',
    },
    {
      id: 401,
      role: 'ASSISTENTE DIRETORIA',
    },
    {
      id: 402,
      role: 'GER PROJETOS	'
    },
    {
      id: 403,
      role: 'ANALIST FATURAMENTO'
    },
    {
      id: 404,
      role: 'OPERADOR MANUTENCAO'
    },
    {
      id: 405,
      role: 'SUPERVISOR DE MEDICAO'
    },
    {
      id: 406,
      role: 'SUPEVISOR DE MEDICAO'
    },
    {
      id: 407,
      role: 'TEC PROJ ELETRICOS'
    },
    {
      id: 408,
      role: 'ANAL SGI'
    },
    {
      id: 409,
      role: 'COOR COMER MINERACAO'
    },
    {
      id: 410,
      role: 'ENG DE PROJETOS'
    },
    {
      id: 411,
      role: 'PLANNER'
    },
    {
      id: 412,
      role: 'SUP ELETRICA TEC II'
    },
    {
      id: 413,
      role: 'ANAL DE PROJETOS'
    },
    {
      id: 414,
      role: 'ANAL COMER EXTERIOR'
    },
    {
      id: 415,
      role: 'AUX PROJETOS'
    },
    {
      id: 416,
      role: 'CONSULTOR'
    },
    {
      id: 417,
      role: 'COORD PROJ CLAND'
    },
    {
      id: 418,
      role: 'INSTALADOR'
    }
  ];

  // Função de manipulação de alteração da barra de pesquisa
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredUsers = users.filter((user) => {
      const { id, role } = user;

      return (
        id.toString().includes(searchTerm) ||
        role.toLowerCase().includes(searchTerm) 
      );
    });

    const sortedUsers = [...filteredUsers].sort((a, b) => a.id - b.id);
    setSortedUsers(sortedUsers);
    setSearchValue(searchTerm);
  };

  // Filtra todos os usuários quando a caixa de pesquisa esta vazia
  const allUsers = searchValue === '' ? role : sortedUsers;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedUsers = allUsers.slice(startIndex, endIndex);


  return (
    <div className="container mx-auto py-3">
      <h1 className="text-2xl font-bold mb-4 mt-10">
        Lista de funções cadastradas
      </h1>
      <div className='content-start flex justify-end mt-10'>
        <a href="/qsms/configuracoes" className="bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
          Voltar
        </a>

        <a href="/qsms/configuracoes/funcoes/cadastrar" className="ml-6 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
          Cadastrar
        </a>

        <a href="/qsms/configuracoes/funcoes/relatorios" className="ml-6 bg-gray-800 hover:bg-black rounded-lg text-white font-mono border border-gray-700 transition shadow-lg hover:shadow-xl active:shadow-2xl hover:text-orange-500 duration-300 p-2">
          Relatórios
        </a>
      </div>

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

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="h-10 border-b border-r text-center border-gray-300 pr-5">
              ID
            </th>
            <th className="border-b border-r text-center border-gray-300 pr-5">
              Nome da Função
            </th>
            <th className="border-b text-center border-gray-300 pr-5">Opções</th>
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
                {user.role}
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

export default FuncoesPage;
