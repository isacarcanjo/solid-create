module.exports = (name) => `import { DomainError } from "../../error/DomainError"

export class Invalid${name}Error extends Error implements DomainError {
    constructor(name: any) {
        super('The ' + name + ' is invalid.')
        this.name = 'Invalid${name}Error'
    }
}
`