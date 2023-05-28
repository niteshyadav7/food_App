import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
/**
 * ⛔CREATE THE "STORE.JS"⛔
 * import {configureStore} from "@reduxjs/toolkit";
 *
 *
 * const store=configureStore({
 *  reducer:{
 * cart:cartSlice,
 * user:userSlice
 * }
 *   })
 * export default store;
 *
 * ⛔PROVIDE THE PROVIDER TO APP⛔
 *
 * import {Provider} from "react-redux";
 * import store from "./store.js"
 *
 *
 * <Provider store={store}>
 *
 * <Header />
 * <Body />
 * <Footer />
 *
 * <Provider />
 *
 *⛔MAKING THE CARTSLICE⛔
 *
 * import {createSlice} from "@reduxjs/toolkit"
 *
 *
 * const cartSlice=createSlice({
 * name:"cart",
 * initialState:{
 * items:["abc","bcd"]
 * },
 * reducers:{
 * addItems:(state,action)=>{
 * state.items.push(action.payload)
 * },
 * clearCart:(state,action)=>{
 * state.items=[]}
 * }
 * })
 *export default cartSlice.reducer;
 *export const {addItems,clearItems}=cartSlice.actions
 *
 *
 *
 */
