
export interface GxsdtRetornoBanco {
    ClienteCnpjCpf: string;
    ClienteNome: string;
    MensalidadeNossoNumero: string;
    CodRetorno: number; // Código
    DescRetorno: string; // Retorno
    DataOcorrencia: string;
    DataVencimento: string;
    ValorTitulo: number;
    ValorDespesas: number;
    ValorPago: number;
    DataDoCredito: string;
    ValorMulta: number;
    ValorJuro: number;
    ValorDescontos: number;
    DuplicataId: number;
    CodMotivo: string;
    DescMotivo: string;
}
        