import { createSlice } from "@reduxjs/toolkit";
import { languageOptions } from "../constants/languagesOptions";

const initialState = {
    lang: { ...languageOptions[0] },
};

export const languageSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        setLanguage: ({}, { payload }) => {
            return payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
