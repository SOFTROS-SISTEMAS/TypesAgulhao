
export interface GxsdtOfxAssinaturaStatus {
    Codigo: string;
    Descricao: string;
}
        
export interface GxsdtOfxAssinaturaInstituicao {
    Org: string;
    Fid: string;
}
        
export interface GxsdtOfxAssinatura {
    Status: GxsdtOfxAssinaturaStatus;
    Instituicao: GxsdtOfxAssinaturaInstituicao;
}
        
export interface GxsdtOfxBancoConta {
    BancoId: string;
    Numero: string;
    Agencia: string;
    Hash: string;
    Tipo: string;
}
        
export interface GxsdtOfxBancoTotais {
    Balanco: string;
    Data: string;
}
        
export interface GxsdtOfxBancoTransacoesLista {
    Id: string;
    Tipo: string;
    Data: string;
    Valor: string;
    Descricao: string;
}
        
export interface GxsdtOfxBancoTransacoes {
    DataInicio: string;
    DataFinal: string;
    Lista: GxsdtOfxBancoTransacoesLista[];
}
        
export interface GxsdtOfxBanco {
    Moeda: string | null;
    Conta: GxsdtOfxBancoConta;
    Totais: GxsdtOfxBancoTotais;
    Transacoes: GxsdtOfxBancoTransacoes;
}
        
export interface GxsdtOfx {
    tmpOfxId?: number;
    contasId?: number;
    paraContasId?: number;
    movimentoContaId: number;
    movimentoContaItemId: number;
    DuplicataId: number;
    PlanoContasOfx: string;
    isVinculado: boolean;
    isIgnorado: boolean;
    listaVinculos: string[];
    listaMovtos: string[];
    Assinatura: GxsdtOfxAssinatura;
    Banco: GxsdtOfxBanco;
}
        