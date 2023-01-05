import React from 'react'
import { useState } from 'react'

export default function AddUser({saveUser,error}) {
    const [user,setUser]=useState()
    const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };
    const ajouterUser=(e)=>{
        e.preventDefault();
        saveUser(user)
    }
  return (
    <div className='container' >
        <form className='d-flex justify-content-center align-items-end'>
            <label className='form-label'>nom: <input className='form-control' type={"test"} name="nom" onChange={handleChange} required/></label>
            <label className='form-label'>prenom: <input className='form-control' type={"prenom"} name="tel" onChange={handleChange} required/></label>
            <label className='form-label'>email: <input className='form-control' type={"email"} name="email" onChange={handleChange} required/></label>
            <label className='form-label'><input value={"ajouter"} className='btn btn-primary' type={"submit"} onClick={ajouterUser}/></label>
        </form>
        {
          error&&<div className="alert-danger d-flex justify-content-center rounded-3 p-1">USER {user.id} EST DEJA ENREGISTRER</div>
        }
    </div>
  )
}
