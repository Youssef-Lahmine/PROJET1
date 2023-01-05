 const addUser = (user) => {
  return {
    type: "ADD",
    user,
  };
};
const delUser=(id)=>{
  return{
    type : "DEL",
    id,
  }
}
const updtUser=(user)=>{
  return {
    type :"UPDT",
    user,
  }
}
export {addUser,delUser,updtUser}