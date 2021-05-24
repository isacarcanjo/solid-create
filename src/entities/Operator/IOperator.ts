import { Either } from "../../shared/either"
import { InvalidNameError } from "./errors/InvalidNameError";
import { InvalidEmailError } from "./errors/InvalidEmailError";

export interface IOperator {
  name: string,
  email: string
}
export type TOperatorResponseError = InvalidNameError |  InvalidEmailError
export type TOperatorResponse = Either<TOperatorResponseError, IOperator>

