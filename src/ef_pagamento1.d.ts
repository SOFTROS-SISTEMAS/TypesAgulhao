import { GxeF_InformacoesBancarias as GxSdtImportadoeF_InformacoesBancarias } from './ef_informacoesbancarias'

export interface GxeF_Pagamento1 {
    IdPagamentoCliente: string;
    DataDeLiberacao: string;
    Valor: number;
    TipoPagamento: string;
    InformacoesBancarias: GxSdtImportadoeF_InformacoesBancarias;
    InformacaoAdicional: string;
}
        