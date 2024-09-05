
export interface GxsdtPixlista {
    pixId: string;
    pixCopiaCola: string;
    pixRef: string;
    pixDoc: string;
    pixValor: number;
    pixDesc: string;
    pixSts: string;
    pixDataHora: string;
    pixSegundosExp: number;
    pixUltUpdate: string;
    pixContaId: number;
}
        
export interface GxsdtPix {
    acao: number;
    bancoId: number;
    contasId: number;
    integracao: number;
    pixId: string;
    pixCopiaCola: string;
    pixRef: string;
    pixDoc: string;
    pixValor: number;
    pixDesc: string;
    pixSts: string;
    pixDataHora: string;
    pixSegundosExp: number;
    pixUltUpdate: string;
    duplicataId: number;
    pedidoId: number;
    avulsaId: string;
    pagamentoMultiplo: boolean;
    maxPagamentos: number;
    segundos: number;
    mensagem: string;
    webhook: string;
    utilizaPonteWebs: boolean;
    html: number;
    lista: GxsdtPixlista[];
}
        