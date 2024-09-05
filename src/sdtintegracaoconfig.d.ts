
export interface GxsdtIntegracaoConfigNuvemShop {
    authentication: string;
    filialCod: number;
}
        
export interface GxsdtIntegracaoConfigWooCommerceattributes {
    corId: string;
    tamId: string;
    numId: string;
}
        
export interface GxsdtIntegracaoConfigWooCommerce {
    consumerKey: string;
    consumerSecret: string;
    site: string;
    attributes: GxsdtIntegracaoConfigWooCommerceattributes;
}
        
export interface GxsdtIntegracaoConfigNetshoes {
    clientId: string;
    clienteSecret: string;
    accessToken: string;
}
        
export interface GxsdtIntegracaoConfigImgur {
    clientId: string;
    clientSecret: string;
}
        
export interface GxsdtIntegracaoConfigMagalu {
    Authorization: string;
}
        
export interface GxsdtIntegracaoConfigSkyhub {
    userEmail: string;
    apiKey: string;
    accountmanagerKey: string;
}
        
export interface GxsdtIntegracaoConfigConfiguracao {
    GrupoCod: number;
    SubGrupoCod: number;
    SubSubGrupoCod: number;
    ProdutoCod: number;
    MarcaCod: number;
    CorCod: number;
    ProdutoEcomNome: string;
    ProdutoEcomDesc: string;
    ProdutoAltura: number;
    ProdutoLargura: number;
    ProdutoComprimento: number;
    ProdutoPeso: number;
    AtributoIntegracao: string | null;
    isSomenteJson: boolean;
}
        
export interface GxsdtIntegracaoConfigMelhorEnvio {
    clientId: string;
    clientSecret: string;
    callback: string;
    refreshToken: string;
    token: string;
    tokenVidaUtil: number;
    geradoEm: string;
    host: string;
    code: string;
}
        
export interface GxsdtIntegracaoConfigSpc {
    login: string;
    senha: string;
    isHomologacao: boolean;
}
        
export interface GxsdtIntegracaoConfigSicredi {
    pixClientId: string;
    pixClientSecret: string;
    pixCertificado: string;
    pixHook: string;
    pixBancoId: number;
}
        
export interface GxsdtIntegracaoConfigTiny {
    TokenAPI: string;
}
        
export interface GxsdtIntegracaoConfigVendiZap {
    clientId: string;
    clientSecret: string;
}
        
export interface GxsdtIntegracaoConfig {
    NuvemShop: GxsdtIntegracaoConfigNuvemShop;
    WooCommerce: GxsdtIntegracaoConfigWooCommerce;
    Netshoes: GxsdtIntegracaoConfigNetshoes;
    Imgur: GxsdtIntegracaoConfigImgur;
    Magalu: GxsdtIntegracaoConfigMagalu;
    Skyhub: GxsdtIntegracaoConfigSkyhub;
    Configuracao: GxsdtIntegracaoConfigConfiguracao;
    MelhorEnvio: GxsdtIntegracaoConfigMelhorEnvio;
    Spc: GxsdtIntegracaoConfigSpc;
    Sicredi: GxsdtIntegracaoConfigSicredi;
    Tiny: GxsdtIntegracaoConfigTiny;
    VendiZap: GxsdtIntegracaoConfigVendiZap;
}
        