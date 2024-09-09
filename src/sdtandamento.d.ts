
export interface GxsdtAndamentosdtAndamentoPedidosItems {
    PedidoItemGradeQtdeSaldo: number;
    PedidoItemGradeQtdAteEst: number;
    PedidoItemGradeQtdAtePrd: number;
    PedidoItemGradePercAte: number;
    ProdutoGradeNumero: string;
    ProdutoGradeCorNome: string;
    produtoCod: number;
    ProdutoDescricao: string;
    ProdutoGradeBarras: number;
    ProdutoReferencia: string;
    Corte: string;
    ProdutoGradeOrdem: number;
    ProdutoGradeId: number;
}
        
export interface GxsdtAndamento {
    PedidoId: number;
    PedidoClienteCod: number;
    PedidoDataEmissao: string;
    PedidoPrevisaoEntrega: string;
    PedidoVendedorCod: number;
    PedidoPrioridade: string;
    PedidoPercCompleto: number;
    PedidoClienteNome: string;
    PedidoTotQtde: number; // Qtde Pedido
    PedidoQtdeAte: number; // Qtde Estoque
    PedidoQtdeConf: number; // Qtde Conf.
    PedidoValorLiquido: number;
    sdtAndamentoPedidosItems: GxsdtAndamentosdtAndamentoPedidosItems[];
}
        