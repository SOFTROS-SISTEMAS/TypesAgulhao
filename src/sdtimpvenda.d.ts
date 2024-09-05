
export interface GxsdtImpVendadup {
    DuplicataNumero: string;
    DuplicataVencimento: string;
    DuplicataValor: string;
    DuplicataEspecie: string;
}
        
export interface GxsdtImpVendaitens {
    Codigo: string;
    Descricao: string;
    Aliquota: string | null;
    TipoQtde: string;
    Qtde: string | null;
    QtdeDev: string; // Devolvido
    QtdeFat: string; // Faturado
    CasasDecimais: string;
    ValorUnitario: string | null;
    ValorDesconto: string;
    ValorLiquido: string;
    TipoDesconto: string;
}
        
export interface GxsdtImpVendaformasPgto {
    FormaPgto: string;
    FormaPgtoValor: string | null;
}
        
export interface GxsdtImpVenda {
    TipoImpressao: number;
    Empresa_Razao: string;
    Empresa_Endereco: string;
    Empresa_Fone: string;
    Empresa_CNPJ: string | null;
    Consumidor_CpfCnpj: string;
    Consumidor_Nome: string;
    Consumidor_Endereco: string;
    Consumidor_Fone: string;
    Consumidor_Cidade: string;
    Consumidor_Bairro: string;
    Venda_TipoLancamento: string;
    Venda_Vendedor: string;
    Venda_PedidoId: string;
    Venda_DataHora: string;
    Venda_DebitoAtual: string;
    Venda_DiagnosticoPrimario: string;
    Venda_Obs: string;
    Fechamento_AcreDesc: string;
    Fechamento_TipoAcreDesc: string;
    Fechamento_ValorAcreDesc: string | null;
    Fechamento_MsgPromocional: string;
    Fechamento_CreditoGerado: string;
    TotalVenda_ValorBruto: string;
    TotalVenda_TotalDescontos: string;
    TotalVenda_ValorLiquido: string;
    TotalVenda_QtdePecas: string;
    isImprimirAssinatura: string;
    isImprimirViaParaTroca: string;
    dup: GxsdtImpVendadup[];
    itens: GxsdtImpVendaitens[];
    formasPgto: GxsdtImpVendaformasPgto[];
}
        