import { GxsdtContaNivel as GxSdtImportadosdtContaNivel } from './sdtcontanivel'

export interface GxsdtDRelista {
    DreMes: number;
    DreAno: number;
    DreResultado: number | null;
}
        
export interface GxsdtDRerelatoriovalores {
    DreFilialCod: number;
    DreFilialDetValor: number;
    DreFilialDetDesc: string;
    DreFilialDetId: number;
    DreFilialDetNivel: string;
}
        
export interface GxsdtDRerelatorio {
    descricao: string;
    TipoDetDRe: string;
    grupoDre: number;
    total: number;
    valores: GxsdtDRerelatoriovalores[];
}
        
export interface GxsdtDRefiliais {
    DreFilialCod: number;
    DreFilialDetDesc: string;
    DreFilialRecOpBruta: number;
    DreFilialDedSobreVendas: number;
    DreFilialRecOpLiquida: number;
    DreFilialCMV: number;
    DreFilialLucroBruto: number;
    DreFilialDespOp: number;
    DreFilialLucroOperacional: number;
    DreFilialDespNaoOp: number;
    DreFilialRecNaoOp: number;
    DreFilialLucroLiqAntIRCS: number;
    DreFilialImpRndContSoc: number;
    DreFilialResultadoPeriodo: number;
    DreFilialCorHex: string;
}
        
export interface GxsdtDRelancamentos {
    id: number;
    descricao: string;
    data: string;
    valor: number;
    receitaDespesa: string;
}
        
export interface GxsdtDRe {
    acao: number;
    id: string;
    ano: number;
    mes: number;
    chaveUsr: string;
    operacao: number;
    filialCod: number;
    msgErro: string;
    grupoDre: string;
    arvoreNiveis: GxSdtImportadosdtContaNivel[];
    lista: GxsdtDRelista[];
    relatorio: GxsdtDRerelatorio[];
    filiais: GxsdtDRefiliais[];
    lancamentos: GxsdtDRelancamentos[];
}
        