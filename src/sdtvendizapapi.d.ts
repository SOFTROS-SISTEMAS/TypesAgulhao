
export interface GxsdtVendizapApivariacaovariaveis {
    id?: string;
    nome: string;
    codigoAPI: string;
    cor: string;
    codigoAtualizado: boolean;
    codigoPai: string;
}
        
export interface GxsdtVendizapApivariacao {
    id?: string;
    nome: string; // Nome da variação (deve ser único)
    codigoAPI: string; // Código correspondente a variação no ERP
    codigoAtualizado: boolean;
    utilizaCor: boolean;
    variaveis: GxsdtVendizapApivariacaovariaveis[];
}
        
export interface GxsdtVendizapApiprodutopromocao {
    dataHoraInicio: string;
    dataHoraFim: string;
    percentual: number; // Valor promocional do produto.
    precoPromocional: number; // Percentual da promoção aplicado sobre o preço do produto (caso seja informado o precoPromocional este campo não é obrigatório)
}
        
export interface GxsdtVendizapApiprodutovariacoesvariaveis {
    id: string; // ID da variável que deve ser vinculada a variação para o produto.
    preco: number; // Valor adicional que pode ser informado para a variável. Este valor será somado ao valor do produto caso seja selecionado essa variável. Padrão: 0
    imagem: number; // Índice referente a imagem do produto para esta variável. Ou seja, será mostrado uma das imagens do produto quando selecionado essa variável, portanto o número informado neste campo deve se referir a posição de uma das imagens do produto na ordem que está cadastrado (inicia em 0). Exemplo: caso queira vincular a primeira foto do produto a variação deve ser informado 0.
}
        
export interface GxsdtVendizapApiprodutovariacoes {
    id: string; // ID da variação que deve ser vinculada ao produto
    obrigatoria: boolean; // Define se a variação é obrigatória na venda de um produto, ou seja, deve ser selecionado uma opção. Padrão: true
    multipla_selecao: boolean; // Define se a variação é múltipla, ou seja, permite informar mais de uma para um mesmo produto. Padrão: false
    adicional: boolean; // Define se a variação é um adicional do produto. Padrão: false
    qtdeMinima: number; // Define a quantidade mínima que deve ser informado na venda para adicionar ao produto. Padrão: 0
    qtdeMaxima: number; // Define a quantidade máxima que pode ser selecionado da variação na venda para o produto. Padrão: 0
    variaveis: GxsdtVendizapApiprodutovariacoesvariaveis[];
}
        
export interface GxsdtVendizapApiprodutodimensoes {
    altura: number;
    largura: number;
    comprimento: number;
    peso: number;
}
        
export interface GxsdtVendizapApiproduto {
    id: string;
    descricao?: string; // Descrição do produto
    preco?: number; // Valor do produto
    imagens: string[]; // Array contendo todas as imagens do produto, com limite de acordo com o plano do usuário. As imagens poderão ser recebidas em uma string com a Url ou base64 e serão inseridas na ordem enviada, a primeira será a capa do produto
    detalhes?: string; // Detalhes adicionais do produto, descrição completa
    categorias?: string[]; // Array com strings contendo os IDs de todas as categorias que o produto pertence
    unidadeVenda?: string; // Unidade a ser utilizada na venda do produto. Deve ser uma das seguintes unidades: ["Unidade", "Caixa", "Pacote", "Peça", "Quilo", "Porção", "Pedaço", "Metro", "Par", "Jogo"]. Caso nenhuma seja informada ou seja diferente de uma dessas será cadastrada com a padrão "Unidade"
    unidadePreco?: string; // Unidade a ser utilizada no preço do produto. Ex: Produto com preço por Kg mas que é vendido por Peça. Deve ser uma das seguintes unidades: ["Unidade", "Caixa", "Pacote", "Peça", "Quilo", "Porção", "Pedaço", "Metro", "Par", "Jogo"]. Caso nenhuma seja informada ou seja diferente de uma dessas será cadastrada com a padrão "Unidade"
    codigo?: string; // Código correspondente ao produto no ERP
    qtdeMinima?: number; // Quantidade mínima do produto na venda
    qtdeMaxima?: number; // Quantidade máxima do produto na venda
    exibir?: boolean; // Exibe ou não o produto na vitrine (corresponde a ativo/inativo). Padrão: true
    destaque?: boolean;
    promocao: GxsdtVendizapApiprodutopromocao;
    variacoes: GxsdtVendizapApiprodutovariacoes[];
    dimensoes: GxsdtVendizapApiprodutodimensoes;
}
        
