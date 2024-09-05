
export interface GxColetor_sdtPessoaVendedores {
    ClienteVendedorCod: number;
    PessoaCod: number;
}
        
export interface GxColetor_sdtPessoaSocios {
    ClienteSocioNome: string;
    ClienteSocioCpf: string;
}
        
export interface GxColetor_sdtPessoaSubordinados {
    PessoaCod: number;
    FuncionarioSubordinadoCod: number;
}
        
export interface GxColetor_sdtPessoaImagens {
    PessoaCod: number;
    PessoaImagemCod: number;
    PessoaImagem: string;
    PessoaImagemExtensao: string;
    PessoaImagemNovoCod: number;
}
        
export interface GxColetor_sdtPessoaFiliais {
    PessoaFilialCod: number;
}
        
export interface GxColetor_sdtPessoaAutorizacoes {
    ItensMenuTrnRw: string;
    ItensMenuId: number;
}
        
export interface GxColetor_sdtPessoaImpressoras {
    ImpressoraNome: string;
    UsuarioImpressoraPadrao: number;
}
        
export interface GxColetor_sdtPessoa {
    EmpresaChaveApp: number;
    PessoaVenIntExt: string; // Interno ou Externo
    PessoaIsVendedor: boolean; // Pessoa Is Vendedor
    PessoaFuncionarioCod: number; // Pessoa Funcionario Cod
    PessoaIsLogado: boolean; // Pessoa Is Logado
    PessoaIsFor: boolean; // Pessoa Is For
    PessoaIsCli: boolean; // Pessoa Is Cli
    PessoaIsFun: boolean; // Pessoa Is Fun
    PessoaSen: string; // Pessoa Sen
    PessoaCelular: string; // Pessoa Celular
    ClienteObservacoes: string; // Cliente Observacoes
    PessoaEmail: string; // Pessoa Email
    PessoaTelefone: string; // Pessoa Telefone
    PessoaUsr: string; // Pessoa Usr
    PessoaCEP: string; // Pessoa CEP
    PessoaEstadoCod: string; // Pessoa Estado Cod
    PessoaCidadeNome: string; // Pessoa Cidade Nome
    PessoaCidadeCod: number; // Pessoa Cidade Cod
    PessoaIeRg: string; // Pessoa Ie Rg
    PessoaBairro: string; // Pessoa Bairro
    PessoaEndComplemento: string; // Pessoa End Complemento
    PessoaEndNumero: string; // Pessoa End Numero
    PessoaLogradouro: string; // Pessoa Logradouro
    PessoaNomeFantasia: string; // Pessoa Nome Fantasia
    PessoaNomeRazao: string; // Pessoa Nome Razao
    PessoaCpfCnpj: string; // CPF / CNPJ
    PessoaCod: number; // Pessoa Cod
    PessoaFuncionarios: string;
    UltUpdPessoa: string;
    PessoaNovoCod: number;
    PessoaLocalizacao: number;
    FuncionarioTabelaPrecoCod: number;
    PessoaIsGuia: boolean;
    ClienteRef1: string;
    ClienteRef2: string;
    ClienteRef3: string;
    ClienteRefTel1: string;
    ClienteRefTel2: string;
    ClienteRefTel3: string;
    ClienteRefObs1: string;
    ClienteRefObs2: string;
    ClienteRefObs3: string;
    ClienteBloqueado: boolean;
    FiliaisPermitidas: string;
    FornecedorContato: string;
    FuncionarioControleProducao: boolean;
    status: string;
    FuncionarioNotificarInadimplentes: boolean;
    Vendedores: GxColetor_sdtPessoaVendedores[];
    Socios: GxColetor_sdtPessoaSocios[];
    Subordinados: GxColetor_sdtPessoaSubordinados[];
    Imagens: GxColetor_sdtPessoaImagens[];
    Filiais: GxColetor_sdtPessoaFiliais[];
    Autorizacoes: GxColetor_sdtPessoaAutorizacoes[];
    Impressoras: GxColetor_sdtPessoaImpressoras[];
}
        