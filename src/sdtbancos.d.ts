import { GxsdtDuplicatas as GxSdtImportadosdtDuplicatas } from './sdtduplicatas'
import { GxsdtPix as GxSdtImportadosdtPix } from './sdtpix'

export interface GxsdtBancoscliente {
    EmpresaCodigo: number;
    PessoaCpfCnpj: string;
    PessoaCod: number;
    PessoaNomeRazao: string;
    PessoaEmail: string;
    PessoaTelefone: string;
    ClienteSenhaAppCliente: string;
    PessoaLogradouro: string;
    PessoaEndNumero: string;
    PessoaBairro: string;
    PessoaEndComplemento: string;
    PessoaCEP: string;
    CidadeCod: number;
}
        
export interface GxsdtBancosduplicata {
    DuplicataNumero: string;
    DuplicataStatus: string;
    DuplicataMovtoData: string;
    DuplicataLinhaDig: string;
}
        
export interface GxsdtBancostef {
    tipoCartao: string;
    parcelas: number | null;
    valor: number;
    pedidoId: number;
    isPago: boolean;
}
        
export interface GxsdtBancos {
    acao: string;
    mensagem: string;
    duplicatas: GxSdtImportadosdtDuplicatas;
    pix: GxSdtImportadosdtPix;
    cliente: GxsdtBancoscliente;
    duplicata: GxsdtBancosduplicata;
    tef: GxsdtBancostef;
}
        