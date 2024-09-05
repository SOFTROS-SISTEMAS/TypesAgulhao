import { GxsdtObservacoes as GxSdtImportadosdtObservacoes } from './sdtobservacoes'

export interface GxR02045Contabil {
    PlanoContasId: number;
    PlanoContasContaNivel: string;
    PlanoContasValor: number;
    Sinal: string;
    Percentual: number;
    PlanoContasDescricao: string;
    PlanoContasSubDescricao: string;
    sdtObservacoes: GxSdtImportadosdtObservacoes[];
}
        