import { GxeF_ViagemValores as GxSdtImportadoeF_ViagemValores } from './ef_viagemvalores'
import { GxeF_InformacoesBancarias as GxSdtImportadoeF_InformacoesBancarias } from './ef_informacoesbancarias'
import { GxeF_NotaFiscal1 as GxSdtImportadoeF_NotaFiscal1 } from './ef_notafiscal1'

export interface GxeF_Viagem1 {
    DocumentoViagem: string;
    CodigoMunicipioOrigem: number;
    CodigoMunicipioDestino: number;
    CepOrigem: string;
    CepDestino: string;
    Valores: GxSdtImportadoeF_ViagemValores;
    TipoPagamento: string;
    InformacoesBancarias: GxSdtImportadoeF_InformacoesBancarias;
    NotasFiscais: GxSdtImportadoeF_NotaFiscal1[];
}
        