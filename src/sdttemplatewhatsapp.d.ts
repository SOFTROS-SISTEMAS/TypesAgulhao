
export interface GxsdtTemplateWhatsappargs {
    duplicataId: number[];
    pessoaCod: number;
    numeroPersonalizado: string;
    pedidoId: number;
    novo: boolean;
}
        
export interface GxsdtTemplateWhatsapp {
    id: number;
    numero: string;
    notificacaoId: number;
    erro: string;
    mensagens: string[];
    args: GxsdtTemplateWhatsappargs;
}
        