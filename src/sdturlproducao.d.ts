import { Gxsdtcorte as GxSdtImportadosdtcorte } from './sdtcorte'
import { GxsdtApontamento as GxSdtImportadosdtApontamento } from './sdtapontamento'
import { GxsdtProducaoFuncionarioDia as GxSdtImportadosdtProducaoFuncionarioDia } from './sdtproducaofuncionariodia'
import { GxR04001_SDT as GxSdtImportadoR04001_SDT } from './r04001_sdt'

export interface GxsdtUrlProducaoFiltrosCortesPorBeneficiador {
    AcaoEtapa: string;
    PessoaCod: number;
    ProdutoCod: number;
    DataInicio: string;
    DataFinal: string;
    GrupoCod: number;
    SubGrupoCod: number;
    Modelo: string;
    CicloCod: number;
    IsIncluirRecepcionados: boolean;
    IsSomenteComDiferenca: number;
    MarcaCod: number[];
    EtapaId: number[];
}
        
export interface GxsdtUrlProducaoFiltrosEficiencia {
    DataProducao: string;
    SetorCod: number;
    isDetalharCortes: boolean;
    isSomenteProducaoDiaria: boolean;
    isNaoDemitido: boolean;
    CateProfiCod: string;
}
        
export interface GxsdtUrlProducaoFiltros {
    CorteId: number;
    CorteOP: number;
    CorteProdutoCod: number;
    Texto: string;
    CortePedidoId: number;
    CorteClienteNome: string;
    isTodosBloqueios: boolean;
    Modo: string;
    Ordem: number;
    DataInicial: string;
    DataFinal: string;
    PessoaCod: number;
    MaquinaCod: number;
    CortesPorBeneficiador: GxsdtUrlProducaoFiltrosCortesPorBeneficiador;
    Eficiencia: GxsdtUrlProducaoFiltrosEficiencia;
}
        
export interface GxsdtUrlProducaoCortesCorteAcabamento {
    CorteAcabamentoId: number; // Corte Acabamento Id
    CorteAcabamentoPessoaCod: number; // Corte Acabamento Pessoa Cod
    CorteAcabamentoPessoaNome: string; // Corte Acabamento Pessoa Nome
    CorteAcabamentoDataEnvio: string; // Corte Acabamento Data Envio
    CorteAcabamentoDataEntrega: string; // Corte Acabamento Data Entrega
    CorteAcabamentoQtdePecas: number; // Corte Acabamento Qtde Pecas
}
        
export interface GxsdtUrlProducaoCortesCorteLavanderia {
    CorteLavanderiaId: number; // Corte Lavanderia Id
    CorteLavanderiaPessoaCod: number; // Corte Lavanderia Pessoa Cod
    CorteLavanderiaPessoaNome: string; // Corte Lavanderia Pessoa Nome
    CorteLavanderiaDataEnvio: string; // Corte Lavanderia Data Envio
    CorteLavanderiaDataEntrega: string; // Corte Lavanderia Data Entrega
    CorteLavanderiaQtdePecas: number; // Corte Lavanderia Qtde Pecas
}
        
export interface GxsdtUrlProducaoCortesCorteAcabamentoExt {
    CorteAcabamentoExtId: number; // Corte Acabamento Ext Id
    CorteAcabamentoExtPessoaCod: number; // Corte Acabamento Ext Pessoa Cod
    CorteAcabamentoExtPessoaNome: number; // Corte Acabamento Ext Pessoa Nome
    CorteAcabamentoExtDataEnvio: string; // Corte Acabamento Ext Data Envio
    CorteAcabamentoExtDataEntrega: string; // Corte Acabamento Ext Data Entrega
    CorteAcabamentoExtQtdePecas: number; // Corte Acabamento Ext Qtde Pecas
}
        
export interface GxsdtUrlProducaoCortesCorteEtapasInfos {
    Quantidade: number | null;
    QuantidadeCorte: number;
    QuantidadeFicha: number;
    QuantidadeTotal: number;
    EtapaIsMovtoPorGrade: boolean;
    EtapaPermiteLancarVlrCus: boolean;
    EtapaImprimirRecibo: boolean;
}
        
