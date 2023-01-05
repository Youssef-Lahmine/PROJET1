import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addUser, deletUser, updateUser } from "./userSlice";
import { useSelector } from "react-redux";
const AddUserForm = () => {
  const [id, setId] = useState();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const handleChangeNom = (e) => setNom(e.target.value);
  const handleChangePrenom = (e) => setPrenom(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const dispatch = useDispatch();
  const onAddUserClicked = () => {
    if (nom && prenom && email) {
      dispatch(addUser({ id: nanoid(), nom, prenom, email }));
    }
    setNom("");
    setPrenom("");
    setEmail("");
  };
  const onUpdateUserClicked = () => {
    if (nom && prenom && email) {
      dispatch(updateUser({ id, nom, prenom, email }));
    }
    setNom("");
    setPrenom("");
    setEmail("");
    setId()
  }; 
  const handleChangeID = (val) => {
    setId(val);
  };
  const user = useSelector((state) => state.user);
  return (
    <div className="container">
      <form className="d-flex justify-content-center align-items-end">
        <label htmlFor="nom">
          Nom:
          <input className="form-control"
            type="text"
            id="nom"
            name="nom"
            value={nom}
            onChange={handleChangeNom}
          />
        </label>

        <label htmlFor="prenom">
          Prenom:
          <input className="form-control"
            type="text"
            id="prenom"
            name="prenom"
            value={prenom}
            onChange={handleChangePrenom}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input className="form-control"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>

        {!id ? (
          <button className="btn btn-primary" type="button" onClick={onAddUserClicked}>
            Add-User
          </button>
        ) : (
          <>
            <button className="btn btn-primary" type="button" onClick={onUpdateUserClicked}>
              Update-User
            </button>
            <input className="btn" type={"text"} value={id} disabled />
            <button className="btn btn-danger" onClick={() => setId()}>Anuler</button>
          </>
        )}
      </form>
      <div className="articles">
        {user.user.map((val, i) => (
          <article  className='card w-50 m-1' key={i}>
            <h1 className="card-header d-flex justify-content-center">{val.id}</h1>
            <div  className="card-body">
              <p>NOM: {val.nom}</p>
              <p>PRENOM: {val.prenom}</p>
              <p>EMAIL: {val.email}</p>
            </div>
            <div className="card-footer d-flex ">
              <button className="btn btn-danger" onClick={() => dispatch(deletUser(val.id))}>
              supprimer
            </button>
            <button className="btn btn-outline-primary" onClick={() => handleChangeID(val.id)}>modifier</button>
            </div>
            
          </article>
        ))}
      </div>
    </div>
  );
};
export default AddUserForm;
