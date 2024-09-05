
export interface GxsdtSicoobApiautenticacao {
    access_token: string;
    refresh_token: string;
    scope: string;
    token_type: string;
    expires_in: number;
    gerado_em: string;
    clientId: string;
    clientSecret: string;
    tokenBasic: string;
    chaveAcesso: string;
    senha: string;
}
        
export interface GxsdtSicoobApienvio {
    sicoobEndpoint: string;
    body: string;
    contaCorrente: string;
    cooperativa: string;
    escopo: string;
}
        
export interface GxsdtSicoobApiboletospagador {
    numeroCpfCnpj: string;
    nome: string;
    endereco: string;
    bairro: string;
    cidade: string;
    cep: string | null;
    uf: string;
    email: string[];
}
        
export interface GxsdtSicoobApiboletosbeneficiarioFinal {
    numeroCpfCnpj: string;
    nome: string;
}
        
export interface GxsdtSicoobApiboletosmensagensInstrucao {
    tipoInstrucao: number;
    mensagens: string[];
}
        
export interface GxsdtSicoobApiboletosrateioCreditos {
    numeroBanco: number;
    numeroAgencia: number;
    numeroContaCorrente: number;
    contaPrincipal: boolean;
    codigoTipoValorRateio: number;
    valorRateio: number;
    codigoTipoCalculoRateio: number;
    numeroCpfCnpjTitular: string;
    nomeTitular: string;
    codigoFinalidadeTed: number;
    codigoTipoContaDestinoTed: string;
    quantidadeDiasFloat: number;
    dataFloatCredito: string;
}
        
export interface GxsdtSicoobApiboletos {
    numeroContrato: string;
    modalidade: number;
    numeroContaCorrente: string;
    especieDocumento: string;
    dataEmissao: string;
    nossoNumero: string;
    seuNumero: string;
    identificacaoBoletoEmpresa: string;
    identificacaoEmissaoBoleto: number;
    identificacaoDistribuicaoBoleto: number;
    valor: number;
    dataVencimento: string;
    dataLimitePagamento: string;
    valorAbatimento: number;
    tipoDesconto: number;
    dataPrimeiroDesconto: string;
    valorPrimeiroDesconto: number;
    dataSegundoDesconto: string;
    valorSegundoDesconto: number;
    dataTerceiroDesconto: string;
    valorTerceiroDesconto: number;
    tipoMulta: number;
    dataMulta: string;
    valorMulta: number;
    tipoJurosMora: number;
    dataJurosMora: string;
    valorJurosMora: number;
    numeroParcela: number;
    aceite: boolean;
    codigoNegativacao: number;
    numeroDiasNegativacao: number;
    codigoProtesto: number;
    numeroDiasProtesto: number;
    gerarPdf: boolean;
    pagador: GxsdtSicoobApiboletospagador;
    beneficiarioFinal: GxsdtSicoobApiboletosbeneficiarioFinal;
    mensagensInstrucao: GxsdtSicoobApiboletosmensagensInstrucao;
    rateioCreditos: GxsdtSicoobApiboletosrateioCreditos[];
}
        
export interface GxsdtSicoobApibusca {
    numeroContrato: string;
    nossoNumero: string;
    linhaDigitavel: string;
    codigoBarras: string;
    modalidade: string;
}
        
export interface GxsdtSicoobApiretorno {
    mensagem: string;
    isErro: boolean;
    corpo: string;
}
        
export interface GxsdtSicoobApi {
    listaDuplicatas: number[];
    autenticacao: GxsdtSicoobApiautenticacao;
    envio: GxsdtSicoobApienvio;
    boletos: GxsdtSicoobApiboletos[];
    busca: GxsdtSicoobApibusca;
    retorno: GxsdtSicoobApiretorno;
}
        