
export interface GxsdtPixBacenAuxvalorabatimento {
    modalidade: number;
    valorPerc: string;
}
        
export interface GxsdtPixBacenAuxvalordescontodescontoDataFixa {
    data: string;
    valorPerc: string;
}
        
export interface GxsdtPixBacenAuxvalordesconto {
    modalidade: number;
    valorPerc: string;
    descontoDataFixa: GxsdtPixBacenAuxvalordescontodescontoDataFixa[];
}
        
export interface GxsdtPixBacenAuxvalorjuros {
    modalidade: number;
    valorPerc: string;
}
        
export interface GxsdtPixBacenAuxvalormulta {
    modalidade: number;
    valorPerc: string;
}
        
export interface GxsdtPixBacenAuxvalor {
    original: string;
    abatimento: GxsdtPixBacenAuxvalorabatimento;
    desconto: GxsdtPixBacenAuxvalordesconto;
    juros: GxsdtPixBacenAuxvalorjuros;
    multa: GxsdtPixBacenAuxvalormulta;
}
        
export interface GxsdtPixBacenAuxcalendario {
    dataDeVencimento: string;
    validadeAposVencimento: number;
    criacao: string;
}
        
export interface GxsdtPixBacenAuxdevedor {
    cpf: string;
    cnpf: string;
    nome: string;
    nomeFantasia: string;
    logradouro: string;
    cidade: string;
    uf: string;
    cep: string;
}
        
export interface GxsdtPixBacenAuxrecebedor {
    logradouro: string;
    cidade: string;
    uf: string;
    cep: string;
    cnpj: string | null;
    cpf: string;
    nome: string;
    nomeFantasia: string;
}
        
export interface GxsdtPixBacenAuxloc {
    id: number;
    location: string;
    tipoCob: string;
    criacao: string;
}
        
export interface GxsdtPixBacenAuxinfoAdicionais {
    nome: string;
    valor: string;
}
        
export interface GxsdtPixBacenAux {
    chave: string;
    tx_id: string;
    status: string;
    location: string;
    revisao: number;
    solicitacaoPagador: string;
    valor: GxsdtPixBacenAuxvalor;
    calendario: GxsdtPixBacenAuxcalendario;
    devedor: GxsdtPixBacenAuxdevedor;
    recebedor: GxsdtPixBacenAuxrecebedor;
    loc: GxsdtPixBacenAuxloc;
    infoAdicionais: GxsdtPixBacenAuxinfoAdicionais[];
}
        