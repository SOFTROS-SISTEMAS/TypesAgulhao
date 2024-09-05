
export interface GxsdtIntegracoesproduto {
    ProdutoCod: number;
    ProdutoGradeId: number;
}
        
export interface GxsdtIntegracoespedido {
    PedidoId: number;
    PedidoIdExterno: string;
}
        
export interface GxsdtIntegracoesretorno {
    mensagem: string;
    sucesso: boolean;
}
        
export interface GxsdtIntegracoes {
    acaoIntegracao: number;
    integracao: number;
    filialCod: number;
    msgRetorno: string;
    produto: GxsdtIntegracoesproduto;
    pedido: GxsdtIntegracoespedido;
    retorno: GxsdtIntegracoesretorno;
}
        