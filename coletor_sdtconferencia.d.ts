
export interface GxColetor_sdtConferenciaItens {
    ConferenciaChaveNFe: string; // Chave da NFe
    ConferenciaNumNFe: number; // Número da NFe
    ConferenciaItemId: number; // Código do Item
    ConferenciaItemCProd: string; // Código do Produto
    ConferenciaItemxProd: string; // Descrição do Produto
    ConferenciaItemcEANTrib: number; // EAN 13
    ConferenciaItemcEAN: number; // EAN 14
    ConferenciaItemqCom: number; // Quantidade comercial
    ConferenciaItemvUnCom: number; // Valor unitário (CEAN 14)
    ConferenciaItemUCom: string; // Unidade Comercial (CEAN 14)
    ConferenciaItemQtdConf: number;
}
    
export interface GxColetor_sdtConferencia {
    ConferenciaId: number; // Identificador da conferência
    ConferenciaStatus: number; // Status da conferência
    ConferenciaFilialCod: number; // Filial da conferência
    ConferenciaFornecedorCod: number; // Fornecedor confêrencia
    ConferenciaFornecedorNome: number; // Nome do fornecedor da conferencia
    ConferenciaFornecedorCnpj: number; // Cnpj do fornecedor da conferencia
    ConferenciaFornecedorPref: number; // Fornecedor preferencial da conferencia
    ConferenciaTransportadorCod: number; // Transportador
    ConferenciaTransportadorNom: number; // Nome do transportador
    ConferenciaDataHora: string; // Data e Hora da Conferencia
    ConferenciaIsSeg: boolean; // Segunda Conferência?
    ConferenciaUsrConfCod: number; // Usuário que fechou a conferência
    ConferenciaUsrConfNom: number; // Nome do usuário
    Itens: GxColetor_sdtConferenciaItens[];
}
    