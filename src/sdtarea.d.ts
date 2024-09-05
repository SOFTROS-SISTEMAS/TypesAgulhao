
export interface GxsdtAreaarea {
    AreaNom: string; // Área
    AreaCod: number; // Cód. Área
    AreaCor: string;
    RegiaoCod: number;
}
        
export interface GxsdtArearegiao {
    RegiaoNome: string;
    RegiaoCor: string;
    RegiaoCod: number;
}
        
export interface GxsdtArea {
    area: GxsdtAreaarea[];
    regiao: GxsdtArearegiao[];
}
        