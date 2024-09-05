
export interface GxsdtItauApiautenticacao {
    client_id: string;
    client_secret: string;
    access_token: string;
    token_type: string;
    expires_in: number;
    expires_datetime: string;
    refresh_token: string;
    scope: string;
    active: boolean;
    grant_type: string;
    crt: string;
    crt_key: string;
    crt_exp: string;
}
        
export interface GxsdtItauApiretorno {
    codigo: string;
    mensagem: string;
    parametro: string;
    acao: string;
    duplicataId: number;
}
        
export interface GxsdtItauApiboletodatadado_boletodados_individuais_boleto {
    id_boleto_individual?: string;
    numero_nosso_numero?: string;
    dac_titulo?: string;
    data_vencimento?: string;
    valor_titulo?: string;
    codigo_barras?: string;
    numero_linha_digitavel?: string;
    data_limite_pagamento?: string;
    texto_seu_numero?: string; // * Seu número é a identificação do boleto que poderá ter letras e números e facilitará a consulta e acompanhamento do status do boleto. Este campo é para controle do cliente
}
        
export interface GxsdtItauApiboletodatadado_boletopagadorpessoatipo_pessoa {
    codigo_tipo_pessoa?: string; // Tipo de pessoa do pagador Pessoa Física - 'F' Pessoa Jurídica - 'J'
    numero_cadastro_pessoa_fisica?: string; // * CPF do pagador - Obrigatório caso tipo_pessoa = F Exemplo: 12345678910
    numero_cadastro_nacional_pessoa_juridica?: string; // * CNPJ do pagador - Obrigatório caso tipo_pessoa = J Exemplo: 12312312000110
}
        
export interface GxsdtItauApiboletodatadado_boletopagadorpessoa {
    nome_pessoa?: string; // Nome/Razão social do pagador. Máximo caracteres: 50
    nome_fantasia?: string; // * Nome Fantasia do pagador - Obrigatório caso tipo_pessoa = J Exemplo: Empresa A
    pagador_eletronico_DDA?: boolean; // # Indica se o pagador possui cadastro no DDA
    praca_protesto?: boolean; // # Indica se o CEP do pagador é de uma praça protestável
    tipo_pessoa: GxsdtItauApiboletodatadado_boletopagadorpessoatipo_pessoa;
}
        
export interface GxsdtItauApiboletodatadado_boletopagadorendereco {
    nome_logradouro?: string; // Nome do logradouro, número, complemento. Máximo caracteres: 45
    nome_bairro?: string; // Nome do bairro
    nome_cidade?: string; // Nome da cidade
    sigla_UF?: string; // Sigla da UF
    numero_CEP?: string | null; // CEP
}
        
export interface GxsdtItauApiboletodatadado_boletopagador {
    pessoa: GxsdtItauApiboletodatadado_boletopagadorpessoa;
    endereco: GxsdtItauApiboletodatadado_boletopagadorendereco;
}
        
export interface GxsdtItauApiboletodatadado_boletojuros {
    codigo_tipo_juros?: string; // Tipo da cobrança dos juros no cálculo da cobrança. Para cada um dos valores informados, será impresso no boleto uma anotação referente. '90' - Percentual mensal (utilizando parâmetros do cadastro de beneficiário para dias úteis ou corridos) '93' - Valor diário (utilizando parâmetros do cadastro de beneficiário para dias úteis ou corridos)
    quantidade_dias_juros: string;
    valor_juros?: string; // * Valor dos juros a ser cobrado. Obrigatório para codigo_tipo_juros ‘93’. Formato do campo: 15 dígitos inteiros e 2 casas decimais. Exemplo: 99999999999999900
    percentual_juros?: string; // * Percentual dos juros a ser cobrado. Obrigatório para tipo_juros ‘90’, ‘91’ e ‘92’. Formato do campo: 7 dígitos inteiros e 5 casas decimais. Exemplo: 999999900000
    data_juros?: string; // * Data de início de cobrança de juros. Caso o campo esteja vazio, será automaticamente assumido que a cobrança de juros se inicia logo após o vencimento. Formato: AAAA-MM-DD
}
        
