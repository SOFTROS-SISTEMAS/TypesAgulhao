
export interface GxdistDFeconsChNFe {
    chNFe: string; // Chave da NFe
}
        
export interface GxdistDFe {
    versao: string;
    tpAmb: string; // Identificação do Ambiente:
    cUFAutor: string; // Código da UF do Autor
    CNPJ: string; // CNPJ do interessado no DF-e
    CPF: string;
    consChNFe: GxdistDFeconsChNFe;
}
        