import { GxsdtEntrega as GxSdtImportadosdtEntrega } from './sdtentrega'

export interface GxsdtCargaRotapedidositens {
    ProdutoCod: number;
    ProdutoDescricao: string;
    UnidadeMedidaSigla: string;
    PedidoItemQtde: number;
    PedidoItemQtdeDevolvida: number;
    PedidoItemComplemento: string;
}
        
export interface GxsdtCargaRotapedidos {
    PedidoId: number;
    PedidoOrdem: number;
    PedidoPesoCalculado: number;
    PessoaCod: number;
    PessoaNomeRazao: string;
    PessoaNomeFantasia: string;
    PedidoObservacoes: string;
    Entrega: GxSdtImportadosdtEntrega;
    PessoaTelefone: string;
    PessoaCelular: string;
    EnderecoEntrega: boolean;
    Entregue: boolean;
    DataEntregue: string;
    LocalizacaoEntregue: string;
    VendedorNome: string;
    itens: GxsdtCargaRotapedidositens[];
}
        
export interface GxsdtCargaRota {
    CargaCodigo: number;
    CargaDataSaidaEmpresa: string;
    CargaDataChegadaDestino: string;
    VeiculoCargaPlaca: string;
    VeiculoCargaDescricao: string;
    PesoCarga: number;
    CargaFuncionariosPessoaCod: number;
    CargaFuncionariosPessoaNome: string;
    pedidos: GxsdtCargaRotapedidos[];
}
        