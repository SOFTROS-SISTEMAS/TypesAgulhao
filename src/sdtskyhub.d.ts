
export interface GxsdtSkyhubproductcategories {
    code: string;
    name: string;
}
        
export interface GxsdtSkyhubproductspecifications {
    key: string;
    value: string;
}
        
export interface GxsdtSkyhubproductvariationsespecifications {
    key: string;
    value: string;
}
        
export interface GxsdtSkyhubproductvariations {
    sku: string;
    qty: number;
    ean: string;
    images: string[];
    especifications: GxsdtSkyhubproductvariationsespecifications[];
}
        
export interface GxsdtSkyhubproduct {
    sku: string;
    name: string;
    description: string | null;
    status: string;
    price: number;
    promotional_price: number;
    cost: number;
    weight: number;
    height: number;
    width: number;
    length: number;
    brand: string;
    nbm: string;
    images: string[];
    variation_attributes: string[];
    categories: GxsdtSkyhubproductcategories[];
    specifications: GxsdtSkyhubproductspecifications[];
    variations: GxsdtSkyhubproductvariations[];
}
        
export interface GxsdtSkyhubenvio {
    empresaCodigo: number;
    filialCod: number;
    erro: string | null;
    body: string;
    rota: string;
    metodo: string;
}
        
export interface GxsdtSkyhubretorno {
    statusCode: number;
    errDescription: string;
    body: string;
}
        
export interface GxsdtSkyhubcategories {
    code: string;
    name: string;
}
        
export interface GxsdtSkyhubcategory {
    code: string;
    name: string;
}
        
export interface GxsdtSkyhubvariationspecifications {
    value: string;
    key: string;
}
        
export interface GxsdtSkyhubvariation {
    ean: string;
    qty: string;
    sku: string;
    images: string[];
    specifications: GxsdtSkyhubvariationspecifications;
}
        
export interface GxsdtSkyhubparametros {
    ProdutoCod: number;
}
        
export interface GxsdtSkyhub {
    product: GxsdtSkyhubproduct;
    envio: GxsdtSkyhubenvio;
    retorno: GxsdtSkyhubretorno;
    categories: GxsdtSkyhubcategories[];
    category: GxsdtSkyhubcategory;
    variation: GxsdtSkyhubvariation;
    parametros: GxsdtSkyhubparametros;
}
        