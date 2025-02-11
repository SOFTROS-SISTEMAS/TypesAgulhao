export interface GxsdtConfrontoFornecedorprodutograde {
	ProdutoGradeId: number;
	ProdutoGradeNumero: string;
	ProdutoGradeBarras: string[];
	FornecedorVlrUntCmp: number;
	FornecedorDataUltimaCompra: string;
	FornecedorQtdeUltCmp: number;
	CorNome: string;
	CorHexa: string;
	CorImgExt: string;
	estoque: number;
	quantidade: number;
	valor: number;
	valorBase: number;
}

export interface GxsdtConfrontoFornecedorproduto {
	ProdutoCod: number;
	ProdutoReferencia: string;
	ProdutoDescricao: string;
	ProdutoVlrUltCmp: number;
	ProdutoDataUltCmp: string;
	produtoVendeBem: boolean;
	gradesComEstoqueBaixo: number[];
	grade: GxsdtConfrontoFornecedorprodutograde[];
}

export interface GxsdtConfrontoFornecedor {
	acao: number;
	fornecedorCod: number;
	fornecedorDocumento: string;
	mensagem: string;
	comGrades: boolean;
	comEstoque: boolean;
	comValor: boolean;
	comHistoricoCompra: boolean;
	tabelaPrecoCod: number;
	codigosBarras: string[];
	codigosProdutos: number[];
	produto: GxsdtConfrontoFornecedorproduto[];
}
