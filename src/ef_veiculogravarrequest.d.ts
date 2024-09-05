import { GxeF_Veiculo as GxSdtImportadoeF_Veiculo } from './ef_veiculo'

export interface GxeF_VeiculoGravarRequest {
    Token: string;
    Integrador: string;
    Versao: number;
    Veiculo: GxSdtImportadoeF_Veiculo;
}
        