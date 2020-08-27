export const assign = (...o) => Object.assign({}, ...o)

export const values = (o) => Object.values(o)

export const objOf = (k, o) => ({ [k]: o })

export const toLower = (s) => String(s).toLocaleLowerCase()
