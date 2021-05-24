import { DomainError } from "../../error/DomainError"

export class InvalidNameError extends Error implements DomainError {
    constructor(name: any) {
        super('The ' + name + ' is invalid.')
        this.name = 'InvalidNameError'
    }
}
