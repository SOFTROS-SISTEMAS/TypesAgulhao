
export interface GxColetor_sdtPessoaHistoricoFinanceiroDuplicatas {
    duplicataId: number;
    duplicataNumero: string;
    duplicataEmissao: string;
    duplicataVencimento: string;
    duplicataValor: number;
    duplicataSaldo: number;
    duplicataMovtoData: string;
    localCobrancaDescricao: string;
    atraso: number;
}
    
export interface GxColetor_sdtPessoaHistoricoFinanceiro {
    totalCompras: number;
    totalVencidos: number;
    mediaAtraso: number;
    totalPago: number;
    pagasComAtraso: number;
    ultimaCompra: string;
    aVencer: number;
    atrasadasAbertas: number;
    valorUltimaCompra: number;
    Duplicatas: GxColetor_sdtPessoaHistoricoFinanceiroDuplicatas[];
}
    
export interface GxColetor_sdtPessoaHistoricoPedidos {
    pedidoId: number;
    pedidoDataEmissao: string;
    pedidoPrevisaoEntrega: string;
    pedidoDataFechamento: string;
    pedidoSaidaStatus: number;
    pedidoSaidaStatusDescricao: string;
    pedidoValorLiquido: number;
    pedidoTipoLancamentoCod: number;
    pedidoTipoLancamentoDescricao: string;
}
    
export interface GxColetor_sdtPessoaHistoricoAnotacoes {
    PessoaHistoricoId: number;
    PessoaFollowUpCod: number;
    PessoaHistoricoUsuario: string;
    PessoaHistoricoData: string;
    PessoaHistoricoMsg: string;
    PessoaHistoricoDataProxCont: string;
    FollowUpDsc: string;
    PessoaHistoricoSts: string;
    PessoaHistoricoStsDescricao: string;
    PessoaNomeRazao: string;
}
    
export interface GxColetor_sdtPessoaHistoricoFollowUps {
    FollowUpCod: number;
    FollowUpDsc: string;
}
    
export interface GxColetor_sdtPessoaHistorico {
    pessoaCod: number;
    Financeiro: GxColetor_sdtPessoaHistoricoFinanceiro;
    Pedidos: GxColetor_sdtPessoaHistoricoPedidos[];
    Anotacoes: GxColetor_sdtPessoaHistoricoAnotacoes[];
    FollowUps: GxColetor_sdtPessoaHistoricoFollowUps[];
}
    