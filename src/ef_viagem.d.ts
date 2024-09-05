import { GxeF_ViagemValores as GxSdtImportadoeF_ViagemValores } from './ef_viagemvalores'
import { GxeF_InformacoesBancarias as GxSdtImportadoeF_InformacoesBancarias } from './ef_informacoesbancarias'
import { GxeF_NotaFiscal as GxSdtImportadoeF_NotaFiscal } from './ef_notafiscal'

export interface GxeF_Viagem {
    DocumentoViagem: string;
    CodigoMunicipioOrigem: number;
    CodigoMunicipioDestino: number;
    CepOrigem: string;
    CepDestino: string;
    DistanciaPercorrida: number;
    Valores: GxSdtImportadoeF_ViagemValores;
    TipoPagamento: string;
    InformacoesBancarias: GxSdtImportadoeF_InformacoesBancarias;
    NotasFiscais: GxSdtImportadoeF_NotaFiscal[];
}
        