export interface GxsdtVendizapApiretorno {
    resposta: string;
    descricao: string;
    isErro: boolean;
}
        
export interface GxsdtVendizapApiestoquegrades {
    corApiId: string;
    quantidade: number;
    tamanhoApiId: string;
}
        
export interface GxsdtVendizapApiestoque {
    produtoApiId: string;
    grades: GxsdtVendizapApiestoquegrades[];
}
        
export interface GxsdtVendizapApiimagens {
    id: number;
    url: string;
    corId: number;
}
        
export interface GxsdtVendizapApicategoria {
    nome: string;
    codigo: string;
    imagem: string;
}
        
export interface GxsdtVendizapApipedidocupomAplicado {
    tipo: string;
    desconto: number;
}
        
export interface GxsdtVendizapApipedidoclienteendereco {
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    pais: string;
    uf: string;
    estado: string;
    cidade: string;
    complemento: string;
    termo: string;
}
        
export interface GxsdtVendizapApipedidocliente {
    nome: string;
    documento: string;
    telefone: string;
    endereco: GxsdtVendizapApipedidoclienteendereco;
}
        
export interface GxsdtVendizapApipedidopagamentotipoPagamento {
    tipo: string;
}
        
export interface GxsdtVendizapApipedidopagamentovalores {
    acrescimo: number;
    desconto: number;
    valorFinal: number;
}
        
export interface GxsdtVendizapApipedidopagamentotaxaAplicada {
    valorAcrescimo: number;
    valorDesconto: number;
    tipo: string;
}
        
export interface GxsdtVendizapApipedidopagamento {
    descricao: string;
    tipo: string;
    identificador: string;
    id: string;
    dt_alteracao: string;
    parcelas: number;
    tipoPagamento: GxsdtVendizapApipedidopagamentotipoPagamento;
    valores: GxsdtVendizapApipedidopagamentovalores;
    taxaAplicada: GxsdtVendizapApipedidopagamentotaxaAplicada;
}
        
export interface GxsdtVendizapApipedidoitensdimensoes {
    largura: number;
    altura: number;
    comprimento: number;
    diametro: number;
    peso: number;
}
        
export interface GxsdtVendizapApipedidoitensrelacaoVariacaovariaveis {
    preco: number;
    id: string;
    quantidade: number;
    codigo: string;
}
        
export interface GxsdtVendizapApipedidoitensrelacaoVariacao {
    id: string;
    codigo: string;
    variaveis: GxsdtVendizapApipedidoitensrelacaoVariacaovariaveis[];
}
        
export interface GxsdtVendizapApipedidoitens {
    id_produto: string;
    controle_estoque: boolean;
    quantidade: number;
    codigo: string;
    dimensoes: GxsdtVendizapApipedidoitensdimensoes;
    relacaoVariacao: GxsdtVendizapApipedidoitensrelacaoVariacao[];
}
        
export interface GxsdtVendizapApipedidolinkPagamento {
    link: string;
    valorCobranca: number;
    status: string;
}
        
export interface GxsdtVendizapApipedido {
    id: string;
    data: string;
    entrega: boolean;
    retiradaOutroLocal: boolean;
    taxaRetirada: number;
    observacao: string;
    dataHoraRetirada: string;
    taxaEntrega: number;
    qrcode: string;
    valorPedido: number;
    valorAproximado: boolean;
    numero: number;
    email: string;
    cancelado: boolean;
    cupomAplicado: GxsdtVendizapApipedidocupomAplicado;
    cliente: GxsdtVendizapApipedidocliente;
    pagamento: GxsdtVendizapApipedidopagamento;
    itens: GxsdtVendizapApipedidoitens[];
    linkPagamento: GxsdtVendizapApipedidolinkPagamento[];
}
        
export interface GxsdtVendizapApi {
    produtoCod: number;
    produtoGradeId: number;
    produtoSecaoCod: number;
    filialCod: number;
    empresaCodigo: number;
    acao: number;
    variacao: GxsdtVendizapApivariacao[];
    produto: GxsdtVendizapApiproduto;
    retorno: GxsdtVendizapApiretorno;
    estoque: GxsdtVendizapApiestoque;
    imagens: GxsdtVendizapApiimagens[];
    categoria: GxsdtVendizapApicategoria;
    pedido: GxsdtVendizapApipedido;
}
        