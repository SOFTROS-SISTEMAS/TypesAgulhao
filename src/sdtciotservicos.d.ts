import { GxeF_LoginRequest as GxSdtImportadoeF_LoginRequest } from './ef_loginrequest'
import { GxeF_LogoutRequest as GxSdtImportadoeF_LogoutRequest } from './ef_logoutrequest'
import { GxeF_MotoristaGravarRequest as GxSdtImportadoeF_MotoristaGravarRequest } from './ef_motoristagravarrequest'
import { GxeF_ProprietarioGravarRequest as GxSdtImportadoeF_ProprietarioGravarRequest } from './ef_proprietariogravarrequest'
import { GxeF_VeiculoGravarRequest as GxSdtImportadoeF_VeiculoGravarRequest } from './ef_veiculogravarrequest'
import { GxeF_AdicionarOperacaoTransporteRequest as GxSdtImportadoeF_AdicionarOperacaoTransporteRequest } from './ef_adicionaroperacaotransporterequest'
import { GxeF_ObterOperacaoTransportePdfRequest as GxSdtImportadoeF_ObterOperacaoTransportePdfRequest } from './ef_obteroperacaotransportepdfrequest'
import { GxeF_CancelarOperacaoTransporteRequest as GxSdtImportadoeF_CancelarOperacaoTransporteRequest } from './ef_cancelaroperacaotransporterequest'
import { GxeF_EncerrarOperacaoTransporteRequest as GxSdtImportadoeF_EncerrarOperacaoTransporteRequest } from './ef_encerraroperacaotransporterequest'
import { GxeF_AdicionarViagemRequest as GxSdtImportadoeF_AdicionarViagemRequest } from './ef_adicionarviagemrequest'
import { GxeF_AdicionarPagamentoRequest as GxSdtImportadoeF_AdicionarPagamentoRequest } from './ef_adicionarpagamentorequest'
import { GxeF_RetificarOperacaoTransporteRequest as GxSdtImportadoeF_RetificarOperacaoTransporteRequest } from './ef_retificaroperacaotransporterequest'
import { GxeF_LoginResponse as GxSdtImportadoeF_LoginResponse } from './ef_loginresponse'
import { GxeF_LogoutResponse as GxSdtImportadoeF_LogoutResponse } from './ef_logoutresponse'
import { GxeF_MotoristaGravarResponse as GxSdtImportadoeF_MotoristaGravarResponse } from './ef_motoristagravarresponse'
import { GxeF_ProprietarioGravarResponse as GxSdtImportadoeF_ProprietarioGravarResponse } from './ef_proprietariogravarresponse'
import { GxeF_VeiculoGravarResponse as GxSdtImportadoeF_VeiculoGravarResponse } from './ef_veiculogravarresponse'
import { GxeF_AdicionarOperacaoTransporteResponse as GxSdtImportadoeF_AdicionarOperacaoTransporteResponse } from './ef_adicionaroperacaotransporteresponse'
import { GxeF_ObterOperacaoTransportePdfResponse as GxSdtImportadoeF_ObterOperacaoTransportePdfResponse } from './ef_obteroperacaotransportepdfresponse'
import { GxeF_CancelarOperacaoTransporteResponse as GxSdtImportadoeF_CancelarOperacaoTransporteResponse } from './ef_cancelaroperacaotransporteresponse'
import { GxeF_EncerrarOperacaoTransporteResponse as GxSdtImportadoeF_EncerrarOperacaoTransporteResponse } from './ef_encerraroperacaotransporteresponse'
import { GxeF_AdicionarViagemResponse as GxSdtImportadoeF_AdicionarViagemResponse } from './ef_adicionarviagemresponse'
import { GxeF_AdicionarPagamentoResponse as GxSdtImportadoeF_AdicionarPagamentoResponse } from './ef_adicionarpagamentoresponse'
import { GxeF_RetificarOperacaoTransporteResponse as GxSdtImportadoeF_RetificarOperacaoTransporteResponse } from './ef_retificaroperacaotransporteresponse'

