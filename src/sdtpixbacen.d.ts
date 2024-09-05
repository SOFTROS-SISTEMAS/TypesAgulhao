
export interface GxsdtPixBacencomponentesValorsaque {
    valor: string;
    modalidadeAgente: string;
}
        
export interface GxsdtPixBacencomponentesValor {
    saque: GxsdtPixBacencomponentesValorsaque;
}
        
export interface GxsdtPixBacen {
    endToEndId: string;
    txid: string;
    chave: string;
    valor: string;
    horario: string;
    infoPagador: string;
    componentesValor: GxsdtPixBacencomponentesValor;
}
        