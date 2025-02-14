export interface GxsdtApiBancoserros {
	duplicataId: number;
	mensagem: string;
	tecnico: string;
}

export interface GxsdtApiBancosboletosConsultados {
	dataPagamento: string;
	dataProtestoNegativacao: string;
	statusBoleto: string;
	valorPago: number;
	duplicataId: number;
	nossoNumero: string;
}

export interface GxsdtApiBancossucessos {
	duplicataId: number;
	mensagem: string;
	tecnico: string;
}

export interface GxsdtApiBancos {
	acao: string;
	ultimosDias: number;
	localCobrancaCod: number;
	duplicatas: number[];
	erros: GxsdtApiBancoserros[];
	boletosConsultados: GxsdtApiBancosboletosConsultados[];
	sucessos: GxsdtApiBancossucessos[];
}
