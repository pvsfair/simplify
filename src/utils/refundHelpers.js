const statusTransformer = {
  DENIED: 'Não Aprovado',
  APPROVED: 'Aprovado',
  WAITING: 'Aguardando',
};

const statusColorTransformer = {
  DENIED: '#EB0028',
  APPROVED: '#82C85A',
  WAITING: '#FAB932',
};

const refundTypes = {
  TRANSPORTE: 'Trasnporte',
  EDUCACAO: 'Educação',
  ALIMENTACAO: 'Alimentação',
  MOVEL: 'Móvel',
  ELETRODOMESTICO: 'Eletrodoméstico',
  CORREIOS: 'Correios',
  OUTROS: 'Outros',
};

module.exports = {statusTransformer, statusColorTransformer, refundTypes};
