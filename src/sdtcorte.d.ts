
export interface GxsdtcorteCortesMovto {
    CorteEtapaMovtoTipo: string;
    CorteEtapaMovtoData: string;
    CorteEtapaMovtoQtd: number;
}
        
export interface GxsdtcorteCortes {
    CorteId: number; // Corte
    CorteEtapaId: number;
    CorteEtapaDescricao: string;
    CorteEtapaDataEnvio: string;
    CorteEtapaQtdeEnvio: number;
    CorteEtapaDataRetorno: string;
    CorteEtapaQtdeRetorno: number;
    Cortetotalpecassaldo: number;
    corteclientecod: number;
    CorteEtapaAtual: string;
    CorteDestinoCod: number;
    CorteDestinoNome: string;
    CorteProdutocod: number;
    CorteProdutoDescricao: string;
    CorteProdutoReferencia: string;
    CorteProdutoMarcod: number;
    CorteProdutoMarDesc: string;
    CorteProdutoGrupoCod: number;
    CorteProdutoGrupoDesc: string;
    CorteProdutoSubGrupoCod: number;
    CorteProdutoSubGrupoDesc: string;
    CorteProdutoEtapaCusto: number;
    corteciclo: number;
    CorteDataEntrega: string;
    CorteEtapaBloqueado: string;
    CorteEtapaDiferenca: number;
    Movto: GxsdtcorteCortesMovto[];
}
        
export interface GxsdtcorteDestinatarioEtapasCortesdestMovto {
    CorteEtapaMovtoTipo: string;
    CorteEtapaMovtoData: string;
    CorteEtapaMovtoQtd: number;
}
        
export interface GxsdtcorteDestinatarioEtapasCortesdest {
    CorteId: number;
    CorteEtapaId: number;
    CorteEtapaDescricao: string;
    CorteEtapaDataEnvio: string;
    CorteEtapaQtdeEnvio: number;
    CorteEtapaDataRetorno: string;
    CorteEtapaQtdeRetorno: number;
    CorteTotalpecassaldo: number;
    CorteClientecod: number;
    CorteEtapaAtual: string;
    CorteDestinoCod: number;
    CorteDestinoNome: string;
    CorteProdutoCod: number;
    CorteProdutoDescricao: string;
    CorteProdutoReferencia: string;
    CortePRodutoMarcod: number;
    CorteProdutoMarDesc: string;
    CorteProdutoGrupoCod: number;
    CorteProdutoGrupoDesc: string;
    CorteProdutoSubGrupocod: number;
    CorteProdutoSubGrupodesc: string;
    CorteProdutoEtapaCusto: number;
    corteciclo: number;
    CorteDataEntrega: string;
    CorteEtapaBloqueado: string;
    CorteEtapaDiferenca: number;
    Movto: GxsdtcorteDestinatarioEtapasCortesdestMovto[];
}
        
export interface GxsdtcorteDestinatarioEtapas {
    CorteEtapaId: number;
    CorteEtapaDescricao: string;
    CorteEtapaQtdPecas: number;
    CorteEtapaQtdRet: number;
    CorteEtapaCount: number;
    Cortesdest: GxsdtcorteDestinatarioEtapasCortesdest[];
}
        
export interface GxsdtcorteDestinatario {
    CorteDestinoCod: number;
    CorteDestinoNome: string;
    CorteTotalEnviado: number;
    CorteTotalRetornado: number;
    CorteTotalCusto: number;
    CorteTotalCortes: number;
    Etapas: GxsdtcorteDestinatarioEtapas[];
}
        
export interface Gxsdtcorte {
    CorteTotalPecas: number;
    Cortes: GxsdtcorteCortes[];
    Destinatario: GxsdtcorteDestinatario[];
}
        