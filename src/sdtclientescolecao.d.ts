
export interface GxsdtClientesColecaoClientes {
    ClienteCod: number;
    ClienteNome: string;
    ClienteNomeFantasia: string;
    ClienteVlrColecao1: number;
    ClienteVlrColecao2: number;
    ClienteVlrColecao3: number;
    ClienteVlrColecao4: number;
    ClienteVlrColecao5: number;
    ClienteVlrColecao6: number;
    ClienteDataUltimaCompra: string;
    ClienteValorUltimaCompra: number;
    CidadeUf: string;
    ClienteStatusComercial: string;
}
        
export interface GxsdtClientesColecao {
    VendedorCod: number;
    VendedorNome: string;
    TotalClientes: number;
    Clientes: GxsdtClientesColecaoClientes[];
}
        