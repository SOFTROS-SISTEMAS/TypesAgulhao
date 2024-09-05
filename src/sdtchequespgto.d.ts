
export interface GxsdtChequesPgto {
    isFormularioContinuo: string;
    isImprimir: boolean;
    ContasId: number;
    ContasDescricao: string;
    ContasNumeroConta: string; // Conta + Digito
    BancoContaCod: number;
    BancoContaNome: string;
    SBgrupoPlanoContasCod: number;
    PlanoContasId: number;
    NomeFavorecido: string;
    ChequeNum: number;
    ChequeValor: number;
    ChequeData: string;
    Teste: number;
    isLimparTabela: boolean;
    ChequeCidade: string;
    ChequeBomPara: string;
    FilialOleriteCod: number;
    FuncionarioOleriteCod: number;
    FuncionarioOleriteNome: number;
    OleriteCod: number;
    OleriteDuplicataID: number;
}
        