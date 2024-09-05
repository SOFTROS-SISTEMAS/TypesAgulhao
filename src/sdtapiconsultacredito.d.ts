
export interface GxsdtApiConsultaCreditodetalharConsulta {
    descricao: string;
    valor: number;
    valorJuridico: number;
}
        
export interface GxsdtApiConsultaCredito {
    acao: number;
    filialCod: number;
    documento: string;
    codigoConsulta: number;
    uf: string;
    pessoaCod: number;
    integracao: number;
    sucesso: string;
    erro: string | null;
    detalharConsulta: GxsdtApiConsultaCreditodetalharConsulta;
}
        