import { createContext } from "react";

export type TranslationMap = Record<string, string>;

export type TranslationContextType = {
  t: (text: TranslationMap) => string;
};

export const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);