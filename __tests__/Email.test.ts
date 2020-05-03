import * as Email from "../src/Email";
import { Err, Ok } from "seidr";

describe("Email", () => {
  describe("fromString", () => {
    it("creates an Email with a valid email string", () => {
      expect(Email.fromString("simon@example.com")).toEqual(
        Ok("simon@example.com")
      );
    });

    it("fails to create an Email with a invalid email string", () => {
      expect(Email.fromString("simon")).toEqual(
        Err(new Error("simon is not a valid email"))
      );
    });
  });

  describe("toString", () => {
    it("returns the string email", () => {
      const e = Email.fromString("simon@example.com").caseOf({
        Ok: (email) => email,
        Err: (_) => null,
      });

      if (e) {
        expect(Email.toString(e)).toEqual("simon@example.com");
      } else {
        expect(e).toBe("simon@example.com");
      }
    });
  });
});
