import React, { useState } from "react";
import styled from "styled-components";
import Mdfuser from "./modifier";
export default function User({ user, delUser, updtUser }) {
  const [check, setCheck] = useState(true);
  return (
    <div>
      {check ? (
        
        <article className=" card w-100 m-1">
          <h1 className="card-header d-flex justify-content-center">{user.id}</h1>
          <div className="card-body">
            <p>
              Nom : <Span>{user.nom}</Span>
            </p>
            <p>
              prenom : <Span>{user.prenom}</Span>
            </p>
            <p>
              Email : <Span>{user.email}</Span>
            </p>
            
          </div>
          
          <div className="card-footer">
            <button className="btn btn-danger m-1" onClick={() => delUser(user.id)}>
              suprimmer
            </button>
            <button
              className="btn btn-outline-primary m-1"
              onClick={(e) => setCheck(!check)}
            >
              modifier
            </button>
          </div>
        </article>
      ) : (
        <>
          <Mdfuser updtUser={updtUser} usr={user} check={check} setCheck={setCheck}/>
        </>
      )}
    </div>
  );
}
const Span = styled.span`
  color: green;
  font-weight: 700;
`;
