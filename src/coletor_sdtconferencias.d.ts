
export interface GxColetor_sdtConferenciasProdutosConfItemFracConfItemFracCol {
    ConfItemFracItm: number;
    ConfItemFracQtdCol: number;
}
    
export interface GxColetor_sdtConferenciasProdutosConfItemFrac {
    ConfItemFracProCod: number; // Conf Item Frac Pro Cod
    ConfItemFracProNom: string; // Conf Item Frac Pro Nom
    ConfItemFracQtd: number; // Qtde a ser coletada
    ConfItemFracCol: GxColetor_sdtConferenciasProdutosConfItemFracConfItemFracCol[];
}
    
export interface GxColetor_sdtConferenciasProdutosEANTrib {
    ConferenciaItemcEANTrib: number; // EAN 13
    ConferenciaItemEanCol: boolean;
}
    
export interface GxColetor_sdtConferenciasProdutos {
    ConferenciaChaveNFe: string;
    ConferenciaNumNFe: number;
    ConferenciaItemQtdConf: number; // Quantidade conferida
    ConferenciaItemcEAN: number; // EAN 14
    ConferenciaItemqCom: number; // Quantidade comercial
    ConferenciaItemvUnCom: number; // Valor unitário (CEAN 14)
    ConferenciaItemUCom: string; // Unidade Comercial (CEAN 14)
    ConferenciaItemxProd: string; // Descrição do Produto
    ConferenciaItemCProd: string; // Código do Produto
    ConferenciaItemProCod: number;
    ConferenciaItemProGrdId: number;
    ConferenciaItemQtdProd: number;
    ConferenciaItemQtdEmb: number;
    ConferenciaItemExigeVenc: boolean;
    ConferenciaItemVenc: string;
    ConferenciaItemFabric: string;
    ConferenciaItemConfPor: string;
    ConferenciaItemId: number; // Código do Item
    ConfItemFrac: GxColetor_sdtConferenciasProdutosConfItemFrac[];
    EANTrib: GxColetor_sdtConferenciasProdutosEANTrib[];
}
    
export interface GxColetor_sdtConferencias {
    ConferenciaId: number;
    ConferenciaStatus: number; // Status da conferência
    ConferenciaFilialCod: number;
    ConferenciaFornecedorCod: number;
    ConferenciaFornecedorNome: string;
    ConferenciaFornecedorCnpj: string;
    ConferenciaFornecedorPref: number;
    ConferenciaTransportadorCod: number;
    ConferenciaTransportadorNom: string;
    ConferenciaDataHora: string;
    ConferenciaIsSeg: boolean;
    ConferenciaUsrConfCod: number;
    ConferenciaUsrConfNom: string;
    Produtos: GxColetor_sdtConferenciasProdutos[];
}
    