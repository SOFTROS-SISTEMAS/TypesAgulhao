
export interface GxR02008_SDTDuplicata {
    DuplicataId: number;
    DuplicataNumero: string;
    DuplicataEmissao: string;
    DuplicataValor: number;
    DuplicataPercComissao: number;
    ClienteDuplicataNome: number;
    ClienteDuplicataNomFan: number;
    DuplicataVlrComissao: number;
    DuplicataMovtoData: string;
    DuplicataComissaoBase: number;
    ClienteDuplicataCod: number;
    DescontoPercentual: number;
    ComissaoPercentual: number;
    DuplicataVendedorCod: number;
    DuplicataVendedorNome: string;
    isSubordinado: boolean;
    DuplicataPedidoId: number;
}
        
export interface GxR02008_SDTDebCred {
    Data: string;
    Tipo: string;
    Valor: number;
    Complemento: string;
    PessoaCod: number;
}
        
export interface GxR02008_SDTPedidos {
    PedidoId: number;
    PedidoDataFechamento: string;
    PedidoQtdPecas: number;
    PedidoClienteCod: number;
    PedidoClienteNome: string;
    PedidoClienteFantasia: number;
    PedidoVlrVenda: number;
    PedidoBaseComissao: number;
    PedidoVlrComissao: number;
    VendedorNome: string;
    PedidoValorBruto: number;
    DescontoPercentual: number;
    ComissaoPercentual: number;
    VendedorCod: number;
    PedidoSts: string;
    isSubordinado: boolean;
}
        
export interface GxR02008_SDT {
    FechamentoVendedorCod: number; // Numero do fechamento
    PessoaCod: number;
    PessoaNomeRazao: string;
    TotalPedidos: number;
    TotalPecas: number;
    ValorVendas: number;
    BaseComissao: number;
    ComissaoVendas: number;
    DebitosCreditos: number;
    TotalComissao: number;
    PercentualGeral: number;
    FiltroAno: number;
    FiltroMes: number;
    FilialCod: number;
    Duplicata: GxR02008_SDTDuplicata[];
    DebCred: GxR02008_SDTDebCred[];
    Pedidos: GxR02008_SDTPedidos[];
}
        