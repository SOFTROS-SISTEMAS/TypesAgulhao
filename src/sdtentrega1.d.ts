
export interface GxsdtEntrega1Clientes {
    ClienteCodigo: number;
    ClienteNome: string;
    ClienteQtde: number;
}
        
export interface GxsdtEntrega1 {
    EmpresaCodigo: number;
    ProdutoCod: number;
    ProdutoDescricao: string;
    Clientes: GxsdtEntrega1Clientes[];
}
        