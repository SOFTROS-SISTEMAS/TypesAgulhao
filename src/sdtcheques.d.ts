
export interface GxsdtCheques {
    DuplicataId: number; // Id
    TipoDuplicata: string;
    FilialCod: number; // Filial
    DuplicataPedidoId: number; // Pedido
    ClienteDuplicataCod: number; // Cliente
    ClienteDuplicataNome: string; // Nome
    DuplicataNumero: string; // Número
    DuplicataEmissao: string; // Emissão
    DuplicataVencimento: string; // Bom para
    DuplicataValor: number; // Valor
    BancoCod: string; // Banco
    BancoNome: string; // Banco
    ChequeAGencia: string; // Agência
    ChequeConta: string; // Conta corrente
    DiasPrazo: number; // Prazo
    TipoCheque: string; // Tipo
    ChequeFoneTitular: string; // Cheque Fone Titular
    ChequeNomeTitular: string; // Cheque Nome Titular
    LocalCobrancaCod: number;
    LocalCobrancaDescricao: string;
    Duplicatavendedorcod: number;
    PessoaCpfCnpj: string;
    ChequeCMC7: string;
    DuplicataChaveDFe: string;
    DuplicataNotaId: number;
    FuncionarioOleriteCod: number;
    FuncionarioOleriteNome: string;
}
        