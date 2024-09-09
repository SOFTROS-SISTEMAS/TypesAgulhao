
export interface GxsdtColecaoFaturamento {
    ColecaoFatDataApv: string;
    ColecaoFatDataFat: string;
    ColecaoFatQtdVnd: number;
    ColecaoFatQtdPcs: number;
}
        
export interface GxsdtColecaoVendedor {
    ColecaoVendedorCod: number;
    ColecaoVendedorNome: string;
    ColecaoVendedorMeta: number;
    ColecaoVendedorMetaCliNovos: number;
    ColecaoVendedorVlrVendido: number;
    ColecaoVendedorQtdeVendida: number;
    ColecaoVendedorMetaPerc: number;
}
        
export interface GxsdtColecaoProduto {
    ProdutoCod: number;
    ProdutoReferencia: string;
    ProdutoDescricao: string;
}

export interface GxsdtColecaoRegrasPedidosAnalise {
    camposObrigatoriosColecao?: string[];
    camposObrigatoriosPadrao?: string[];
}
        
export interface GxsdtColecao {
    ColecaoCod: number; // Coleção
    ColecaoNome: string; // Nome
    ColecaoUltimoProduto: number; // Último produto
    ColecaoTipoMeta: string;
    ColecaoMeta: number;
    ColecaoCor: string;
    ColecaoDataInicio: string;
    ColecaoEstacao: string;
    ColecaoAno: number;
    COlecaoDispVenda: boolean;
    ColecaoValidarEstoque: boolean;
    ColecaoValidarEstoqueExc: string;
    ColecaoInativarGrdZeradas: boolean;
    ColecaoTipoLctoCod: number;
    ColecaoTipoLctoDesc: string;
    ColecaoPoliticas: string;
    checado: boolean;
    Faturamento: GxsdtColecaoFaturamento[];
    Vendedor: GxsdtColecaoVendedor[];
    Produto: GxsdtColecaoProduto[];
    regrasPedidosAnalise?: GxsdtColecaoRegrasPedidosAnalise;
}