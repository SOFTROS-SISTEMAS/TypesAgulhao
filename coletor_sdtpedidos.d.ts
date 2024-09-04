
export interface GxColetor_sdtPedidosLog {
    PedidoLogId: number; // Pedido Log Id
    PedidoLogData: string; // Pedido Log Data
    PedidoLogHora: string; // Pedido Log Hora
    PedidoLogUsuario: string; // Pedido Log Usuario
    PedidoLogTipo: string; // Pedido Log Tipo
    PedidoLogObs: string; // Pedido Log Obs
}
    
export interface GxColetor_sdtPedidosItens {
    PedidoItemId: number; // Pedido Item Id
    produtoCod: number; // produto Cod
    ProdutoGradeId: number; // Produto Grade Id
    PedidoItemGradeQtde: number; // Pedido Item Grade Qtde
    PedidoItemGradeQtdeDevolvida: number; // Pedido Item Grade Qtde Devolvida
    PedidoItemValorUnitario: number; // Pedido Item Valor Unitario
    PedidoItemValorTabela: number;
    ProdutoReferencia: string;
    ProdutoDescricao: string;
    ProdutoGradeNumero: string;
    ProdutoAcao: string;
    ProdutoGradeBarras: number;
    PedidoItemGradeEmb: number;
    PedidoItemDescontoPerc: number;
    PedidoItemDescontoDinheiro: number;
    PedidoItemComplemento: string;
    PedidoItemPermDscGlobal: number;
    PedidoItemIPI: number;
}
    
export interface GxColetor_sdtPedidosFormasPgto {
    PedidoFormaPgtoCod: number; // Pedido Forma Pgto Cod
    PedidoFormaPgtoValor: number; // Pedido Forma Pgto Valor
}
    
export interface GxColetor_sdtPedidosTabelaPrecoInfo {
    TabelaPrecoCod: number;
    TabelaPrecoDescricao: string;
    TabelaPrecoCor: string;
}
    
export interface GxColetor_sdtPedidosEmbarques {
    PedidoEmbarqueData: string;
    PedidoEmbarqueQtde: number;
}
    
export interface GxColetor_sdtPedidos {
    EmpresaChaveApp: number;
    PedidoId: number;
    PedidoTabelaPreco: number; // Tabela de Preco
    PedidoObservacoes: string; // Pedido Observacoes
    PedidoTipo: string; // Pedido Tipo
    PedidoPrevisaoEntrega: string; // Pedido Previsao Entrega
    PedidoHoraFechamento: string; // Pedido Hora Fechamento
    PedidoDataFechamento: string; // Pedido Data Fechamento
    PedidoHoraEmissao: string; // Pedido Hora Emissao
    PedidoDataEmissao: string; // Pedido Data Emissao
    PedidoJustCanc: string; // Pedido Just Canc
    PedidoSaidaStatus: number; // Pedido Saida Status
    PedidoStatus: string; // Pedido Status
    PedidoPrazoCod: number; // Pedido Prazo Cod
    FilialCod: number; // Cód. Filial
    PedidoVendedorCod: number; // Pedido Vendedor Cod
    PedidoVendedorNome: number;
    PedidoCliCod: number; // Pedido Cli Cod
    PedidoColecaoCod: number; // Pedido Colecao Cod
    UltUpdPedido: string;
    PedidoNovoCod: number;
    PedidoGuiaCod: number;
    PedidoIsTroca: boolean;
    PedidoDiagnostico: string;
    PedidoDescontoPerc: number; // Pedido Desconto Perc
    PedidoDescontoDinheiro: number; // Pedido Desconto Dinheiro
    PessoaNomeRazao: string;
    QtdItens: number;
    Valor: number;
    PedidoPercFaturamento: number;
    TipoLancamentoCod: number;
    PedidoStatusFinanceiro: string; // Financeiro do pedido
    PedidoDescontoDin: number;
    PessoaCpfCnpj: string;
    CidadeNome: string;
    EstadoCod: string;
    TabelaPrecoDescricao: string;
    PedidoColunaPreco: number;
    LocalCobrancaCod: number;
    LocalCobrancaDescricao: string;
    PedidoComissao: number;
    PedidoPrazos: string;
    PedidoComissaoRcbto: number;
    PedidoValorBruto: number;
    PedidoDescontoPerc2: number;
    PedidoDescontoPerc3: number;
    PedidoCoordenadas: string;
    PedidoObsInterna: string;
    PedidoDataAprovado: string;
    PedidoClienteNome: number;
    PedidoDescontoIcmsDes: number;
    PedidoDescontoImpostos: number;
    PedidoValorFrete: number;
    PedidoValorSeguro: number;
    PedidoValorOutros: number;
    PedidoValorST: number;
    Mensagem: string;
    PedidoEntregaJSON: string;
    PedidoJsonAux: string;
    Log: GxColetor_sdtPedidosLog[];
    Itens: GxColetor_sdtPedidosItens[];
    FormasPgto: GxColetor_sdtPedidosFormasPgto[];
    TabelaPrecoInfo: GxColetor_sdtPedidosTabelaPrecoInfo;
    Embarques: GxColetor_sdtPedidosEmbarques[];
}
    