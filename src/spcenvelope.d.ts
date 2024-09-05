import { GxspcProduto as GxSdtImportadospcProduto } from './spcproduto'

export interface GxspcEnvelopeBodyresultadoprotocolo {
    numero: string;
    digito: string;
}
        
export interface GxspcEnvelopeBodyresultadooperador {
    codigo: string;
    nome: string;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisicacpf {
    regiao_origem: string;
    numero: string;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisicasituacao_cpf {
    descricao_situacao: string;
    data_situacao: string;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisicaenderecocidadeestado {
    sigla_uf: string;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisicaenderecocidade {
    nome: string;
    estado: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisicaenderecocidadeestado;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisicaendereco {
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string | null;
    cidade: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisicaenderecocidade;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisica {
    data_nascimento: string;
    idade: string;
    nome: string;
    nome_mae: string;
    numero_rg: string;
    numero_titulo_eleitor: string;
    sexo: string;
    signo: string;
    cpf: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisicacpf;
    situacao_cpf: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisicasituacao_cpf;
    endereco: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisicaendereco;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicacnpj {
    numero: string;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicasituacao_cnpj {
    descricao_situacao: string;
    data_situacao: string;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicaenderecocidadeestado {
    sigla_uf: string;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicaenderecocidade {
    nome: string;
    estado: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicaenderecocidadeestado;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicaendereco {
    logradouro: string;
    numero: string;
    complemento: string;
    cep: string | null;
    cidade: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicaenderecocidade;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicanatureza_juridica {
    descricao: string;
    codigo: string;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicaatividade_economica_principal {
    descricao: string;
    codigo: string;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridica {
    data_fundacao: string;
    nome_comercial: string;
    razao_social: string;
    cnpj: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicacnpj;
    situacao_cnpj: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicasituacao_cnpj;
    endereco: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicaendereco;
    natureza_juridica: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicanatureza_juridica;
    atividade_economica_principal: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridicaatividade_economica_principal;
}
        
export interface GxspcEnvelopeBodyresultadoconsumidor {
    consumidor_pessoa_fisica: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_fisica;
    consumidor_pessoa_juridica: GxspcEnvelopeBodyresultadoconsumidorconsumidor_pessoa_juridica;
}
        
export interface GxspcEnvelopeBodyresultadoalerta_documentoresumo {
    quantidade_total: string;
}
        
export interface GxspcEnvelopeBodyresultadoalerta_documentodetalhe_alerta_documentotipo_documento_alerta {
    nome: string;
}
        
export interface GxspcEnvelopeBodyresultadoalerta_documentodetalhe_alerta_documento {
    data_ocorrencia: string;
    data_inclusao: string;
    entidade_origem: string;
    motivo: string;
    observacao: string;
    tipo_documento_alerta: GxspcEnvelopeBodyresultadoalerta_documentodetalhe_alerta_documentotipo_documento_alerta[];
}
        
export interface GxspcEnvelopeBodyresultadoalerta_documento {
    resumo: GxspcEnvelopeBodyresultadoalerta_documentoresumo;
    detalhe_alerta_documento: GxspcEnvelopeBodyresultadoalerta_documentodetalhe_alerta_documento[];
}
        
export interface GxspcEnvelopeBodyresultadospcresumo {
    quantidade_total: string;
    data_ultima_ocorrencia: string;
    valor_total: string;
}
        
export interface GxspcEnvelopeBodyresultadospcdetalhe_spccidade_associadoestado {
    sigla_uf: string;
}
        
export interface GxspcEnvelopeBodyresultadospcdetalhe_spccidade_associado {
    nome: string;
    estado: GxspcEnvelopeBodyresultadospcdetalhe_spccidade_associadoestado;
}
        
export interface GxspcEnvelopeBodyresultadospcdetalhe_spc {
    nome_associado: string;
    codigo_entidade: string;
    data_inclusao: string;
    data_vencimento: string;
    nome_entidade: string;
    contrato: string;
    registro_instituicao_financeira: string;
    comprador_fiador_avalista: string;
    valor: string;
    cidade_associado: GxspcEnvelopeBodyresultadospcdetalhe_spccidade_associado;
}
        
export interface GxspcEnvelopeBodyresultadospc {
    resumo: GxspcEnvelopeBodyresultadospcresumo;
    detalhe_spc: GxspcEnvelopeBodyresultadospcdetalhe_spc[];
}
        
export interface GxspcEnvelopeBodyresultadocheque_lojistaresumo {
    quantidade_total: string;
    data_ultima_ocorrencia: string;
    valor_total: string;
}
        
export interface GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistaalinea {
    codigo: string;
    descricao: string;
}
        
export interface GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacheque_inicialdados_bancariosbanco {
    codigo: string;
    nome: string;
}
        
export interface GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacheque_inicialdados_bancarios {
    numero_agencia: string;
    banco: GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacheque_inicialdados_bancariosbanco;
}
        
export interface GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacheque_inicial {
    data_emissao: string;
    numero: string;
    valor: string;
    dados_bancarios: GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacheque_inicialdados_bancarios;
}
        
export interface GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacheque_final {
    numero: string;
}
        
export interface GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacidade_associadoestado {
    sigla_uf: string;
}
        
export interface GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacidade_associado {
    nome: string;
    estado: GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacidade_associadoestado;
}
        
export interface GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojista {
    nome_associado: string;
    codigo_entidade: string;
    data_inclusao: string;
    nome_entidade: string;
    alinea: GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistaalinea;
    cheque_inicial: GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacheque_inicial;
    cheque_final: GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacheque_final;
    cidade_associado: GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojistacidade_associado;
}
        
export interface GxspcEnvelopeBodyresultadocheque_lojista {
    resumo: GxspcEnvelopeBodyresultadocheque_lojistaresumo;
    detalhe_cheque_lojista: GxspcEnvelopeBodyresultadocheque_lojistadetalhe_cheque_lojista[];
}
        
export interface GxspcEnvelopeBodyresultadocredito_concedidoresumo {
    quantidade_total: string;
}
        
export interface GxspcEnvelopeBodyresultadocredito_concedido {
    resumo: GxspcEnvelopeBodyresultadocredito_concedidoresumo;
}
        
export interface GxspcEnvelopeBodyresultadoconsulta_realizadaresumo {
    quantidade_total: string;
    data_ultima_ocorrencia: string;
}
        
export interface GxspcEnvelopeBodyresultadoconsulta_realizadadetalhe_consulta_realizadaorigem_associadoestado {
    sigla_uf: string;
}
        
export interface GxspcEnvelopeBodyresultadoconsulta_realizadadetalhe_consulta_realizadaorigem_associado {
    nome: string;
    estado: GxspcEnvelopeBodyresultadoconsulta_realizadadetalhe_consulta_realizadaorigem_associadoestado;
}
        
export interface GxspcEnvelopeBodyresultadoconsulta_realizadadetalhe_consulta_realizada {
    nome_associado: string;
    data_consulta: string;
    nome_entidade_origem: string;
    origem_associado: GxspcEnvelopeBodyresultadoconsulta_realizadadetalhe_consulta_realizadaorigem_associado;
}
        
export interface GxspcEnvelopeBodyresultadoconsulta_realizada {
    quantidade_dias_consultados: string;
    resumo: GxspcEnvelopeBodyresultadoconsulta_realizadaresumo;
    detalhe_consulta_realizada: GxspcEnvelopeBodyresultadoconsulta_realizadadetalhe_consulta_realizada[];
}
        
export interface GxspcEnvelopeBodyresultadoinformacao_poder_judiciarioresumo {
    quantidade_total: string;
}
        
export interface GxspcEnvelopeBodyresultadoinformacao_poder_judiciario {
    resumo: GxspcEnvelopeBodyresultadoinformacao_poder_judiciarioresumo;
}
        
export interface GxspcEnvelopeBodyresultadosocioresumo {
    quantidade_total: string;
}
        
export interface GxspcEnvelopeBodyresultadosociodetalhe_socio {
    cargo_administracao: string;
    data_entrada: string;
    documento: string;
    nome: string;
    porcentual_participacao: string;
    tipo_relacionamento: string;
}
        
export interface GxspcEnvelopeBodyresultadosocio {
    resumo: GxspcEnvelopeBodyresultadosocioresumo;
    detalhe_socio: GxspcEnvelopeBodyresultadosociodetalhe_socio[];
}
        
export interface GxspcEnvelopeBodyresultadoacaoresumo {
    quantidade_total: string;
    data_primeira_ocorrencia: string;
    data_ultima_ocorrencia: string;
    valor_total: string;
}
        
export interface GxspcEnvelopeBodyresultadoacaodetalhe_acaovaracomarcaestado {
    sigla_uf: string;
}
        
export interface GxspcEnvelopeBodyresultadoacaodetalhe_acaovaracomarca {
    nome: string;
    estado: GxspcEnvelopeBodyresultadoacaodetalhe_acaovaracomarcaestado;
}
        
export interface GxspcEnvelopeBodyresultadoacaodetalhe_acaovara {
    nome: string;
    comarca: GxspcEnvelopeBodyresultadoacaodetalhe_acaovaracomarca;
}
        
export interface GxspcEnvelopeBodyresultadoacaodetalhe_acaotipo_acao {
    descricao: string;
}
        
export interface GxspcEnvelopeBodyresultadoacaodetalhe_acao {
    data_acao: string;
    valor_acao: string;
    vara: GxspcEnvelopeBodyresultadoacaodetalhe_acaovara;
    tipo_acao: GxspcEnvelopeBodyresultadoacaodetalhe_acaotipo_acao;
}
        
export interface GxspcEnvelopeBodyresultadoacao {
    resumo: GxspcEnvelopeBodyresultadoacaoresumo;
    detalhe_acao: GxspcEnvelopeBodyresultadoacaodetalhe_acao[];
}
        
export interface GxspcEnvelopeBodyresultadoprotestoresumo {
    quantidade_total: string;
    data_primeira_ocorrencia: string;
    data_ultima_ocorrencia: string;
    valor_total: string;
}
        
export interface GxspcEnvelopeBodyresultadoprotestodetalhe_protestocartoriocidadeestado {
    sigla_uf: string;
}
        
export interface GxspcEnvelopeBodyresultadoprotestodetalhe_protestocartoriocidade {
    nome: string;
    estado: GxspcEnvelopeBodyresultadoprotestodetalhe_protestocartoriocidadeestado;
}
        
export interface GxspcEnvelopeBodyresultadoprotestodetalhe_protestocartorio {
    nome: string;
    cidade: GxspcEnvelopeBodyresultadoprotestodetalhe_protestocartoriocidade;
}
        
export interface GxspcEnvelopeBodyresultadoprotestodetalhe_protesto {
    data_protesto: string;
    valor: string;
    cartorio: GxspcEnvelopeBodyresultadoprotestodetalhe_protestocartorio;
}
        
export interface GxspcEnvelopeBodyresultadoprotesto {
    resumo: GxspcEnvelopeBodyresultadoprotestoresumo;
    detalhe_protesto: GxspcEnvelopeBodyresultadoprotestodetalhe_protesto[];
}
        
export interface GxspcEnvelopeBodyresultadospc_score_12_mesesdetalhe_spc_score_12_meses {
    horizonte: string;
    score: string;
    segmento_score: string;
    tipo_cliente_score: string;
}
        
export interface GxspcEnvelopeBodyresultadospc_score_12_meses {
    detalhe_spc_score_12_meses: GxspcEnvelopeBodyresultadospc_score_12_mesesdetalhe_spc_score_12_meses;
}
        
export interface GxspcEnvelopeBodyresultadospc_score_3_mesesdetalhe_spc_score_3_meses {
    classe: string;
    horizonte: string;
    mesagem_interpretativa_score: string;
    score: string;
    tipo_cliente_score: string;
}
        
export interface GxspcEnvelopeBodyresultadospc_score_3_meses {
    detalhe_spc_score_3_meses: GxspcEnvelopeBodyresultadospc_score_3_mesesdetalhe_spc_score_3_meses;
}
        
export interface GxspcEnvelopeBodyresultadoultimo_endereco_informadodetalhe_ultimo_endereco_informadoenderecocidadeestado {
    sigla_uf: string;
}
        
export interface GxspcEnvelopeBodyresultadoultimo_endereco_informadodetalhe_ultimo_endereco_informadoenderecocidade {
    nome: string;
    estado: GxspcEnvelopeBodyresultadoultimo_endereco_informadodetalhe_ultimo_endereco_informadoenderecocidadeestado;
}
        
export interface GxspcEnvelopeBodyresultadoultimo_endereco_informadodetalhe_ultimo_endereco_informadoendereco {
    cidade: GxspcEnvelopeBodyresultadoultimo_endereco_informadodetalhe_ultimo_endereco_informadoenderecocidade;
}
        
export interface GxspcEnvelopeBodyresultadoultimo_endereco_informadodetalhe_ultimo_endereco_informado {
    logradouro: string;
    numero: string;
    bairro: string;
    cep: string | null;
    endereco: GxspcEnvelopeBodyresultadoultimo_endereco_informadodetalhe_ultimo_endereco_informadoendereco;
}
        
export interface GxspcEnvelopeBodyresultadoultimo_endereco_informado {
    detalhe_ultimo_endereco_informado: GxspcEnvelopeBodyresultadoultimo_endereco_informadodetalhe_ultimo_endereco_informado[];
}
        
export interface GxspcEnvelopeBodyresultadoultimo_telefone_informadodetalhe_ultimo_telefone_informadotelefone {
    numero_ddd: string;
    numero: string;
}
        
export interface GxspcEnvelopeBodyresultadoultimo_telefone_informadodetalhe_ultimo_telefone_informado {
    data_primeira_consulta: string;
    data_ultima_consulta: string;
    quantidade_consulta: string;
    telefone: GxspcEnvelopeBodyresultadoultimo_telefone_informadodetalhe_ultimo_telefone_informadotelefone;
}
        
export interface GxspcEnvelopeBodyresultadoultimo_telefone_informado {
    detalhe_ultimo_telefone_informado: GxspcEnvelopeBodyresultadoultimo_telefone_informadodetalhe_ultimo_telefone_informado[];
}
        
export interface GxspcEnvelopeBodyresultadotelefone_vinculado_consumidorresumo {
    quandidade_total: string;
}
        
export interface GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidorassinanteenderecocidadeestado {
    sigla_uf: string;
}
        
export interface GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidorassinanteenderecocidade {
    nome: string;
    estado: GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidorassinanteenderecocidadeestado;
}
        
export interface GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidorassinanteendereco {
    logradouro: string;
    bairro: string;
    numero: string;
    cep: string | null;
    cidade: GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidorassinanteenderecocidade;
}
        
export interface GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidorassinantetelefone {
    numero_ddd: string;
    numero: string;
}
        
export interface GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidorassinante {
    tipo_telefone: string;
    nome: string;
    endereco: GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidorassinanteendereco;
    telefone: GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidorassinantetelefone;
}
        
export interface GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidor {
    assinante: GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidorassinante;
}
        
export interface GxspcEnvelopeBodyresultadotelefone_vinculado_consumidor {
    resumo: GxspcEnvelopeBodyresultadotelefone_vinculado_consumidorresumo;
    detalhe_telefone_vinculado_consumidor: GxspcEnvelopeBodyresultadotelefone_vinculado_consumidordetalhe_telefone_vinculado_consumidor[];
}
        
export interface GxspcEnvelopeBodyresultado {
    restricao: string;
    data: string;
    protocolo: GxspcEnvelopeBodyresultadoprotocolo;
    operador: GxspcEnvelopeBodyresultadooperador;
    consumidor: GxspcEnvelopeBodyresultadoconsumidor;
    alerta_documento: GxspcEnvelopeBodyresultadoalerta_documento;
    spc: GxspcEnvelopeBodyresultadospc;
    cheque_lojista: GxspcEnvelopeBodyresultadocheque_lojista;
    credito_concedido: GxspcEnvelopeBodyresultadocredito_concedido;
    consulta_realizada: GxspcEnvelopeBodyresultadoconsulta_realizada;
    informacao_poder_judiciario: GxspcEnvelopeBodyresultadoinformacao_poder_judiciario;
    socio: GxspcEnvelopeBodyresultadosocio;
    acao: GxspcEnvelopeBodyresultadoacao;
    protesto: GxspcEnvelopeBodyresultadoprotesto;
    spc_score_12_meses: GxspcEnvelopeBodyresultadospc_score_12_meses;
    spc_score_3_meses: GxspcEnvelopeBodyresultadospc_score_3_meses;
    ultimo_endereco_informado: GxspcEnvelopeBodyresultadoultimo_endereco_informado;
    ultimo_telefone_informado: GxspcEnvelopeBodyresultadoultimo_telefone_informado;
    telefone_vinculado_consumidor: GxspcEnvelopeBodyresultadotelefone_vinculado_consumidor;
}
        
export interface GxspcEnvelopeBodyFault {
    faultcode: string;
    faultstring: string;
}
        
export interface GxspcEnvelopeBodyprodutos {
    produto: GxSdtImportadospcProduto[];
}
        
export interface GxspcEnvelopeBody {
    produto: GxSdtImportadospcProduto;
    resultado: GxspcEnvelopeBodyresultado;
    Fault: GxspcEnvelopeBodyFault;
    produtos: GxspcEnvelopeBodyprodutos;
}
        
export interface GxspcEnvelope {
    Body: GxspcEnvelopeBody;
}
        