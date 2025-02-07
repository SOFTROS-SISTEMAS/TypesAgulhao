export interface GxsdtHookPedidocapa {
	PedidoId: number;
	PedidoVendedorNome: string;
	PedidoClienteNome: string;
	PedidoDataEmissao: string;
	PedidoValorLiquido: number;
	PedidoValorBruto: number;
	PedidoValorPago: number;
	PedidoRestaAinda: number;
	PedidoTroco: number;
	PedidoTotalItens: number;
	PedidoRetorno: number;
	PedidoDescontoPerc: number;
	PedidoDescontoDinheiro: number;
}

export interface GxsdtHookPedidoitens {
	PedidoItemId: number;
	ProdutoGradeBarras: number;
	ProdutoReferencia: string;
	ProdutoDescricao: string;
	ProdutoGradeNumero: string;
	PedidoItemValorUnitario: number;
	PedidoItemDesconto: number;
	PedidoItemQuantidade: number;
	PedidoItemValorLiquido: number;
	PedidoItemValorTabela: number;
	ProdutoGradeCorNome: string;
}

export interface GxsdtHookPedidopagamentostef {
	transacaoTEFStatus: string;
	transacaoTEFValor: number;
	transacaoTEFData: string;
}

export interface GxsdtHookPedidopagamentospix {
	PixCopiaCola: string;
	PixValor: number;
	PixDesc: string;
	PixSts: string;
	PixDataHora: string;
}

export interface GxsdtHookPedidopagamentos {
	FormaPagamentoCod: number;
	FormaPagamentoValor: number;
	tef: GxsdtHookPedidopagamentostef;
	pix: GxsdtHookPedidopagamentospix;
}

export interface GxsdtHookPedido {
	id: number;
	empresa: number;
	vendedor: number;
	capa: GxsdtHookPedidocapa;
	itens: GxsdtHookPedidoitens[];
	pagamentos: GxsdtHookPedidopagamentos[];
}
