
export interface GxsdtColecaoPoliticasfreteGratis {
    pecas: number;
}
        
export interface GxsdtColecaoPoliticaslimiteEmbarquespecas {
    quantidade: number;
    minEmbarques: number;
    maxEmbarques: number;
}
        
export interface GxsdtColecaoPoliticaslimiteEmbarques {
    minQuantidade: number;
    maxQuantidade: number;
    pecas: GxsdtColecaoPoliticaslimiteEmbarquespecas[];
}
        
export interface GxsdtColecaoPoliticasobrigatorioFotoCliente {
    valor: number;
}
        
export interface GxsdtColecaoPoliticaslimiteVendaPrazosemInscricao {
    valor: number;
}
        
export interface GxsdtColecaoPoliticaslimiteVendaPrazo {
    valor: number;
    semInscricao: GxsdtColecaoPoliticaslimiteVendaPrazosemInscricao;
}
        
export interface GxsdtColecaoPoliticasdescontoAutomaticoprazo {
    prazoMedio: number;
    percentual: number;
}
        
export interface GxsdtColecaoPoliticasdescontoAutomatico {
    prazo: GxsdtColecaoPoliticasdescontoAutomaticoprazo[];
}
        
export interface GxsdtColecaoPoliticassolicitarAssinatura {
    valor: number;
}
        
export interface GxsdtColecaoPoliticas {
    freteGratis: GxsdtColecaoPoliticasfreteGratis;
    limiteEmbarques: GxsdtColecaoPoliticaslimiteEmbarques;
    obrigatorioFotoCliente: GxsdtColecaoPoliticasobrigatorioFotoCliente;
    limiteVendaPrazo: GxsdtColecaoPoliticaslimiteVendaPrazo;
    descontoAutomatico: GxsdtColecaoPoliticasdescontoAutomatico;
    solicitarAssinatura: GxsdtColecaoPoliticassolicitarAssinatura;
}
        