export interface GxsdtFormaPgto {
	FormaPagamentoCod: number; // Código
	FormaPagamentoDescricao: string; // Forma pgto
	FormaPagamentoAtivoInativo: string;
	FormaPagamentoValor: number; // Forma Pagamento Valor
	FormaPgtoClienteCod: number; // Cliente
	FormaPgtoClienteNome: string; // Nome
	FormaPagamentoSolicitarCliente: string; // Solicitar cliente
	FormaPagamentoSolicitarRedCred: string; // Solicitar RedCred
	FormaPagamentoSolicitarPrazo: string;
	FormaPagamentoSolicitarCheque: string;
	FormaPagamentoSolicitarCartao: string;
	PedidoLocalCobrancaCod: number; // Pedido Local Cobranca Cod
	PedidoLocalCobrancaDescricao: string; // Pedido Local Cobranca Descricao
	PrazoMedio: number;
	checado: boolean;
}
