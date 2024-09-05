
export interface GxsdtR09008cProduto {
    ProdutoCod: number;
    ProdutoDescricao: string;
    PedidoItemComplemento: string;
    PedidoItemQtde: number;
    UnidadeMedidaSigla: string;
}
        
export interface GxsdtR09008c {
    GrupoCod: number;
    GrupoDescricao: string;
    SubGrupoCod: number;
    SubGrupoDescricao: string;
    Total: number;
    Produto: GxsdtR09008cProduto[];
}
        