export interface GxsdtUrlProducaoCortesCorteEtapasTerceiros {
    EtapaClienteCod: number;
    EtapaClienteNome: string;
}
        
export interface GxsdtUrlProducaoCortesCorteEtapasMovtoGrade {
    CorteEtapaMovtoGrdId: number; // Grade
    CorteEtapaMovtoGrdTam: number; // Tamanho
    CorteEtapaMovtoGrdEAN: number; // Cód Barras
    CorteEtapaMovtoGrdOrd: number; // Ordem
    CorteEtapaMovtoGrdQtd: number; // Quantidade
}
        
export interface GxsdtUrlProducaoCortesCorteEtapasMovto {
    CorteEtapaMovtoId: number; // Corte Etapa Movto Id
    CorteEtapaMovtoTipo: string; // Envio / Retorno
    CorteEtapaMovtoData: string; // Data
    CorteEtapaMovtoQtd: number; // Quantidade
    CorteEtapaQtdEnv: number; // Corte Etapa Qtd Env
    CorteEtapaQtdRet: number; // Corte Etapa Qtd Ret
    CorteEtapaMovtoUsr: string; // Corte Etapa Movto Usr
    CorteEtapaMovtoPedido: number; // Nº do Pedido vinculado
    CorteEtapaMovtoIdNFe: string; // Chave de NFe
    CorteEtapaMovtoBenCod: number;
    CorteEtapaMovtoBenNome: string;
    CorteEtapaMovtoFechamentoId: number;
    CorteEtapaMovtoHora: string;
    CorteEtapaMovtoMaqCod: number;
    CorteEtapaMovto_ApnId: number;
    Grade: GxsdtUrlProducaoCortesCorteEtapasMovtoGrade[];
}
        
export interface GxsdtUrlProducaoCortesCorteEtapasMaquinas {
    MaquinaCod: number;
    MaquinaDescricao: string;
}
        
export interface GxsdtUrlProducaoCortesCorteEtapas {
    CorteEtapaId: number; // Corte Etapa Id
    CorteEtapaDescricao: string; // Corte Etapa Descricao
    CorteEtapaBaixada: number; // Corte Etapa Baixada
    CorteEtapaBaixMatPrima: number; // Corte Etapa Baix Mat Prima
    CorteEtapaGerEst: number; // Corte Etapa Ger Est
    CorteEtapaOrdem: number; // Corte Etapa Ordem
    CorteEtapaDataEnvio: string; // Corte Etapa Data Envio
    CorteEtapaDataRetorno: string; // Corte Etapa Data Retorno
    CorteEtapaQtdeEnvio: number; // Corte Etapa Qtde Envio
    CorteEtapaQtdeRetorno: number; // Corte Etapa Qtde Retorno
    CorteEtapaPerda: number; // Corte Etapa Perda
    CorteEtapaNroNf: number; // Corte Etapa Nro Nf
    CorteEtapaValorNf: number; // Corte Etapa Valor Nf
    CorteEtapaValorUnt: number; // Corte Etapa Valor Unt
    CorteEtapaDigEnvio: string; // Corte Etapa Dig Envio
    CorteEtapaDigRetorno: string; // Corte Etapa Dig Retorno
    CorteEtapaQtdeDefeito: number; // Corte Etapa Qtde Defeito
    CorteEtapaPrevisaoDias: number; // Corte Etapa Previsao Dias
    CorteEtapaBloqueado: boolean; // Corte Etapa Bloqueado
    CorteEtapaLiberado: boolean; // Corte Etapa Liberado
    CorteEtapaEnviouPiloto: boolean; // Enviou Piloto?
    CorteEtapaTotEnviado: number; // Total Enviado
    CorteEtapaTotRetornado: number; // Total Retornado
    CorteEtapaFinalizada: boolean; // Boolean
    Infos: GxsdtUrlProducaoCortesCorteEtapasInfos;
    Terceiros: GxsdtUrlProducaoCortesCorteEtapasTerceiros[];
    Movto: GxsdtUrlProducaoCortesCorteEtapasMovto[];
    Maquinas: GxsdtUrlProducaoCortesCorteEtapasMaquinas[];
}
        
