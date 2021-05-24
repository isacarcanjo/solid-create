import { Either, left, right } from "../../shared/either";
import { IOperator, TOperatorResponseError } from "./IOperator";
import { InvalidNameError } from "./errors/InvalidNameError";
import { InvalidEmailError } from "./errors/InvalidEmailError";

import { Name } from "./Name";
import { Email } from "./Email";


export class Operator {
    constructor(
        public readonly name: string,
        public readonly email: string,
        
    ) {
        Object.freeze(this);
    }
        
    public static create(operatorData: IOperator): Either<TOperatorResponseError, Operator> {
        const nameOrError: Either<InvalidNameError, Name> = Name.create(operatorData.name)
        const emailOrError: Either<InvalidEmailError, Email> = Email.create(operatorData.email)
        
        
        if (nameOrError.isLeft()) {
            return left(new InvalidNameError(nameOrError.value))
        }
        if (emailOrError.isLeft()) {
            return left(new InvalidEmailError(emailOrError.value))
        }
        
        const name: Name = nameOrError.value
        const email: Email = emailOrError.value
        
        return right(new Operator(name.value, email.value))
    }

    get value(): Operator {
        return this
    }
        
    static validate(name: string, email: string) {
        if (!name) {
            return false
        }
        if (!email) {
            return false
        }
        
        return true;
    }
}
