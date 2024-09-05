
export interface GxsdtImpEtiquetaetiquetas {
    ValorLinha1: string;
    ValorLinha2: string;
    ValorLinha3: string;
    ValorCodBarras: string;
    CabCampoLivre: string;
    ProdutoCod: string;
    ProdutoDesc: string;
    PrecoVista: string;
    PrecoPrazo: string;
    ProdutoGradeNumero: string;
    CorteOp: string;
    CorteLote: string;
}
        
export interface GxsdtImpEtiqueta {
    TipoImpressao: number;
    ModeloEtiquetaId: number;
    IniciarNaLinha: number;
    IniciarNaColuna: number;
    etiquetas: GxsdtImpEtiquetaetiquetas[];
}
        