export interface GxsdtItauApiboletodatadado_boletomulta {
    codigo_tipo_multa?: string; // Código da multa '01' - Quando se deseja cobrar um valor fixo de multa após o vencimento. '02' - Quando se deseja cobrar um percentual do valor do título de multa após o vencimento. '03' - Quando não se deseja cobrar multa caso o pagamento seja feito após o vencimento (isento)
    valor_multa?: string; // * Valor da multa cobrada. Obrigatório para codigo_tipo_multa 01. Formato do campo: 15 dígitos inteiros e 2 casas decimais
    quantidade_dias_multa: string;
    percentual_multa?: string; // * Percentual da multa cobrada. Obrigatório para tipo_multa 02. Formato do campo: 7 dígitos inteiros e 5 casas decimais
    data_multa?: string; // * Data de início de cobrança de multa. Caso o campo esteja vazio, será automaticamente assumido que a cobrança de multa se inicia logo após o vencimento. Formato: AAAA-MM-DD
}
        
export interface GxsdtItauApiboletodatadado_boletorecebimento_divergente {
    codigo_tipo_autorizacao?: string; // Tipo de autorização de recebimento divergente da cobrança. "01" - Quando o título aceita qualquer valor divergente ao da cobrança. "02" - Quando o título contém uma faixa de valores aceitos para recebimentos divergentes. "03" - Quando o título não deve aceitar pagamentos de valores divergentes ao da cobrança. "04" - Quando o título aceitar pagamentos de valores superiores ao mínimo definido"
    codigo_tipo_recebimento?: string; // * Tipo de autorização de recebimento divergente da cobrança. Obrigatório para codigo_tipo_autorizacao diferente de 01 e 03. V - Recebimento divergente for informado por valores P - Recebimento divergente for informado por percentuais
    valor_minimo?: string; // * Valor mínimo permitido para pagamento. Obrigatório para codigo_aceite_pagamento_divergente 2 ou 4. Formato do campo: 15 dígitos inteiros e 2 casas decimais
    percentual_minimo?: string; // * Percentual mínimo permitido para pagamento. Obrigatório para codigo_tipo_autorizacao 2 ou 4. Formato do campo: 7 dígitos inteiros e 5 casas decimais
    valor_maximo?: string; // * Valor máximo permitido para pagamento. Obrigatório para codigo_tipo_autorizacao 2. Formato do campo: 15 dígitos inteiros e 2 casas decimais
    percentual_maximo?: string; // * Percentual máximo permitido. Obrigatório para codigo_tipo_autorizacao 2. Formato do campo: 7 dígitos inteiros e 5 casas decimais
}
        
export interface GxsdtItauApiboletodatadado_boletosacador_avalistapessoatipo_pessoa {
    codigo_tipo_pessoa?: string; // Tipo de pessoa do sacador avalista. Pessoa Física - 'F' Pessoa Jurídica - 'J'
    numero_cadastro_pessoa_fisica?: string; // * CPF do sacador avalista - Obrigatório caso tipo_pessoa = F Exemplo: 12345678910
    numero_cadastro_nacional_pessoa_juridica?: string; // * CNPJ do sacador avalista - Obrigatório caso tipo_pessoa = J Exemplo: 12312312000110
}
        
export interface GxsdtItauApiboletodatadado_boletosacador_avalistapessoa {
    nome_pessoa?: string; // Nome/Razão social do sacador avalista
    tipo_pessoa: GxsdtItauApiboletodatadado_boletosacador_avalistapessoatipo_pessoa;
}
        
export interface GxsdtItauApiboletodatadado_boletosacador_avalista {
    pessoa: GxsdtItauApiboletodatadado_boletosacador_avalistapessoa;
}
        
