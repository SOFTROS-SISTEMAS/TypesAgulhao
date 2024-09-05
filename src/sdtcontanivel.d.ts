import { GxsdtContaNivel as GxSdtImportadosdtContaNivel } from './sdtcontanivel'

export interface GxsdtContaNivel {
    no?: string;
    descricao?: string;
    existe?: boolean;
    indice?: number;
    filial?: number;
    valor?: number;
    PlanoContasId?: number;
    PlanoContasTipoCusto?: string; // Tipo Custo
    PlanoContasConRelPlanoContas?: boolean;
    PlanoContasContaTipo?: string;
    PlanoContasReceitaDespesa?: string;
    PlanoContasContaGrupo?: number;
    filhos: GxSdtImportadosdtContaNivel[];
}
        