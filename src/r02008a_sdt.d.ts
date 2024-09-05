
export interface GxR02008A_SDT {
    id: number;
    data: string;
    vendedorCod: number;
    vendedorNome: string;
    clienteCod: number;
    clienteNome: string;
    valorBruto: number;
    valorLiquido: number;
    valorComissao: number;
    valorBaseComissao: number;
    percentualDesconto: number;
    percentualComissao: number;
    quantidade: number;
    tipo: string; // Duplicata/Venda
    isSubordinado: boolean;
    isTitulo: boolean;
    tipoDebCred: string;
    complemento: string;
    PedidoId: number;
}
        