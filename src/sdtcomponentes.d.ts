
export interface GxsdtComponentesvendasTabelaPrecoColecaotabelasPreco {
    totalPedidos: number;
    totalValor: number;
    totalPecas: number;
    corHex: string;
    tabelaPrecoDescricao: string;
}
        
export interface GxsdtComponentesvendasTabelaPrecoColecao {
    colecaoCod: number;
    colecaoNome: string;
    fData: string;
    iData: string;
    tabelasPreco: GxsdtComponentesvendasTabelaPrecoColecaotabelasPreco[];
}
        
export interface GxsdtComponentesindicadores {
    dia: string;
    diaComparado: string;
    valorLiquido: number;
    valorLiquidoPercentual: number;
    valorLiquidoAnterior: number;
    rentabilidade: number;
    rentabilidadePercentual: number;
    rentabilidadeAnterior: number;
    pecas: number;
    pecasPercentual: number;
    pecasAnterior: number;
    pedidos: number;
    pedidosPercentual: number;
    pedidosAnterior: number;
    produtos: number;
    produtosPercentual: number;
    produtosAnterior: number;
    comissao: number;
    comissaoPercentual: number;
    comissaoAnterior: number;
    custos: number;
    custosPercentual: number;
    custosAnterior: number;
    descontos: number;
    descontosPercentual: number;
    descontosAnterior: number;
    clientesAtivos: number;
    clientesAtivosPercentual: number;
    clientesAtivosAnterior: number;
    clientesComVenda: number;
    clientesComVendaPercentual: number;
    clientesComVendaAnterior: number;
    clientesNovos: number;
    clientesNovosPercentual: number;
    clientesNovosAnterior: number;
    bruto: number;
    brutoPercentual: number;
    brutoAnterior: number;
    finalDescontoPercentual: number;
    finalRentabilidadePercentual: number;
    ticketMedio: number;
    ticketMedioPercentual: number;
    ticketMedioAnterior: number;
    precoMedio: number;
    precoMedioPercentual: number;
    precoMedioAnterior: number;
}
        
export interface GxsdtComponentesproducaoEtapasetapas {
    DwProdEtapaDiaId: number;
    DwProdEtapaDiaQtdEnv: number;
    DwProdEtapaDiaQtdRet: number;
    DwProdEtapaDiaQtdRetMes: number;
    DwProdEtapaDiaQtdRetPerc: number;
    DwProdEtapaDiaDesc: string;
    DwProdEtapaDiaBenCod: number;
    DwProdEtapaDiaMarCod: number;
    DwProdEtapaDiaMarNom: string;
    DwProdEtapaDiaData: string;
    BenIntExt: string;
    EficienciaAcumulada: number;
    EtapaCorHexa: string;
    Saldo: number;
    Meta: number;
}
        
export interface GxsdtComponentesproducaoEtapas {
    EmpresaCodigo: number;
    Data: string;
    Retroativo: number;
    AgrupaMarca: boolean;
    EtapaId: number;
    etapas: GxsdtComponentesproducaoEtapasetapas[];
}
        
export interface GxsdtComponentesrankingVendedoresvendedores {
    VendedorCod: number;
    VendedorNome: string;
    VendedorQtdeVendida: number;
    ValorLiquido: number;
    NumeroVendas: number;
    PercentualFaturado: number;
    ValorFaturado: number;
    PosicaoRanking: number;
    MetaColecao: number;
    PercentualAtingidoColecao: number;
    QtdClientes: number;
}
        
export interface GxsdtComponentesrankingVendedores {
    vendedores: GxsdtComponentesrankingVendedoresvendedores[];
}
        
export interface GxsdtComponentesacompanhamentoPedidoslista {
    status: string;
    quantidade: number;
    valor: number;
}
        
export interface GxsdtComponentesacompanhamentoPedidos {
    pecasFaturadas: number;
    pecas: number;
    registros: number;
    bruto: number;
    descontos: number;
    outros: number;
    liquido: number;
    lista: GxsdtComponentesacompanhamentoPedidoslista[];
}
        
export interface GxsdtComponentes {
    vendasTabelaPrecoColecao: GxsdtComponentesvendasTabelaPrecoColecao;
    indicadores: GxsdtComponentesindicadores;
    producaoEtapas: GxsdtComponentesproducaoEtapas;
    rankingVendedores: GxsdtComponentesrankingVendedores;
    acompanhamentoPedidos: GxsdtComponentesacompanhamentoPedidos;
}
        