import { GxsdtPermissoes as GxSdtImportadosdtPermissoes } from './sdtpermissoes'

export interface GxsdtPermissoes {
    ItensMenuId: number;
    ItensMenuFatherId: number;
    ItensMenuName: string;
    ItensMenuFathername: string;
    Autorizados: number[];
    Filhos: GxSdtImportadosdtPermissoes[];
}
        