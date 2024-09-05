
export interface GxsdtReacttabelaproduto {
    precoMinimo: number;
    precoMaximo: number;
    json: string;
}
        
export interface GxsdtReacttabelacolunas {
    descricao: string;
    botao: boolean;
    alinhamento: string;
    tipo: string;
    id: string;
    ajuda: string;
}
        
export interface GxsdtReacttabelalinhas {
    id: string;
    valores: string[];
}
        
export interface GxsdtReacttabela {
    totalItens: number;
    buscaDireta: boolean;
    produto: GxsdtReacttabelaproduto;
    colunas: GxsdtReacttabelacolunas[];
    linhas: GxsdtReacttabelalinhas[];
}
        
export interface GxsdtReactopcoes {
    valor: string;
    descricao: string;
    cor: string;
    url: string | null;
}
        
export interface GxsdtReactperiodo {
    to: string;
    from: string;
}
        
export interface GxsdtReactretorno {
    sucesso: string;
    erro: string;
    confirmar: string;
}
        
export interface GxsdtReactsolicitacao {
    chave: string;
    justificativa: string;
    status: boolean;
    motivo: string;
    somenteGerente: boolean;
    campoLivre: string;
    nivel: number;
}
        
export interface GxsdtReact {
    acao: string;
    link: string;
    json: string;
    executou: boolean;
    id: string;
    escopo: string[];
    tabela: GxsdtReacttabela;
    opcoes: GxsdtReactopcoes[];
    periodo: GxsdtReactperiodo;
    retorno: GxsdtReactretorno;
    solicitacao: GxsdtReactsolicitacao;
}
        