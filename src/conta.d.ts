
export interface Gxcontacontato {
    email: string;
    telefone: string;
}
        
export interface Gxcontaendereco {
    logradouro: string;
    numero: string;
    bairro: string;
    complemento: string;
    cep: string | null;
    ibge: number;
    estado: string;
    cidade: string;
}
        
export interface Gxconta {
    cpfCnpj: string;
    codigo: number;
    nome: string;
    status: boolean;
    contato: Gxcontacontato;
    endereco: Gxcontaendereco;
}
        