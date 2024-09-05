
export interface GxsdtPedidoItensPedidoItensLotes {
    PedidoItensLoteVolume: string; // Pedido Itens Lote Volume
    PedidoItensLoteQtde: number; // Pedido Itens Lote Qtde
}
        
export interface GxsdtPedidoItensPedidoItensGrades {
    ProdutoGradeId: number; // Produto Grade Id
    ProdutoGradeCorCod: number; // Produto Grade Cor Cod
    ProdutoGradeCorNome: number; // Produto Grade Cor Nome
    ProdutoGradeNumero: string; // Produto Grade Numero
    PedidoItemGradeQtde: number; // Pedido Item Grade Qtde
    PedidoItemGradeQtdeDevolvida: number; // Pedido Item Grade Qtde Devolvida
    ProdutoGradeOrdem: number;
    PedidoItemGradeQtdeSec: number;
    ProdutoGradeBarras: number;
    ProdutoQtdeEstoque: number;
    PedidoItemGradeEmb: number;
    PedidoItemGradeQtdeSaldo: number;
    PedidoItemGradeQtdCanc: number;
    PedidoItemGradeQtdEnt: number;
    PedidoItemGradeQtdFalta: number;
    PedidoItemGradeQtdAteEst: number;
    PedidoItemGradeQtdAtePrd: number;
    PedidoItemGradeQtdPg: number;
    PedidoItemComplemento: string;
}
        
export interface GxsdtPedidoItens {
    PedidoItemId: number; // Pedido Item Id
    ProdutoReferencia: string; // Referencia
    ProdutoCod: number; // Produto
    ProdutoMarcaCod: number;
    ProdutoDescricao: string; // Descrição
    ProdutoTipoItem: string;
    ProdutoTemGrade: boolean;
    PedidoItemQtde: number; // Pedido Item Qtde
    PedidoItemQtdeDevolvida: number;
    PedidoItemQtdeRecebida: number;
    PedidoitemQtdLiq: number;
    PedidoItemQtdeSec: number;
    PedidoItemValorUnitario: number; // Pedido Item Valor Unitario
    PedidoItemValorBruto: number; // Pedido Item Valor Bruto
    PedidoItemDescontoDinheiro: number; // Pedido Item Desconto Dinheiro
    PedidoItemDescontoPerc: number; // Pedido Item Desconto Perc
    PedidoItemVlrDescontoPerc: number; // Pedido Item Vlr Desconto Perc
    PedidoItemValorLiquido: number; // Pedido Item Valor Liquido
    isPromocao: boolean;
    PedidoItemCodProdFornecedor: string;
    PedidoItemComplemento: string;
    PedidoItensTotalLote: number;
    ProdutoControlePorLote: boolean;
    PedidoItemComissao: number;
    PedidoItemComissaoComb: number;
    PedidoItemComissaoVlr: number;
    ProdutoPeso: number;
    PedidoItemCusto: number; // Pedido Item Custo
    PedidoItemValorTabela: number; // Pedido Item Valor Tabela
    PedidoItemIPI: number;
    ProdutoInfCplNFe: string;
    PedidoItemFilialCod: number;
    PedidoItemEmpCod: number;
    PedidoItemValorBonificado: number;
    PedidoTipoItem: string;
    PedidoItemChaveNFPSE: string; // Pedido Chave NFPSE (ProdutorRural)
    PedidoItemIsTroca: boolean;
    UnidadeMedidaSigla: string;
    ProdutoIsTecido: boolean;
    ProdutoIsAviamento: boolean;
    ProdutoIsMateriaPrima: boolean;
    ProdutoIsProduto: boolean;
    PedidoItemVlrST: number;
    PedidoItemPermDscGlobal: boolean;
    PedidoItemCalcularComissao: boolean;
    PedidoItensLotes: GxsdtPedidoItensPedidoItensLotes[];
    PedidoItensGrades: GxsdtPedidoItensPedidoItensGrades[];
}
        