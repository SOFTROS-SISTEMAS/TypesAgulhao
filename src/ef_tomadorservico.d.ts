import { GxeF_Endereco as GxSdtImportadoeF_Endereco } from './ef_endereco'
import { GxeF_Telefones as GxSdtImportadoeF_Telefones } from './ef_telefones'

export interface GxeF_TomadorServico {
    NomeOuRazaoSocial: string;
    CpfOuCnpj: number;
    Endereco: GxSdtImportadoeF_Endereco;
    EMail: string;
    Telefones: GxSdtImportadoeF_Telefones;
    ResponsavelPeloPagamento: boolean;
}
        