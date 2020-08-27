import { assign, values, objOf } from '../helpers'

const flattenItem = (acc, item) =>
  assign(acc, objOf(item.type, [].concat(acc[item.type] || [], item)))

export const toGroups = (items) => values(items.reduce(flattenItem, {}))

export const toItem = (items) =>
  items.reduce(
    (acc, item) =>
      assign(acc, item, {
        unitPrice: item.price,
        price: acc.price + item.price,
        count: acc.count + 1,
      }),
    { price: 0, count: 0 }
  )

export const cartTotal = (items) =>
  toCurrency(items.reduce((total, item) => total + item.price, 0))

export const toCurrency = (currency, separator = ',', decimal = '.') => {
  const [dollars, cents] = `${currency}`.replace(/^-/, '').split('.')
  return (
    dollars.replace(/(\d)(?=(\d{3})+\b)/g, '$1' + separator) +
    (cents ? decimal + cents.slice(0, 2) : '')
  )
}
