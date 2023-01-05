
const initialState = {
  users: [
    { id: 1, nom: "nom 1", email: "email@gmail.com", prenom: "prenom 1"},
    { id: 2, nom: "nom 2", email: "gmail@gmail.com", prenom: "prenom 2"}
  ],
  error:false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const newUser={
        id:Math.floor(Math.random()*10),
        nom : action.user.nom,
        prenom : action.user.prenom,
        email : action.user.email,
      }
      var copy=[...state.users]
      let valid=true
      copy.map(val=>{
        if(newUser.id===val.id){
          valid=false;
        }
        })
      if(valid){
        return {
        ...state,
        users: state.users.concat(newUser),
        error:false,
        }
      }
      else return {
        ...state,
        error:true
      }
    case "DEL":
      return{
        ...state,
        users : state.users.filter(val=>val.id!=action.id),
      
      };
    case "UPDT":
      var copy=[...state.users]

      copy.map((val,i)=>{
        if(val.id==action.user.id){
          copy[i]=action.user
        }
      })
      return{
        ...state,
        users:copy
      }
  }
  return state;
};
export default reducer;  