export interface GxsdtItauApiboletodatadado_boletodesconto {
    codigo_tipo_desconto?: string; // Código do desconto. Caso exista mais de um desconto, todos os tipo_desconto deverão ter o mesmo código. '00' - Quando não houver condição de desconto – sem desconto '01' - Quando o desconto for um valor fixo se o título for pago até a data informada (data_desconto) '02' - Quando o desconto for um percentual do valor do título e for pago até a data informada (data_desconto) '90' - Percentual por antecipação(utilizando parâmetros do cadastro de beneficiário para dias úteis ou corridos)" '91' -Valor por antecipação (utilizando parâmetros do cadastro de beneficiário para dias úteis ou corridos)"
    data_desconto?: string; // * Data limite de cobrança de desconto. Caso o campo esteja vazio, será automaticamente assumido que a cobrança de desconto é até a data de vencimento. Formato: AAAA-MM-DD
    valor_desconto?: string; // * Valor do desconto a ser cobrado. Obrigatório para codigo_tipo_desconto 1 ou 91. Formato do campo: 15 dígitos inteiros e 2 casas decimais
    percentual_desconto?: string; // * Percentual do desconto concedido. Obrigatório para codigo_tipo_desconto 2 ou 90. Formato do campo: 7 dígitos inteiros e 5 casas decimais
}
        
export interface GxsdtItauApiboletodatadado_boletoprotesto {
    protesto?: string; // Códigos das instruções de protesto. Ver "Tabela de Instruções"
    quantidade_dias_protesto?: number; // * Quantidade de dias requisitado para instrução de protesto
}
        
export interface GxsdtItauApiboletodatadado_boletonegativacao {
    negativacao?: string; // Códigos das instruções de negativação. Ver "Tabela de Instruções"
    quantidade_dias_negativacao?: number; // Quantidade de dias requisitado para instrução de negativação
}
        
export interface GxsdtItauApiboletodatadado_boleto {
    descricao_instrumento_cobranca: string; // Tipo de cobrança. Preencher com 'boleto'
    tipo_boleto?: string; // Deve ser indicado um dos tipos do boleto: 'a vista' 'proposta'
    codigo_carteira?: string; // Deve ser informado algum dos códigos de carteiras disponíveis: 109 e 112
    valor_total_titulo: string; // Valor total a ser cobrado. Sendo 15 dígitos inteiros e 2 casas decimais. Exemplo: 99999999999999900
    codigo_especie?: string; // Espécie do título. Ver "Tabela de Espécies"
    valor_abatimento?: string; // * Valor do abatimento do título. Este valor não pode superar o valor da cobrança. Formato do campo: 15 dígitos inteiros e 2 casas decimais
    data_emissao?: string; // * Data de emissão do boleto. Formato: AAAA-MM-DD
    indicador_pagamento_parcial?: boolean; // * Indicador de pagamento parcial. Caso não seja enviado, assume-se o padrão 'false' 'true' - Aceita pagamento parcial 'false' - Não aceita pagamento parcial
    quantidade_maximo_parcial?: number; // * Quantidade permitida de pagamentos parciais da cobrança, valor deve ser entre 1 e 99. Obrigatório caso indicador_pagamento_parcial = true
    forma_envio?: string; // # 'impressão' 'postagem' 'e-mail'
    codigo_tipo_vencimento?: number; // # Tipo de vencimento do boleto. '3' - Data de vencimento informada pelo cliente
    desconto_expresso?: boolean; // Indicador de desconto. Enviar como "false"
    codigo_operador?: string; // # Agência (4 dígitos) + Conta (5 dígitos)
    codigo_canal_operacao?: string; // # API
    dados_individuais_boleto: GxsdtItauApiboletodatadado_boletodados_individuais_boleto[];
    pagador: GxsdtItauApiboletodatadado_boletopagador;
    juros: GxsdtItauApiboletodatadado_boletojuros;
    multa: GxsdtItauApiboletodatadado_boletomulta;
    recebimento_divergente: GxsdtItauApiboletodatadado_boletorecebimento_divergente;
    sacador_avalista: GxsdtItauApiboletodatadado_boletosacador_avalista;
    desconto: GxsdtItauApiboletodatadado_boletodesconto;
    protesto: GxsdtItauApiboletodatadado_boletoprotesto;
    negativacao: GxsdtItauApiboletodatadado_boletonegativacao;
}
        
