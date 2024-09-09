import { GxMetas as GxSdtImportadoMetas } from './metas'
import { GxsdtR02002 as GxSdtImportadosdtR02002 } from './sdtr02002'

export interface GxsdtMetasFiltros {
    iData: string;
    fData: string;
    MetaMensalDescricao: string;
    MetaMensalAno: number;
    MetaMensalAnoFinal: number;
    MetaMensalMes: number;
    MetaMensalDia: number;
    PedidoColecaoCod: number;
    FilialCod: number;
    Filiais: number[];
    Limite: number;
    OrdenacaoRankingProdutos: string;
    isDetalhar: boolean;
    isPedidosAtrasados: boolean;
    anos: number[];
    pedidoTipo: string[];
    statusPedidoMascarado: number[];
    ColecaoCod: number;
}
        
export interface GxsdtMetasMensagens {
    Mensagem: string;
    Tipo: number;
}
        
export interface GxsdtMetasMetasLite {
    MetaMensalMes: number;
    MetaMensalAno: number;
    MetaMensalTipo: string;
    MetaMensalValor: number;
    MetaMensalDescricao: string;
    MetaMensalValorAlcancado: number;
    MetaMensalValorAlcancadoPorcentagem: number;
}
        
export interface GxsdtMetasDashFormaPgto {
    vwDashFormaPgtoAno: number;
    vwDashFormaPgtoMes: number;
    vwDashFormaPgtoDia: number;
    vwDashFormaPgtoCod: number;
    vwDashFormaPgtoValor: number;
    vwDashFormaPgtoDescricao: number;
    vwDashFormaPgtoFilCod: number;
}
        
export interface GxsdtMetasDashMarca {
    vwDashMarcaFilCod: number;
    vwDashMarcaCod: number;
    vwDashMarcaDia: number;
    vwDashMarcaMes: number;
    vwDashMarcaAno: number;
    vwDashMarcaValor: number;
    vwDashMarcaNome: string;
    vwDashMarcaLogo: string;
}
        
export interface GxsdtMetasRankingProdutosProdutos {
    ProdutoCod: number;
    ProdutoDescricao: string;
    ProdutoReferencia: string;
    ProdutoMarcaCod: number;
    PedidoItemQtde: number;
    PedidoItemValorLiquido: number;
    ProdutoMarcaNome: string;
    PedidoItemRentabilidade: number;
}
        
export interface GxsdtMetasRankingProdutos {
    TotalUnidadesVendidas: number;
    TotalVendido: number;
    TotalDeRendimento: number;
    TotalProdutos: number;
    Produtos: GxsdtMetasRankingProdutosProdutos[];
}
        
export interface GxsdtMetasResumoVendasDatasPedidos {
    PedidoId: number;
    PedidoClienteCod: number;
    PedidoClienteNome: string;
    PedidoValorLiquido: number;
    PedidoTotQtde: number;
    PedidoFormasPagamento: string;
}
        
export interface GxsdtMetasResumoVendasDatas {
    Data: string;
    QtdeVenda: number;
    VlrDeposito: number;
    VlrDinheiro: number;
    VlrBoletos: number;
    VlrCheque: number;
    VlrCartao: number;
    VlrCartaoCred: number;
    VlrTotal: number;
    VlrCusto: number;
    VlrLucro: number;
    VlrPercLucro: number;
    VlrCreditoLoja: number;
    VlrDuplicatas: number;
    VlrPix: number;
    VlrSemDefinir: number;
    Pedidos: GxsdtMetasResumoVendasDatasPedidos[];
}
        
export interface GxsdtMetasResumoVendas {
    FilialCod: number;
    FilialNom: string;
    Datas: GxsdtMetasResumoVendasDatas[];
}
        
export interface GxsdtMetasComparativoFiliaisMetas {
    MetaMensalMes: number;
    MetaMensalValor: number;
    MetaMensalValorAlcancado: number;
    MetaMensalDescricao: string;
    MetaMensalAno: number;
    QtdItens: number;
}
        
export interface GxsdtMetasComparativoFiliais {
    FilialCod: number;
    FilialNom: string;
    Metas: GxsdtMetasComparativoFiliaisMetas[];
}
        
export interface GxsdtMetasPedidosMargempedidos {
    pedidoId: number;
    pedidoClienteNome: string;
    pedidoEmissao: string;
    pedidoValorLiquido: number;
    pedidoQuantidade: number;
    pedidoStatus: string;
    pedidoMargem: number;
}
        
export interface GxsdtMetasPedidosMargem {
    bom: number;
    medio: number;
    ruim: number;
    pedidos: GxsdtMetasPedidosMargempedidos[];
}
        
export interface GxsdtMetasPontoEquilibrio {
    metaFaturamento: number;
    totalFaturamento: number;
    totalDespesasPagas: number;
    totalDespesasPrevistas: number;
    despesasPrevistas: number[];
    datas: string[];
    faturamento: number[];
    despesasPagas: number[];
}
        
export interface GxsdtMetas {
    EmpresaCodigo: number;
    FilialCod: number;
    PessoaCod: number;
    Acao: string;
    Metas: GxSdtImportadoMetas[];
    PedidosPeriodo: GxSdtImportadosdtR02002;
    Filtros: GxsdtMetasFiltros;
    Mensagens: GxsdtMetasMensagens[];
    MetasLite: GxsdtMetasMetasLite[];
    DashFormaPgto: GxsdtMetasDashFormaPgto[];
    DashMarca: GxsdtMetasDashMarca[];
    RankingProdutos: GxsdtMetasRankingProdutos;
    ResumoVendas: GxsdtMetasResumoVendas[];
    ComparativoFiliais: GxsdtMetasComparativoFiliais[];
    PedidosMargem: GxsdtMetasPedidosMargem;
    PontoEquilibrio: GxsdtMetasPontoEquilibrio;
}
        