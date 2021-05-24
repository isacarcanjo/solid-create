import { Either, left, right } from "../../shared/either";
import { InvalidEmailError } from "./errors/InvalidEmailError";

export class Email {
    
    constructor(
        public readonly name: string,
    ) {
        Object.freeze(this);
    }
        
    public static create(data: string): Either<InvalidEmailError, Email> {
        if (!Email.validate(data)) {
            return left(new InvalidEmailError(data))
        }
        
        return right(new Email(data))
    }

    get value(): Email {
        return this
    }
        
    static validate(email: string) {
        if (!email) {
            return false
        }
        return true;
    }
}
