
export interface GxsdtFeriadosferiados {
    feriado: boolean;
    tipo: string;
    descricao: string;
    titulo: string;
    dia: string;
}
        
export interface GxsdtFeriados {
    feriados: GxsdtFeriadosferiados[];
}
        