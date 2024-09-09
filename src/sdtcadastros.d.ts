
export interface GxsdtCadastrosProdutosGradesEstoque {
    EstoqueFilialCod: number;
    EstoqueFilialGradeQtdeAtual: number;
    EstoqueFilialGradeQtdeDisp: number;
    EstoqueFilialGradeQtdeRes: number;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosProdutosGrades {
    ProdutoGradeId: number;
    ProdutoGradeNumero: string;
    ProdutoGradeCorCod: number;
    ProdutoGradeCorNome: string;
    ProdutoGradeCorHexa: string;
    ProdutoGradeQtdEmb: number;
    ProdutoGradeColunaPreco: number;
    ProdutoGradeOrdem: number;
    ProdutoGradeDispVda: boolean;
    ProdutoGradeBarras: number;
    isExcluir: boolean;
    Estoque: GxsdtCadastrosProdutosGradesEstoque[];
}
        
export interface GxsdtCadastrosProdutosPrecos {
    ProdutoTabelaPrecoCod: number;
    TabelaPreco1: number;
    TabelaPreco2: number;
    TabelaPreco3: number;
    TabelaPreco4: number;
    TabelaPreco5: number;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosProdutosEmbalagens {
    ProdutoCod: number;
    ProdutoEmbQtd: number;
    ProdutoEmbEAN: number;
    ProdutoEmbUnd: string;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosProdutosImagens {
    ProdutoImagemCod: string;
    ProdutoImagem: string;
    ProdutoImagemUrlExterna: number;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosProdutos {
    ProdutoCod: number;
    ProdutoDescricao: string;
    ProdutoReferencia: string;
    ProdutoSexo: string;
    ColecaoCod: number;
    ProdutoUnd: string;
    MarcaCod: number;
    MarcaNome: string;
    ProdutoFornecedorCod: number;
    ProdutoAtivoInativo: string;
    ProdutoAtivoVenda: boolean;
    isExcluir: boolean;
    Grades: GxsdtCadastrosProdutosGrades[];
    Precos: GxsdtCadastrosProdutosPrecos[];
    Embalagens: GxsdtCadastrosProdutosEmbalagens[];
    Imagens: GxsdtCadastrosProdutosImagens[];
}
        
export interface GxsdtCadastrosMarcas {
    MarcaCod: number;
    MarcaNome: string;
    MarcaLogo: string;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosPrazosVendedor {
    PrazoVendedorCod: number;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosPrazos {
    PrazoCod: number;
    PrazoDescricao: string;
    PrazoIsPV: boolean;
    PrazoIsVB: boolean;
    isExcluir: boolean;
    isInserirVendedores: boolean;
    Vendedor: GxsdtCadastrosPrazosVendedor[];
}
        
export interface GxsdtCadastrosTabelaPrecoVendedor {
    TabelaPrecoVendedorCod: number;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosTabelaPreco {
    TabelaPrecoCod: number;
    TabelaPrecoDescricao: string;
    TabelaPrecoInicio: string;
    TabelaPrecoFinal: string;
    TabelaPrecoTipo: string;
    TabelaPrecoPercSobreCusto: number;
    TabelaPrecoCor: string;
    TabelaPrecoBloquearDescAcimaDe: number;
    TabelaPrecoDescMax: number;
    TabelaPrecoDescMaxPrazo: number;
    TabelaPrecoPercSobreCusto2: number;
    TabelaPrecoPercSobreCusto3: number;
    isExcluir: boolean;
    isInserirVendedores: boolean;
    Vendedor: GxsdtCadastrosTabelaPrecoVendedor[];
}
        
export interface GxsdtCadastrosCidade {
    CidadeCod: number;
    CidadeNom: string;
    EstadoCod: string;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosColecao {
    ColecaoCod: number;
    ColecaoNome: string;
    ColecaoCor: string;
    ColecaoDispVenda: boolean;
    ColecaoTipoMeta: string;
    ColecaoMeta: number;
    ColecaoAno: number;
    ColecaoEstacao: string;
    ColecaoDataInicio: string;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosFormaPagamento {
    FormaPagamentoCod: number;
    FormaPagamentoDescricao: string;
    FormaPagamentoAtivoInativo: string;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosLocalCobranca {
    LocalCobrancaCod: number;
    LocalCobrancaDescricao: string;
    ContaHistoricoRecId: number;
    ContaHistoricoPagId: number;
    ContaHistoricoExtId: number;
    ContaPlanoContasIdRec: number;
    ContaPlanoContasIdPag: number;
    ContaPlanoContasIdExt: number;
    ContaCentroCustoCodPag: number;
    ContaCentroCustoCodRec: number;
    ContaCentroCustoCodExt: number;
    LocalCobrancaDiaFixo: number;
    ContaHistoricoPagReceitaDespesa: number;
    ContaHistoricoRecReceitaDespesa: number;
    ContaHistoricoExtReceitaDespesa: number;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosTipoLancamento {
    TipoLancamentoCod: number;
    TipoLancamentoDescricao: string;
    NaturezaOperacaoCod: number;
    NaturezaOperacaoDescricao: string;
    TipoLancObgPrevisaoEntrega: boolean;
    TipoLancObgPrazo: boolean;
    TipoLancObgParcelas: boolean;
    TipoLancObgValorMinPed: boolean;
    TipoLancObgCadCliente: boolean;
    TipoLancObgDescCliente: boolean;
    TipoLancObgColecao: boolean;
    TipoLancAvancarEtapa: number;
    TipoLancamentoisVenda: boolean;
    TipoLancamentoEstoque: string;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosBandeira {
    BandeiraCod: number;
    BandeiraDescricao: string;
    BandeiraRede: number;
    BandeiraTipoCartao: string;
    BandeiraVctoDiaNaoUtil: string;
    BandeiraPercDebito: number;
    BandeiraPercCredVista: number;
    BandeiraOPercCredPrazo: number;
    BandeiraDiaDebito: number;
    BandeiraDiaCredVista: number;
    BandeiraDiaCredPrazo: number;
    SBBandeiraPessoaCod: number;
    SBBandeiraPessoaNome: string;
    SBBandeiraPessoaCpfCnpj: string;
    SBBandeiraHistoricoCod: number;
    SBBandeiraHistoricoDesc: string;
    SBBandeiraHistoricoRecDes: number;
    SBBandeiraHistoricoPlanContPref: number;
    isExcluir: boolean;
}
        
export interface GxsdtCadastrosCor {
    CorCod: number;
    CorNome: string;
    CorAtivoInativo: string;
    CorHexa: string;
    CorImg: string;
    isExcluir: boolean;
}
        
export interface GxsdtCadastros {
    Acao: string;
    Erros: string[];
    Produtos: GxsdtCadastrosProdutos[];
    Marcas: GxsdtCadastrosMarcas[];
    Prazos: GxsdtCadastrosPrazos[];
    TabelaPreco: GxsdtCadastrosTabelaPreco[];
    Cidade: GxsdtCadastrosCidade[];
    Colecao: GxsdtCadastrosColecao[];
    FormaPagamento: GxsdtCadastrosFormaPagamento[];
    LocalCobranca: GxsdtCadastrosLocalCobranca[];
    TipoLancamento: GxsdtCadastrosTipoLancamento[];
    Bandeira: GxsdtCadastrosBandeira[];
    Cor: GxsdtCadastrosCor[];
}
        