
export interface GxsdtGradeItemPedido {
    ProdutoGradeId: number; // Produto Grade Id
    ProdutoGradeCorCod: number; // Produto Grade Cor Cod
    ProdutoGradeCorNome: number; // Produto Grade Cor Nome
    ProdutoGradeNumero: string; // Produto Grade Numero
    PedidoItemGradeQtde: number; // Pedido Item Grade Qtde
    PedidoItemGradeQtdeDevolvida: number; // Pedido Item Grade Qtde Devolvida
    ProdutoGradeBarras: number;
    GradeSelecionada: boolean;
    ProdutoQtdeEstoque: number;
    ProdutoEstoqueGrupo: number;
    PedidoItemGradeQtdeSec: number;
    ProdutoQtdeEstoqueSec: number;
    PedidoDataEmissao: string;
    PedidoPrevisaoEntrega: string;
    PedidoClienteNome: string;
    PedidoVendedorNome: string;
    PedidoId: number;
    ProdutoGradeOrdem: number;
    PedidoSaidaStatus: number;
}
        