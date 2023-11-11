import { createSlice } from "@reduxjs/toolkit";

type ThemeState = "light" | "dark";

export const themeSlice = createSlice({
  name: "theme",
  initialState: "light" as ThemeState,
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
