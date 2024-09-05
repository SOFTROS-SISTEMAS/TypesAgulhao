
export interface GxsdtEstoqueGrades {
    ProdutoCod: number;
    ProdutoGradeId: number;
    Quantidade: number;
    Estoque: number;
    Saldo: number;
}
        
export interface GxsdtEstoquequantidade {
    atual: number;
    reservado: number;
    temporario: number;
    disponivel: number;
    conferindo: number;
    aprovando: number;
}
        
export interface GxsdtEstoque {
    FilialCod: number;
    Mensagem: string;
    PedidoId: number;
    ColecaoCod: number;
    Grades: GxsdtEstoqueGrades[];
    quantidade: GxsdtEstoquequantidade;
}
        