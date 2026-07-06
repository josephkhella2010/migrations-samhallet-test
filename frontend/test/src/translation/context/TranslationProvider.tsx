import { useSelector } from "react-redux";
import type { ReactNode } from "react";
import type { RootState } from "../../Store/store";
import { TranslationContext } from "./TranslationContext";
import type { TranslationMap } from "./TranslationContext";

export function TranslationProvider({ children }: { children: ReactNode }) {
  const lang = useSelector((state: RootState) => state.languageSlice.lang);

  const t = (text: TranslationMap) => {
    return text[lang] ?? text.sv ?? "";
  };

  return (
    <TranslationContext.Provider value={{ t }}>
      {children}
    </TranslationContext.Provider>
  );
}
