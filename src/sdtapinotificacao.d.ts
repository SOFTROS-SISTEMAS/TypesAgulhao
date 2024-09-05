
export interface GxsdtApiNotificacaoCorpo {
    PedidoId: number;
    PessoaCod: number;
}
        
export interface GxsdtApiNotificacao {
    Id: number;
    Mensagem: string;
    Cabecalho: string;
    Destinatarios: string[];
    Tipo: string;
    Imagem: string;
    Cor: string;
    Template: string;
    Agendar: boolean;
    Comentario: string;
    DeviceType: number;
    Data: string;
    HtmlEmail: string;
    Anexos: string[];
    Pessoas: number[];
    PessoasTmp: string[];
    Corpo: GxsdtApiNotificacaoCorpo;
}
        