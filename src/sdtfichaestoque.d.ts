
export interface GxsdtFichaEstoque {
    EstGrdPedidoId: number; // Est Grd Pedido Id
    EstGrdFilialCod: number; // Est Grd Filial Cod
    EstGrdFilialNom: string;
    EstGrdPedidoStatus: string; // Est Grd Pedido Status
    PedidoSaidaStatus: number;
    EstGrdTipoLancamentoCod: number; // Est Grd Tipo Lancamento Cod
    EstGrdTipoLancamentoDescricao: string;
    EstGrdTipoLancamentoEstoque: string; // Est Grd Tipo Lancamento Estoque
    EstGrdProdutoCod: number; // Est Grd Produto Cod
    EstGrdProdutoDescricao: string;
    EstGrdProdutoGradeId: number;
    EstGrdClienteCod: number;
    EstGrdClienteNome: string;
    EstGrdClienteFantasia: string;
    EstGrdVenNome: string; // Vendedor
    EstGrdQtdeGradeEntrada: number; // Est Grd Qtde Grade
    EstGrdProdutoGradeBarras: number; // Est Grd Produto Grade Barras
    EstGrdProdutoGradeCorCod: number; // Est Grd Produto Grade Cor Cod
    EstGrdProdutoGradeCorNome: string;
    EstGrdProdutoGradeNumero: string; // Est Grd Produto Grade Numero
    EstGrdQtdeGradeSaida: number;
    EstGrdPedidoDataFechamento: string; // Est Grd Pedido Data Fechamento
    EstGrdPedidoHoraFechamento: string; // Est Grd Pedido Hora Fechamento
    EstGrdPedidoItemId: number; // Est Grd Pedido Item Id
    EstGrdPedidoDataEmissao: string; // Est Grd Pedido Data Emissao
    EstGrdPedidoHoraEmissao: string; // Est Grd Pedido Hora Emissao
    QtdeEntradaStr: string;
    QtdeSaidaStr: string;
    SaldoAtual: number;
    PedidoObservacoes: string;
}
        