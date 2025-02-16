import { createSlice } from "@reduxjs/toolkit"; 

function AddOn(prev) {
    return prev+1;
}

function SubOn(prev) {
    return prev-1;
}

const counterSlice = createSlice({
    initialState: 0,
    name: "counter",
    reducers: {
        addon: AddOn,
        subon: SubOn
    }
})

export const { addon, subon } = counterSlice.actions;
export default counterSlice.reducer;