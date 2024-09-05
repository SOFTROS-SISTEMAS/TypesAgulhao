
export interface GxsdtMelhorEnvioenvioProdutosfrom {
    postal_code: string;
}
        
export interface GxsdtMelhorEnvioenvioProdutosto {
    postal_code: string;
}
        
export interface GxsdtMelhorEnvioenvioProdutosproducts {
    id: string;
    width: number;
    height: number;
    length: number;
    weight: number;
    insurance_value: number | null;
    quantity: number;
}
        
export interface GxsdtMelhorEnvioenvioProdutosoptions {
    receipt: boolean;
    own_hand: boolean;
}
        
export interface GxsdtMelhorEnvioenvioProdutos {
    services: string;
    from: GxsdtMelhorEnvioenvioProdutosfrom;
    to: GxsdtMelhorEnvioenvioProdutosto;
    products: GxsdtMelhorEnvioenvioProdutosproducts[];
    options: GxsdtMelhorEnvioenvioProdutosoptions;
}
        
export interface GxsdtMelhorEnvioenvioPacotefrom {
    postal_code: string;
}
        
export interface GxsdtMelhorEnvioenvioPacoteto {
    postal_code: string;
}
        
export interface GxsdtMelhorEnvioenvioPacotepackage {
    height: number;
    width: number;
    length: number;
    weight: number;
}
        
export interface GxsdtMelhorEnvioenvioPacoteoptions {
    insurance_value: number;
    receipt: boolean;
    own_hand: boolean;
}
        
export interface GxsdtMelhorEnvioenvioPacote {
    services: string;
    from: GxsdtMelhorEnvioenvioPacotefrom;
    to: GxsdtMelhorEnvioenvioPacoteto;
    package: GxsdtMelhorEnvioenvioPacotepackage;
    options: GxsdtMelhorEnvioenvioPacoteoptions;
}
        
export interface GxsdtMelhorEnviotransportadorascompany {
    id: number;
    name: string;
    picture: string;
}
        
export interface GxsdtMelhorEnviotransportadorasdelivery_range {
    min: number;
    max: number;
}
        
export interface GxsdtMelhorEnviotransportadorascustom_delivery_range {
    min: number;
    max: number;
}
        
export interface GxsdtMelhorEnviotransportadoraspackagesdimensions {
    height: number;
    width: number;
    length: number;
}
        
export interface GxsdtMelhorEnviotransportadoraspackagesproducts {
    id: string;
    quantity: number;
}
        
export interface GxsdtMelhorEnviotransportadoraspackages {
    price: string;
    discount: string;
    format: string;
    weight: string;
    insurance_value: string;
    dimensions: GxsdtMelhorEnviotransportadoraspackagesdimensions;
    products: GxsdtMelhorEnviotransportadoraspackagesproducts[];
}
        
export interface GxsdtMelhorEnviotransportadoras {
    id: number;
    name: string;
    price: string;
    custom_price: string;
    discount: string;
    company: GxsdtMelhorEnviotransportadorascompany;
    delivery_range: GxsdtMelhorEnviotransportadorasdelivery_range;
    custom_delivery_range: GxsdtMelhorEnviotransportadorascustom_delivery_range;
    packages: GxsdtMelhorEnviotransportadoraspackages[];
}
        
export interface GxsdtMelhorEnviofiltros {
    PedidoId: number;
    partida: string;
    chegada: string;
    busca: string;
}
        
export interface GxsdtMelhorEnviocompraEtiquetafrom {
    name: string;
    phone: string | null;
    email: string;
    document: string;
    company_document: string;
    state_register: string;
    address: string | null;
    complement: string;
    number: string;
    district: string;
    city: string;
    country_id: string;
    postal_cod: string;
    note: string;
}
        
export interface GxsdtMelhorEnviocompraEtiquetato {
    name: string;
    phone: string | null;
    email: string;
    document: string;
    company_document: string;
    state_register: string;
    address: string | null;
    complement: string;
    number: string;
    district: string;
    city: string;
    state_abbr: string;
    country_id: string;
    postal_code: string;
    note: string;
}
        
export interface GxsdtMelhorEnviocompraEtiquetaproducts {
    name: string;
    quantity: number;
    unitary_value: number;
}
        
export interface GxsdtMelhorEnviocompraEtiquetavolume {
    height: number;
    width: number;
    length: number;
    weight: number;
}
        
export interface GxsdtMelhorEnviocompraEtiquetaoptionsinvoice {
    key: string;
}
        
export interface GxsdtMelhorEnviocompraEtiquetaoptionstags {
    tag: string;
    url: string | null;
}
        
