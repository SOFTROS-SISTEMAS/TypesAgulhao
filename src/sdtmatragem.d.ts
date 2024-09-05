
export interface GxsdtMatragemItens {
    ItemId: number;
    ItemQtd: number;
    ItemMts: number;
    ItemPreco: string;
}
        
export interface GxsdtMatragem {
    Itens: GxsdtMatragemItens[];
}
        