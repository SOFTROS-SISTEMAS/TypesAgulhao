import { GxsdtMercadoPagoHook as GxSdtImportadosdtMercadoPagoHook } from './sdtmercadopagohook'

export interface GxsdtMercadoPagoparametros {
    referencia: string;
    idPagamento: string;
    refCaixa: string;
    refLoja: string;
}
        
export interface GxsdtMercadoPagonovoLinkitems {
    title: string;
    description: string | null;
    picture_url: string;
    quantity: number;
    currency_id: string;
    unit_price: number;
}
        
export interface GxsdtMercadoPagonovoLinkpayment_methods {
    installments: number;
}
        
export interface GxsdtMercadoPagonovoLink {
    external_reference: string;
    notification_url: string;
    id?: string;
    init_point?: string;
    items: GxsdtMercadoPagonovoLinkitems[];
    payment_methods: GxsdtMercadoPagonovoLinkpayment_methods;
}
        
export interface GxsdtMercadoPagopagamentoorder {
    id: string;
    type: string;
}
        
export interface GxsdtMercadoPagopagamentofee_details {
    amount: number;
    fee_payer: string;
    type: string;
}
        
export interface GxsdtMercadoPagopagamento {
    authorization_code: string;
    date_approved: string;
    date_created: string;
    date_last_updated: string;
    external_reference: string;
    id: number;
    installments: number;
    money_release_date: string;
    operation_type: string;
    payment_method_id: string;
    payment_type_id: string;
    status: string;
    status_detail: string;
    transaction_amount: number;
    order: GxsdtMercadoPagopagamentoorder;
    fee_details: GxsdtMercadoPagopagamentofee_details[];
}
        
export interface GxsdtMercadoPagopagamentoQRcash_out {
    amount: number;
}
        
export interface GxsdtMercadoPagopagamentoQR {
    external_reference: string;
    title: string;
    description: string;
    notification_url: string;
    total_amount: number;
    cash_out: GxsdtMercadoPagopagamentoQRcash_out;
}
        
export interface GxsdtMercadoPagohook {
    id: number;
    live_mode: boolean;
    type: string;
    date_created: string;
    application_id: number;
    user_id: number;
    version: number;
    api_version: string;
    action: string;
    data: GxSdtImportadosdtMercadoPagoHook;
}
        
export interface GxsdtMercadoPagolojalocation {
    address_line?: string;
    reference: string;
    latitude: string;
    longitude: string;
    street_number: string;
    street_name: string;
    city_name: string;
    state_name: string;
}
        
export interface GxsdtMercadoPagoloja {
    id?: string;
    name: string;
    date_creation?: string;
    external_id: string;
    location: GxsdtMercadoPagolojalocation;
}
        
export interface GxsdtMercadoPagocaixaqr {
    image: string;
    template_document: string;
    template_image: string;
}
        
export interface GxsdtMercadoPagocaixa {
    name: string;
    store_id: number;
    external_store_id: string;
    external_id: string;
    id?: string;
    status?: string;
    date_created?: string;
    date_last_updated?: string;
    uuid?: string;
    user_id?: string;
    site?: string;
    qr_code?: string;
    qr: GxsdtMercadoPagocaixaqr;
}
        
export interface GxsdtMercadoPagopagamentos {
    id: string;
    valor: number;
    data: string;
}
        
export interface GxsdtMercadoPago {
    EmpresaCodigo: number;
    FilialCod: number;
    Corpo: string;
    Rota: string;
    PedidoId: number;
    DuplicataId: number;
    ValorPix: number;
    Acao: string;
    LocalCobrancaCod: number;
    ContasId: number;
    TerminalId: number;
    erros: string[];
    parametros: GxsdtMercadoPagoparametros;
    novoLink: GxsdtMercadoPagonovoLink;
    pagamento: GxsdtMercadoPagopagamento;
    pagamentoQR: GxsdtMercadoPagopagamentoQR;
    hook: GxsdtMercadoPagohook;
    loja: GxsdtMercadoPagoloja;
    caixa: GxsdtMercadoPagocaixa;
    pagamentos: GxsdtMercadoPagopagamentos[];
}
        