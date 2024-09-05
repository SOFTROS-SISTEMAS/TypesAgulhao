
export interface GxsdtMetragemItens {
    ItemId: number;
    ItemMts: number;
    ItemQtd: number;
    ItemPreco: string;
}
        
export interface GxsdtMetragem {
    Itens: GxsdtMetragemItens[];
}
        