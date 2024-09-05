
export interface GxsdtEstatisticasVendedorNaoAtendido {
    PessoaCod: number;
    PessoaNomeRazao: string;
    PessoaLogradouro: string;
    PessoaEndNumero: string;
    PessoaEndComplemento: string;
    PessoaBairro: string;
    CidadeCod: number;
    CidadeNom: string;
    EstadoCod: string;
    PessoaCEP: string;
    PessoaEmail: string;
    PessoaTelefone: string;
    PessoaCelular: string;
    UltimaVendaData: string;
    UltimaVendaValor: number;
}
        
export interface GxsdtEstatisticasVendedor {
    VendedorCod: number;
    VendedorNome: string;
    VendedorQtdeVendida: number;
    ValorLiquido: number;
    NumeroVendas: number;
    MediaPorVenda: number;
    PrecoMedio: number;
    ItensPorVenda: number;
    PercentualFaturado: number;
    ValorFaturado: number;
    PosicaoRanking: number;
    MetaColecao: number;
    MetaTipo: string;
    PercentualAtingidoColecao: number;
    QtdClientes: number;
    Datahora: string;
    NaoAtendido: GxsdtEstatisticasVendedorNaoAtendido[];
}
        