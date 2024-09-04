
export interface GxColetor_EmpresaFilalModulos {
    ModuloCodigo: number;
}
    
export interface GxColetor_EmpresaFilalConfig {
    ConfigCod: number;
    ConfigValor: string;
}
    
export interface GxColetor_EmpresaFilal {
    FilialCod: number;
    FilialNom: string;
    FilialNomFantasia: string;
    FilialCGC: string;
    FilialClienteCod: number;
    FilialCorHexa: string;
    Marcas: number[];
    Modulos: GxColetor_EmpresaFilalModulos[];
    Config: GxColetor_EmpresaFilalConfig[];
}
    
export interface GxColetor_Empresa {
    EmpresaCodigo: number;
    EmpresaNome: string;
    Filal: GxColetor_EmpresaFilal[];
}
    