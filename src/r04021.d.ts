
export interface GxR04021referenciascoresgrades {
    NecessidadeGradeId: number;
    NecessidadeGradeOrdem: number;
    NecessidadeGradeNumero: string;
    NecessidadeVendaTotal: number;
    NecessidadeQtdeEntregar: number;
    NecessidadeProduzindo: number;
    NecessidadeEstoque: number;
    NecessidadeConferindo: number;
    Saldo: number;
    Necessidade: number;
}
        
export interface GxR04021referenciascores {
    CorCod: number;
    CorNome: string;
    CorHexa: string;
    TecidoDescricao: string;
    TecidoCod: number;
    grades: GxR04021referenciascoresgrades[];
}
        
export interface GxR04021referencias {
    NecessidadeProdutoCod: number;
    NecessidadeReferencia: string;
    NecessidadeDescricao: string;
    NecessidadeDoProduto: number;
    NecessidadeSobraDoProduto: number;
    NecessidadeMenPrevEnt: string;
    cores: GxR04021referenciascores[];
}
        
export interface GxR04021filtros {
    FilialCod: number[];
    ProdutoCod: number;
    TipoIntervalo: number;
    DataInicio: string;
    DataFinal: string;
    OrdernarPor: string;
    isSomenteComNecessidade: boolean;
    isSomenteComSobras: boolean;
    ColecaoCod: number;
    MarcaCod: number;
}
        
export interface GxR04021 {
    referencias: GxR04021referencias[];
    filtros: GxR04021filtros;
}
        