export interface GxsdtMelhorEnviocompraEtiquetaoptions {
    insurance_value: number;
    receipt: boolean;
    own_hand: boolean;
    reserve: boolean;
    non_commercial: boolean;
    platform: string;
    invoice: GxsdtMelhorEnviocompraEtiquetaoptionsinvoice;
    tags: GxsdtMelhorEnviocompraEtiquetaoptionstags[];
}
        
export interface GxsdtMelhorEnviocompraEtiqueta {
    service: number;
    agency: number;
    from: GxsdtMelhorEnviocompraEtiquetafrom;
    to: GxsdtMelhorEnviocompraEtiquetato;
    products: GxsdtMelhorEnviocompraEtiquetaproducts[];
    volume: GxsdtMelhorEnviocompraEtiquetavolume[];
    options: GxsdtMelhorEnviocompraEtiquetaoptions;
}
        
export interface GxsdtMelhorEnviocompraEtiquetaRetorno {
    id: string;
    protocol: string;
    price: number;
    delivery_min: number;
    delivery_max: number;
    status: string;
    insurance_value: number;
}
        
export interface GxsdtMelhorEnviocheckoutEtiquetapurchase {
    id: string;
    protocol: string;
    total: number;
    status: string;
}
        
export interface GxsdtMelhorEnviocheckoutEtiquetaconciliation_groupconciliations {
    tracking: string;
}
        
export interface GxsdtMelhorEnviocheckoutEtiquetaconciliation_group {
    conciliations: GxsdtMelhorEnviocheckoutEtiquetaconciliation_groupconciliations[];
}
        
export interface GxsdtMelhorEnviocheckoutEtiqueta {
    purchase: GxsdtMelhorEnviocheckoutEtiquetapurchase;
    conciliation_group: GxsdtMelhorEnviocheckoutEtiquetaconciliation_group;
}
        
export interface GxsdtMelhorEnviosaldo {
    balance: number;
    link: string;
}
        
export interface GxsdtMelhorEnvioetiquetasfrom {
    name: string;
    phone: string | null;
    email: string;
    document: string;
    company_document: string;
    state_register: string;
    postal_code: string;
    address: string | null;
    location_number: string;
    complement: string;
    district: string;
    city: string;
    state_abbr: string;
    country_id: string;
    note: string;
}
        
export interface GxsdtMelhorEnvioetiquetasto {
    name: string;
    phone: string | null;
    email: string;
    document: string;
    company_document: string;
    state_register: string;
    postal_code: string;
    address: string;
    location_number: string;
    complement: string;
    district: string;
    city: string;
    state_abbr: string;
    country_id: string;
    note: string;
}
        
export interface GxsdtMelhorEnvioetiquetasservicecompany {
    id: number;
    name: string;
    picture: string;
}
        
export interface GxsdtMelhorEnvioetiquetasservice {
    id: number;
    name: string;
    type: string;
    range: string;
    company: GxsdtMelhorEnvioetiquetasservicecompany;
}
        
export interface GxsdtMelhorEnvioetiquetasagency {
    id: number;
    name: string;
    initials: string;
    code: string;
    company_name: string;
    address: string;
    phone: string;
    contact: string;
}
        
export interface GxsdtMelhorEnvioetiquetasvolumes {
    id: number;
    height: string;
    width: string;
    length: string;
    diameter: string;
    weight: string;
    format: string;
}
        
export interface GxsdtMelhorEnvioetiquetas {
    id: string;
    protocol: string;
    price: number;
    insurance_value: number;
    status: string;
    billed_weight: number;
    collect: boolean;
    collect_scheduled_at: string;
    tracking: string;
    paid_at: string;
    generated_at: string;
    posted_at: string;
    delivered_at: string;
    canceled_at: string;
    suspended_at: string;
    expired_at: string;
    from: GxsdtMelhorEnvioetiquetasfrom;
    to: GxsdtMelhorEnvioetiquetasto;
    service: GxsdtMelhorEnvioetiquetasservice;
    agency: GxsdtMelhorEnvioetiquetasagency;
    volumes: GxsdtMelhorEnvioetiquetasvolumes[];
}
        
export interface GxsdtMelhorEnvio {
    empresaCodigo: number;
    filialCod: number;
    erroMensagem: string;
    acao: number;
    envioProdutos: GxsdtMelhorEnvioenvioProdutos;
    envioPacote: GxsdtMelhorEnvioenvioPacote;
    transportadoras: GxsdtMelhorEnviotransportadoras[];
    filtros: GxsdtMelhorEnviofiltros;
    compraEtiqueta: GxsdtMelhorEnviocompraEtiqueta;
    compraEtiquetaRetorno: GxsdtMelhorEnviocompraEtiquetaRetorno;
    checkoutEtiqueta: GxsdtMelhorEnviocheckoutEtiqueta;
    saldo: GxsdtMelhorEnviosaldo;
    etiquetas: GxsdtMelhorEnvioetiquetas[];
}
        