import { GxeF_InformacoesBancarias as GxSdtImportadoeF_InformacoesBancarias } from './ef_informacoesbancarias'

export interface GxeF_Pagamento {
    IdPagamentoCliente: string;
    DataDeLiberacao: string;
    Valor: number;
    TipoPagamento: string;
    Categoria: string;
    Documento: string;
    InformacoesBancarias: GxSdtImportadoeF_InformacoesBancarias;
    InformacaoAdicional: string;
    CnpjFilialAbastecimento: string;
}
        