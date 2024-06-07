import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {

        // Vanilla(older) Redux => Don't mutate the state , returning was also mandatory
        // const newState = [...state];
        // newState.items.push(action.payload);
        // return newState;

        // Redux toolkit
        //We have to either mutate the state or return the new state
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItems: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0
            // state = [], this wont work bec we are not mutating the state (same explanation as above)

        }
    }
})


export const { addItem, removeItems, clearCart } = cartSlice.actions

export default cartSlice.reducer


