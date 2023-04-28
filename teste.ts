const obterValoresDeLimites = (field?: string): any => {
  const imoveis = this.validationRules.configurations;
  const configuracoes = imoveis.find(imovel =>
    imovel?.property_type === 'RESIDENTIAL' &&
    imovel?.amortization_type === AmortizacaoEnum.SAC &&
    (!field || imovel?.configurations.find(config => config.field === field))
  )?.configurations;

  return field ? configuracoes?.find(config => config.field === field) : configuracoes;
};
