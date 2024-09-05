
export interface GxsdtAcompanharEstoqueitemfilial {
    filialCod: number;
    filialDescricao: string;
    enviado: number;
    retornado: number;
}
        
export interface GxsdtAcompanharEstoqueitem {
    codigo: number;
    descricao: string;
    filial: GxsdtAcompanharEstoqueitemfilial[];
}
        
export interface GxsdtAcompanharEstoque {
    item: GxsdtAcompanharEstoqueitem[];
}
        