export interface GxsdtUrlProducaoCortesCorteSetor {
    CorteSetorCod: number; // Corte Setor Cod
    CorteSetorDescricao: number; // Corte Setor Descricao
    CorteSetorIsProducao: number; // Corte Setor Is Producao
    CorteSetorDataEnvio: string; // Corte Setor Data Envio
    CorteSetorDataEntrega: string; // Corte Setor Data Entrega
    CorteSetorQtdePecas: number; // Corte Setor Qtde Pecas
}
        
export interface GxsdtUrlProducaoCortesCorteGrades {
    CorteGradeId: number;
    CorteGradeNumero: number;
    CorteGradeEnfestoA: number;
    CorteGradeEnfestoB: number;
    CorteGradeEnfestoC: number;
    CorteGradeRetalho: number;
    CorteGradeOrdem: number;
    CorteGradeProdutoId: number;
    CorteGradeMovimento: number;
    CorteGradeCorCod: number;
    CorteGradeCorNome: string;
    CorteGradeCorHexa: string;
}
        
export interface GxsdtUrlProducaoCortesCorteConferenciaGrades {
    CorteConferenciaGradeFaltam: number;
    CorteConferenciaGradeQtdeCorte: number;
    QtdeJaConferida: number;
    CorteConferenciaGradeQtde: number;
    CorteConferenciaGradeNum: number;
    CorteConferenciaGradeId: number;
    CorteConferenciaGradeEAN: number;
    CorteConferenciaGradeCorCod: number;
    CorteConferenciaGradeCorNome: string;
    CorteConferenciaGradeCorHexa: number;
}
        
export interface GxsdtUrlProducaoCortesCorteConferencia {
    QTDECORTE: number;
    CorteConferenciaTotalSemDef: number;
    CorteConferenciaTotalDefTecido: number;
    CorteConferenciaTotalDefFac: number;
    CorteConferenciaTotalDefLav: number;
    CorteConferenciaTotalDefAca: number;
    CorteConferenciaTotalDefBor: number;
    CorteConferenciaTotalDefBorCus: number;
    CorteConferenciaTotalPcCusto: number;
    CorteConferenciaTotalVenda: number;
    QtdeTotalJaConferida: number;
    PerdasDaEtapa: number;
    BuscaCodigoBarras: string;
    ProdutoReferencia: string;
    ProdutoDescricao: string;
    CorteConferenciaGradeTipo: string;
    isLancarDefeitos: boolean;
    Grades: GxsdtUrlProducaoCortesCorteConferenciaGrades[];
}
        
