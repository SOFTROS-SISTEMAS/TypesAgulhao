
export interface GxspcProdutoparametro {
    nome: string;
    obrigatorio: boolean;
}
        
export interface GxspcProdutoinsumo_opcional {
    nome: string;
    codigo: string;
    opcional: boolean;
}
        
export interface GxspcProdutoinsumo_retorno {
    nome: string;
    codigo: string;
    opcional: boolean;
}
        
export interface GxspcProduto {
    codigo: string;
    nome: string;
    parametro: GxspcProdutoparametro[];
    insumo_opcional: GxspcProdutoinsumo_opcional[];
    insumo_retorno: GxspcProdutoinsumo_retorno[];
}
        