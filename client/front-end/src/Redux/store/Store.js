import { configureStore } from "@reduxjs/toolkit";
import AllActionsData from "../actions/Actions";


const Store=configureStore({
    reducer:AllActionsData
})


export default Store;