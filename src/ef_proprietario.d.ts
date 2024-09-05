import { GxeF_Endereco as GxSdtImportadoeF_Endereco } from './ef_endereco'
import { GxeF_Telefones as GxSdtImportadoeF_Telefones } from './ef_telefones'

export interface GxeF_Proprietario {
    CNPJ: number;
    TipoPessoa: string;
    RazaoSocial: string;
    RNTRC: number;
    Tipo: string;
    TACouEquiparado: boolean;
    Endereco: GxSdtImportadoeF_Endereco;
    Telefones: GxSdtImportadoeF_Telefones;
    DataValidadeRNTRC: string;
    RNTRCAtivo: boolean;
}
        