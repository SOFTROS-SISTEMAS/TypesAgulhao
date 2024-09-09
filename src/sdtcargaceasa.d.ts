
export interface GxsdtCargaCeasaCargaNFe {
    CotacaoNFeChave: string;
    CotacaoNFeVlr: number;
    CotacaoNFeFormaPgto: string;
}
        
export interface GxsdtCargaCeasaCargaPedidoFornecedor {
    FornecedorCod: number;
    ProdutoValorUnitario: number;
    PedidoQtdeComprada: number; // Qtde Comprada
    PedidoQtdeCarregado: number;
}
        
export interface GxsdtCargaCeasaCargaPedido {
    ProdutoCod: number;
    PedidoEstoqueFisico: number; // Estoque Atual
    PedidoQtdeSolicitada: number | null; // Qtde Solicitada
    ProdutoDescricao: string;
    CarregamentoQtd: number;
    CompradoQtd: number;
    Fornecedor: GxsdtCargaCeasaCargaPedidoFornecedor[];
}
        
export interface GxsdtCargaCeasaCarga {
    EmpresaCodigo: number;
    FilialNom: string;
    CargaCodigo: number;
    CotacaoCodigo: number;
    CargaPeso: number;
    EmpresaCpfCnpj: string;
    CargaDescricao: string;
    PermitirCarregar: boolean;
    CargaMotorista: string;
    NFe: GxsdtCargaCeasaCargaNFe[];
    Pedido: GxsdtCargaCeasaCargaPedido[];
}
        
export interface GxsdtCargaCeasaFornecedor {
    FornecedorCod: number;
    FornecedorNome: string;
    FornecedorCpfCnpj: string;
    Produtos: number[];
}
        
export interface GxsdtCargaCeasaProduto {
    ProdutoCod: number;
    ProdutoDescricao: string;
}
        
export interface GxsdtCargaCeasaRetorno {
    Mensagem: string;
    Nivel: number;
}
        
export interface GxsdtCargaCeasaSinc {
    isProdutos: boolean;
    isFornecedores: boolean;
    produtosDataHora: string;
    fornecedoresDataHora: string;
}
        
export interface GxsdtCargaCeasa {
    EmpresaCodigo: number;
    CompradorCod: number;
    FilialCod: number;
    Acao: string;
    Carga: GxsdtCargaCeasaCarga[];
    Fornecedor: GxsdtCargaCeasaFornecedor[];
    Produto: GxsdtCargaCeasaProduto[];
    Retorno: GxsdtCargaCeasaRetorno[];
    Sinc: GxsdtCargaCeasaSinc;
}
        