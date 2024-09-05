import { GxeF_Excecao as GxSdtImportadoeF_Excecao } from './ef_excecao'
import { GxeF_Proprietario as GxSdtImportadoeF_Proprietario } from './ef_proprietario'

export interface GxeF_ProprietarioGravarResponse {
    Versao: number;
    Sucesso: boolean;
    Excecao: GxSdtImportadoeF_Excecao;
    ProtocoloServico: number;
    Proprietario: GxSdtImportadoeF_Proprietario;
}
        