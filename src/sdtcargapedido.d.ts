
export interface GxsdtCargaPedido {
    PedidoId: number;
    Ordem: number;
    Peso: number | null;
    Nome: string;
    Valor: number;
    CidadeUf: string; // Cidade/Uf
}
        