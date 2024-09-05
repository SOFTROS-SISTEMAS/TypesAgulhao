import { GxsdtApontamento as GxSdtImportadosdtApontamento } from './sdtapontamento'

export interface GxsdtPlacaPlacas {
    PlacaId: number;
    PlacaSerie: string;
    PlacaVersao: string;
    PlacaConectada: boolean;
    PlacaSinal: number;
    PlacaIp: string;
    PlacaUltUpd: string;
}
        
export interface GxsdtPlacaconfig {
    rota: string;
}
        
export interface GxsdtPlacaatualizacoes {
    funcionarios: string;
}
        
export interface GxsdtPlacafuncionarios {
    pessoaCod: number;
    pessoaFuncionarioCod: number;
    pessoaNomeFantasia: string;
    pessoaNomeRazao: string;
    pessoaSenha: string;
}
        
export interface GxsdtPlaca {
    acao: number;
    apontamentos: GxSdtImportadosdtApontamento;
    Placas: GxsdtPlacaPlacas[];
    config: GxsdtPlacaconfig;
    atualizacoes: GxsdtPlacaatualizacoes;
    funcionarios: GxsdtPlacafuncionarios[];
}
        