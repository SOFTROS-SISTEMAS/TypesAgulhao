import { GxeF_ToleranciaDePerdaDeMercadoria as GxSdtImportadoeF_ToleranciaDePerdaDeMercadoria } from './ef_toleranciadeperdademercadoria'
import { GxeF_DiferencaDeFrete as GxSdtImportadoeF_DiferencaDeFrete } from './ef_diferencadefrete'

export interface GxeF_NotaFiscal {
    Numero: string;
    Serie: string;
    Data: string;
    ValorTotal: number;
    ValorDaMercadoriaPorUnidade: number;
    CodigoNCMNaturezaCarga: number;
    DescricaoDaMercadoria: string;
    UnidadeDeMedidaDaMercadoria: string;
    TipoDeCalculo: string;
    ValorDoFretePorUnidadeDeMercadoria: number;
    QuantidadeDaMercadoriaNoEmbarque: number;
    ToleranciaDePerdaDeMercadoria: GxSdtImportadoeF_ToleranciaDePerdaDeMercadoria;
    DiferencaDeFrete: GxSdtImportadoeF_DiferencaDeFrete;
}
        