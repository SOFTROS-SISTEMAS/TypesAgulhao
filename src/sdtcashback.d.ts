
export interface GxsdtCashbackconfigprogressivo {
    valor: number;
    percentual: number;
    formasPagamento: number[];
}
        
export interface GxsdtCashbackconfig {
    valorMinimoCompra: number;
    valorMinimo: number;
    expiracao: number;
    percentual: number;
    formasPagamento: number[];
    progressivo: GxsdtCashbackconfigprogressivo[];
}
        
export interface GxsdtCashback {
    acao: number;
    filialCod: number;
    erro: string;
    pedidoId: number;
    config: GxsdtCashbackconfig;
}
        