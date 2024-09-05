import { GxsdtEntrega as GxSdtImportadosdtEntrega } from './sdtentrega'
import { GxsdtConfrontoFornecedor as GxSdtImportadosdtConfrontoFornecedor } from './sdtconfrontofornecedor'
import { GxsdtPerfil as GxSdtImportadosdtPerfil } from './sdtperfil'

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
    MarcadorPadrao: GxAppClienteEmpresaMarcadorPadrao[];
    InfoCompra: GxAppClienteEmpresaInfoCompra[];
}
        
export interface GxAppClienteClienteescopos {
    emitirPedido: boolean;
    exibirPreco: boolean;
    manipularPerfis: boolean;
    verFinanceiro: boolean;
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
}
        
export interface GxAppClienteProdutosCores {
    ProdutoGradeCorCod: number;
    ProdutoGradeCorNome: number;
    ProdutoGradeCorHexa: number;
    ProdutoGradeCorImgExt: number;
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
    ProdutoGradeCorNome: number;
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
    ProdutoGradeCorNome: number;
    ProdutoGradeCor: string;
    ProdutoImagemUrl: string | null;
    PedidoItemDescontoPerc: number;
    PedidoItemPrecoProm: number;
}
        
export interface GxAppClientePedidosFormasPagamento {
    FormaPagamentoCod: number;
    FormaPagamentoValor: number;
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
    PedidoGuiaNome: number;
    TipoLancamentoDescricao: string;
    PedidoTabelaPreco: number;
    PedidoObservacoes: string;
    UltimaAtualizacao: string;
    Entrega: GxSdtImportadosdtEntrega;
    Itens: GxAppClientePedidosItens[];
    FormasPagamento: GxAppClientePedidosFormasPagamento[];
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
        