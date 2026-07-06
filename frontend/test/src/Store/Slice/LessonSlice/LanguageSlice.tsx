import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LanguageType } from "../../../utilities/Interfaces";

interface LanguageState {
  lang: LanguageType;
}

const languageStore = localStorage.getItem("lang") as LanguageType | null;

const initialState: LanguageState = {
  lang: languageStore ?? "sv", // default language
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<LanguageType>) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const { setLang } = languageSlice.actions;
export default languageSlice.reducer;
