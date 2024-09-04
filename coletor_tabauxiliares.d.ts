
export interface GxColetor_TabAuxiliaresPrazosVendedor {
    PrazoVendedorCod: number;
}
    
export interface GxColetor_TabAuxiliaresPrazos {
    PrazoCod: number;
    PrazoDescricao: string;
    PrazoIsVB: boolean;
    PrazoIsPV: boolean;
    PrazoVlrMinimoPedido: number;
    PrazoMedioCalculado: number;
    Vendedor: GxColetor_TabAuxiliaresPrazosVendedor[];
}
    
export interface GxColetor_TabAuxiliaresTabelasPrecoVendedor {
    TabelaPrecoVendedorCod: number;
}
    
export interface GxColetor_TabAuxiliaresTabelasPreco {
    TabelaPrecoCod: number;
    TabelaPrecoDescricao: string;
    TabelaPrecoInicio: string;
    TabelaPrecoFinal: string;
    TabelaPrecoTipo: string;
    TabelaPrecoPercSobreCusto: number;
    TabelaPrecoCor: string;
    TabelaPrecoBloquearDescAcimaDe: number;
    TabelaPrecoDescMax: number;
    TabelaPrecoDescMaxPrazo: number;
    TabelaPrecoPercSobreCusto2: number;
    TabelaPrecoPercSobreCusto3: number;
    TabelaPrecoQtdMin: number;
    Vendedor: GxColetor_TabAuxiliaresTabelasPrecoVendedor[];
}
    
export interface GxColetor_TabAuxiliaresCidades {
    CidadeCod: number;
    CidadeNom: string;
    EstadoCod: string;
}
    
export interface GxColetor_TabAuxiliaresColecoesFaturamento {
    ColecaoFatDataApv: string;
    ColecaoFatDataFat: string;
    ColecaoFatQtdPcs: number;
}
    
export interface GxColetor_TabAuxiliaresColecoes {
    ColecaoCod: number;
    ColecaoNome: string;
    ColecaoCor: string;
    ColecaoDispVenda: boolean;
    ColecaoTipoLctoCod: number;
    ColecaoValidarEstoque: boolean;
    ColecaoPoliticas: string;
    Faturamento: GxColetor_TabAuxiliaresColecoesFaturamento[];
}
    
export interface GxColetor_TabAuxiliaresFormasPagamento {
    FormaPagamentoCod: number;
    FormaPagamentoDescricao: string;
    FormaPagamentoAtivoInativo: string;
}
    
export interface GxColetor_TabAuxiliaresLocaisCobranca {
    LocalCobrancaCod: number;
    LocalCobrancaDescricao: string;
}
    
export interface GxColetor_TabAuxiliaresTiposLancamento {
    TipoLancamentoCod: number;
    TipoLancamentoDescricao: string;
    NaturezaOperacaoCod: number;
    NaturezaOperacaoDescricao: string;
    TipoLancObgPrevisaoEntrega: boolean;
    TipoLancObgPrazo: boolean;
    TipoLancObgParcelas: boolean;
    TipoLancObgValorMinPed: boolean;
    TipoLancObgCadCliente: boolean;
    TipoLancObgDescCliente: boolean;
    TipoLancObgColecao: boolean;
    TipoLancAvancarEtapa: number;
    TipoLancamentoisVenda: boolean;
    TipoLancamentoEstoque: string; // tipo estoque
    TipoLancDispApp: boolean;
    TipoLancEnvEmailPed: boolean;
}
    
export interface GxColetor_TabAuxiliaresBandeiras {
    BandeiraCod: number;
    BandeiraDescricao: string;
    BandeiraRede: number;
    BandeiraTipoCartao: string;
    BandeiraVctoDiaNaoUtil: string;
    BandeiraPercDebito: number;
    BandeiraPercCredVista: number;
    BandeiraOPercCredPrazo: number;
    BandeiraDiaDebito: number;
    BandeiraDiaCredVista: number;
    BandeiraDiaCredPrazo: number;
    SBBandeiraPessoaCod: number;
    SBBandeiraPessoaNome: number;
    SBBandeiraPessoaCpfCnpj: number;
    SBBandeiraHistoricoCod: number;
    SBBandeiraHistoricoDesc: number;
    SBBandeiraHistoricoRecDes: number;
    SBBandeiraHistoricoPlanContPref: number;
}
    
export interface GxColetor_TabAuxiliares {
    EmpresaTipo: string;
    Prazos: GxColetor_TabAuxiliaresPrazos[];
    TabelasPreco: GxColetor_TabAuxiliaresTabelasPreco[];
    Cidades: GxColetor_TabAuxiliaresCidades[];
    Colecoes: GxColetor_TabAuxiliaresColecoes[];
    FormasPagamento: GxColetor_TabAuxiliaresFormasPagamento[];
    LocaisCobranca: GxColetor_TabAuxiliaresLocaisCobranca[];
    TiposLancamento: GxColetor_TabAuxiliaresTiposLancamento[];
    Bandeiras: GxColetor_TabAuxiliaresBandeiras[];
}
    