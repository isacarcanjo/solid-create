var { formatType } = require('../utils')

module.exports = (name, type) => {
    let namelower = name.charAt(0).toLocaleLowerCase() + name.slice(1)

    return `import { Either, left, right } from "../../shared/either";
import { Invalid${name.charAt(0).toLocaleUpperCase() + name.slice(1)}Error } from "./errors/Invalid${name.charAt(0).toLocaleUpperCase() + name.slice(1)}Error";

export class ${name} {
    
    constructor(
        public readonly name: ${type},
    ) {
        Object.freeze(this);
    }
        
    public static create(data: ${type}): Either<Invalid${name.charAt(0).toLocaleUpperCase() + name.slice(1)}Error, ${name}> {
        if (!${name.charAt(0).toLocaleUpperCase() + name.slice(1)}.validate(data)) {
            return left(new Invalid${name.charAt(0).toLocaleUpperCase() + name.slice(1)}Error(data))
        }
        
        return right(new ${name}(data))
    }

    get value(): ${name} {
        return this
    }
        
    static validate(${name.charAt(0).toLocaleLowerCase() + name.slice(1)}: ${type}) {
        if (!${name.charAt(0).toLocaleLowerCase() + name.slice(1)}) {
            return false
        }
        return true;
    }
}
`
}
