export interface GxsdtAnotacaoanexos {
	id: number;
	url: string;
	descricao: string;
	data: string;
}

export interface GxsdtAnotacao {
	tipo: string;
	id: number;
	pessoaCod: number;
	data: string;
	descricao: string;
	usuario: string;
	followUp: number;
	followUpDesc: string;
	followUpIco: string;
	status: string;
	proximoContato: string;
	duplicataId: number;
	meioContato: string;
	anexos: GxsdtAnotacaoanexos[];
}