export interface GxsdtCiotServicosaddOpT {
    CiotChaveDFe: string; // Ciot Chave DFe
    CiotDataEmissao: string; // Ciot Data Emissao
    CiotTipoViagem: string; // Ciot Tipo Viagem
    CiotDataIniViagem: string; // Ciot Data Ini Viagem
    CiotDataFimViagem: string; // Ciot Data Fim Viagem
    CiotEmissaoGratuita: boolean; // Ciot Emissao Gratuita
    CiotBloquearNaoEquiparado: boolean; // Ciot Bloquear Nao Equiparado
    CiotPagamentoContratante: string; // Ciot Pagamento Contratante
    CiotMatrizCNPJ: string; // Ciot Matriz CNPJ
    CiotFilialCNPJ: string; // Ciot Filial CNPJ
    CiotIdOperacaoCliente: string; // Ciot Id Operacao Cliente
    CiotCodigoNCMCarga: number; // Ciot Codigo NCMCarga
    CiotPesoTotalCarga: number; // Ciot Peso Total Carga
    CiotEmbalagemCarga: string; // Ciot Embalagem Carga
    CiotMotoristaCod: number; // Ciot Motorista Cod
    CiotContratanteCod: number; // Ciot Contratante Cod
    CiotSubContratanteCod: number; // Ciot Sub Contratante Cod
    CiotConsignatarioCod: number; // Ciot Consignatario Cod
    CiotTomCod: number; // Ciot Tom Cod
    CiotImpIRRF: number; // Ciot Imp IRRF
    CiotImpSestSenat: number; // Ciot Imp Sest Senat
    CiotImpINSS: number; // Ciot Imp INSS
    CiotImpISSQN: number; // Ciot Imp ISSQN
    CiotImpOutrosImpostos: number; // Ciot Imp Outros Impostos
    CiotImpOutrosImpostosDesc: string; // Ciot Imp Outros Impostos Desc
    CiotContratadoCpfCnpj: string; // Ciot Contratado Cpf Cnpj
    CiotContratadoRNTRC: number; // Ciot Contratado RNTRC
    CiotContratadoObs: string; // Ciot Contratado Obs
    CiotDestCod: number; // Ciot Dest Cod
    CiotDestComercial: boolean; // Ciot Dest Comercial
    CiotIdRelacionado: string; // Ciot Id Relacionado
    CiotOrientacaoCredenciado: string; // Ciot Orientacao Credenciado
    CiotEntDocumentacao: string; // Ciot Ent Documentacao
    CiotQtdSaques: number; // Ciot Qtd Saques
    CiotQtdTransferencias: number; // Ciot Qtd Transferencias
    CiotQtdSaquesVlr: number;
    CiotQtdTransferenciasVlr: number;
    CiotCodTipoCarga: number; // Ciot Cod Tipo Carga
    CiotAltoDesempenho: boolean; // Ciot Alto Desempenho
    CiotFreteRetorno: boolean; // Ciot Frete Retorno
    CiotFreteRetornoCEP: string; // Ciot Frete Retorno CEP
    CiotFreteRetornoDistancia: number; // Ciot Frete Retorno Distancia
    CiotEstadoCiot: string; // Ciot Estado Ciot
    CiotRespPagamento: string; // Ciot Resp Pagamento
}
        
