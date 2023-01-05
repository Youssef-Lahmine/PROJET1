import React from 'react'
import { useState } from 'react'

export default function Mdfuser({updtUser,usr,check,setCheck}) {
    const [user,setUser]=useState(usr)
    const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };
    const modifierUser=(e)=>{
        e.preventDefault();
        updtUser(user);
        setCheck(!check)
    }
  return (
    <div className="card w-100 m-1">
        <form className="card-body">
            <label className="form-label">nom: <input className="form-control" value={user.nom} type={"text"} name="nom" onChange={handleChange} /></label><br/>
            <label className="form-label">prenom: <input className="form-control" value={user.prenom} type={'text'} name="prenom" onChange={handleChange} /></label><br/>
            <label className="form-label">email: <input className="form-control" value={user.email} type={"email"} name="email" onChange={handleChange} /></label><br/>
            <button  className="btn btn-primary w-100" onClick={modifierUser}>modifier</button>
        </form>
    </div>
  )
}
