import { GxeF_Viagem2 as GxSdtImportadoeF_Viagem2 } from './ef_viagem2'
import { GxeF_Pagamento2 as GxSdtImportadoeF_Pagamento2 } from './ef_pagamento2'

export interface GxeF_AdicionarViagemRequest {
    Token: string;
    Integrador: string;
    Versao: number;
    CodigoIdentificacaoOperacao: string;
    Viagens: GxSdtImportadoeF_Viagem2[];
    Pagamentos: GxSdtImportadoeF_Pagamento2[];
    NaoAdicionarParcialmente: boolean;
}
        