export interface GxsdtCiotServicosViagensNotas {
    CiotViagensNotaId: number; // Ciot Viagens Nota Id
    CiotViagensNotaNumero: string; // Ciot Viagens Nota Numero
    CiotViagensNotaSerie: string; // Ciot Viagens Nota Serie
    CiotViagensNotaData: string; // Ciot Viagens Nota Data
    CiotViagensNotaValTot: number; // Ciot Viagens Nota Val Tot
    CiotViagensNotaValPerUn: number; // Ciot Viagens Nota Val Per Un
    CiotViagensNotaCodNCM: number; // Ciot Viagens Nota Cod NCM
    CiotViagensNotaDesMerc: string; // Ciot Viagens Nota Des Merc
    CiotViagensNotaUnMedida: string; // Ciot Viagens Nota Un Medida
    CiotViagensNotaValFretPerUn: number; // Ciot Viagens Nota Val Fret Per Un
    CiotViagensNotaTipCalculo: string; // Ciot Viagens Nota Tip Calculo
    CiotViagensNotaQtdMerc: number; // Ciot Viagens Nota Qtd Merc
    CiotViagensNotaTolTipo: string; // Ciot Viagens Nota Tol Tipo
    CiotViagensNotaTolValor: number; // Ciot Viagens Nota Tol Valor
    CiotViagensNotaDifTipo: string; // Ciot Viagens Nota Dif Tipo
    CiotViagensNotaDifBase: string; // Ciot Viagens Nota Dif Base
    CiotViagensNotaDifTolTipo: string; // Ciot Viagens Nota Dif Tol Tipo
    CiotViagensNotaDifTolVal: number; // Ciot Viagens Nota Dif Tol Val
    CiotViagensNotaDifMarGanhoTipo: string; // Ciot Viagens Nota Dif Mar Ganho Tipo
    CiotViagensNotaDifMarGanhoVal: number; // Ciot Viagens Nota Dif Mar Ganho Val
    CiotViagensNotaDifMarPerdaTipo: string; // Ciot Viagens Nota Dif Mar Perda Tipo
    CiotViagensNotaDifMarPerdaVal: number; // Ciot Viagens Nota Dif Mar Perda Val
}
        
export interface GxsdtCiotServicosViagens {
    CiotViagensId: number; // Ciot Viagens Id
    CiotViagensDocumento: string; // Ciot Viagens Documento
    CiotViagensMunOrigem: number; // Ciot Viagens Mun Origem
    CiotViagensMunDest: number; // Ciot Viagens Mun Dest
    CiotViagensCepOrigem: string; // Ciot Viagens Cep Origem
    CiotViagensCepDest: string; // Ciot Viagens Cep Dest
    CiotViagensTipoPagamento: string; // Ciot Viagens Tipo Pagamento
    CiotViagensDistPercorrida: number; // Ciot Viagens Dist Percorrida
    CiotViagensValTotOp: number; // Ciot Viagens Val Tot Op
    CiotViagensValTotAdiant: number; // Ciot Viagens Val Tot Adiant
    CiotViagensValTotQuit: number; // Ciot Viagens Val Tot Quit
    CiotViagensValComb: number; // Ciot Viagens Val Comb
    CiotViagensValPedag: number; // Ciot Viagens Val Pedag
    CiotViagensValSeg: number; // Ciot Viagens Val Seg
    CiotViagensValOutDeb: number; // Ciot Viagens Val Out Deb
    CiotViagensValOutCred: number; // Ciot Viagens Val Out Cred
    CiotViagensOutDebDesc: string; // Ciot Viagens Out Deb Desc
    CiotViagensOutCredDesc: string; // Ciot Viagens Out Cred Desc
    Notas: GxsdtCiotServicosViagensNotas[];
}
        
export interface GxsdtCiotServicosVeiculos {
    CiotVeiculosPlaca: string; // Ciot Veiculos Placa
}
        
