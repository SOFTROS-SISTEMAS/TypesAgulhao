import { GxeF_Endereco as GxSdtImportadoeF_Endereco } from './ef_endereco'
import { GxeF_Telefones as GxSdtImportadoeF_Telefones } from './ef_telefones'

export interface GxeF_ProprietarioGravarRequest {
    Token: string;
    Integrador: string;
    Versao: number;
    CNPJ: number;
    TipoPessoa: string;
    RazaoSocial: string;
    RNTRC: number;
    Endereco: GxSdtImportadoeF_Endereco;
    Telefones: GxSdtImportadoeF_Telefones;
}
        