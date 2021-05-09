import {createSlice} from "@reduxjs/toolkit"

const initialState=[]

const reminderSlice= createSlice({
    name:"reminder",
    initialState,
    reducers:{
        reminderAdded(state,action){
            state.push(action.payload);
        },
        reminderDeleted(state,action){
           return state.filter((e)=>e.id !==action.payload.id)
        }
    }
})

export const {reminderAdded,reminderDeleted}=reminderSlice.actions
export default reminderSlice.reducer