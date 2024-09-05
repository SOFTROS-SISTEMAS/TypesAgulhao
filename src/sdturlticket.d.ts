
export interface GxsdtUrlTicketTicketMensagens {
    TicketMensagensId: number;
    TicketMensagensData: string;
    TicketMensagensMensagem: string;
    TicketMensagensStatus: string;
    TicketMensagensRemetente: string;
    TicketMensagensDestinatario: string;
    TicketMensagensErros: string;
}
        
export interface GxsdtUrlTicketTicket {
    TicketId: number;
    Mensagens: GxsdtUrlTicketTicketMensagens[];
}
        
export interface GxsdtUrlTicket {
    acao: string;
    comentario: string;
    empresacodigo: number;
    tipo: string;
    Ticket: GxsdtUrlTicketTicket[];
}
        