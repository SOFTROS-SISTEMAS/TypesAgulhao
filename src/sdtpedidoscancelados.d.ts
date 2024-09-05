
export interface GxsdtPedidosCanceladosfiltros {
    ColecaoCod?: number;
    VendedorCod?: number;
    DataI?: string;
    DataF?: string;
    mes?: number;
    ano?: number;
    PedidoJustificativaCod?: number;
    comValores?: boolean;
    detalharCancelamentos: boolean;
    isRankingClientes: boolean;
    isRankingRepresentantes: boolean;
    isRankingJustificativas: boolean;
}
        
export interface GxsdtPedidosCanceladoscancelados {
    PedidoId?: number;
    PedidoDataEmissao?: string;
    PedidoVendedorCod?: number;
    PedidoVendedorNome?: number;
    PedidoClienteCod?: number;
    PedidoClienteNome?: number;
    PedidoClienteFantasia?: number;
    PedidoClienteCpfCnpj?: number;
    PedidoJustificativaCod?: number;
    PedidoJustificativaDes?: string;
    PedidoColecaoCod?: number;
    PedidoValorLiquido?: number;
    PedidoTotQtde: number;
    FilialCod?: number;
    PedidoJustCanc: string;
}
        
export interface GxsdtPedidosCancelados {
    filtros: GxsdtPedidosCanceladosfiltros;
    cancelados: GxsdtPedidosCanceladoscancelados[];
}
        