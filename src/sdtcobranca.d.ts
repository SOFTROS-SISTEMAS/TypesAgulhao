
export interface GxsdtCobrancafiltros {
    empresaCodigo: number;
    filialCod: number;
    pessoaCod: number;
    localCobrancaCod: number;
    dataInicio: string;
    dataFinal: string;
    prometeuPara: boolean;
    cobradaHoje: boolean;
    vendedorCod: number;
    mensagemPersonalizada: string;
}
        
export interface GxsdtCobrancaclientesduplicatas {
    duplicataId: number;
    duplicataNumero: string;
    duplicataNossoNumero: string;
    duplicataValor: number;
    duplicataEmissao: string;
    duplicataVencimento: string;
    duplicataEspecie: string;
    duplicataSaldo: number;
    duplicataTotalPago: number;
    duplicataDocumento: string;
    localCobrancaCod: number;
    localCobrancaDescricao: string;
}
        
export interface GxsdtCobrancaclientes {
    pessoaCod: number;
    pessoaNomeRazao: string;
    pessoaNomeFantasia: string;
    totalDuplicatas: number;
    qtdeTitulos: number;
    totalPago: number;
    totalSaldoEmAberto: number;
    pessoaTelefone: string;
    pessoaCelular: string;
    pessoaEmail: string;
    mensagem: string;
    duplicatas: GxsdtCobrancaclientesduplicatas[];
}
        
export interface GxsdtCobrancacobranca {
    duplicatas: number[];
    contato: string;
    observacao: string;
    prometeuPara: string;
}
        
export interface GxsdtCobranca {
    filtros: GxsdtCobrancafiltros;
    clientes: GxsdtCobrancaclientes[];
    cobranca: GxsdtCobrancacobranca;
}
        