export interface GxsdtCiotServicosPagamentos {
    CiotPagamentosId: number; // Ciot Pagamentos Id
    CiotPagamentosIdPagCliente: number; // Ciot Pagamentos Id Pag Cliente
    CiotPagamentosDataLib: string; // Ciot Pagamentos Data Lib
    CiotPagamentosVal: number; // Ciot Pagamentos Val
    CiotPagamentosTipoPagamento: string; // Ciot Pagamentos Tipo Pagamento
    CiotPagamentosDoc: string; // Ciot Pagamentos Doc
    CiotPagamentosCategoria: string; // Ciot Pagamentos Categoria
    CiotPagamentosInfAdd: string; // Ciot Pagamentos Inf Add
    CiotPagamentosBancIntBancaria: string; // Ciot Pagamentos Banc Int Bancaria
    CiotPagamentosBanAgencia: string; // Ciot Pagamentos Ban Agencia
    CiotPagamentosBanConta: string; // Ciot Pagamentos Ban Conta
    CiotPagamentosBanTipoConta: string; // Ciot Pagamentos Ban Tipo Conta
}
        
export interface GxsdtCiotServicosEnvio {
    eF_LoginRequest: GxSdtImportadoeF_LoginRequest;
    eF_LogoutRequest: GxSdtImportadoeF_LogoutRequest;
    eF_MotoristaGravarRequest: GxSdtImportadoeF_MotoristaGravarRequest;
    eF_ProprietarioGravarRequest: GxSdtImportadoeF_ProprietarioGravarRequest;
    eF_VeiculoGravarRequest: GxSdtImportadoeF_VeiculoGravarRequest;
    eF_AdicionarOperacaoTransporteRequest: GxSdtImportadoeF_AdicionarOperacaoTransporteRequest;
    eF_ObteroperacaoTransportePdfRequest: GxSdtImportadoeF_ObterOperacaoTransportePdfRequest;
    eF_CancelarOperacaoTransporteRequest: GxSdtImportadoeF_CancelarOperacaoTransporteRequest;
    eF_EncerrarOperacaoTransporteRequest: GxSdtImportadoeF_EncerrarOperacaoTransporteRequest;
    eF_AdicionarViagemRequest: GxSdtImportadoeF_AdicionarViagemRequest;
    eF_AdicionarPagamentoRequest: GxSdtImportadoeF_AdicionarPagamentoRequest;
    eF_RetificarOperacaoTransporteRequest: GxSdtImportadoeF_RetificarOperacaoTransporteRequest;
}
        
export interface GxsdtCiotServicosResposta {
    eF_LoginResponse: GxSdtImportadoeF_LoginResponse;
    eF_LogoutResponse: GxSdtImportadoeF_LogoutResponse;
    eF_MotoristaGravarResponse: GxSdtImportadoeF_MotoristaGravarResponse;
    eF_ProprietarioGravarResponse: GxSdtImportadoeF_ProprietarioGravarResponse;
    eF_VeiculoGravarResponse: GxSdtImportadoeF_VeiculoGravarResponse;
    eF_AdicionarOperacaoTransporteResponse: GxSdtImportadoeF_AdicionarOperacaoTransporteResponse;
    eF_ObteroperacaoTransportePdfResponse: GxSdtImportadoeF_ObterOperacaoTransportePdfResponse;
    eF_CancelarOperacaoTransporteResponse: GxSdtImportadoeF_CancelarOperacaoTransporteResponse;
    eF_EncerrarOperacaoTransporteResponse: GxSdtImportadoeF_EncerrarOperacaoTransporteResponse;
    eF_AdicionarViagemResponse: GxSdtImportadoeF_AdicionarViagemResponse;
    eF_AdicionarPagamentoResponse: GxSdtImportadoeF_AdicionarPagamentoResponse;
    eF_RetificarOperacaoTransporteResponse: GxSdtImportadoeF_RetificarOperacaoTransporteResponse;
}
        
export interface GxsdtCiotServicos {
    EmpresaCodigo: number;
    CiotId: number;
    CiotCodigo: string;
    tCiot: number;
    addOpT: GxsdtCiotServicosaddOpT;
    Viagens: GxsdtCiotServicosViagens[];
    Veiculos: GxsdtCiotServicosVeiculos[];
    Pagamentos: GxsdtCiotServicosPagamentos[];
    Envio: GxsdtCiotServicosEnvio;
    Resposta: GxsdtCiotServicosResposta;
}
        