import { GxeF_Endereco as GxSdtImportadoeF_Endereco } from './ef_endereco'
import { GxeF_Telefones as GxSdtImportadoeF_Telefones } from './ef_telefones'

export interface GxeF_Motorista {
    CPF: number;
    Nome: string;
    CNH: number;
    DataNascimento: string;
    NomeDeSolteiraDaMae: string;
    Endereco: GxSdtImportadoeF_Endereco;
    Telefones: GxSdtImportadoeF_Telefones;
}
        