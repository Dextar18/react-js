import { createSlice } from "@reduxjs/toolkit";

export const Slise = createSlice({
    name: "Slice",
    initialState: {data: []},
    reducers: {
        addData:(state,action)=>{
            state.data.push(action.payload)
        },
        deleteDate:(state,action)=>{},
        UpdateDate:(state,action)=>{},

}})
export const {addData,deleteDate,UpdateDate} = Slise.actions;
export default Slise.reducer;