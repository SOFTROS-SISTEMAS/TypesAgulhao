
export interface GxColetor_TabFinanceiroContas {
    ContasId: number;
    ContasDescricao: string;
    ContasTipoConta: string;
    ContasAtiva: string;
    FilialContaCod: number;
    FilialContaNome: number;
    ContaUltimoMovto: string;
    ContaSaldoAtual: number; // Saldo atual
    ContaSaidas: number; // Saidas
    ContaEntradas: number; // Entradas
    ContaSaldoAnterior: number; // Saldo anterior
}
    
export interface GxColetor_TabFinanceiroGrupoPlanoContas {
    GrupoPlanoContasCod: number;
    GrupoPlanoContasNome: string;
}
    
export interface GxColetor_TabFinanceiroPlanoContas {
    PlanoContasId: number;
    PlanoContasDescricao: string; // Descrição
    PlanoContasReceitaDespesa: string; // Plano Contas Receita Despesa
    SBGrupoPlanoContasCod: number; // SBGrupo Plano Contas Cod
}
    
export interface GxColetor_TabFinanceiroMovimentoConta {
    MovimentoContaId: number; // Movimento Conta Id
    ContaMovimentoId: number; // Conta
    MovimentoContaDocumento: string; // Documento
    MovimentoContaValor: number; // Valor
    MovimentoContaComplemento: string; // Complemento
    MovimentoContaFuncionarioCod: number; // Funcionario
    MovtoContaPlanContasId: number; // Plano de contas
    MovimentoContaDataLcto: string; // Data do lcto
}
    
export interface GxColetor_TabFinanceiro {
    Contas: GxColetor_TabFinanceiroContas[];
    GrupoPlanoContas: GxColetor_TabFinanceiroGrupoPlanoContas[];
    PlanoContas: GxColetor_TabFinanceiroPlanoContas[];
    MovimentoConta: GxColetor_TabFinanceiroMovimentoConta[];
}
    