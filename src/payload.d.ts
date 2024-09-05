import { Gxconta as GxSdtImportadoconta } from './conta'

export interface Gxpayload {
    sub?: string; // Código da pessoa
    aud?: string;
    exp?: string;
    expStr?: string;
    iat?: string;
    iss?: string;
    jti?: string;
    nbf?: string;
    pedido?: string;
    entrega?: string;
    cliente?: string; // Código do cliente
    vendedor?: string;
    tabelaPreco?: string;
    clientId?: string;
    clientSecret?: string;
    empresa: string; // Código da empresa
    filial: string; // Código da filial
    token: string; // Id do Token
    display: string;
    integrador: string; // Código do integrador
    conta: GxSdtImportadoconta;
    interno: boolean;
    perfil: string;
    escopos: string;
}
        