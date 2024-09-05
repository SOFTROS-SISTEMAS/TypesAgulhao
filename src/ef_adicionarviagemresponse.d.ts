import { GxeF_Excecao as GxSdtImportadoeF_Excecao } from './ef_excecao'

export interface GxeF_AdicionarViagemResponse {
    Versao: number;
    Sucesso: boolean;
    Excecao: GxSdtImportadoeF_Excecao;
    ProtocoloServico: number;
    CodigoIdentificacaoOperacao: string;
    QuantidadeViagens: number;
    DocumentoViagem: string[];
    QuantidadePagamentos: number;
    DocumentoPagamento: string[];
}
        