import { createContext } from "react";

export const creditCardDefault = {
  cardHolder: "",
  cardNumber: "",
  expireDate: "",
  cvc: "",
};

export const CreditCardContext = createContext(creditCardDefault);
