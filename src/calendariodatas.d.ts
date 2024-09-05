
export interface GxCalendarioDataseventos {
    icone: string;
    cor: string;
    desc: string;
    link: string;
    isAcao: boolean;
}
        
export interface GxCalendarioDatas {
    id: string; // (Caso não queira usar este campo, preencha o ano, mes e dia)
    ano: number;
    mes: number;
    dia: number;
    link: string;
    isAcao: boolean;
    eventos: GxCalendarioDataseventos[];
}
        