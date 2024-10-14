import { GxsdtEntrega as GxSdtImportadosdtEntrega } from './sdtentrega';
import { GxsdtConfrontoFornecedor as GxSdtImportadosdtConfrontoFornecedor } from './sdtconfrontofornecedor';
import { GxsdtPerfil as GxSdtImportadosdtPerfil } from './sdtperfil';

export interface GxAppClienteRetorno {
	RetornoNivel: number;
	RetornoMensagem: string;
}

export interface GxAppClienteEmpresaMarcadorPadrao {
	MarcadorCod: number; // Marcador
}

export interface GxAppClienteEmpresaInfoCompra {
	Detalhe: string;
}

export interface GxAppClienteEmpresa {
	NomeAmigavel: string;
	Logotipo: string;
	NumeroWhatsApp: string;
	NumeroTelefone: string;
	Email: string;
	Instagram: string;
	Facebook: string;
	Site: string;
	Sobre: string;
	Localizacao: string;
	ValidarEstoque: boolean;
	TipoGradeVenda: string; // Tipo de exibição das grades na venda
	Simplificado: boolean;
	Cnpj: string;
	MarcadorPadrao: GxAppClienteEmpresaMarcadorPadrao[];
	InfoCompra: GxAppClienteEmpresaInfoCompra[];
}

export interface GxAppClienteClienteescopos {
	emitirPedido: boolean;
	exibirPreco: boolean;
	manipularPerfis: boolean;
	verFinanceiro: boolean;
}

export interface GxAppClienteClienteDuplicatas {
	DuplicataId: number;
	DuplicataValor: number;
	DuplicataVencimento: string;
	DuplicataBoletoUrl: string;
	DuplicataSaldoFis: number;
	DuplicataStatus: string;
}

export interface GxAppClienteClientePedidos {
	PedidoId: number;
	PedidoValorLiquido: number;
	PedidoIdExterno: string;
	PedidoSaidaStatus: number;
	PedidoStatus: string;
	PedidoDataEmissao: string;
}

export interface GxAppClienteClientevalePresentes {
	ValePresenteCod: string;
	ValePresenteDescricao: string;
	ValePresenteValor: number;
	ValePresenteData: string;
	ValePresenteSaldo: number;
}

export interface GxAppClienteCliente {
	ClienteCpfCnpj: string | null;
	ClienteSenha?: string;
	ClienteCod: number;
	ClienteStatus: string;
	ClienteNome: string;
	ClienteEmail: string;
	ClienteTelefone: string;
	ClienteEndLgr: string;
	ClienteEndNro: string;
	ClienteEndBairro: string;
	ClienteEndCpl: string;
	ClienteCep: string;
	ClienteCidCod: number;
	ClienteCidNom: string;
	ClienteUf: string;
	ClienteMotivo: string;
	ClienteDeviceId: string;
	ClienteDeviceToken: string;
	ClienteDeviceDescricao: string;
	ClienteDeviceLocalizacao: string;
	UltimoPedidoGuiaCod: number;
	UltimoPedidoMetodoEnvio: number;
	UltimoPedidoMotoristaNome: string;
	VendedorCodigo: number;
	TabelaPrecoCod: number;
	Token: string;
	PessoaCarrinhoJson: string;
	PessoaApiSoftros: string;
	ConectadoComAgulhao: boolean;
	escopos: GxAppClienteClienteescopos;
	Duplicatas: GxAppClienteClienteDuplicatas[];
	Pedidos: GxAppClienteClientePedidos[];
	valePresentes: GxAppClienteClientevalePresentes[];
}

export interface GxAppClienteProdutosCores {
	ProdutoGradeCorCod: number;
	ProdutoGradeCorNome: string;
	ProdutoGradeCorHexa: string;
	ProdutoGradeCorImgExt: string;
}

export interface GxAppClienteProdutosOferta {
	OfertaProdutoPerc: number;
	OfertaProdutoVenda: number;
}

export interface GxAppClienteProdutosPrecos {
	TabelaPrecoCod: number;
	TabelaPrecoDesc: string; // Descrição da tabela
	TabelaPreco1: number;
	TabelaPreco2: number;
	TabelaPreco3: number;
	TabelaPreco4: number;
	TabelaPreco5: number;
}

export interface GxAppClienteProdutosGradesEstoqueFilial {
	FilialCod: number;
	FilialNomFantasia: string;
	EstoqueQuantidade: number;
	EstoqueReservado: number;
	EstoqueDisponivel: number;
	EstoqueTemporario: number;
	EstoqueAprovando: number;
	EstoqueRestrito: number;
}

export interface GxAppClienteProdutosGrades {
	ProdutoGradeId: number;
	ProdutoGradeNumero: string;
	ProdutoGradePreco: number;
	ProdutoGradePrecoProm: number;
	ProdutoEstoque: number;
	ProdutoGradeCorNome: string;
	ProdutoGradeCorCod: number;
	ProdutoGradeCor: string;
	ProdutoGradeCorImgExt: number;
	ProdutoGradeBarras: number;
	EstoqueFilial: GxAppClienteProdutosGradesEstoqueFilial[];
}

