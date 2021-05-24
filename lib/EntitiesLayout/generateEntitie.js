var { formatType } = require('../utils')

module.exports = (name, fieldsArray) => {
    let namelower = name.charAt(0).toLocaleLowerCase() + name.slice(1)

    let array = fieldsArray && fieldsArray.map(item => formatType(item))

    return `import { Either, left, right } from "../../shared/either";
import { I${name}, T${name}ResponseError } from "./I${name}";
${array && array.map(item => `import { Invalid${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}Error } from "./errors/Invalid${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}Error";
`).join('')}
${array && array.map(item => `import { ${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)} } from "./${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}";
`).join('')}

export class ${name} {
    constructor(
        ${array && array.map(item => `public readonly ${item.name.charAt(0).toLocaleLowerCase() + item.name.slice(1)}: ${item.type},
        `).join('')}
    ) {
        Object.freeze(this);
    }
        
    public static create(${namelower}Data: I${name}): Either<T${name}ResponseError, ${name}> {
        ${array && array.map(item =>
        `const ${item.name.charAt(0).toLocaleLowerCase() + item.name.slice(1)}OrError: Either<Invalid${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}Error, ${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}> = ${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}.create(${namelower}Data.${item.name.charAt(0).toLocaleLowerCase() + item.name.slice(1)})
        `
    ).join('')}
        
        ${array && array.map(item =>
        `if (${item.name.charAt(0).toLocaleLowerCase() + item.name.slice(1)}OrError.isLeft()) {
            return left(new Invalid${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}Error(${item.name.charAt(0).toLocaleLowerCase() + item.name.slice(1)}OrError.value))
        }
        `).join('')}
        ${array && array.map(item =>
            `const ${item.name.charAt(0).toLocaleLowerCase() + item.name.slice(1)}: ${item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)} = ${item.name.charAt(0).toLocaleLowerCase() + item.name.slice(1)}OrError.value
        `
        ).join('')}
        return right(new ${name}(${array && array.map(item => item.name.charAt(0).toLocaleLowerCase() + item.name.slice(1) + '.value').join(', ')}))
    }

    get value(): ${name} {
        return this
    }
        
    static validate(${array && array.map((item, i) => array.length == i + 1 ? item.name.charAt(0).toLocaleLowerCase() + item.name.slice(1) + ': '+ item.type : item.name.charAt(0).toLocaleLowerCase() + item.name.slice(1) + ': ' + item.type).join(', ')}) {
        ${array && array.map(item =>
            `if (!${item.name.charAt(0).toLocaleLowerCase() + item.name.slice(1)}) {
            return false
        }
        `).join('')}
        return true;
    }
}
`
}
