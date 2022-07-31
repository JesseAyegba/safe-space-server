import crypto from "crypto";

export const generateRandomString = (numberOfCharacters: number) => {
  return crypto.randomBytes(numberOfCharacters).toString("hex");
};
