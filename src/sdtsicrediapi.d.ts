
export interface GxsdtSicrediApiAutenticacao {
    chaveTransacao: string;
    dataExpiracao: string;
}
        
export interface GxsdtSicrediApiEmissaoRetorno {
    linhaDigitavel: string;
    codigoBanco: string;
    nomeBeneficiario: string;
    enderecoBeneficiario: string;
    cpfCnpjBeneficiario: string;
    cooperativaBeneficiario: string;
    postoBeneficiario: string;
    codigoBeneficiario: string;
    dataDocumento: string;
    seuNumero: string;
    especieDocumento: string;
    aceite: string;
    dataProcessamento: string;
    nossoNumero: number;
    especie: string;
    valorDocumento: number;
    dataVencimento: string;
    nomePagador: string;
    cpfCnpjPagador: string;
    enderecoPagador: string;
    dataLimiteDesconto: string;
    valorDesconto: number;
    jurosMulta: number;
    instrucao: string;
    informativo: string;
    codigoBarra: string;
}
        
export interface GxsdtSicrediApiEmissao {
    agencia?: string; // Código da Cooperativa do beneficiário
    posto?: string; // Código do Posto do beneficiário
    cedente?: string;
    nossoNumero?: string;
    codigoPagador?: string;
    tipoPessoa?: string;
    cpfCnpj?: string;
    nome?: string;
    endereco?: string;
    cidade?: string;
    uf?: string;
    cep?: string | null;
    telefone?: string;
    email?: string;
    especieDocumento?: string;
    codigoSacadorAvalista?: string;
    seuNumero?: string;
    dataVencimento?: string; // data Vencimento DD/MM/YYYY
    valor?: number;
    tipoDesconto?: string;
    valorDesconto1?: number;
    dataDesconto1?: string;
    valorDesconto2?: number;
    dataDesconto2?: string;
    valorDesconto3?: number;
    dataDesconto3?: string;
    tipoJuros?: string;
    juros?: number;
    multas?: number;
    descontoAntecipado?: number;
    informativo?: string;
    mensagem?: string;
    codigoMensagem?: string;
    numDiasNegativacaoAuto?: number;
    Retorno: GxsdtSicrediApiEmissaoRetorno;
}
        
export interface GxsdtSicrediApiConsultaRetorno {
    seuNumero: string;
    nossoNumero: string;
    valor: string;
    valorLiquidado: string;
    dataEmissao: string;
    dataVencimento: string;
    dataLiquidacao: string;
    situacao: string;
}
        
export interface GxsdtSicrediApiConsulta {
    agencia: string;
    cedente: string;
    posto: string;
    nossoNumero: string;
    tipoData: string;
    dataInicio: string;
    dataFim: string;
    Retorno: GxsdtSicrediApiConsultaRetorno[];
}
        
export interface GxsdtSicrediApiImpressaoRetorno {
    mensagem: string;
    arquivo: string;
}
        
export interface GxsdtSicrediApiImpressao {
    agencia: string;
    cedente: string;
    nossoNumero: string;
    posto: string;
    Retorno: GxsdtSicrediApiImpressaoRetorno;
}
        
export interface GxsdtSicrediApiEditar {
    agencia: string;
    posto: string;
    cedente: string;
    nossoNumero: string;
    instrucaoComando: string;
    complementoInstrucao: string;
    valor: string;
}
        
export interface GxsdtSicrediApiRetorno {
    codigo: string;
    mensagem: string;
    parametro: string;
    acao: string;
    json: string;
    DuplicataId: number;
}
        
export interface GxsdtSicrediApipixauth {
    isHomologacao: boolean;
    expiraEm: string;
    certificado: string;
    client_secret: string;
    client_id: string;
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    jti: string;
    hook: string;
    escopo: string;
}
        
export interface GxsdtSicrediApipixemissaoAgendador {
    url: string;
    httpMethod: string | null;
    contentType: string | null;
    body: string;
}
        
export interface GxsdtSicrediApipixestruturapix {
    horario: string;
}
        
export interface GxsdtSicrediApipixestruturacalendario {
    expiracao?: number;
    criacao?: string;
}
        
export interface GxsdtSicrediApipixestruturadevedor {
    cnpj?: string | null;
    cpf?: string;
    nome?: string;
}
        
export interface GxsdtSicrediApipixestruturavalor {
    original?: string | null;
    modalidadeAlteracao?: number;
    retirada?: number;
}
        
export interface GxsdtSicrediApipixestruturainfoAdicionais {
    nome?: string;
    valor?: string;
}
        
export interface GxsdtSicrediApipixestruturaloc {
    id: number;
    location: string;
    tipoCob: string;
    criacao: string;
}
        
export interface GxsdtSicrediApipixestrutura {
    chave?: string;
    solicitacaoPagador?: string;
    status?: string;
    txid?: string;
    revisao?: number;
    location?: string;
    pixCopiaECola?: string;
    pix: GxsdtSicrediApipixestruturapix[];
    calendario: GxsdtSicrediApipixestruturacalendario;
    devedor: GxsdtSicrediApipixestruturadevedor;
    valor: GxsdtSicrediApipixestruturavalor;
    infoAdicionais: GxsdtSicrediApipixestruturainfoAdicionais[];
    loc: GxsdtSicrediApipixestruturaloc;
}
        
export interface GxsdtSicrediApipix {
    listaPixId: string[];
    webhookUrl: string | null;
    auth: GxsdtSicrediApipixauth;
    emissaoAgendador: GxsdtSicrediApipixemissaoAgendador;
    estrutura: GxsdtSicrediApipixestrutura;
}
        
export interface GxsdtSicrediApiavulsa {
    id: string;
    valor: number;
    descricao: string;
    segundos: number;
}
        
export interface GxsdtSicrediApi {
    ListaDuplicataId: number[];
    ListaPedidoId: number[];
    PedidoId: number;
    DuplicataId: number;
    Acao: string;
    Autenticacao: GxsdtSicrediApiAutenticacao;
    Emissao: GxsdtSicrediApiEmissao;
    Consulta: GxsdtSicrediApiConsulta;
    Impressao: GxsdtSicrediApiImpressao;
    Editar: GxsdtSicrediApiEditar;
    Retorno: GxsdtSicrediApiRetorno[];
    pix: GxsdtSicrediApipix;
    avulsa: GxsdtSicrediApiavulsa;
}
        