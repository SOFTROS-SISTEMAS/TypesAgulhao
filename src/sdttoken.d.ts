
export interface GxsdtTokeninterno {
    acao: string;
    isValido: boolean;
    erro: string | null;
}
        
export interface GxsdtTokenempresa {
    EmpresaCodigo: number;
    EmpresaCpfCnpj: string;
    EmpresaNome: string;
}
        
export interface GxsdtToken {
    TokenId: number;
    TokenEmpresaCodigo: number;
    TokenPessoaCod: number;
    TokenInicio: string;
    TokenFim: string;
    TokenDescricao: string;
    TokenDispositivoJSON: string;
    TipoPainel: number;
    interno: GxsdtTokeninterno;
    empresa: GxsdtTokenempresa;
}
        