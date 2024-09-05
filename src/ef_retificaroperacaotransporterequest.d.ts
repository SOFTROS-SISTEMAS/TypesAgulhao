import { GxeF_ServicoVeiculo1 as GxSdtImportadoeF_ServicoVeiculo1 } from './ef_servicoveiculo1'

export interface GxeF_RetificarOperacaoTransporteRequest {
    Token: string;
    Integrador: string;
    Versao: number;
    CodigoIdentificacaoOperacao: string;
    DataInicioViagem: string;
    DataFimViagem: string;
    CodigoNCMNaturezaCarga: number;
    PesoCarga: number;
    CodigoMunicipioOrigem: number;
    CodigoMunicipioDestino: number;
    Veiculos: GxSdtImportadoeF_ServicoVeiculo1[];
    QuantidadeSaques: number;
    QuantidadeTransferencias: number;
    ValorSaques: number;
    ValorTransferencias: number;
    CodigoTipoCarga: number;
    CepOrigem: string;
    CepDestino: string;
    DistanciaPercorrida: number;
}
        