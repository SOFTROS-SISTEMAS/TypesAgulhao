
export interface GxsdtCredDebclientes {
    PessoaCod: number;
    PessoaNomeRazao: string;
    PessoaNomeFantasia: string;
    PessoaSaldo: number;
    PessoaSaldoExpira: number;
    PessoaSaldoExpiraEm: string;
    PessoaUltimaMovimentacao: string;
}
        
export interface GxsdtCredDebhistoricomovimentos {
    CredDebId: number;
    CredDebDct: string;
    CredDebExpiraEm: string;
    CredDebPessoaCod: number;
    CredDebData: string;
    CredDevValor: number;
    CredDebOrigem: number;
    CredDebComplemento: string;
    CredDebUsr: string;
}
        
export interface GxsdtCredDebhistorico {
    PessoaCod: number;
    PessoaNomeRazao: string;
    PessoaSaldo: number;
    PessoaSaldoExpira: number;
    PessoaSaldoExpiraEm: string;
    movimentos: GxsdtCredDebhistoricomovimentos[];
}
        
export interface GxsdtCredDebfiltros {
    descricao: string;
    pagina: number;
    qtdePorPagina: number;
    saldo: number;
}
        
export interface GxsdtCredDebmanual {
    valor: number;
    origem: number;
    complemento: string;
    documento: string;
    tipo: string;
    expiraEm: string;
}
        
export interface GxsdtCredDebpermissoes {
    manual: boolean;
}
        
export interface GxsdtCredDebcashbackFilial {
    percentual: number;
    expiracao: number;
    valorMinimo: number;
    valorMinimoCompra: number;
}
        
export interface GxsdtCredDeb {
    acao: string;
    clienteCod: number;
    contador: number;
    retorno: string;
    saldo: number;
    clientes: GxsdtCredDebclientes[];
    historico: GxsdtCredDebhistorico;
    filtros: GxsdtCredDebfiltros;
    manual: GxsdtCredDebmanual;
    permissoes: GxsdtCredDebpermissoes;
    cashbackFilial: GxsdtCredDebcashbackFilial;
}
        