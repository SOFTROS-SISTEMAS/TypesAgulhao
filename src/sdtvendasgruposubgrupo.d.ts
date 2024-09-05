
export interface GxsdtVendasGrupoSubGrupoitens {
    vwVendasGrupoSubGrupoCod: number;
    vwVendasGrupoSubGrupoDescricao: string;
    vwVendasGrupoSubGrupoSbCod: number;
    vwVendasGrupoSubGrupoSbDescricao: string;
    vwVendasGrupoSubGrupoSbSbCod: number;
    vwVendasGrupoSubGrupoSbSbDescricao: string;
    vwVendasGrupoSubGrupoProdutoCod: number;
    vwVendasGrupoSubGrupoProdutoDescricao: string;
    vwVendasGrupoSubGrupoProdutoReferencia: string;
    vwVendasGrupoSubGrupoValorVendido: number;
    vwVendasGrupoSubGrupoQtdePecas: number;
}
        
export interface GxsdtVendasGrupoSubGrupo {
    PedidoColecaoCod: number;
    DataI: string;
    DataF: string;
    FilialCod: number;
    itens: GxsdtVendasGrupoSubGrupoitens[];
}
        