
export interface GxsdtValidaPedidocartoes {
    id: number;
    bandeira: number;
    tipo: string;
    localCobranca: number;
    parcelas: number;
    valor: number;
    data: string;
}
    
export interface GxsdtValidaPedido {
    pedidoId: number;
    valorPrazo: number;
    valorCartao: number;
    valorCheque: number;
    valorDinheiro: number;
    valorCredito: number;
    valorOutros1: number;
    valorOutros2: number;
    definirFinanceiro: boolean;
    localCobrancaCod: number;
    dinheiroSolicitarCartao: string;
    dinheiroSolicitarCheque: string;
    percentual: number;
    deposito: boolean;
    descontoDin: number;
    descontoPerc: number;
    tipoLancamento: number;
    prazo: number;
    troco: number;
    tipoPedido: string;
    cartoes: GxsdtValidaPedidocartoes[];
}
    