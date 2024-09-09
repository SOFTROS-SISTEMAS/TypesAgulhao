
export interface GxMetasVendedor {
    MetaMensalVendedorCod: number;
    MetaMensalVendedorNome: string;
    MetaMensalVendedorValor: number;
    MetaMensalVendedorValorAlcancado: number;
    MetaMensalVendedorFoto: string;
}
        
export interface GxMetas {
    EmpresaCodigo: number;
    MetaMensalFilialCod: number;
    MetaMensalFilialNom: string;
    MetaMensalMes: number;
    MetaMensalAno: number;
    MetaMensalTipo: string;
    MetaMensalPorVendedor: boolean;
    MetaMensalDescricao: string;
    MetaMensalValor: number;
    MetaMensalValorVendedores: number;
    MetaMensalValorAlcancado: number;
    MetaMensalValorAlcancadoPorcentagem: number | null;
    Vendedor: GxMetasVendedor[];
}
        