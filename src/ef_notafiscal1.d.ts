import { GxeF_ToleranciaDePerdaDeMercadoria1 as GxSdtImportadoeF_ToleranciaDePerdaDeMercadoria1 } from './ef_toleranciadeperdademercadoria1'

export interface GxeF_NotaFiscal1 {
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
    QuantidadeDaMercadoriaNoDesembarque: number;
    ToleranciaDePerdaDeMercadoria: GxSdtImportadoeF_ToleranciaDePerdaDeMercadoria1;
}
        