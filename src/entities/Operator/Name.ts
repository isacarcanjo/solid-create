import { Either, left, right } from "../../shared/either";
import { InvalidNameError } from "./errors/InvalidNameError";

export class Name {
    
    constructor(
        public readonly name: string,
    ) {
        Object.freeze(this);
    }
        
    public static create(data: string): Either<InvalidNameError, Name> {
        if (!Name.validate(data)) {
            return left(new InvalidNameError(data))
        }
        
        return right(new Name(data))
    }

    get value(): Name {
        return this
    }
        
    static validate(name: string) {
        if (!name) {
            return false
        }
        return true;
    }
}