export interface GxAppClienteProdutosImagem {
	ImagemURL: string | null;
	ImagemOrdem: number | null;
}

export interface GxAppClienteProdutos {
	ProdutoCod: number;
	ProdutoNome: string;
	ProdutoReferencia: string;
	MarcaNome: string;
	ImagemPrincipalURL: string | null;
	PrecoMin: number;
	ProdutoSexo: string;
	PrecoBase: number;
	UltUpdProduto: string;
	Tamanhos: string[];
	Cores: GxAppClienteProdutosCores[];
	Oferta: GxAppClienteProdutosOferta;
	Precos: GxAppClienteProdutosPrecos[];
	Grades: GxAppClienteProdutosGrades[];
	Imagem: GxAppClienteProdutosImagem[];
}

export interface GxAppClientePedidosItens {
	ProdutoCod: number;
	ProdutoGradeId: number;
	ProdutoDescricaoCompleta: string;
	PedidoItemQtde: number;
	PedidoItemVlrUnitario: number;
	ProdutoGradeCorNome: string;
	ProdutoGradeCor: string;
	ProdutoImagemUrl: string | null;
	PedidoItemDescontoPerc: number;
	PedidoItemPrecoProm: number;
}

export interface GxAppClientePedidosFormasPagamento {
	FormaPagamentoCod: number;
	FormaPagamentoValor: number;
}

export interface GxAppClientePedidosDuplicatas {
	DuplicataId: number;
	DuplicataValor: number;
	DuplicataVencimento: string;
	DuplicataBoletoUrl: string;
	DuplicataSaldoFis: number;
	DuplicataStatus: string;
}

export interface GxAppClientePedidos {
	PedidoId: number;
	PedidoDataEmissao: string;
	PedidoDataFechamento: string;
	PedidoSaidaStatus: number;
	PedidoValorLiquido: number;
	PedidoMotoristaNome: string;
	PedidoMetodoEnvio: number;
	PedidoGuiaCod: number;
	PedidoGuiaNome: string;
	TipoLancamentoDescricao: string;
	PedidoTabelaPreco: number;
	PedidoObservacoes: string;
	UltimaAtualizacao: string;
	Entrega: GxSdtImportadosdtEntrega;
	PedidoTipo: string;
	PedidoPrevisaoEntrega: string;
	PedidoHoraEmissao: string;
	PedidoVendedorNome: number;
	PedidoVendedorCod: number;
	PedidoCliCod: number;
	PedidoColecaoCod: number;
	UltUpdPedido: string;
	PedidoDescontoPerc: number;
	PedidoDescontoDinheiro: number;
	PedidoStatusFinanceiro: string;
	PessoaCpfCnpj: string;
	PedidoValorBruto: number;
	PedidoClienteNome: string;
	PedidoValorFrete: number;
	PedidoValorSeguro: number;
	PedidoValorOutros: number;
	PedidoValorST: number;
	PedidoDanfeUrl: string;
	PedidoXmlNfeUrl: string | null;
	PedidoStatus: string;
	Itens: GxAppClientePedidosItens[];
	FormasPagamento: GxAppClientePedidosFormasPagamento[];
	Duplicatas: GxAppClientePedidosDuplicatas[];
}

export interface GxAppClienteMarcadores {
	MarcadorChave: string;
	MarcadorDescricao: string;
}

export interface GxAppClienteFiltros {
	FiltroPagina: number;
	FiltroMarcador: string[];
	FiltroGenero: string[] | null;
	FiltroBusca: string;
	UltimaAtualizacao: string;
	ComGrade: boolean;
	DuplicataId: number;
}

export interface GxAppClienteTabelaPreco {
	TabelaPrecoCod: number;
	TabelaPrecoDescricao: string;
	TabelaPrecoCor: string;
}

export interface GxAppClientecarrinho {
	id: string;
	preco: number;
}

export interface GxAppClienteGuias {
	PessoaCod: number;
	PessoaNomeRazao: string;
	isUltimoGuia: boolean;
}

export interface GxAppClienteVendedor {
	PessoaCod: number;
	PessoaNome: string;
}

export interface GxAppCliente {
	EmpresaCodigo?: number;
	FilialCod?: number;
	TabelaPrecoCod?: number;
	Acao?: string;
	SomenteEstoqueDisponivel?: boolean;
	isCondicional?: boolean;
	jwt?: string;
	json: string;
	mensagem?: string;
	autenticado: boolean;
	fornecedor: GxSdtImportadosdtConfrontoFornecedor;
	perfis: GxSdtImportadosdtPerfil[];
	Retorno: GxAppClienteRetorno[];
	Empresa: GxAppClienteEmpresa;
	Cliente: GxAppClienteCliente;
	Produtos: GxAppClienteProdutos[];
	Pedidos: GxAppClientePedidos[];
	Marcadores: GxAppClienteMarcadores[];
	Filtros: GxAppClienteFiltros;
	TabelaPreco: GxAppClienteTabelaPreco[];
	carrinho: GxAppClientecarrinho[];
	Guias: GxAppClienteGuias[];
	Vendedor: GxAppClienteVendedor;
}
