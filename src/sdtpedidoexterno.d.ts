
export interface GxsdtPedidoExternoCapa {
    PedidoId: number;
    PedidoDataEmissao: string;
    PedidoDataFechamento: string;
    FilialCGC: string;
    PedidoDescontoPerc: number;
    PedidoDescontoDinheiro: number;
}
        
export interface GxsdtPedidoExternoProdutos {
    PedidoItemId: number;
    ProdutoCod: number;
    ProdutoGradeId: number;
    ProdutoGradeBarras: number;
    ProdutoGradeCorNome: string;
    ProdutoGradeCorHexa: string;
    ProdutoGradeNumero: string;
    ProdutoGradeOrdem: number;
    ProdutoReferencia: string;
    ProdutoDescricao: string;
    GrupoDescricao: string;
    SubGrupoDescricao: string;
    SubSubGrupoDescricao: string;
    ProdutoPeso: number;
    PedidoItemValorUnitario: number;
    PedidoItemQtde: number;
    NcmCodigo: string;
    UnidadeMedidaSigla: string;
    ProdutoGradeColunaPreco: number;
}
        
export interface GxsdtPedidoExterno {
    Capa: GxsdtPedidoExternoCapa;
    Produtos: GxsdtPedidoExternoProdutos[];
}
        