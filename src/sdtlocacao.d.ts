
export interface GxSDTLocacaoProduto {
    Acao: number;
    ProdutoDescricao: string;
    ProdutoTipoPeriodo: number;
    ProdutoID: number;
    ProdutoPreco: number;
}
        
export interface GxSDTLocacaoLocacao {
    LocacaoObservacao: string;
    LocacaoCidadeCod: number;
    LocacaoLogradouro: string;
    LocacaoEndComplemento: string;
    LocacaoEndNumero: string | null;
    LocacaoEndCep: string | null;
    LocacaoEndBairro: string;
    LocacaoValorOutros: number;
    LocacaoPedidoId: number;
    LocacaoFormaPgt: number;
    LocacaoPago: boolean;
}
        
export interface GxSDTLocacaoCliente {
    ClienteCpfCnpj: string | null;
    ClienteTelefone: string;
    ClienteEmail: string;
    ClienteNome: string;
}
        
export interface GxSDTLocacao {
    Table: string;
    EmpresaCod: number;
    MsgErro: string;
    Produto: GxSDTLocacaoProduto;
    Locacao: GxSDTLocacaoLocacao;
    Cliente: GxSDTLocacaoCliente;
}
        