export interface GxsdtItauApiboletodatabeneficiariotipo_pessoa {
    codigo_tipo_pessoa?: string; // # codigo_tipo_pessoa
    numero_cadastro_pessoa_fisica?: string; // # numero_cadastro_pessoa_fisica
    numero_cadastro_nacional_pessoa_juridica?: string; // # numero_cadastro_nacional_pessoa_juridica
}
        
export interface GxsdtItauApiboletodatabeneficiario {
    id_beneficiario?: string; // Agência (4 dígitos) + Conta (7 dígitos) + DAC (1 dígito). Exemplo: 150000123450
    nome_cobranca?: string; // # Razão social do beneficiário
    tipo_pessoa: GxsdtItauApiboletodatabeneficiariotipo_pessoa;
}
        
export interface GxsdtItauApiboletodata {
    etapa_processo_boleto?: string; // Simulação de Emissão - 'validacao' Emissão - 'efetivacao'
    dado_boleto: GxsdtItauApiboletodatadado_boleto;
    beneficiario: GxsdtItauApiboletodatabeneficiario;
}
        
export interface GxsdtItauApiboleto {
    data: GxsdtItauApiboletodata;
}
        
export interface GxsdtItauApibuscaDatadatabeneficiario {
    id_beneficiario: string;
}
        
export interface GxsdtItauApibuscaDatadatadado_boletodados_individuais_boleto {
    situacao_geral_boleto: string;
    status_vencimento: string;
    numero_nosso_numero: string;
    dac_titulo: string;
    data_vencimento: string;
    valor_titulo: string;
    texto_seu_numero: string;
    codigo_barras: string;
    numero_linha_digitavel: string;
    data_limite_pagamento: string;
}
        
export interface GxsdtItauApibuscaDatadatadado_boletohistoricodetalhe {
    descricao: string;
    conteudo_anterior: string;
    conteudo_atual: string;
}
        
export interface GxsdtItauApibuscaDatadatadado_boletohistorico {
    data: string;
    operacao: string;
    comandado_por: string;
    motivo: string;
    conteudo_anterior: string;
    conteudo_atual: string;
    detalhe: GxsdtItauApibuscaDatadatadado_boletohistoricodetalhe[];
}
        
export interface GxsdtItauApibuscaDatadatadado_boletopagamentos_cobranca {
    numero_agencia_recebedora: string;
    data_inclusao_pagamento: string;
    valor_pago_total_cobranca: string;
    codigo_instituicao_financeira_pagamento: string;
    descricao_canal_pagamento: string;
    descricao_meio_pagamento: string;
}
        
export interface GxsdtItauApibuscaDatadatadado_boleto {
    data_emissao: string;
    codigo_carteira: string;
    dados_individuais_boleto: GxsdtItauApibuscaDatadatadado_boletodados_individuais_boleto[];
    historico: GxsdtItauApibuscaDatadatadado_boletohistorico[];
    pagamentos_cobranca: GxsdtItauApibuscaDatadatadado_boletopagamentos_cobranca[];
}
        
export interface GxsdtItauApibuscaDatadata {
    id_boleto: string;
    beneficiario: GxsdtItauApibuscaDatadatabeneficiario;
    dado_boleto: GxsdtItauApibuscaDatadatadado_boleto;
}
        
export interface GxsdtItauApibuscaData {
    data: GxsdtItauApibuscaDatadata[];
}
        
export interface GxsdtItauApienvio {
    url: string;
    httpMethod: string | null;
    flowId: string;
    correlationId: string;
    contentType: string | null;
    body: string;
}
        
export interface GxsdtItauApibaixa {
    data_inclusao_alteracao_baixa: string;
}
        
export interface GxsdtItauApierro {
    campo: string;
    mensagem: string;
    valor: string;
}
        
export interface GxsdtItauApi {
    acao: number;
    duplicatasId: number[];
    autenticacao: GxsdtItauApiautenticacao;
    retorno: GxsdtItauApiretorno[];
    boleto: GxsdtItauApiboleto;
    buscaData: GxsdtItauApibuscaData;
    envio: GxsdtItauApienvio;
    baixa: GxsdtItauApibaixa;
    erro: GxsdtItauApierro[];
}
        