
export interface GxsdtProdutoCor {
    CorCod: number;
    CorNome: string;
    CorHexa: string;
}
        
export interface GxsdtProdutoProdutoTabelaPreco {
    TabelaPrecoCod: number; // Tabela Preco Cod
    TabelaPrecoDescricao: string; // Tabela Preco Descricao
    TabelaPrecoTipo: string; // Tabela Preco Tipo
    TabelaPreco1: number; // Tabela Preco1
    TabelaPreco2: number; // Tabela Preco2
    TabelaPreco3: number;
    TabelaPreco4: number;
    TabelaPreco5: number;
    TabelaPrecoUltAlt: string; // Tabela Preco Ult Alt
    TabelaPrecoUsu: string; // Tabela Preco Usu
}
        
export interface GxsdtProdutoProdutoGrade {
    ProdutoGradeId: number; // Produto Grade Id
    ProdutoGradeNumero: string; // Produto Grade Numero
    ProdutoGradeCorCod: number; // Produto Grade Cor Cod
    ProdutoGradeCorNome: number; // Produto Grade Cor Nome
    ProdutoGradeBarras: number; // Produto Grade Barras
}
        
export interface GxsdtProdutoProdutoOperacoes {
    ProdutoOperacaoCod: number; // Produto Operacao Cod
    ProdutoOperacaoDescricao: number; // Produto Operacao Descricao
    ProdutoOperacaoMaquinaCod: number; // Produto Operacao Maquina Cod
    ProdutoOperacaoMaquinaDescricao: number; // Produto Operacao Maquina Descricao
    TipoPacoteCod: number; // Tipo Pacote Cod
    TipoPacoteDescricao: string; // Tipo Pacote Descricao
    ProdutoOperacaoPontos: number; // Produto Operacao Pontos
    ProdutoOperacoesDataHora: string; // Produto Operacoes Data Hora
    ProdutoOperacaoOrdem: number;
    ProdutoOperacaoTempo: string;
    ProdutoOperacaoTipoMaquinaDsc: number;
}
        
export interface GxsdtProduto {
    ProdutoCod: number; // Produto
    ColecaoCod: number; // Coleção
    ColecaoNome: string; // Colecao
    ColecaoUltimoProduto: number; // Último produto
    ProdutoReferencia: string; // Referência
    ProdutoDescricao: string; // Descrição
    ProdutoSexo: string; // Sexo
    GrupoCod: number; // Grupo
    GrupoDescricao: string; // Descrição
    SubGrupoCod: number; // SubGrupo
    SubGrupoDescricao: string; // Descrição
    SubSubGrupoCod: number;
    MarcaCod: number; // Marca
    MarcaNome: string; // Descrição
    UnidadeMedidaSigla: string; // Sigla
    UnidadeMedidaDescricao: string; // Descrição
    GradeTamanhoCod: number; // Grade
    GradeTamanhoDescricao: string; // Descrição
    ProdutoComposicao: string; // Composição
    GrupoImpostosCod: number; // Grupo Impostos
    GrupoImpostosDescricao: string; // Descrição
    NcmCodigo: string; // NCM
    ProdutoAmostra: string; // Amostra
    ProdutoAtivoInativo: string; // Ativo
    ProdutoIsProduto: boolean; // Produto Is Produto
    ProdutoIsMateriaPrima: boolean; // Produto Is Materia Prima
    ProdutoDataCadastro: string; // Produto Data Cadastro
    ProdutoDataAlteracao: string; // Produto Data Alteracao
    ProdutoCodAnterior: string; // Produto Cod Anterior
    ProdutoCustoMedio: number; // Produto Custo Medio
    ProdutoCusto: number; // Produto Custo
    ProdutoControlePorLote: boolean; // Produto Controle Por Lote
    ProdutoOperacaoClienteCod: number; // Produto Operacao Cliente Cod
    ProdutoOperacaoClienteNome: number; // Produto Operacao Cliente Nome
    ProdutoValorChefe: number; // Produto Valor Chefe
    ProdutoValorServTer: number; // Produto Valor Serv Ter
    ProdutoPecasPorPacote: number; // Produto Pecas Por Pacote
    ProdutoQtdeMinimaPacote: number; // Produto Qtde Minima Pacote
    ProdutoFornCod: number;
    ProdutoIsDevolucao: boolean;
    ProdutoTecCod: number;
    ProdutoPilotoCod: number;
    IsNaoCriarVinculoFornecedor: boolean;
    ProdutoQtdeProducao: number;
    ProdutoQtdeEstoque: number;
    ProdutoQtdeAberto: number;
    ProdutoQtdeConferindo: number;
    ProdutoImg: string;
    Cor: GxsdtProdutoCor[];
    ProdutoTabelaPreco: GxsdtProdutoProdutoTabelaPreco[];
    ProdutoGrade: GxsdtProdutoProdutoGrade[];
    ProdutoOperacoes: GxsdtProdutoProdutoOperacoes[];
}
        