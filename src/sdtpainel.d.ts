import { GxGoogleChart as GxSdtImportadoGoogleChart } from './googlechart'
import { GxsdtComunicados as GxSdtImportadosdtComunicados } from './sdtcomunicados'

export interface GxsdtPainelempresa {
    EmpresaCodigo: number;
    EmpresaCpfCnpj: string;
    EmpresaNome: string;
}
        
export interface GxsdtPainelretorno {
    mensagem: string;
    nivel: number; // nivel 2-Aviso, 1-Sucesso, 0-Erro
}
        
export interface GxsdtPainelgraficosFluxoCaixa {
    Data: string;
    TotalPagar: number;
    TotalPagarReal: number;
    TotalReceber: number;
    TotalReceberReal: number;
    SaldoPrevisto: number;
    SaldoReal: number;
}
        
export interface GxsdtPainelgraficosRanking {
    ItemDescricao: string;
    ItemComplemento: string;
    ItemValor: string | null;
    ItemCorHex: string;
}
        
export interface GxsdtPainelgraficosLegendasCortesLegendas {
    LegendaCod: number;
    LegendaDescricao: string;
    LegendaCorHexa: string;
}
        
export interface GxsdtPainelgraficosLegendasCortes {
    CorteId: number;
    CorteProdutoReferencia: string;
    CorteProdutoDescricao: number;
    CortePrevisaoEntrega: string;
    CorteTotalPecas: number;
    OperacaoDescricao: string;
    Legendas: GxsdtPainelgraficosLegendasCortesLegendas[];
}
        
export interface GxsdtPainelgraficos {
    Nome: string;
    Posicao: string; // Posicao / V- Vertical, H- Horizontal
    Prioridade: string | null; // Prioridade do Pedido
    Tipo: string;
    ultimaAtualizacao: string;
    GoogleChart: GxSdtImportadoGoogleChart;
    Observacao: string;
    FluxoCaixa: GxsdtPainelgraficosFluxoCaixa[];
    Ranking: GxsdtPainelgraficosRanking[];
    LegendasCortes: GxsdtPainelgraficosLegendasCortes[];
}
        
export interface GxsdtPainelcalendario {
    linkLembrete: string;
    linkAniversariantes: string;
    linkAPagar: string;
    linkAReceber: string;
    lembretes: string[];
    contasPagar: string[];
    contasReceber: string[];
    aniversariantes: string[];
}
        
export interface GxsdtPainel {
    TokenId: number;
    retornaDados: boolean;
    data: string;
    isMensal: boolean;
    filiais: number[];
    acoes: string[];
    sdtComunicados: GxSdtImportadosdtComunicados;
    empresa: GxsdtPainelempresa;
    retorno: GxsdtPainelretorno;
    graficos: GxsdtPainelgraficos[];
    calendario: GxsdtPainelcalendario;
}
        