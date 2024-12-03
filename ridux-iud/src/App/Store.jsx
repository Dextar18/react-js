import { configureStore } from "@reduxjs/toolkit";
import  Slise  from "../Slise";

export const store = configureStore({
    reducer:{
        iudKey: Slise,
    },
});