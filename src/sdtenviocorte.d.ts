
export interface GxsdtEnvioCorteGrade {
    CorteEtapaMovtoGrdOrd: number;
    CorteEtapaMovtoGrdCorNome: string;
    CorteEtapaMovtoGrdTam: number;
    CorteEtapaMovtoGrdQtd: number;
}
        
export interface GxsdtEnvioCorteAviamentos {
    ProdutoCod: number;
    ProdutoDescricao: string;
    Quantidade: number;
}
        
export interface GxsdtEnvioCorte {
    CorteId: number;
    CorteProdutoReferencia: string;
    CorteProdutoCod: number;
    CorteProdutoDescricao: string;
    CorteEtapaId: number;
    CorteEtapaMovtoId: number;
    CorteEtapaMovtoData: string;
    CorteEtapaMovtoQtd: number;
    CorteEtapaMovtoUsr: string;
    CorteEtapaMovtoPedido: number;
    CorteEtapaMovtoBenCod: number;
    CorteEtapaMovtoBenNome: string;
    Grade: GxsdtEnvioCorteGrade;
    Aviamentos: GxsdtEnvioCorteAviamentos;
}
        