
export interface GxsdtBatidasPontoFuncionarios {
    PessoaCod: number;
    RelogioPontoDia: string;
    RelogioPontoData: string;
    CargaHorariaTipo: string;
    CargaHorariaTipoLetra: string;
    RelogioPontoEnt1: string;
    RelogioPontoEnt1v: string;
    RelogioPontoSai1: string;
    RelogioPontoSai1v: string;
    Intervalo: string;
    EscalaIntervalo: string;
    RelogioPontoEnt2: string;
    RelogioPontoEnt2v: string;
    RelogioPontoSai2: string;
    RelogioPontoSai2v: string;
    RelogioPontoEnt3: string;
    RelogioPontoEnt3v: string;
    RelogioPontoSai3: string;
    RelogioPontoSai3v: string;
    RelogioPontoObs: string;
    RelogioPontoTipo: string;
    TotalDia: string;
    HorasExtras: string;
    HorasFalta: string;
    relogioPontoId: number;
    Checado: boolean;
    PassouToleranciaAlmoco: boolean;
    HorasExtrasAcum: string;
    HorasExtrasAcumv: string;
    HorasExtrasEscala: string;
    TipoEscala: string; // Tipo da escala
    EscalaCod: number;
}
        
export interface GxsdtBatidasPonto {
    SetorCod: number;
    SetorDescricao: string;
    SetorFuncResp: string;
    SetorTotFuncAtv: number;
    SetorTotFuncTrab: number;
    SetorTotFuncInter: number;
    SetorTotFalt: number;
    SetorHorasExtAcum: string;
    SetorHorasExtAcumv: string;
    SetorHorasFalAcum: string;
    SetorHorasFalAcumv: string;
    SetorTotalStr: string;
    Checado: boolean; // Chech
    Horas: string;
    EscalaCod: number;
    EscalaDsc: string;
    Funcionarios: GxsdtBatidasPontoFuncionarios[];
}
        