export interface GxsdtUrlProducaoCortes {
    CorteId: number; // Corte Id
    CorteDataEntrada: string; // Corte Data Entrada
    CorteOP: number; // Corte OP
    CorteOC: number; // Corte OC
    CorteClienteCod: number; // Corte Cliente Cod
    CorteClienteNome: string; // Corte Cliente Nome
    CorteClientePrevEntrega: number; // Corte Cliente Prev Entrega
    CorteValorPeca: number; // Corte Valor Peca
    CorteValorPecaDev: number; // Corte Valor Peca Dev
    CorteTranspCod: number; // Corte Transp Cod
    CorteTranspNome: string; // Corte Transp Nome
    CorteFechamentoFreteId: number; // Corte Fechamento Frete Id
    CorteTotalPecasSetor: number; // Corte Total Pecas Setor
    CorteTotalPecasGrade: number; // Corte Total Pecas Grade
    CorteTotalPecasNFe: number; // Corte Total Pecas NFe
    CorteTotalPecasSaldo: number; // Corte Total Pecas Saldo
    CorteProdutoCod: number; // Corte Produto Cod
    CorteProdutoDescricao: number; // Corte Produto Descricao
    CorteProdutoReferencia: string; // Corte Produto Referencia
    CorteProdutoTotalPontos: number; // Corte Produto Total Pontos
    CorteProdutoMarcod: number; // Corte Produto Marcod
    CorteProdutoMarDesc: number; // Corte Produto Mar Desc
    CorteProdutoDivisaoLoteCod: number; // Corte Produto Divisao Lote Cod
    CorteProdutoDivisaoLoteDesc: number; // Corte Produto Divisao Lote Desc
    CorteProdutoGrupoCod: number; // Corte Produto Grupo Cod
    CorteProdutoGrupoDesc: number; // Corte Produto Grupo Desc
    CorteProdutoSubGrupoCod: number; // Corte Produto Sub Grupo Cod
    CorteProdutoSubGrupoDesc: number; // Corte Produto Sub Grupo Desc
    CorteProdutoGenero: number; // Corte Produto Genero
    CorteTotalPontos: number; // Corte Total Pontos
    CorteprodutoTeccod: number; // Corte Produto tec cod
    Corteprodutotecdescricao: number; // Corte Produto Tec Descricao
    CorteProdutoIndCod: number; // Corte Produto Ind Cod
    CorteProdutoIndDescricao: number; // Corte Produto Ind Descricao
    CorteProdutoIndReferencia: string; // Corte Produto Ind Referencia
    CorteProdutoIndMarcaCod: number; // Corte Produto Ind Marca Cod
    CorteProdutoIndMarcaDesc: number; // Corte Produto Ind Marca Desc
    CorteTotalPecasDesejado: number; // Corte Total Pecas Desejado
    CorteCompEnfesto: number; // Corte Comp Enfesto
    CorteCompEnfestoB: number; // Corte Comp Enfesto B
    CorteCompEnfestoC: number; // Corte Comp Enfesto C
    CorteFolhasRetalho: number; // Corte Folhas Retalho
    CorteCompRetalho: number; // Corte Comp Retalho
    CorteCiclo: number; // Corte Ciclo
    CorteTotalEnfesto: number; // Corte Total Enfesto
    CorteNumPares: number; // Corte Num Pares
    CorteNumParesB: number; // Corte Num Pares B
    CorteNumParesC: number; // Corte Num Pares C
    CorteCompTecido: number; // Corte Comp Tecido
    CorteConsumoPeca: number; // Corte Consumo Peca
    CorteTotalPerda: number; // Corte Total Perda
    CorteEtapaAtual: string; // Etapa atual do corte
    CorteEtapaAtualId: number;
    CorteEtapaAtualDesc: string;
    CorteEtapaAtualER: string;
    CorteQtdeSobra: number; // Corte Qtde Sobra
    CorteObservacoes: string; // Corte Observacoes
    CorteObsTecido: string; // Corte Obs Tecido
    corteisFinalizado: boolean; // corteis Finalizado
    CorteIsFinalizadoPCP: boolean; // Corte Is Finalizado PCP
    CorteTotalEntregas: number; // Corte Total Entregas
    CorteSaldoEntregas: number; // Corte Saldo Entregas
    CorteControlarSaldo: boolean; // Corte Controlar Saldo
    CorteConferidoPor: string; // Corte Conferido Por
    CorteConferidoData: string; // Corte Conferido Data
    CorteConferidoHora: string; // Corte Conferido Hora
    CorteRecepcionado: string; // Corte Recepcionado
    CorteRecepcionadoUsr: string; // Corte Recepcionado Usr
    CortePedidoId: number; // Corte Pedido Id
    CortePedidoDataUpd: string; // Corte Pedido Data Upd
    CortePrevisaoEntrega: string; // Data de entrega
    CorteLiberadoEm: string; // Data de liberação
    CorteEtapaId: number;
    CorteDestinoCod: number;
    CorteEnvioRetorno: number;
    CorteEtapaQtdeEnvio: number;
    CorteEtapaDescricao: string;
    CorteEtapaDataEnvio: string;
    CorteEtapaDataRetorno: string;
    CorteEtapaQtdeRetorno: number;
    CorteDestinoNome: string;
    CorteProdutoEtapaCusto: number;
    CorteDataEntrega: string;
    CorteEtapaBloqueado: boolean;
    CorteTotalPecas: number;
    CorteEtapaDiferenca: number;
    CorteEtapaMovtoVlrCus: number;
    CorteEtapaMovtoPrevRetorno: string;
    CorteEtapaMovtoHora: string;
    CorteEtapaMovtoMaqCod: number;
    CorteEtapaMovto_ApnId: number;
    CortePrevisaoEntregaCor: string;
    CorteAcabamento: GxsdtUrlProducaoCortesCorteAcabamento[];
    CorteLavanderia: GxsdtUrlProducaoCortesCorteLavanderia[];
    CorteAcabamentoExt: GxsdtUrlProducaoCortesCorteAcabamentoExt[];
    CorteEtapas: GxsdtUrlProducaoCortesCorteEtapas[];
    CorteSetor: GxsdtUrlProducaoCortesCorteSetor[];
    CorteGrades: GxsdtUrlProducaoCortesCorteGrades[];
    CorteConferencia: GxsdtUrlProducaoCortesCorteConferencia;
}
        
