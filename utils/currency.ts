export const convertCurrency = (price: number, currency = 'MXN', numberFormat = 'es-MX') => {
  const convert = new Intl.NumberFormat(numberFormat, {
    style: 'currency',
    currency,
  });
  return convert.format(price);
};
