var { formatType } = require('../utils')

module.exports = (name, fieldsArray) => {
    let array = fieldsArray && fieldsArray.map(item => formatType(item))

    return `import { Either } from "../../shared/either"
${array && array.map(item => `import { Invalid${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}Error } from "./errors/Invalid${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}Error";
`).join('')}
export interface I${name} {
${array && array.map(item => `  ${item.name}: ${item.type}`).join(',\n')}
}
export type T${name}ResponseError = ${array && array.map((item, index) => array.length == index + 1 ? ` Invalid${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}Error`: `Invalid${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}Error | `).join('')}
export type T${name}Response = Either<T${name}ResponseError, I${name}>

`
}
