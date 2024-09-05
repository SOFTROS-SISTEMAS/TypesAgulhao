import { GxspcTelefone___Filtro as GxSdtImportadospcTelefone___Filtro } from './spctelefone___filtro'
import { GxspcCheque___Filtro as GxSdtImportadospcCheque___Filtro } from './spccheque___filtro'
import { GxspcEnvelope as GxSdtImportadospcEnvelope } from './spcenvelope'
import { GxspcProduto as GxSdtImportadospcProduto } from './spcproduto'

export interface GxsdtSpcApiconsulta {
    produtoCodigo: string;
    pessoaCod: number;
}
        
export interface GxsdtSpcApiconsultar {
    codigo___produto: string;
    documento___consumidor: string;
    cep___consumidor: string;
    telefone___consultar: GxSdtImportadospcTelefone___Filtro;
    utiliza___CMC7: boolean;
    banco___cheque___inicial: number;
    agencia___cheque___inicial: number;
    conta___corrente___cheque___inicial: number;
    digito___conta___corrente___cheque___inicial: string;
    numero___cheque___inicial: number;
    digito___cheque___inicial: number;
    cmc71___cheque___inicial: string;
    cmc72___cheque___inicial: string;
    cmc73___cheque___inicial: string;
    quantidade___cheque: number;
    cheque___detalhado: GxSdtImportadospcCheque___Filtro[];
    codigo___insumo___opcional: number[];
    cep___origem: string;
    codigo___estacao___consultante: string;
    numero___rg: string;
    data___nascimento___rg: string;
    uf___emissao___rg: string;
    chassi: string;
    renavam: string | null;
    motor: string;
    numero___caixa___cambio: string;
    placa: string;
    sigla___estadual___auto: string;
    codigo___setor___sar: number;
    codigo___executiva___sar: string;
    codigo___imagem___biometria___facial: string;
    nome___biometria___facial: string;
    sexo___biometria___facial: string;
    data___limite___historico___pagamento: string;
    consulta___unica: boolean;
    tipo___consumidor: string;
}
        
export interface GxsdtSpcApiretorno {
    Envelope: GxSdtImportadospcEnvelope;
}
        
export interface GxsdtSpcApi {
    acao: number;
    produtos: GxSdtImportadospcProduto[];
    mensagem: string;
    produto: GxSdtImportadospcProduto;
    consultarResultado: null;
    JsonOriginal: string;
    consulta: GxsdtSpcApiconsulta;
    consultar: GxsdtSpcApiconsultar;
    retorno: GxsdtSpcApiretorno;
}
        