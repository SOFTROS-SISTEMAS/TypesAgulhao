
export interface GxsdtAlteraUninfeDadosEmpresa {
    CNPJ?: string | null;
    Servico?: number;
    Nome?: string;
}
        
export interface GxsdtAlteraUninfe {
    CertificadoArquivo?: string;
    CertificadoSenha?: string;
    PastaXmlEnvio?: string;
    PastaXmlRetorno?: string;
    PastaXmlEnviado?: string;
    PastaXmlErro?: string | null;
    PastaBackup?: string;
    PastaXmlEmLote?: string;
    PastaValidar?: string;
    UnidadeFederativaCodigo?: number;
    AmbienteCodigo?: number | null;
    tpEmis?: number;
    UsaCertificado?: boolean;
    CertificadoInstalado?: boolean;
    DiasLimpeza?: number;
    TempoConsulta?: number;
    Servico?: string;
    CriaPastasAutomaticamente?: boolean;
    GravarEventosNaPastaEnviadosNFe?: boolean;
    GravarEventosCancelamentoNaPastaEnviadosNFe?: boolean;
    IndSinc?: boolean; // Indicador de processo sincrono
    IdentificadorCSC?: string;
    TokenCSC?: string;
    ArqNSU: boolean;
    RespTecCNPJ?: string | null;
    RespTecXContato?: string;
    RespTecEmail?: string;
    RespTecTelefone?: string;
    RespTecIdCSRT?: string;
    RespTecCSRT?: string;
    DadosEmpresa: GxsdtAlteraUninfeDadosEmpresa;
}
        