export interface GxsdtUrlProducaoRetorno {
    RetornoNivel: number;
    RetornoDescricao: string;
}
        
export interface GxsdtUrlProducaoPacotesOperacoesApontamentos {
    pessoaCod: number;
    pessoaNomeRazao: string;
    pessoaImagem: string;
    corteMovtoQtdePecas: number;
    corteMovtoApontResp: string;
    corteMovtoApontIni: string;
    corteMovtoId: number;
    maquinaCod: number;
    maquinaDescricao: string;
}
        
export interface GxsdtUrlProducaoPacotesOperacoes {
    operacaoCod: number;
    operacaoDescricao: string;
    produtoCod: number;
    produtoDescricao: string;
    produtoOperacaoTipoMaquinaDsc: number;
    produtoOperacaoTempo: string;
    produtoOperacaoDescricao: number;
    Apontamentos: GxsdtUrlProducaoPacotesOperacoesApontamentos[];
}
        
export interface GxsdtUrlProducaoPacotes {
    tipoPacoteCod: number;
    tipoPacoteDescricao: string;
    Operacoes: GxsdtUrlProducaoPacotesOperacoes[];
}
        
export interface GxsdtUrlProducaoFuncionariosApontamento {
    maquinaCod: number;
    maquinaDescricao: string;
    tipoMaquinaDesc: string;
    corteMovtoId: number;
    produtoCod: number;
    produtoOperacaoTempo: string;
    produtoDescricao: string;
    corteMovtoApontIni: string;
    corteMovtoApontFin: string;
    corteMovtoApontResp: string;
    corteMovtoQtdePecas: number;
    corteId: number;
    corteMovto_OperacaoCod: number;
    corteMovto_OperacaoDescricao: number;
    corteMovtoTotalPontos: number;
    isParado: boolean;
}
        
export interface GxsdtUrlProducaoFuncionarios {
    pessoaCod: number;
    pessoaNomeRazao: string;
    pessoaFoto: string;
    Apontamento: GxsdtUrlProducaoFuncionariosApontamento;
}
        
export interface GxsdtUrlProducao {
    EmpresaCodigo: number;
    FilialCod: number;
    PessoaCod: number;
    Acao: string;
    sdtcorte: GxSdtImportadosdtcorte;
    sdtApontamento: GxSdtImportadosdtApontamento;
    sdtProducaoFuncionarioDia: GxSdtImportadosdtProducaoFuncionarioDia;
    sdtR04001: GxSdtImportadoR04001_SDT;
    Json: string;
    Filtros: GxsdtUrlProducaoFiltros;
    Cortes: GxsdtUrlProducaoCortes[];
    Retorno: GxsdtUrlProducaoRetorno[];
    Pacotes: GxsdtUrlProducaoPacotes[];
    Funcionarios: GxsdtUrlProducaoFuncionarios[];
}
        