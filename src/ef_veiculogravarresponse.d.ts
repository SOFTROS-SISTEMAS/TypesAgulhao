import { GxeF_Excecao as GxSdtImportadoeF_Excecao } from './ef_excecao'
import { GxeF_Veiculo as GxSdtImportadoeF_Veiculo } from './ef_veiculo'

export interface GxeF_VeiculoGravarResponse {
    Versao: number;
    Sucesso: boolean;
    Excecao: GxSdtImportadoeF_Excecao;
    ProtocoloServico: number;
    Veiculo: GxSdtImportadoeF_Veiculo;
}
        