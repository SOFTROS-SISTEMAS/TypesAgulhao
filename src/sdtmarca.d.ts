
export interface GxsdtMarcaProdutos {
    ProdutoCod: number;
    ProdutoDescricao: string;
    ProdutoReferencia: string;
    Quantidade: number | null;
    ValorBruto: number;
    ValorLiquido: number;
    ValorCusto: number;
}
        
export interface GxsdtMarca {
    MarcaCod: number;
    MarcaNome: string;
    MarcaQtdeVendida: number;
    MarcaVlrBruto: number;
    MarcaVlrLiquido: number;
    MarcaVlrCusto: number;
    isChecado: boolean;
    MarcaLogo: string;
    MarcaFinalizaCorteExpedicao: boolean;
    MarcaIsCorte: boolean;
    MarcaLogoExterno: string;
    Produtos: GxsdtMarcaProdutos[];
}
        