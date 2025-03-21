import { GxsdtPedidoApi as GxSdtImportadosdtPedidoApi } from './sdtpedidoapi';

export interface GxsdtApiIntegracoeserros {
	mensagem: string;
	tecnico: string;
	produtoCod: number;
	integracaoCod: number;
	filialCod: number;
	pedidoId: number;
}

export interface GxsdtApiIntegracoessucessos {
	mensagem: string;
	tecnico: string;
	produtoCod: number;
	integracaoCod: number;
	filialCod: number;
	pedidoId: number;
}

export interface GxsdtApiIntegracoesintegracoes {
	integracaoCod: number;
	filialCod: number;
	configuracoes: string;
}

export interface GxsdtApiIntegracoesprodutosmarcadores {
	produtoSecaoCod: number;
	produtoSecaoNom: string;
}

export interface GxsdtApiIntegracoesprodutosintegracoes {
	integracaoCod: number;
	filialCod: number;
	configuracoes: string;
}

export interface GxsdtApiIntegracoesprodutosimagens {
	produtoImagemCodigo: number;
	produtoImagemOrdem: number | null;
	produtoImagemUrlExterna: string;
	produtoImagemCorCod: number;
}

export interface GxsdtApiIntegracoesprodutosgradesintegracoes {
	integracaoCod: number;
	filialCod: number;
	estoque: number;
	precoPromocional: number;
	preco: number;
	tipoEstoque: number;
}

export interface GxsdtApiIntegracoesprodutosgrades {
	produtoGradeNumero: string;
	produtoGradeId: number;
	produtoGradeBarras: number;
	corNome: string;
	corCod: number;
	corHexa: string;
	corImgExt: string | null;
	preco: number;
	integracoes: GxsdtApiIntegracoesprodutosgradesintegracoes[];
}

export interface GxsdtApiIntegracoesprodutos {
	produtoCodigo: number;
	produtoEcomNome: string;
	produtoEcomDesc: string;
	produtoNomeAbreviado: string;
	produtoReferencia: string;
	produtoDescricao: string;
	produtoSexo: string;
	marcaNome: string;
	produtoAltura: number;
	produtoLargura: number;
	produtoComprimento: number;
	produtoPeso: number;
	unidadeMedidaSigla: string;
	produtoDataAlteracaoImagem: string;
	ultUpdProduto: string;
	marcadores: GxsdtApiIntegracoesprodutosmarcadores[];
	integracoes: GxsdtApiIntegracoesprodutosintegracoes[];
	imagens: GxsdtApiIntegracoesprodutosimagens[];
	grades: GxsdtApiIntegracoesprodutosgrades[];
}

export interface GxsdtApiIntegracoesestoque {
	produtoCod: number;
	produtoGradeId: number;
	produtoGradeBarras: number;
	integracaoCod: number;
	filialCod: number;
	qtde: number;
}

export interface GxsdtApiIntegracoesprodutosIntegracoes {
	id: string;
	idIntegracao: number;
	filialCod: number;
	codigo: string;
	codigoAgulhao: string;
	ativo: number;
	sincronizar: number;
	json: string;
}

export interface GxsdtApiIntegracoes {
	id: string;
	acao: string;
	coringa: string;
	filiais: number[];
	listaCodigosProdutos: number[];
	pedidos: GxSdtImportadosdtPedidoApi[];
	erros: GxsdtApiIntegracoeserros[];
	sucessos: GxsdtApiIntegracoessucessos[];
	integracoes: GxsdtApiIntegracoesintegracoes[];
	produtos: GxsdtApiIntegracoesprodutos[];
	estoque: GxsdtApiIntegracoesestoque[];
	produtosIntegracoes: GxsdtApiIntegracoesprodutosIntegracoes[];
}
