export interface GxsdtApiIntegracoeserros {
	mensagem: string;
	tecnico: string;
	produtoCod: number;
}

export interface GxsdtApiIntegracoessucessos {
	mensagem: string;
	tecnico: string;
	produtoCod: number;
}

export interface GxsdtApiIntegracoes {
	acao: string;
	coringa: string;
	erros: GxsdtApiIntegracoeserros[];
	sucessos: GxsdtApiIntegracoessucessos[];
}
