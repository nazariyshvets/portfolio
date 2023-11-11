import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LANGUAGES } from "../constants/constants";
import Language from "../types/Language";

export const langSlice = createSlice({
  name: "lang",
  initialState: "uk-UA" as Language,
  reducers: {
    setLang: (state, action: PayloadAction<Language>) => {
      if (LANGUAGES.includes(action.payload)) {
        return action.payload;
      }
      return state;
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
