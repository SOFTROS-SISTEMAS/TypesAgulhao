
export interface GxsdtProdutoIntegracaoNetshoesattributes {
    name: string;
    values: string[];
}
        
export interface GxsdtProdutoIntegracaoNetshoes {
    sincronizar: boolean;
    isProdutoAtivo: boolean;
    department: string;
    departamentCod: number;
    productType: string;
    productTypeCod: number;
    attributes: GxsdtProdutoIntegracaoNetshoesattributes[];
}
        
export interface GxsdtProdutoIntegracaoNuvemshop {
    sincronizar: boolean;
    isProdutoAtivo: boolean;
    ProdutoEcomSeoDesc: string;
    ProdutoEcomSeoTitle: string;
    ProdutooEcomTags: string;
}
        
export interface GxsdtProdutoIntegracaoWooCommerce {
    sincronizar: boolean;
    isProdutoAtivo: boolean;
    descricaoCurta: string;
}
        
export interface GxsdtProdutoIntegracaoMagaluCategories {
    Id: string;
    Name: string;
    ParentId: string;
}
        
export interface GxsdtProdutoIntegracaoMagaluAttributes {
    Name: string;
    Value: string;
}
        
export interface GxsdtProdutoIntegracaoMagaluMarketplaceStructures {
    Id: string;
    Name: string;
    ParentId: string;
}
        
export interface GxsdtProdutoIntegracaoMagalu {
    isProdutoAtivo: boolean;
    sincronizar: boolean;
    garantia: number;
    Categories: GxsdtProdutoIntegracaoMagaluCategories[];
    Attributes: GxsdtProdutoIntegracaoMagaluAttributes[];
    MarketplaceStructures: GxsdtProdutoIntegracaoMagaluMarketplaceStructures[];
}
        
export interface GxsdtProdutoIntegracaoSkyhub {
    sincronizar: boolean;
    isProdutoAtivo: boolean;
}
        
export interface GxsdtProdutoIntegracaoTiny {
    sincronizar: boolean;
    isProdutoAtivo: boolean;
}
        
export interface GxsdtProdutoIntegracaoVendiZap {
    sincronizar: boolean;
    isProdutoAtivo: boolean;
    codigo: string;
    destaque: boolean;
}
        
export interface GxsdtProdutoIntegracao {
    Netshoes: GxsdtProdutoIntegracaoNetshoes;
    Nuvemshop: GxsdtProdutoIntegracaoNuvemshop;
    WooCommerce: GxsdtProdutoIntegracaoWooCommerce;
    Magalu: GxsdtProdutoIntegracaoMagalu;
    Skyhub: GxsdtProdutoIntegracaoSkyhub;
    Tiny: GxsdtProdutoIntegracaoTiny;
    VendiZap: GxsdtProdutoIntegracaoVendiZap;
}
        