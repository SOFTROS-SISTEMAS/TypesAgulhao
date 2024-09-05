
export interface GxsdtProdutosGrades {
    PedidoItemId: number;
    ProdutoGradeId: number;
    ProdutoGradeBarras: number;
    ProdutoVencimento1: string;
    ProdutoVencimento2: string;
    ProdutoVencimento3: string;
    ProdutoQtd1: number;
    ProdutoQtd2: number;
    ProdutoQtd3: number;
    ProdutoGradeNumero: string;
    ProdutoGradeQtdeEmb: number;
}
        
export interface GxsdtProdutos {
    EmpresaCodigo: number;
    produtoCod: number;
    ProdutoDescricao: string;
    ProdutoVlrUnt: number;
    ProdutoUnd: string;
    ProdutoQtde: number | null;
    ProdutoGradeId: number;
    Grades: GxsdtProdutosGrades[];
}
        