
export interface GxSdtPedido_ColetorItens {
    produtoCod: number;
    ProdutoDescricao: string;
    ProdutoUnd: string;
    ProdutoVlrUnt: number;
    PedidoItemTmpQtde: number;
    PedidoItemTmpQtdeDev: number;
    PedidoItemTmpQtdeLiq: number;
    PedidoItemTmpVlrTot: number;
    PedidoItemGradeEmb: number;
    PedidoItemDescontoPerc: number;
    PedidoItemDescontoDinheiro: number;
}
    
export interface GxSdtPedido_Coletor {
    EmpresaCodigo: number;
    PedidoId: number;
    PedidoCliCod: number;
    PedidoCliNom: string;
    PedidoTmpEntregador: string;
    PedidoTmpTotal: number;
    PedidoVendedorCod: number;
    PedidoAcao: string;
    PedidoObservacoes: string;
    Itens: GxSdtPedido_ColetorItens[];
}
    