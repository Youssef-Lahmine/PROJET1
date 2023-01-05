import { createSlice } from "@reduxjs/toolkit";
const initialState ={user: [
  { id: 1, nom: "lhm", prenom: "youssef", email: "youssef@gmail.com" },
  { id: 2, nom: "agdar", prenom: "mohammed", email: "agdar@gmail.com" }
]};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user.push(action.payload);
    },
    deletUser(state,action){
      state.user=state.user.filter((val)=>val.id!=action.payload)
    },
    updateUser(state,action){
      const copy =[...state.user]
      copy.map((val,i)=>{
        if(val.id==action.payload.id){
          copy[i]=action.payload
        }}
      )
      state.user=copy
    }
  },
});

export const { addUser,deletUser,updateUser } = usersSlice.actions;
export default usersSlice.reducer;
