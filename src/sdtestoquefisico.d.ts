
export interface GxsdtEstoqueFisicoGrades {
    grdGradeId: number;
    grdCor: string;
    grdTamanho: string;
    grdCorCod: number;
    grdProdutoCodBarras: number;
    grdProdutoQtde: number;
    grdProdutoQtde2: number;
    grdQtdeCorteSegLote: number;
    grdQtdeDispLote1: number;
    grdQtdeSaldo: number;
    grdQtdeFaturada: number; // Faturada
    Estoque: number;
    Reservado: number;
    Disponivel: number;
    Produzindo: number;
    Minimo: number;
    Conferindo: number;
    UltimaCompra: string;
    VlrCusto: number;
    VlrVenda: number;
    QtdeVendidaPeriodo: number;
    Ordem: number;
}
        
export interface GxsdtEstoqueFisico {
    ProdutoCod: number;
    ProdutoReferencia: string;
    ProdutoDescricao: string;
    ProdutoQtde: number;
    EstoqueReservado: number;
    EstoqueTemporario: number;
    ProdutoQtde2: number;
    QtdeCorteSegLote: number;
    QtdeDispLote1: number;
    QtdeSaldo: number;
    QtdeFaturada: number;
    ProdutoVlrUnit: number;
    ProdutoVlrUnit2: number;
    ProdutoVlrUnit3: number;
    ProdutoVlrUnit4: number;
    ProdutoVlrUnit5: number;
    ProdutoVlrTot: number;
    UltimaEntrada: string;
    QtdeEntrada: number;
    PercVenda: number;
    TipoLancamentoDescricao: string;
    ProdutoNCM: string;
    GradeTamanhoCod: number; // Código de grade
    ProdutoUND: string;
    MarcaNome: string;
    Grades: GxsdtEstoqueFisicoGrades[];
}
        