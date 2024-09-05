
export interface GxsdtPessoaPadrao {
    PessoaCod: number; // Cód. Pessoa
    PessoaDataCadastro: string; // Data cadastro
    PessoaDataUltimaAlteracao: string; // Última alt.
    PessoaFisicaJuridica: string; // Tipo Pessoa
    PessoaCpfCnpj: string; // CPF / CNPJ
    PessoaIeRg: string; // IE / RG
    PessoaNomeRazao: string; // Nome / Razão
    PessoaNomeFantasia: string; // Nome fantasia
    PessoaLogradouro: string; // Logradouro
    PessoaEndNumero: string; // Nº end.
    PessoaEndComplemento: string; // Complemento
    PessoaBairro: string; // Bairro
    CidadeCod: number; // Cód. Cidade
    PessoaCEP: string; // CEP
    PessoaTelefone: string; // Telefone
    PessoaCelular: string; // Celular
    PessoaFax: string; // Fax
    PessoaEmail: string; // Email
    PessoaSite: string; // Site
    BancoCod: string; // Cód. Banco
    PessoaAgencia: string; // Agência
    PessoaContaCorrente: string; // Conta corrente
    PessoaClienteDesde: string; // Cliente Desde
    PessoaIsFuncionario: boolean; // Funcionário
    FuncionarioUsu: string; // Usuário
    FuncionarioSen: string; // Senha
    FuncaoCod: number; // Função
    SetorCod: number; // Setor
    FuncionarioSalario: number; // Salário
    FuncionarioNumCartTrab: string; // Nº carteira de trabalho
    FuncionarioDataAdmissao: string; // Data admissão
    FuncionarioDataDemissao: string; // Data demissão
    FuncionarioDataAniversario: string; // Data aniversário
    FuncionarioPrevInicioFerias: string; // Previsão férias
    FuncionarioVctoFerias: string; // Vencimento férias
    FuncionarioObservacoes: string; // Observações
    FuncionarioNivel: number; // Nível
    FuncionarioIsVendedor: string; // Vendedor
    FuncionarioInternoExterno: string; // Tipo
    FuncionarioComissaoVenda: number; // Comissão
    FilialFuncionarioCod: number;
    EmpresaCodigo: number;
}
        