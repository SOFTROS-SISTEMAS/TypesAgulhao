import { GxeF_ViagemValores as GxSdtImportadoeF_ViagemValores } from './ef_viagemvalores'
import { GxeF_InformacoesBancarias as GxSdtImportadoeF_InformacoesBancarias } from './ef_informacoesbancarias'
import { GxeF_NotaFiscal2 as GxSdtImportadoeF_NotaFiscal2 } from './ef_notafiscal2'

export interface GxeF_Viagem2 {
    DocumentoViagem: string;
    CodigoMunicipioOrigem: number;
    CodigoMunicipioDestino: number;
    CepOrigem: string;
    CepDestino: string;
    Valores: GxSdtImportadoeF_ViagemValores;
    TipoPagamento: string;
    InformacoesBancarias: GxSdtImportadoeF_InformacoesBancarias;
    NotasFiscaiss: GxSdtImportadoeF_NotaFiscal2[];
}
        