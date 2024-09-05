import { GxeF_Excecao as GxSdtImportadoeF_Excecao } from './ef_excecao'

export interface GxeF_LogoutResponse {
    Versao: number;
    Sucesso: boolean;
    Excecao: GxSdtImportadoeF_Excecao;
    ProtocoloServico: number;
}
        