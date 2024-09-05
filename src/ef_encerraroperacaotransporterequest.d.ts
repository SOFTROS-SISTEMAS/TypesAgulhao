import { GxeF_Viagem1 as GxSdtImportadoeF_Viagem1 } from './ef_viagem1'
import { GxeF_Pagamento1 as GxSdtImportadoeF_Pagamento1 } from './ef_pagamento1'
import { GxeF_Impostos as GxSdtImportadoeF_Impostos } from './ef_impostos'

export interface GxeF_EncerrarOperacaoTransporteRequest {
    Token: string;
    Integrador: string;
    Versao: number;
    CodigoIdentificacaoOperacao: string;
    PesoCarga: number;
    Viagens: GxSdtImportadoeF_Viagem1[];
    Pagamentos: GxSdtImportadoeF_Pagamento1[];
    Impostos: GxSdtImportadoeF_Impostos;
    QuantidadeSaques: number;
    QuantidadeTransferencias: number;
    ValorSaques: number;
    ValorTransferencias: number;
}
        