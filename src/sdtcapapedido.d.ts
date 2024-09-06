
export interface GxsdtCapaPedidoFiliais {
    PedidoFilialEmpCod: number;
    PedidoFilialCod: number;
}
        
export interface GxsdtCapaPedidoPrazos {
    PedidoPrazoParcela: number;
    PedidoPrazoVencimento: string;
    PedidoPrazoDias: number;
    PedidoPrazoDiaSemana: string | null;
}
        
export interface GxsdtCapaPedidoVolumes {
    NumeroVolume: string;
    QtdeVolume: number;
    EspecieVolume: string;
    MarcaVolume: string;
    PesoLiquidoVolume: number;
    PesoBrutoVolume: number;
}
        
export interface GxsdtCapaPedido {
    PedidoId: number; // Pedido
    TipoLancamentoCod: number; // Tipo lançamento cod
    TipoLancamentoDescricao: string;
    TipoLancamentoMargemTransf: number;
    TipoLancamentoLctSim: boolean;
    FilialCod: number;
    FilialNom: string;
    PedidoPrazoCod: number;
    PedidoPrazoDescricao: number;
    PedidoPrazoParcelas: string;
    PedidoStatus: string;
    PedidoSaidaStatus: number;
    PedidoStatusFinanceiro: string;
    PedidoVendedorCod: number;
    PedidoVendedorNome: string;
    PedidoClienteCod: number;
    PedidoConferidoPor: string;
    PedidoConferidoData: string;
    PedidoConferidoHora: string;
    PedidoClienteNome: string;
    PedidoClienteCpfCnpj: string;
    PedidoClienteFantasia: string;
    PedidoCLienteFisJur: string;
    PedidoTransportadoraCod: number;
    PedidoTransportadoraNome: string;
    PedidoCodigoRastreio: string;
    PedidoGuiaCod: number;
    PedidoGuiaNome: string;
    PedidoTipoFrete: string;
    PedidoValorFrete: number;
    PedidoDataEmissao: string;
    PedidoHoraEmissao: string;
    PedidoDataFechamento: string;
    PedidoCorteId: number;
    PedidoHoraFechamento: string;
    PedidoPrevisaoEntrega: string;
    PedidoDescontoDinheiro: number;
    PedidoDescontoPerc: number;
    PedidoDescontoPerc2: number;
    PedidoDescontoPerc3: number;
    PedidoValorTotal: number;
    PedidoValorLiquido: number;
    TmpDefiniirCliente: boolean;
    TmpDefinirPrazo: boolean;
    TmpDefinirRedCred: boolean;
    TmpDefinirCheque: boolean;
    TmpDefinirCartao: boolean;
    PedidoNovo: boolean;
    PedidoTipo: string;
    isDevolucao: boolean;
    isSaidaDefeito: boolean;
    PedidoSequenciaSic: number;
    PedidoObservacoes: string;
    PedidoValorBruto: number;
    PedidoValorSeguro: number;
    PedidoValorOutros: number;
    permiteAlterarDesconto: boolean;
    PedidoTranspRNTC: string;
    PedidoTranspUF: string;
    PedidoTranspPlaca: string;
    PedidoisTransferencia: boolean;
    PedidoTabelaPreco: number;
    PedidoColunaPreco: number;
    PedidoBalancoId: number;
    ClienteEspecial: boolean;
    PedidoPrecoUnico: number;
    PedidoQtdVolume: number;
    PedidoEspecieVolume: string;
    PedidoIsAprovado: boolean;
    PedidoIsConferido: boolean;
    PedidoIsExpedicao: boolean;
    PedidoDataAprovado: string;
    PedidoAprovadoPor: string;
    PedidoLocalCobCod: number;
    PedidoLocalCobDesc: number;
    PedidoDataBaseFat: string;
    PedidoClienteDescontoId: number;
    PedidoIsTroca: boolean;
    PedidoFuncImp: string;
    PedidoJustCanc: string;
    PedidoChaveShopping: string;
    PedidoCondVisualizado: string;
    PedidoPadrao: boolean;
    PedidoDiagnostico: string;
    SBPedidoGrupoCod: number;
    SBPedidoGrupoDescricao: number;
    PedidoPrevFaturamento: string;
    PedidoDiasProxVisita: number;
    PedidoDtaVndIni: string;
    PedidoDtaVndFin: string;
    PedidoFunRural: number;
    PedidoNfpProdutor: number;
    PedidoPeso: number;
    PedidoDescontoImpostos: number;
    PedidoDescontoIcmsDes: number;
    PedidoValorST: number;
    PedidoComissao: number;
    FechamentoGuiaPedidoId: number;
    FechamentoVendedorPedidoId: number;
    PedidoDeRevendedor: boolean;
    PedidoCodNs: number;
    PedidoPrioridade: string; // Pedido Prioridade
    PedidoRetiradoDataHora: string; // Data/Hora retirada
    PedidoRetiradoPor: string; // Retirado por
    PedidoComissaoRcbto: number; // Comissão sobre Recebimento
    PedidoPercFaturamento: number;
    PedidoPedImp: number;
    PedidoObsNFe: string;
    PedidoTransportadoraSite: number;
    PedidoCoordenadas: string;
    PedidoObsInterna: string;
    PedidoEntregaJSON: string;
    PedidoJsonAux: string;
    PedidoAjustado: boolean;
    PedidoAjustadoMot: string;
    PedidoAjustadoUsrAjs: string;
    PedidoAjustadoDtHr: string;
    PedidoAjustadoVis: boolean;
    PedidoAjustadoUsrVis: string;
    PedidoDataNFe: string;
    PedidoVendaIShopp: number;
    PedidoTotalIPI: number;
    DescontoNFe: number;
    PedidoColecaoCod: number;
    PedidoRefMP: string;
    QtdePecas: number;
    TotalBrutoPedido: number;
    TotalDescontoItens: number;
    TotalDescontosCapa: number;
    TotalLiquidoPedido: number;
    TotalPago: number;
    TotalPagoComTroco: number;
    RestaAinda: number;
    Troco: number;
    RetornoCaixa: number;
    ValePresenteCod: string;
    Filiais: GxsdtCapaPedidoFiliais[];
    Prazos: GxsdtCapaPedidoPrazos[];
    Volumes: GxsdtCapaPedidoVolumes[];
}
        