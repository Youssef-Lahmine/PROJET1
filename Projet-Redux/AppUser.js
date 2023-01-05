import React from 'react'
import AddUser from './AddUser'
import { connect } from "react-redux";
import User from './User'
import { addUser,delUser,updtUser} from './Action';
function AppUser({users,error,saveUser,delUser,updtUser}) {
  console.log(error)
  return (
    <div>
        <AddUser saveUser={saveUser} error={error} />
        {users.map((user) => (
        <div key={user.id} className="d-flex justify-content-center w-100">
            <User className="w-100" key={user.id} user={user} delUser={delUser} updtUser={updtUser}/>
        </div>
    ))}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
    error:state.error
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: val => dispatch(addUser(val)),
    delUser: id =>dispatch(delUser(id)),
    updtUser: val =>dispatch(updtUser(val))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AppUser);
 