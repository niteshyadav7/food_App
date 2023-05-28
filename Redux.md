### REDUX TOOLKIT : FOR STATE MANAGEMENT

### MAKING THE STORE:

```
<!-- store.js -->

import {configureStore} from '@reduxjs/toolkit';

const store=configureStore({})

export default store;

```

### PROVIDING THE STORE :

```



import store from "./redux/store.js";
import {Provider} from "react-redux";

<Provider store={store}>
<Header />
<Body />
<Footer />
</>

```

### MAKLING SLICES

```
import {cartSlice} from "@reduxjs/toolkit"
<!-- missed it -->

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:["pinky","pooja","oshika","sadhana","ankita"]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItems:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items=[]
        }
    }
})

export default cartSlice.reducer;//Not reducers
export const {addItems,removeItems,clearCart}=cartSlice.actions
```
