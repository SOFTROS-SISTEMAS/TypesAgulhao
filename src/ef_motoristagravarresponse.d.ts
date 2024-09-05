import { GxeF_Excecao as GxSdtImportadoeF_Excecao } from './ef_excecao'
import { GxeF_Motorista as GxSdtImportadoeF_Motorista } from './ef_motorista'

export interface GxeF_MotoristaGravarResponse {
    Versao: number;
    Sucesso: boolean;
    Excecao: GxSdtImportadoeF_Excecao;
    ProtocoloServico: number;
    Motorista: GxSdtImportadoeF_Motorista;
}
        