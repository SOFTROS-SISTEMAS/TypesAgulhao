
export interface GxsdtAviaentosGradesGrade {
    ProdutoGradeId: number;
    ProdutoGradeNumero: string;
    ProdutoGradeCorCod: number;
    ProdutoGradeCorNome: number;
    ProdutoGradeCorHexa: number;
    ProdutoIsTecido: boolean;
    ProdutoIsAviamento: boolean;
    Quantidade: number | null;
}
        
export interface GxsdtAviaentosGrades {
    AviProdutoCod: number;
    AviProdutoDescricao: number;
    AviProdutoIsTecido: number;
    AviProdutoIsAviamento: number;
    UnidadeMedidaSigla: string;
    QtdTotal: number;
    AviEtapaPadrao: number;
    ProdutoAviTecPrincipal: boolean;
    Grade: GxsdtAviaentosGradesGrade[];
}
        