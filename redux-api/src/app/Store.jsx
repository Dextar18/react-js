import { configureStore } from "@reduxjs/toolkit";
import  Slice  from "../Compo/Slice";


export const store = configureStore({
    reducer: {
        ApiKey: Slice,
    },
})