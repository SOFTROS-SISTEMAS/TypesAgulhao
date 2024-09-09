
export interface GxR04001_SDTProducao {
    CorteId: number;
    CorteOP: number;
    CorteProdutoCod: number;
    CorteProdutoReferencia: string;
    CorteProdutoDescricao: string;
    CorteMovto_OperacaoDescricao: string;
    CorteMovtoData: string;
    CorteMovtoPontosOperacao: number;
    CorteMovtoQtdePecas: number;
    CorteMovtoTotalPontos: number;
}
        
export interface GxR04001_SDT {
    PessoaCod: number;
    PessoaNomeRazao: string;
    PontosDoDia: number;
    PontosAcumuladoMes: number;
    Producao: GxR04001_SDTProducao[];
}
        