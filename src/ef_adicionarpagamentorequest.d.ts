import { GxeF_Pagamento3 as GxSdtImportadoeF_Pagamento3 } from './ef_pagamento3'

export interface GxeF_AdicionarPagamentoRequest {
    Token: string;
    Integrador: string;
    Versao: number;
    CodigoIdentificacaoOperacao: string;
    Pagamentos: GxSdtImportadoeF_Pagamento3[];
}
        