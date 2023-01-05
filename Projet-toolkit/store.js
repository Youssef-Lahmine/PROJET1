import { configureStore } from "@reduxjs/toolkit"; 
import u from "./userSlice";
const store=configureStore({
    reducer:{
        user: u
    }
})
export  default store