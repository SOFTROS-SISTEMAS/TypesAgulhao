
export interface GxestatisticasProdutoultimaCompra {
    data: string;
    cliente: string;
    quantidade: number;
}
        
export interface GxestatisticasProdutoquantidadeVendida {
    mes: number;
    ano: number;
    quantidade: number;
}
        
export interface GxestatisticasProdutoquantidadeComprada {
    mes: number;
    quantidade: number;
    ano: number;
}
        
export interface GxestatisticasProdutorankingGrades {
    produtoGradeId: number;
    produtoGradeNumero: string;
    produtoGradeCorHex: string;
    quantidade: number;
}
        
export interface GxestatisticasProdutohistoricoAlteracaoCusto {
    data: string;
    valor: number;
    usuario: string;
}
        
export interface GxestatisticasProdutoultimaVenda {
    data: string;
    cliente: string;
    quantidade: number;
}
        
export interface GxestatisticasProdutocores {
    corCod: number;
    corDescricao: string;
    corHex: string;
}
        
export interface GxestatisticasProduto {
    produtoCod: number;
    produtoDescricao: string;
    produtoCadastradoPor: string;
    produtoDataCadastro: string;
    produtoDataAlteracao: string;
    ultimaCompra: GxestatisticasProdutoultimaCompra;
    quantidadeVendida: GxestatisticasProdutoquantidadeVendida[];
    quantidadeComprada: GxestatisticasProdutoquantidadeComprada[];
    rankingGrades: GxestatisticasProdutorankingGrades[];
    historicoAlteracaoCusto: GxestatisticasProdutohistoricoAlteracaoCusto[];
    ultimaVenda: GxestatisticasProdutoultimaVenda;
    cores: GxestatisticasProdutocores[];
}
        