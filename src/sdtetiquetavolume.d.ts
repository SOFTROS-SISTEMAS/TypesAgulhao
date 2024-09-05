
export interface GxsdtEtiquetaVolume {
    ClienteNome: string;
    ClienteNomeFantasia: string;
    ClienteEndereco: string;
    ClienteBairro: string;
    ClienteCEP: string;
    ClienteCidade: string;
    ClienteEstado: string;
    PedidoId: number;
    VolumeAtual: number;
    VolumeFinal: number;
    TipoFrete: string | null;
    TransportadorNome: string;
    TransportadorFone: string;
    EtiquetaCodBarras: string;
    EtiquetaNFe: number;
    ProdutoDescricao: string;
    OC: string;
    TotalPecas: string;
    TextoLivre: string;
    FilialFone: string;
    FilialWhats: string;
    FilialEmail: string;
    ModeloEtiquetaVolume: number;
    Peso: string | null;
}
        