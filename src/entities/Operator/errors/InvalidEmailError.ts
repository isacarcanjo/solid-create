import { DomainError } from "../../error/DomainError"

export class InvalidEmailError extends Error implements DomainError {
    constructor(name: any) {
        super('The ' + name + ' is invalid.')
        this.name = 'InvalidEmailError'
    }
}
