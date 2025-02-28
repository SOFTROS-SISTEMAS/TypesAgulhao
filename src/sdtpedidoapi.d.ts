export interface GxsdtPedidoApicliente {
	documento: string;
	telefone: string;
	email: string;
	clienteIntegracaoId: string;
	pessoaCod: number;
	nome: string;
}

export interface GxsdtPedidoApientrega {
	logradouro: string;
	complemento: string;
	numero: string;
	cep: string | null;
	bairro: string;
	cidadeCod: number;
}

export interface GxsdtPedidoApiprodutos {
	produtoCod: number;
	produtoGradeId: number;
	descontoDinheiro: number;
	descontoPercentual: number;
	quantidade: number;
	valorUnitario: number;
}

export interface GxsdtPedidoApipagamentos {
	formaPagamentoCod: number;
	valor: number;
	qtdeParcelas: number;
	desconto: number;
	acrescimo: number;
	bandeiraCod: number;
	pago: boolean;
	tipoCartao: string;
}

export interface GxsdtPedidoApilinkPagamento {
	carteira: string;
	valorCobranca: number;
	status: string;
	ativo: boolean;
	link: string;
}

export interface GxsdtPedidoApi {
	pedidoId: number;
	pedidoIntegracaoId: string;
	filialCod: number;
	integracao: number;
	acao: number;
	descontoDinheiro: number;
	descontoPercentual: number;
	frete: number;
	observacoes: string;
	valorOutros: number;
	cliente: GxsdtPedidoApicliente;
	entrega: GxsdtPedidoApientrega;
	produtos: GxsdtPedidoApiprodutos[];
	pagamentos: GxsdtPedidoApipagamentos[];
	linkPagamento: GxsdtPedidoApilinkPagamento;
}
