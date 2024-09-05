
export interface GxsdtWhatsappstatus {
    instancia: boolean;
    numero: string;
    os: string;
    nome: string;
    versao: string;
    foto: string;
    estado: string;
    qrcode: string;
    cache: boolean;
    expiraEm: string;
}
        
export interface GxsdtWhatsappdispositivosmensagens {
    texto: string;
    link: boolean;
    id: string;
    timestamp: number;
}
        
export interface GxsdtWhatsappdispositivos {
    id: number;
    numero: string;
    erro: string;
    contato: string;
    foto: string;
    mensagens: GxsdtWhatsappdispositivosmensagens[];
}
        
export interface GxsdtWhatsapp {
    acao: number;
    pessoaCod: number;
    empresaCodigo: number;
    chaveApp: number;
    jwt?: string;
    sub?: string;
    notificacaoId: number;
    numero: string;
    partirDe: string;
    mensagemId: string;
    removerAnterior: boolean;
    status: GxsdtWhatsappstatus;
    dispositivos: GxsdtWhatsappdispositivos[];
}
        