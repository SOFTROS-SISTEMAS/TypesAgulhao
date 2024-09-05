import { GxeF_DiferencaFreteTolerancia as GxSdtImportadoeF_DiferencaFreteTolerancia } from './ef_diferencafretetolerancia'
import { GxeF_DiferencaFreteMargem as GxSdtImportadoeF_DiferencaFreteMargem } from './ef_diferencafretemargem'

export interface GxeF_DiferencaDeFrete {
    Tipo: string;
    Base: string;
    Tolerancia: GxSdtImportadoeF_DiferencaFreteTolerancia;
    MargemGanho: GxSdtImportadoeF_DiferencaFreteMargem;
    MargemPerda: GxSdtImportadoeF_DiferencaFreteMargem;
}
        