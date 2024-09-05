import { GxeF_Viagem as GxSdtImportadoeF_Viagem } from './ef_viagem'
import { GxeF_Impostos as GxSdtImportadoeF_Impostos } from './ef_impostos'
import { GxeF_Pagamento as GxSdtImportadoeF_Pagamento } from './ef_pagamento'
import { GxeF_Contratado as GxSdtImportadoeF_Contratado } from './ef_contratado'
import { GxeF_ServicoMotorista as GxSdtImportadoeF_ServicoMotorista } from './ef_servicomotorista'
import { GxeF_Destinatario as GxSdtImportadoeF_Destinatario } from './ef_destinatario'
import { GxeF_Contratante as GxSdtImportadoeF_Contratante } from './ef_contratante'
import { GxeF_Subcontratante as GxSdtImportadoeF_Subcontratante } from './ef_subcontratante'
import { GxeF_Consignatario as GxSdtImportadoeF_Consignatario } from './ef_consignatario'
import { GxeF_TomadorServico as GxSdtImportadoeF_TomadorServico } from './ef_tomadorservico'
import { GxeF_Remetente as GxSdtImportadoeF_Remetente } from './ef_remetente'
import { GxeF_ProprietarioCarga as GxSdtImportadoeF_ProprietarioCarga } from './ef_proprietariocarga'
import { GxeF_ServicoVeiculo as GxSdtImportadoeF_ServicoVeiculo } from './ef_servicoveiculo'

export interface GxeF_AdicionarOperacaoTransporteRequest {
    Token: string;
    Integrador: string;
    Versao: number;
    TipoViagem: string;
    EmissaoGratuita: boolean;
    TipoPagamento: string;
    BloquearNaoEquiparado: boolean;
    MatrizCNPJ: number;
    FilialCNPJ: number;
    IdOperacaoCliente: string;
    DataInicioViagem: string;
    DataFimViagem: string;
    CodigoNCMNaturezaCarga: number;
    PesoCarga: number;
    TipoEmbalagem: string;
    Viagenss: GxSdtImportadoeF_Viagem[];
    Impostos: GxSdtImportadoeF_Impostos;
    Pagamentoss: GxSdtImportadoeF_Pagamento[];
    Contratado: GxSdtImportadoeF_Contratado;
    Motorista: GxSdtImportadoeF_ServicoMotorista;
    Destinatario: GxSdtImportadoeF_Destinatario;
    Contratante: GxSdtImportadoeF_Contratante;
    Subcontratante: GxSdtImportadoeF_Subcontratante;
    Consignatario: GxSdtImportadoeF_Consignatario;
    TomadorServico: GxSdtImportadoeF_TomadorServico;
    Remetente: GxSdtImportadoeF_Remetente;
    ProprietarioCarga: GxSdtImportadoeF_ProprietarioCarga;
    Veiculoss: GxSdtImportadoeF_ServicoVeiculo[];
    CodigoIdentificacaoOperacaoPrincipal: string;
    ObservacoesAoTransportador: string[];
    ObservacoesAoCredenciado: string[];
    EntregaDocumentacao: string;
    QuantidadeSaques: number;
    QuantidadeTransferencias: number;
    ValorSaques: number;
    ValorTransferencias: number;
    CodigoTipoCarga: number;
    AltoDesempenho: boolean;
    DestinacaoComercial: boolean;
    FreteRetorno: boolean;
    CepRetorno: string;
    DistanciaRetorno: number;
}
        