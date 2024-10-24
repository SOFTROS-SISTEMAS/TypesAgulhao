
export interface GxsdtMdfeMdfePercurso {
    MdfePercursoCod: number; // Código de ordem do percurso
    MdfePercursoUF: string; // Sigla das Unidades da Federação do percurso do veículo.
}
        
export interface GxsdtMdfeMdfeDescargaMdfeDocumentos {
    MdfeDocumentosChave: string; // Chave do documento
    MdfeDocumentosTipo: string; // Tipo do documento
    MdfeDocumentosCodBarras: string; // Código de barras
}
        
export interface GxsdtMdfeMdfeDescarga {
    MdfeDescargaCMun: number; // Código do Município de Descarregamento
    MdfeDescargaXMun: string; // Nome do Município de Descarregamento
    MdfeDescargaXMunEst: string;
    MdfeDocumentos: GxsdtMdfeMdfeDescargaMdfeDocumentos[];
}
        
export interface GxsdtMdfeMdfeVeiculos {
    MdfeVeiculosPlaca: string;
}
        
export interface GxsdtMdfeMdfeMotoristas {
    MdfeMotoristaCod: number; // Código do motorista
}
        
export interface GxsdtMdfeMdfeAutXml {
    MdfeAutCpfCnpj: string; // Documento do autorizado a baixar o xml
}
        
export interface GxsdtMdfeCiots {
    MdfeCiot: number;
    MdfeCiotCpfcnpj: string;
}
        
export interface GxsdtMdfeMDFeContratanteCpfCnpj {
    MDFeContratanteCpfCnpj: string;
}
        
export interface GxsdtMdfe {
    EmpresaCodigo: number; // Empresa Codigo
    MdfeNova: boolean;
    MdfeCod: string; // Código do Mdfe
    MdfeInfVersao: string; // Versão do leiaute
    MdfeIdeCUF: string; // Código da UF do emitente do MDF-e
    MdfeIdeTpAmb: string; // Tipo do Ambiente
    MdfeIdeTpEmit: number; // Tipo do Emitente
    MdfeIdeSerie: number; // Série do Manifesto
    MdfeIdeNMDF: number; // Número do Manifesto
    MdfeIdeCMDF: number; // Código numérico que compõe a Chave
    MdfeIdeCDV: number; // Digito verificador da chave de acesso do Manifesto
    MdfeIdeModal: number; // Modalidade de transporte
    MdfeIdeDhEmi: string; // Data e hora de emissão do Manifesto
    MdfeIdeTpEmis: number; // Forma de emissão do Manifesto (Normal)
    MdfeIdeVerProc: string; // Versão do processo de emissão
    MdfeIdeUFIni: string; // Sigla da UF do Carregamento
    MdfeIdeUFFim: string; // Sigla da UF do Descarregamento
    MdfeEmitCnpj: string; // CNPJ do emitente
    MdfeEmitIE: string; // Inscrição Estadual do emitemte
    MdfeEmitXNome: string; // Razão social ou Nome do emitente
    MdfeEmitXFant: string; // Nome fantasia do emitente
    MdfeEmitXLgr: string; // Logradouro
    MdfeEmitNro: string; // Número
    MdfeEmitXCpl: string; // Complemento
    MdfeEmitXBairro: string; // Bairro
    MdfeEmitCMun: number; // Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior.
    MdfeEmitXMun: string; // Nome do município, informar EXTERIOR para operações com o exterior.
    MdfeEmitCEP: string; // CEP
    MdfeEmitUF: string; // Sigla da UF, informar EX para operações com o exterior.
    MdfeEmitFone: string; // Telefone
    MdfeEmitEmail: string; // Endereço de E-mail
    MdfeInfModalVersao: number; // Versão do leiaute específico para o Modal
    MdfeTotQCte: number; // Quantidade total de CT-e relacionados no Manifesto
    MdfeTotQNfe: number; // Quantidade total de NF-e relacionadas no Manifesto
    MdfeTotQMdfe: number; // Quantidade total de MDF-e relacionadas no Manifesto aquaviário
    MdfeTotVCarga: number; // Valor total da carga / mercadorias transportadas
    MdfeTotCUnid: number; // Codigo da unidade de medida do Peso Bruto da Carga / Mercadorias transportadas
    MdfeTotQCarga: number; // Peso Bruto Total da Carga / Mercadorias ransportadas
    MdfeInfAdicFisco: string; // Informações adicionais de interesse do Fisco
    MdfeInfAdicCpl: string; // Informações complementares de interesse do Contribuinte
    MdfeProtNLote: string; // Número do Lote
    MdfeProtNRec: string; // Número do Recibo
    MdfeProtNProt: string; // Número do Protocolo
    MdfeProtCStat: number; // Código do Status
    MdfeProtXMotivo: string; // Descrição do Motivo
    MdfeProtChMdfe: string; // Chave do MDFe
    MdfeProtCancProt: string; // Protocolo de cancelamento
    MdfeProtCancJust: string; // Justificativa do cancelamento
    MdfeProtCancData: string; // Data e hora do cancelamento
    MdfeArqXml: string; // Arquivo Xml do MDFe
    SBMdfeCargaCMun: number;
    SBMdfeCargaXMun: number;
    MdfeProdPredTpCarga: string;
    MdfeProdPredXProd: string;
    MdfeSeguroCPFCNPJResp: string;
    MDFeSeguronAver: string;
    MDFeSeguronApol: string;
    MDFeSeguroxSeg: string;
    MDFeSeguroCod: number; // Código Seguro
    MdfeProdPredCepDes: string;
    MdfeProdPredCepCar: string;
    MdfeSeguroResp: number;
    MdfeTotQDoc: number;
    MdfeVeiculosPlaca: string;
    MdfeVeiculosReboque: string;
    TmpMdfeCod: number;
    MdfePercurso: GxsdtMdfeMdfePercurso[];
    MdfeDescarga: GxsdtMdfeMdfeDescarga[];
    MdfeVeiculos: GxsdtMdfeMdfeVeiculos[];
    MdfeMotoristas: GxsdtMdfeMdfeMotoristas[];
    MdfeAutXml: GxsdtMdfeMdfeAutXml[];
    Ciots: GxsdtMdfeCiots[];
    MDFeContratanteCpfCnpj: GxsdtMdfeMDFeContratanteCpfCnpj[];
}
        