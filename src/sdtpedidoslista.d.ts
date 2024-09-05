
export interface GxsdtPedidosLista {
    PedidoId: number;
    PedidoTemNFe: boolean;
    PedidoTipo: string;
    PedidoDataEmissao: string;
    PedidoStatus: string;
    PedidoStatusFinanceiro: string;
    PEdidoValorLiquido: number;
    PedidoQtdVolume: number;
    isChecado: boolean;
    PedidoClienteCod: number;
    PedidoClienteNOme: number;
    PedidoTotQtde: number;
    PedidoTabelaPreco: number;
    FilialNom: string;
    FilialPedidoNom: string;
    FormasPgtoPedido: string;
    EmpresaCodigo: number;
    PedidoDataFechamento: string;
    PedidoImportadoId: number;
    PedidoImportadoStatus: string;
    PedidoImportadoCliCod: number;
    SituacaoPedido: string; // Situação
}
        