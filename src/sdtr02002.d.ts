
export interface GxsdtR02002 {
    PedidoId: number;
    PedidoTipo: string;
    PedidoDataEmissao: string;
    PedidoPrevisaoEntrega: string;
    PedidoDataFechamento: string;
    PedidoStatusStr: string;
    PedidoStatusFinStr: string;
    PedidoClienteCod: number;
    PedidoCLienteNome: number;
    TipoLancamentoDescricao: string;
    QtdePedido: number;
    QtdeFaturadas: number;
    QtdeDevolvidas: number;
    PedidoValorBruto: number;
    PedidoTotalDescontos: number;
    PedidoTotalOutros: number;
    PedidoValorLiquido: number;
    PedidoPercFaturamento: number;
    MargemContribuicao: number;
    tmpTotalDescontos: number;
    PedidoGuiaCod: number;
    ValorNFe: number;
    nNf: number;
    dEmi: string;
    countNF: number;
    PedidoSaidaStatus: number;
    FormasPgtoPedido: string;
    PrazosPedido: string;
}
        