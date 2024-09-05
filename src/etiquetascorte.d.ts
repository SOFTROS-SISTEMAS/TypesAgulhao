
export interface GxEtiquetasCorteComposicao {
    Composicao: string;
    Porcentagem: number;
}
        
export interface GxEtiquetasCorteTamanho {
    Tamanho: string;
    Quantidade: number | null;
    CodBarras: string;
}
        
export interface GxEtiquetasCorteConservacao {
    Conservacao: string;
}
        
export interface GxEtiquetasCorte {
    TipoImpressao: number;
    ModeloEtiquetaId: string;
    MarcaNome: string;
    MarcaLogoPeq: string;
    ProdutoCod: string;
    ProdutoDescricao: string;
    OP: string;
    FilialNom: string;
    FilialCGC: string;
    MsgAdicional: string;
    TotalEtiquetas: number;
    Composicao: GxEtiquetasCorteComposicao[];
    Tamanho: GxEtiquetasCorteTamanho[];
    Conservacao: GxEtiquetasCorteConservacao[];
}
        