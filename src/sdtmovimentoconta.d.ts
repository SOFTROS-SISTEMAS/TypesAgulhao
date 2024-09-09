
export interface GxsdtMovimentoContaPlanoContaCentroCusto {
    MovimentoContaCentroCustoCod: number; // Movimento Conta Centro Custo Cod
    MovimentoContaCentroCustoDescricao: number; // Movimento Conta Centro Custo Descricao
    MovimentoContaCentroCustoValor: number; // Movimento Conta Centro Custo Valor
}
        
export interface GxsdtMovimentoContaPlanoConta {
    MovimentoContaItemId: number; // Movimento Conta Item Id
    PlanoContasId: number; // Plano Contas Id
    PlanoContasDescricao: string;
    PlanoContasReceitaDespesa: string;
    PlanoContasValor: number; // Plano Contas Valor
    PlanoContasQtd: number;
    PlanoContasUnd: string;
    PlanoContasUnt: number;
    PlanoContasComplemento: string; // Plano Contas Complemento
    PlanoContasUsuario: string; // Plano Contas Usuario
    SBGrupoPlanoContasCod: number;
    PlanoContasOfx: string;
    MovimentoContaDataComp: string;
    MovimentoContaDupId: number;
    CentroCusto: GxsdtMovimentoContaPlanoContaCentroCusto[];
}
        
export interface GxsdtMovimentoConta {
    MovimentoContaId: number; // Movimento Conta Id
    MovimentoContaFilialCod: number; // Movimento Conta Filial Cod
    ContaMovimentoId: number; // Conta
    ContaMovimentoDescricao: number; // Conta Movimento Descricao
    ContaMovimentoTipoConta: number; // Conta Movimento Tipo Conta
    MovimentoContaDocumento: string; // Movimento Conta Documento
    MovimentoContaDataLcto: string; // Movimento Conta Data Lcto
    MovimentoContaDataLctoReal: string; // Movimento Conta Data Lcto Real
    MovimentoContaDataConf: string; // Movimento Conta Data Conf
    MovimentoContaValor: number; // Movimento Conta Valor
    HistoricoId: number;
    HistoricoDescricao: string;
    HistoricoReceitaDespesa: string;
    MovimentoContaComplemento: string;
    MovimentoContaOrigemLcto: string;
    MovimentoContaPedidoId: number;
    MovimentoContaDataFech: string;
    MovimentoContaTipoRcbto: string;
    MovimentoContaChaveBaixa: number;
    MovimentoContaStatus: string;
    MovimentoContaFuncionarioCod: number;
    MovimentoContaFuncionarioNome: string;
    MovimentoContaCaixaPdvId: number;
    MovimentoContaPdvId: number;
    MovimentoContaCliCod: number;
    MovimentoContaCliNom: string;
    FechamentoCaixaId: number;
    PlanoConta: GxsdtMovimentoContaPlanoConta[];
}
        