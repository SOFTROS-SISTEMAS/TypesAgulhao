
export interface GxsdtCteCteCargas {
    CteInfQsCUnid: number; // Cte Inf Qs CUnid
    CteInfQsTpMed: string; // Cte Inf Qs Tp Med
    CteInfQsQCarga: number; // Cte Inf Qs QCarga
}
        
export interface GxsdtCteCteNfes {
    CteNfeChave: string; // Chave da nota fiscal
    CteNfeValor: number; // Valor da nota fiscal
}
        
export interface GxsdtCteCteComponentes {
    CteCompXNome: string; // Cte Comp XNome
    CteCompVlr: number; // Cte Comp Vlr
}
        
export interface GxsdtCteCteFerroviarios {
    CteFerrovEnvCNPJ: string; // tmp Cte Ferrov Env CNPJ
    CteFerrovEnvCInt: number; // tmp Cte Ferrov Env CInt
    CteFerrovEnvIE: string; // tmp Cte Ferrov Env IE
    CteFerrovEnvXNome: string; // tmp Cte Ferrov Env XNome
    CteFerrovEnvXLgr: string; // tmp Cte Ferrov Env XLgr
    CteFerrovEnvNro: string; // tmp Cte Ferrov Env Nro
    CteFerrovEnvXCpl: string; // tmp Cte Ferrov Env XCpl
    CteFerrovEnvXBairro: string; // tmp Cte Ferrov Env XBairro
    CteFerrovEnvCMun: number; // tmp Cte Ferrov Env CMun
    CteFerrovEnvXMun: string; // tmp Cte Ferrov Env XMun
    CteFerrovEnvCEP: string; // tmp Cte Ferrov Env CEP
    CteFerrovEnvUF: string; // tmp Cte Ferrov Env UF
}
        
export interface GxsdtCteCteInformacaoOutros {
    CteOutrosTpDoc: number;
    CteOutrosDescOutros: string;
    CteOutrosNDoc: string;
    CteOutrosDEmi: string;
    CteOutrosVDocFisc: number;
    CteOutrosDPrev: string;
}
        
export interface GxsdtCteCteDocumentoAnterioresCteDocAntEle {
    CteDocAntEleChave: string;
}
        
export interface GxsdtCteCteDocumentoAnteriores {
    CteDocAntCpfCnpj: string;
    CteDocAntTpo: string;
    CteDocAntIe: string;
    CteDocAntUf: string;
    CteDocAntXNome: string;
    CteDocAntEle: GxsdtCteCteDocumentoAnterioresCteDocAntEle;
}
        
