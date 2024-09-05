
export interface GxsdtPedidoJsonAux {
    usaOferta: boolean; // Utiliza Oferta?
    FechamentoCaixaIdOrig: number; // Fechamento de caixa original
    PedidoDataFechamentoOrig: string;
    Trocas: number[]; // Armazena os pedidos referenciados na troca
    integracao?: number;
    codigo?: string;
    OrdemCompra: string;
    assinatura: string;
}
        