
export interface GxsdtInadimplentesclientesduplicatas {
    DuplicataId: number;
    DuplicataNumero: string;
    DuplicataValor: number;
    DuplicataEmissao: string;
    DuplicataVencimento: string;
    DuplicataSaldo: number;
    DuplicataTotalPago: number;
}
        
export interface GxsdtInadimplentesclientes {
    ClienteDuplicataCod: number;
    ClienteDuplicataNome: number;
    ClienteDuplicataNomFan: number;
    ClienteDuplicataTelefone: string;
    ClienteDuplicataCelular: number;
    ClienteDuplicataEmail: number;
    total: number;
    mensagem: string;
    duplicatas: GxsdtInadimplentesclientesduplicatas[];
}
        
export interface GxsdtInadimplentesvendedores {
    PessoaCod: number;
    PessoaNomeRazao: string;
    PessoaNomeFantasia: string;
    ClientesInadimplentes: number;
    ValorEmAberto: number;
}
        
export interface GxsdtInadimplentes {
    filiais: number[];
    vendedorCod: number;
    acao: number;
    clientes: GxsdtInadimplentesclientes[];
    vendedores: GxsdtInadimplentesvendedores[];
}
        