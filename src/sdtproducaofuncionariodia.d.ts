
export interface GxsdtProducaoFuncionarioDiaDiasPausas {
    ApontamentosPerdasId: number;
    ApontamentosPerdasApontIni: string;
    ApontamentosPerdasApontFin: string;
    ApontamentosPerdasObs: string; // Observações
    isFinalizado: boolean;
    editado: boolean;
}
        
export interface GxsdtProducaoFuncionarioDiaDiasApontamentosPausas {
    ApontamentosPerdasId: number;
    ApontamentosPerdasApontIni: string;
    ApontamentosPerdasApontFin: string;
    ApontamentosPerdasApontObs: string; // Observações
    isFinalizado: boolean;
    editado: boolean;
}
        
export interface GxsdtProducaoFuncionarioDiaDiasApontamentos {
    CorteMovtoId: number;
    CorteMovto_CorteId: number;
    CorteMovto_OperacaoCod: number;
    CorteMovtoQtdePecas: number;
    CorteMovtoApontIni: string;
    CorteMovtoApontFin: string;
    CorteMovtoObs: string; // Observações
    isFinalizado: boolean;
    editado: boolean;
    Pausas: GxsdtProducaoFuncionarioDiaDiasApontamentosPausas[];
}
        
export interface GxsdtProducaoFuncionarioDiaDias {
    Data: string;
    SegundosApontadosNoDia: number; // Segundos Apontados no dia
    SegundosCargaDoDia: number; // Carga Horaria do dia
    SegundosTrabalhadosNoDia: number;
    SegundosPausasApontNoDia: number; // Segundos Pausados no dia ref. apontamentos
    SegundosPausasFuncNoDia: number; // Segundos Pausados no dia ref. Funcionario
    SegundosIntervalosDoDia: number;
    SegundosEfetivosDoDia: number;
    strCargaHoraria: string;
    strHorasTrabalhadas: string;
    strHorasIntervalo: string;
    strApontamentosParadas: string;
    strFuncionarioParadas: string;
    strHorasApontadas: string;
    strHorasEfetivas: string;
    PercEficiencia: number;
    Pausas: GxsdtProducaoFuncionarioDiaDiasPausas[];
    Apontamentos: GxsdtProducaoFuncionarioDiaDiasApontamentos[];
}
        
export interface GxsdtProducaoFuncionarioDia {
    PessoaCod: number;
    PessoaNomeRazao: string;
    TotSegTrabalhados: number;
    TotSegParaApontamento: number;
    TotSegPausasFuncionario: number;
    TotSegApontados: number;
    TotSegEfetivos: number;
    TotHorasTrabalhadas: string;
    TotHorasParadaApontamento: string;
    TotHorasPausasFuncionario: string;
    TotHorasApontadas: string;
    TotHorasEfetivas: string;
    PercEficiencia: number;
    Dias: GxsdtProducaoFuncionarioDiaDias[];
}
        