import Opaque from "./Opaque";
import { Result, Err, Ok } from "seidr";

type Email = Opaque<string>;

function isValidEmail(possibleEmail: string): boolean {
  return possibleEmail.includes("@");
}

function fromString(possibleEmail: string): Result<Error, Email> {
  if (isValidEmail(possibleEmail)) {
    return Ok(possibleEmail as Email);
  } else {
    return Err(new Error(`${possibleEmail} is not a valid email`));
  }
}

function toString(email: Email): string {
  return email.toString();
}

export { Email, fromString, toString };