export interface GxsdtCte {
    Mode: number;
    EmpresaCodigo: number; // Empresa
    FilialCodigo: number;
    CteCod: string; // Chave do cte
    CteIdeCUf: string; // UF que o cte está sendo emitido
    CteIdeCct: number; // Código do cte
    CteIdeCfop: string; // Cfop
    CteIdeCNatOpe: number; // Código da natureza da operação
    CteIdeXNatOpe: string; // Descrição da natureza da operação
    CteIdeForPag: number; // Forma de pagamento do cte
    CteIdeSerie: number; // Série do CTE
    CteIdeNCt: number; // Número do cte
    CteIdeDhEmi: string; // Data e hora da emissão do cte
    CteIdeTpImp: number; // Tipo de impressão
    CteIdeTpEmis: number; // Tipo de emissão
    CteIdeCDv: number; // Dígito verificador
    CteIdeTpAmb: string; // Tipo de ambiente
    CteIdeTpCte: number; // Tipo do cte
    CteIdeVerProc: string; // Versão do procedimento
    CteIdeRefCte: string; // Cte Ide Ref Cte
    CteIdeCMunEnv: number; // Código do município de envio
    CteIdeXMunEnv: string; // Nome do município de envio
    CteIdeUfEnv: string; // Cte Ide Uf Env
    CteIdeModal: number; // Modal do cte
    CteIdeTpServ: number; // Tipo de serviço
    CteIdeCMunIni: number; // Código do município de início do transporte
    CteIdeXMunIni: string; // Nome do município de início do transporte
    CteIdeUfIni: string; // UF do município de início do transporte
    CteIdeCMunFim: number; // Código do município final do transporte
    CteIdeXMunFim: string; // Nome do município final do transporte
    CteIdeUfFim: string; // UF do município final do transporte
    CteIdeRetira: number; // Retirada em outro local?
    CteIdeXDetRetira: string; // Descrição do local de retirada
    CteIdeTpoDoc: number; // Tipo de documento anexado ao CTE
    CteIdeDhCont: string; // Date e hora da contingencia
    CteIdeXJust: string; // Motivo da contingencia
    CteIdeIndGlobalizado: number; // Indicador de CTE globalizado
    CteIdeIndIeToma: number; // Indicador da IE do tomador
    CteComplXCaracAd: string; // Caracteristica adicional do serviço
    CteComplXCaracSer: string; // Caracteristica adicional
    CteComplXEmi: string; // Complemento da emissão
    CteComplXObs: string; // Observações
    CteToma03: number; // Tipo de tomador do serviço
    CteTomaCod: number; // Código do tomador do serviço
    CteToma04CpfCnpj: string; // Cpf ou Cnpj do tomador do serviço
    CteToma04Ie: string; // Inscrição estadual do tomador do serviço
    CteToma04XNome: string; // Nome do tomador do serviço
    CteToma04XFant: string; // Nome fantasia do tomador do serviço
    CteToma04Fone: string; // Telefone do do tomador do serviço
    CteToma04XLgr: string; // Logradouro do tomador do serviço
    CteToma04Nro: string; // Numero do logradouro do tomador do serviço
    CteToma04XCpl: string; // Complemento do enderço do tomador do serviço
    CteToma04XBairro: string; // Bairro do tomador do serviço
    CteToma04CMun: number; // Código da cidade do tomador do serviço
    CteToma04XMun: string; // Nome da cidade do tomador do serviço
    CteToma04Cep: string; // Cep do tomador do serviço
    CteToma04Uf: string; // Uf do tomador do serviço
    CteToma04CPais: number; // Pais do tomador do serviço
    CteToma04XPais: string; // Nome do pais do tomador do serviço
    CteToma04Email: string; // Email do tomador do serviço
    CteEmitCNPJ: string; // CNPJ do Emitente
    CteEmitIE: string; // Inscrição estadual do Emitente
    CteEmitXNome: string; // Nome do Emitente
    CteEmitXFant: string; // Nome fantasia do Emitente
    CteEmitXLgr: string; // Logradouro do Emitente
    CteEmitNro: string; // Número do logradouro do Emitente
    CteEmitXCpl: string; // Complemento do Emitente
    CteEmitXBairro: string; // Bairro do Emitente
    CteEmitCMun: number; // Código da cidade do Emitente
    CteEmitXMun: string; // Nome da cidade do Emitente
    CteEmitCEP: string; // CEP do Emitente
    CteEmitUF: string; // UF do Emitente
    CteEmitFone: string; // Fone do Emitente
    CteRemCod: number; // Código do remetente
    CteRemCpfCnpj: string; // Cpf Cnpj do remetente
    CteRemIe: string; // Inscrição estadual do remetente
    CteRemXNome: string; // Nome do remetente
    CteRemXFant: string; // Nome fantasia do remetente
    CteRemFone: string; // Fone do remetente
    CteRemXLgr: string; // Logradouro do remetente
    CteRemNro: string; // Número do logradouro do remetente
    CteRemXCpl: string; // Complemento do remetente
    CteRemXBairro: string; // Bairro do remetente
    CteRemCMun: number; // Código da cidade do remetente
    CteRemXMun: string; // Nome da cidade do remetente
    CteRemCEP: string; // CEP do remetente
    CteRemUF: string; // UF do remetente
    CteRemCPais: number; // Código do país do do remetente
    CteRemXPais: string; // Nome do país do remetente
    CteRemEmail: string; // Email do remetente
    CteExpCod: number; // Código do expedidor
    CteExpCpfCnpj: string; // Cpf Cnpj do expedidor
    CteExpIe: string; // Inscrição estadual do expedidor
    CteExpXNome: string; // Nome do expedidor
    CteExpFone: string; // Fone do expedidor
    CteExpXLgr: string; // Logradouro do expedidor
    CteExpNro: string; // Número do logradouro do expedidor
    CteExpXCpl: string; // Complemento do expedidor
    CteExpXBairro: string; // Bairro do expedidor
    CteExpCMun: number; // Código da cidade do expedidor
    CteExpXMun: string; // Nome da cidade do expedidor
    CteExpCEP: string; // CEP do expedidor
    CteExpUF: string; // UF do expedidor
    CteExpCPais: number; // Código do país do expedidor
    CteExpXPais: string; // Nome do país do expedidor
    CteExpEmail: string; // Email do expedidor
    CteRecebCod: number; // Código do recebedor
    CteRecebCpfCnpj: string; // Cpf Cnpj do recebedor
    CteRecebIE: string; // Inscrição estadual do recebedor
    CteRecebXNome: string; // Nome do recebedor
    CteRecebFone: string; // Fone do recebedor
    CteRecebXLgr: string; // Logradouro do recebedor
    CteRecebNro: string; // Número do logradouro do recebedor
    CteRecebXCpl: string; // Complemento do recebedor
    CteRecebXBairro: string; // Bairro do recebedor
    CteRecebCMun: number; // Código da cidade do recebedor
    CteRecebXMun: string; // Nome da cidade do recebedor
    CteRecebCEP: string; // CEP do recebedor
    CteRecebUF: string; // UF do recebedor
    CteRecebCPais: number; // Código do país do recebedor
    CteRecebXPais: string; // Nome do país do recebedor
    CteRecebEmail: string; // Email do recebedor
    CteDest: number; // Destinatário
    CteDestCod: number; // Código do destinatário
    CteDestLocDif: number; // Local diferente para entrega
    CteDestCpfCnpj: string; // Cpf Cnpj do destinatário
    CteDestIE: string; // Inscrição estadual do destinatário
    CteDestIndIe: number;
    CteDestXNome: string; // Nome do destinatário
    CteDestFone: string; // Fone do destinatário
    CteDestISUF: number; // ISUF do destinatário
    CteDestXLgr: string; // Logradouro do destinatário
    CteDestNro: string; // Número do logradouro do destinatário
    CteDestXCpl: string; // Complemento do destinatário
    CteDestXBairro: string; // Bairro do destinatário
    CteDestCMun: number; // Código da cidade do destinatário
    CteDestXMun: string; // Nome da cidade do destinatário
    CteDestCEP: string; // CEP do destinatário
    CteDestUF: string; // UF do destinatário
    CteDestCPais: number; // Código do país do destinatário
    CteDestXPais: string; // Nome do país do destinatário
    CteDestEmail: string; // Email do destinatário
    CteVPrest: number; // Valor da prestação de serviço
    CteVRec: number; // Valor de recebimento
    CteImpCST: string; // CST
    CteImpVBC: number; // Valor da base de calculo
    CteImpPICMS: number; // Percentual de ICMS
    CteImpVICMS: number; // Valor de ICMS
    CtevPis: number;
    CtevCofins: number;
    CteImpPRedBC: number; // Percentual da redução da base de cálculo
    CteImpVBCSTRet: number; // Valor da base de cálculo da substituição tributária
    CteImpVICMSSTRet: number; // Valor do ICMS da substituição tributária
    CteImpPICMSSTRet: number; // Percentual ICMS da substituição tributária
    CteImpVCred: number; // Valor do crédito
    CteImpPRedBCOutraUF: number; // Percentual da redução da base de cálculo de outra UF
    CteImpVBCOutraUF: number; // Valor da base de cálculo  de outra UF
    CteImpPICMSOutraUF: number; // Percentual de icms para outra uf
    CteImpVICMSOutraUF: number; // Valor do icms de outra UF
    CteImpIndSN: number; // Cte Imp Ind SN
    CteImpVTotTrib: number; // Valor total dos tributos
    CteImpInfAdFisco: string; // Informações adicionais ao fisco
    CteImpVBCUFFim: number; // Valor da base de cálculo para partilha do icms
    CteImpPFCPUFFim: number; // Percentual do fundo de combate a pobresa
    CteImpPICMSUFFim: number; // Cte Imp PICMSUFFim
    CteImpPICMSInter: number; // Percentual de icms interestadual
    CteImpPICMSInterPart: number; // Percentual de partilha do icms
    CteImpVFCPUFFim: number; // Valor do fundo de combate a pobreza
    CteImpVICMSUFFim: number; // Valor do icms na uf de destino
    CteImpVICMSUFIni: number; // Valor do icms na uf de origem
    CteIdeNbsCod: number; // Código NBS da tabela IBPT
    CteImpNBSVlr: number; // Valor do imposto NBS
    CteImpNBSVlrTotal: number; // Valor total do imposto NBS
    CteFatNFat: string; // Numero do faturamento
    CteFatVOrig: number; // Valor original
    CteFatVDesc: number; // Valor de desconto
    CteFatVLiq: number; // Valor liquido da fatura
    CteArqXml: string; // Arquivo xml
    CteProtNLote: string; // Número do lote
    CteProtDhRecbto: string; // Data e hora do recebimento
    CteProtNRec: string; // Número do recibo
    CteProtNProt: string; // Número do protocolo
    CteProtCStat: number; // Status do cte
    CteProtXMotivo: string; // Descrição do status do cte
    CteProtChCte: string; // Chave do cte
    CteProtCancJust: string; // Justificativa do cancelamento
    CteProtCancData: string; // Data e hora do cancelamento do cte
    CteProtCancProt: string; // Protocolo do cancelamento
    CteRodoRNTRC: string; // RNTRC
    CteRodoDPrev: string; // Data prevista para entrega da carga
    CteRodoLota: number; // Lotação
    CteRodoCiot: number; // CIOT
    CteFerrovTpTraf: number; // Tipo de tráfego
    CteFerrovRespFat: number; // Responsavel pela fatura
    CteFerrovFerrEmi: number; // Responsável pela emissão
    CteFerrovVFrete: number; // Valor do frete
    CteFerrovFluxo: string;
    CteFerrovCteOrigem: string;
    CteInfCargaVlrManual: boolean;
    CteInfCargaVCarga: number; // Valor da carga
    CteInfCargaProPre: string; // Produto predominante
    CteInfCargaXOutCat: string; // Caracteristida do produto predominante
    CteAnuChCte: string; // Chave do cte de anulação
    CteAnuDEmi: string; // Data da emissão da anulação
    CteInfSubChCte: string; // Chave do cte de subcontratação
    CteInfSubRefCte: string; // Cte de referencia da subcontratação
    CteInfAlteraToma: number; // Indicador de alteração do tomador
    CteCargas: GxsdtCteCteCargas[];
    CteNfes: GxsdtCteCteNfes[];
    CteComponentes: GxsdtCteCteComponentes[];
    CteFerroviarios: GxsdtCteCteFerroviarios[];
    CteInformacaoOutros: GxsdtCteCteInformacaoOutros[];
    CteDocumentoAnteriores: GxsdtCteCteDocumentoAnteriores[];
}
        