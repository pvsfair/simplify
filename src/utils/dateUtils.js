const pad = (num, size) => {
  return ('000000000' + num).substr(-size);
};
const formatDate = date => {
  return `${pad(date.getHours(), 2)}h${pad(date.getMinutes(), 2)}`;
};

module.exports = {pad, formatDate};
