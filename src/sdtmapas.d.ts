import { GxpoligonosProperties as GxSdtImportadopoligonosProperties } from './poligonosproperties'

export interface GxsdtMapasestados {
    uf: string;
    centroLat: string;
    centroLon: string;
    tipo: string;
    regiao: number;
    area: number;
}
        
export interface GxsdtMapasfiltros {
    filiais: number[];
    mes: number;
    ano: number;
    regiao: number;
    area: number;
    colecaoCod: number;
    naoCarregarPoligonos: boolean;
    AreaVendedorResponsavel: number;
}
        
export interface GxsdtMapasregioes {
    id: string;
    cor: string;
    ibges: string[];
}
        
export interface GxsdtMapasareas {
    id: string;
    cor: string;
    nome: string;
    regiaoCod: string;
    regiaoNome: string;
    ibges: string[];
}
        
export interface GxsdtMapas {
    acao: number;
    geojson?: string;
    poligonosProperties: GxSdtImportadopoligonosProperties;
    estados: GxsdtMapasestados[];
    filtros: GxsdtMapasfiltros;
    regioes: GxsdtMapasregioes[];
    areas: GxsdtMapasareas[];
}
        