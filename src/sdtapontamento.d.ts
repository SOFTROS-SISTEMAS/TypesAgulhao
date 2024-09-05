
export interface GxsdtApontamentoFuncionario {
    PessoaCod: number;
    PessoaNomeRazao: string;
    PessoaFoto: string;
}
        
export interface GxsdtApontamentoMaquina {
    MaquinaCod: number;
    MaquinaDescricao: string;
    TipoMaquinaDesc: string;
}
        
export interface GxsdtApontamentoCorteMovto {
    CorteMovtoId: number;
    CorteMovto_CorteId: number;
    CorteMovto_CorteGradeId: number;
    CorteMovto_CortePacoteId: number;
    CorteMovto_OperacaoCod: number;
    CorteMovtoFuncionarioCod: number;
    CorteMovtoPessoaNomeRazao: string;
    CorteMovtoPessoaFoto: string;
    CorteMovtoData: string;
    CorteMovtoDataRealLcto: string;
    CorteMovtoHoraRealLcto: string;
    CorteMovtoQtdePecas: number;
    CorteMovtoUsuario: string;
    CorteMovto_origem: string; // Origem
    EmpresaCodigo: number;
    CorteMovtoApontIni: string;
    CorteMovtoApontFin: string;
    CorteMovtoMaquinaCod: number;
    CorteMovtoMaquinaDescricao: string;
    CorteMovtoTipoMaquinaDesc: string;
    CorteMovtoApontResp: string;
    CorteMovtoNovoId: number;
    isPausado: boolean;
}
        
export interface GxsdtApontamentoCorte {
    CorteId: number;
    CorteProdutoCod: number;
    ProdutoDescricao: string;
    ProdutoReferencia: string;
    CorteTotalPecas: number;
    CorteOP: number;
    Movto: GxsdtApontamentoCorteMovto[];
}
        
export interface GxsdtApontamentoOperacoes {
    ProdutoCod: number;
    ProdutoOperacaoCod: number;
    ProdutoOperacaoMaquinaCod: number;
    TipoPacoteCod: number;
    ProdutoOperacaoPontos: number;
    ProdutoOperacoesDataHora: string;
    ProdutoOperacaoTempo: string;
    ProdutoOperacaoTipoMaquinaDsc: number;
    OperacaoDescricao: string;
    PecasRestantes: number;
    ProdutoOperacaoOrdem: number;
}
        
export interface GxsdtApontamentoPerdas {
    ApontamentosPerdasId: number;
    ApontamentosPerdasApontIni: string;
    ApontamentosPerdasApontFin: string;
    MotivosApontamentoId: number;
    ApontamentosPerdasFuncApont: string;
    ApontamentosPerdasFuncCod: number;
    ApontamentosPerdasMaqCod: number;
    ApontamentosPerdasFuncNom: number;
    ApontamentosPerdasMaqNom: number;
    MotivosApontamentoDsc: string;
    MotivosApontamentoIsMaq: boolean;
    MotivosApontamentoIsFunc: boolean;
    PerdasMovtoId: number;
}
        
export interface GxsdtApontamentoMotivos {
    MotivosApontamentoId: number;
    MotivosApontamentoDsc: string;
    MotivosApontamentoIsMaq: boolean;
    MotivosApontamentoIsFunc: boolean;
}
        
export interface GxsdtApontamento {
    Funcionario: GxsdtApontamentoFuncionario;
    Maquina: GxsdtApontamentoMaquina;
    Corte: GxsdtApontamentoCorte;
    Operacoes: GxsdtApontamentoOperacoes[];
    Perdas: GxsdtApontamentoPerdas[];
    Motivos: GxsdtApontamentoMotivos[];
}
        