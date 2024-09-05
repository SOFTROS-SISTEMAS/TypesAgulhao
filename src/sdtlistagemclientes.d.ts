
export interface GxsdtListagemClientesbuscaclientesultimoPedidoColecao {
    PedidoValorLiquido: number;
    PedidoDataEmissao: string;
    FilialCod: number;
}
        
export interface GxsdtListagemClientesbuscaclientesultimasCompras {
    PedidoDataEmissao?: string;
    PedidoValorLiquido?: number;
    FilialCod?: number;
}
        
export interface GxsdtListagemClientesbuscaclientesanotacoes {
    PessoaHistoricoId?: number;
    PessoaHistoricoData?: string;
    PessoaHistoricoMsg?: string;
    PessoaHistoricoUsuario?: string;
    PessoaFollowUpCod?: number;
    PessoaFollowUpDsc: number;
    PessoaHistoricoDataProxCont?: string;
    PessoaHistoricoSts?: string;
}
        
export interface GxsdtListagemClientesbuscaclientes {
    PessoaCod?: number;
    PessoaCpfCnpj: string;
    PessoaNomeRazao?: string;
    PessoaTelefone?: string;
    PessoaCelular?: string;
    PessoaEmail?: string;
    CidadeCod?: number;
    CidadeNome?: string;
    EstadoCod?: string;
    PessoaCEP?: string;
    PessoaLogradouro: string;
    PessoaEndNumero: string;
    PessoaEndComplemento: string;
    PessoaBairro: string;
    PessoaGuiaCod: number;
    PessoaGuiaNome: number;
    Origem?: string;
    condicionalPedidoValorLiquido: number;
    condicionalPedidoDataEmissao: string;
    CondicionaisConvertidas: number;
    ultimoPedidoColecao: GxsdtListagemClientesbuscaclientesultimoPedidoColecao;
    ultimasCompras: GxsdtListagemClientesbuscaclientesultimasCompras[];
    anotacoes: GxsdtListagemClientesbuscaclientesanotacoes[];
}
        
export interface GxsdtListagemClientesbusca {
    PessoaCod?: number;
    PessoaNome?: string;
    FuncionarioInternoExterno: string;
    CidadeCod?: number;
    CidadeNome?: string;
    EstadoCod?: string;
    EstadoNom?: string;
    ColecaoCod?: number;
    ColecaoNome?: string;
    FilialCod: number;
    FilialNom: string;
    clientes: GxsdtListagemClientesbuscaclientes[];
}
        
export interface GxsdtListagemClientes {
    tipoListagem?: number;
    cidadeCod?: number;
    estadoCod?: string;
    pessoaCod?: number;
    isClientesVendedor: boolean;
    colecaoCod?: number;
    followUpCod: number;
    naoCompraramXDias?: number;
    naoEnviouCondicionalXDias?: number;
    clientesQueCompraram: boolean;
    comFollowUp: boolean;
    isSomenteFechados: boolean;
    filiais: number[];
    busca: GxsdtListagemClientesbusca[];
}
        