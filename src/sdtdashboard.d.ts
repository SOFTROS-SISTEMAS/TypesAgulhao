import { GxsdtHookPedido as GxSdtImportadosdtHookPedido } from './sdthookpedido'

export interface GxsdtDashboardWidgets {
    WidgetId: string;
    WidgetTitulo: string;
    WidgetDescricao: string;
    WidgetFoto: string;
    WidgetTipo: number;
    WidgetSubtipo: number;
}
        
export interface GxsdtDashboardComponentesDisplay {
    pacote: string;
    config: string;
    titulo: string;
    widget: string;
    descricao: string;
    periodo: number;
    ultimaSincronizacao: string;
    id: string;
    options: string;
    fotoUrl: string;
}
        
export interface GxsdtDashboardComponentestoken {
    ComponenteTokenId: number;
    ComponenteTokenJSON: string;
}
        
export interface GxsdtDashboardComponentesfiliais {
    ComponenteFilialCod: number;
    ComponenteFilialJSON: string;
}
        
export interface GxsdtDashboardComponentes {
    ComponenteId: number;
    WidgetId: string;
    WidgetTitulo: string;
    WidgetDescricao: string;
    WidgetFoto: string;
    ComponenteUltUpd: string;
    ComponenteDescricao: string;
    ComponentePeriodoSeg: number;
    ComponenteConfig: string;
    ComponenteTokenId: number[];
    token: GxsdtDashboardComponentestoken;
    filiais: GxsdtDashboardComponentesfiliais[];
}
        
export interface GxsdtDashboardvinculo {
    WidgetId: string;
    ComponentePeriodoSeg: number;
    ComponenteDescricao: string;
    ComponenteId: number;
    ComponenteConfig: string;
    TokenId: number;
    filiais: number[];
}
        
export interface GxsdtDashboardpainel {
    descricao: string;
    id: string;
    tokenId: number;
    publico: boolean;
}
        
export interface GxsdtDashboarddisplay {
    jwt: string | null;
    userAgent: string;
    descricao: string;
    ip: string;
    id: string;
    empresaCodigo: number;
    token: number;
    ativo: boolean;
    tokenJson: string;
}
        
export interface GxsdtDashboarddisplays {
    DisplayId: string;
    DisplayDescricao: string;
    DisplayAtivo: boolean;
    DisplayUltimaAtividade: string;
    TokenId: number;
    TokenDescricao: string;
    DisplayEmpresaCodigo: number;
}
        
export interface GxsdtDashboardtokens {
    TokenId: number;
    TokenInicio: string;
    TokenFim: string;
    TokenDescricao: string;
    TokenDispositivoJSON: string;
    Publico: boolean;
    TelasAtivas: number;
}
        
export interface GxsdtDashboardposicoes {
    id: number;
    json: string;
}
        
export interface GxsdtDashboardfilial {
    cnpj: string;
    nomeAmigavel: string;
    logo: string;
    numeroWhatsapp: string;
    numeroTelefone: string;
    email: string;
    instagram: string;
    facebook: string;
    sobre: string;
}
        
export interface GxsdtDashboard {
    acao: number;
    mensagem: string;
    autenticacaoInterna?: boolean;
    pedido: GxSdtImportadosdtHookPedido;
    Widgets: GxsdtDashboardWidgets[];
    ComponentesDisplay: GxsdtDashboardComponentesDisplay[];
    Componentes: GxsdtDashboardComponentes[];
    vinculo: GxsdtDashboardvinculo;
    painel: GxsdtDashboardpainel;
    display: GxsdtDashboarddisplay;
    displays: GxsdtDashboarddisplays[];
    tokens: GxsdtDashboardtokens[];
    posicoes: GxsdtDashboardposicoes[];
    filial: GxsdtDashboardfilial;
}
        