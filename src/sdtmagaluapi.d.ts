
export interface GxsdtMagaluApireq {
    ProdutoCod: number;
    EmpresaCodigo: number;
    FilialCod: number;
    ProdutoGradeId: number;
    PedidoId: number;
    OrderStatus: string;
    acao: number;
}
        
export interface GxsdtMagaluApienvio {
    endpoint: string;
    isSku: boolean;
    isProduct: boolean;
    page: number | null;
    perPage: number | null;
    parentId: string;
    marketplaceName: string;
    level: string;
    allIn: boolean;
    marketplacePromotion: string;
    body: string;
    status: string;
    startDate: string;
    endDate: string;
    excecaoDescricao: string;
}
        
export interface GxsdtMagaluApiprodutoCategories {
    Id: string;
    Name: string;
    ParentId: string;
}
        
export interface GxsdtMagaluApiprodutoMarketplaceStructures {
    Id: string;
    Name: string;
    ParentId: string;
}
        
export interface GxsdtMagaluApiprodutoAttributes {
    Name: string;
    Value: string;
}
        
export interface GxsdtMagaluApiproduto {
    IdProduct: string;
    Name: string;
    Code: string;
    Brand: string;
    NbmOrigin: string;
    NbmNumber: string;
    WarrantyTime: string | null;
    Active: boolean;
    Categories: GxsdtMagaluApiprodutoCategories[];
    MarketplaceStructures: GxsdtMagaluApiprodutoMarketplaceStructures[];
    Attributes: GxsdtMagaluApiprodutoAttributes[];
}
        
export interface GxsdtMagaluApiskuPrice {
    ListPrice: number;
    SalePrice: number;
}
        
export interface GxsdtMagaluApiskuAttributes {
    Name: string;
    Value: string;
}
        
export interface GxsdtMagaluApisku {
    IdSku: string;
    IdSkuErp: string;
    IdProduct: string;
    Name: string;
    Description: string | null;
    Height: number;
    Width: number;
    Length: number;
    Weight: number;
    CodeEan: string;
    CodeNcm: string;
    CodeIsbn: string;
    CodeNbm: string;
    Variation: string;
    Status: boolean;
    StockQuantity: number;
    MainImageUrl: string | null;
    UrlImages: string[];
    Price: GxsdtMagaluApiskuPrice;
    Attributes: GxsdtMagaluApiskuAttributes[];
}
        
export interface GxsdtMagaluApipedidoProducts {
    IdSku: string;
    Quantity: number;
    Price: string;
    Freight: string;
    Discount: string;
    IdOrderPackage: number;
}
        
export interface GxsdtMagaluApipedidoPayments {
    Name: string;
    Installments: number;
    Amount: number;
}
        
export interface GxsdtMagaluApipedido {
    IdOrder: string;
    IdOrderMarketplace: string;
    InsertedDate: string;
    PurchasedDate: string;
    ApprovedDate: string;
    UpdatedDate: string;
    MarketplaceName: string;
    StoreName: string;
    UpdatedMarketplaceStatus: boolean;
    InsertedErp: boolean;
    EstimatedDeliveryDate: string;
    CustomerPfCpf: string;
    ReceiverName: string;
    CustomerPfName: string;
    CustomerPjCnpj: string | null;
    CustomerPjCorporatename: string;
    DeliveryAddressStreet: string;
    DeliveryAddressAdditionalInfo: string;
    DeliveryAddressZipcode: string;
    DeliveryAddressNeighborhood: string;
    DeliveryAddressCity: string;
    DeliveryAddressReference: string;
    DeliveryAddressState: string;
    DeliveryAddressNumber: string;
    TelephoneMainNumber: string;
    TelephoneSecundaryNumber: string;
    TelephoneBusinessNumber: string;
    TotalAmount: string;
    TotalTax: string;
    TotalFreight: string;
    TotalDiscount: string;
    CustomerMail: string;
    CustomerBirthDate: string;
    CustomerPjIe: string;
    OrderStatus: string;
    InvoicedNumber: string;
    InvoicedLine: number;
    InvoicedIssueDate: string;
    InvoicedKey: string;
    InvoicedDanfeXml: string;
    ShippedTrackingUrl: string | null;
    ShippedTrackingProtocol: string;
    ShippedEstimatedDelivery: string;
    ShippedCarrierDate: string;
    ShippedCarrierName: string;
    ShipmentExceptionObservation: string;
    ShipmentExceptionOccurrenceDate: string;
    DeliveredDate: string;
    ShippedCodeERP: string | null;
    BranchDocument: string;
    MarketplaceDocument: string;
    SellerName: string;
    GatewayPaymentDocument: string;
    Products: GxsdtMagaluApipedidoProducts[];
    Payments: GxsdtMagaluApipedidoPayments[];
}
        
export interface GxsdtMagaluApiretorno {
    resposta: string;
    descricao: string;
    isErro: boolean;
}
        
export interface GxsdtMagaluApiprecos {
    IdSku: string;
    ListPrice: number;
    SalePrice: number;
}
        
export interface GxsdtMagaluApiestoque {
    IdSku: string;
    Quantity: number;
}
        
export interface GxsdtMagaluApi {
    req: GxsdtMagaluApireq;
    envio: GxsdtMagaluApienvio;
    produto: GxsdtMagaluApiproduto;
    sku: GxsdtMagaluApisku;
    pedido: GxsdtMagaluApipedido;
    retorno: GxsdtMagaluApiretorno;
    precos: GxsdtMagaluApiprecos[];
    estoque: GxsdtMagaluApiestoque[];
}
        