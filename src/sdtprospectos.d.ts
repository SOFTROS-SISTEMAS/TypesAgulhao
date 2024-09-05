
export interface GxsdtProspectoscliente {
    EstadoCod: string;
    CidadeNome: string;
    ClienteTmpCidadeCod: number;
    ClienteTmpTelefone: string;
    ClienteTmpCelular: string;
    ClienteTmpEmail: string;
    ClienteTmpResponsavel: string;
    ClienteTmpNome: string;
    ClienteTmpMotivo: string;
    ClienteTmpStatus: string;
    ClienteTmpCpfCnpj: string;
}
        
export interface GxsdtProspectoslog {
    ClienteTmpCpfCnpj: string;
    ClienteTmpAnotacaoId: number;
    ClienteTmpAnotacaoTipoHistorico: string;
    ClienteTmpAnotacaoData: string;
    ClienteTmpAnotacaoMsg: string;
    ClienteTmpAnotacaoUsuario: string;
    ClienteTmpAnotacaoProxContato: string;
    ClienteTmpAnotacaoStatus: string;
    FollowUpCod: number;
}
        
export interface GxsdtProspectos {
    retorno: string;
    acao: number;
    cliente: GxsdtProspectoscliente;
    log: GxsdtProspectoslog;
}
        