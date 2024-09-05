
export interface GxsdtMapaProducaoMensalEtapa {
    EtapaId: number;
    EtapaDescricao: string;
    CorHexa: string;
    MetaAcumulada: number;
    ProducaoDiaria: number;
    ProducaoAcumulada: number;
}
        
export interface GxsdtMapaProducaoMensal {
    Data: string;
    Etapa: GxsdtMapaProducaoMensalEtapa[];
}
        