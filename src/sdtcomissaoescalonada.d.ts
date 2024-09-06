
export interface GxsdtComissaoEscalonadaEscalonamentoComissao {
    PedidoId: number;
    PedidoDataFechamento: string;
    PedidoClienteNome: string;
    PedidoCondicaoPgto: string;
    PedidoValorLiquido: number;
    PedidoValorPago: number; // Valor pago
    PedidoPercPago: number;
    PedidoComissaoPercCom: number | null;
    PedidoComissaoOrigem: string;
    DupMovtoValor: number;
    DupMovtoVlrComissao: number;
    DupMovtoDuplicataId: number;
    DupMovtoDuplicataMovtoId: number;
    DupMovtoData: string;
    PedidoComissaoStatus: string;
}
        
export interface GxsdtComissaoEscalonadaEscalonamento {
    ComissaoEscalonadaId: number;
    ComissaoEscalonadaDesc: string;
    ComissaoEscalonadaPercMinPgto: number;
    ComissaoEscalonadaVlrComissao: number;
    Comissao: GxsdtComissaoEscalonadaEscalonamentoComissao[];
}
        
export interface GxsdtComissaoEscalonada {
    PessoaCod: number;
    PessoaNomeRazao: string;
    PessoaVlrComissao: number;
    Escalonamento: GxsdtComissaoEscalonadaEscalonamento[];
}
        