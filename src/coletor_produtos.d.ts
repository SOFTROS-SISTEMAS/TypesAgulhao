
export interface GxColetor_ProdutosGradesEstoque {
    EstoqueFilialCod: number; // Cód. Filial
    EstoqueFilialGradeQtdeDisp: number; // Disponível
    EstoqueFilialGradeQtdeAtual: number; // Atual
    EstoqueEcommProQtd: number;
}
        
export interface GxColetor_ProdutosGrades {
    ProdutoGradeId: number; // Produto Grade Id
    ProdutoGradeNumero: string; // Produto Grade Numero
    ProdutoGradeQtdEmb: number; // Produto Grade Qtd Emb
    ProdutoGradeColunaPreco: number; // Produto Grade Coluna Preco
    ProdutoGradeBarras: number; // Código de Barras
    ProdutoGradeOrdem: number; // Ordem do item
    ProdutoGradeCorCod: number;
    ProdutoGradeCorNome: string;
    ProdutoGradeCorHexa: string;
    ProdutoGradeDispVda: boolean;
    Estoque: GxColetor_ProdutosGradesEstoque[];
}
        
export interface GxColetor_ProdutosPrecos {
    ProdutoTabelaPrecoCod: number; // Produto Tabela Preco Cod
    TabelaPreco1: number; // Tabela Preco1
    TabelaPreco2: number; // Tabela Preco2
    TabelaPreco3: number;
    TabelaPreco4: number;
    TabelaPreco5: number;
}
        
export interface GxColetor_ProdutosImagens {
    ProdutoImagem: string;
    ProdutoExtensao: string;
    ProdutoImagemCodigo: number;
}
        
export interface GxColetor_ProdutosEmbalagens {
    produtoCod: number;
    ProdutoEmbQtd: number;
    ProdutoEmbEAN: number;
    ProdutoEmbUnd: string;
}
        
export interface GxColetor_Produtos {
    produtoCod: number; // produto Cod
    ProdutoDescricao: string; // Produto Descricao
    ProdutoReferencia: string; // Produto Referencia
    ProdutoSexo: string; // Produto Sexo
    ColecaoCod: number; // Colecao Cod
    ProdutoUnd: string; // Produto Und
    MarcaCod: number;
    MarcaNome: string; // Marca Nome
    ProdutoFornecedorCod: number; // Fornecedor do Produto
    ProdutoAtivoInativo: string; // Ativo / Inativo
    ProdutoAtivoVenda: boolean;
    ProdutoBloqVenExt: boolean;
    Grades: GxColetor_ProdutosGrades[];
    Precos: GxColetor_ProdutosPrecos[];
    Imagens: GxColetor_ProdutosImagens[];
    Embalagens: GxColetor_ProdutosEmbalagens[];
}
        