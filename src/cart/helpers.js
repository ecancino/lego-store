import { assign, values, objOf } from '../helpers'

export const toGroups = items => values(items.reduce((acc, item) => assign(
    acc,
    objOf(item.type, [].concat(acc[item.type] || [], item))), {})
)

export const toItem = items => items.reduce((acc, item) => assign(acc, item, {
    price: acc.price + item.price,
    count: acc.count + 1,
}), { price: 0, count: 0 })


export const cartTotal = items =>
    toCurrency(items.reduce((total, item) => total + item.price, 0))


// export const toCurrency = n => n.toFixed(2)


export const toCurrency = (currency, { separator = ',', decimal = '.', } = {}) => {
    let split = ('' + currency).replace(/^-/, '').split('.'),
        dollars = split[0],
        cents = split[1];

    return dollars.replace(/(\d)(?=(\d{3})+\b)/g, '$1' + separator) + (cents ? decimal + cents.slice(0, 2) : '');
}