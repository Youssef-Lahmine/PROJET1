import React, { useState } from "react";

export default function User() {
  const [data, setData] = useState([
    {
      id: 11,
      nom: "lahmine",
      prenom: "youssef",
      email: "youssef.lhm@gmail.com",
    },
  ]);
  const [nvdata, setNvdata] = useState({});
  const handelChange = (e) => {
    const { name, value } = e.target;
    setNvdata({ ...nvdata, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setData([...data, nvdata]);
  };
  const deletUser = (index) => {
    setData(data.filter((val, i) => i != index));
  };
  const modifier = (ind) => {
    const copy = [data];
    copy[ind] = nvdata;
    setData(copy);
  };
  return (
    <div className="container">
      <form className="d-flex justify-content-center align-items-end">
        <label className="form-lable">
          id :
          <input
            className="form-control"
            name="id"
            type={"text"}
            onChange={handelChange}
          />
        </label>
        <label>
          nom :
          <input
            className="form-control"
            name="nom"
            type={"text"}
            onChange={handelChange}
          />
        </label>
        <label>
          prenom :
          <input
            className="form-control"
            name="prenom"
            type={"text"}
            onChange={handelChange}
          />
        </label>
        <label>
          email :
          <input
            className="form-control"
            name="email"
            type={"text"}
            onChange={handelChange}
          />
        </label>
        <button
          className="btn btn-primary"
          type={"submit"}
          onClick={handelSubmit}
        >
          Add-User
        </button>
      </form>
      <div className="articles">
        {data.map((val, i) => (
          <article key={i} className='card w-25 m-1'>
            <h1 className="card-header d-flex justify-content-center">{val.id}</h1>
            <div className="card-body">
              <p>
                nom : <span>{val.nom}</span>
              </p>
              <p>
                prenom : <span>{val.prenom}</span>
              </p>
              <p>
                email : <span>{val.email}</span>
              </p>
            </div>

            <div className="card-footer d-flex ">
              <button className="btn btn-danger" onClick={() => deletUser(i)}>supprimer</button>
              <button className="btn btn-outline-primary" onClick={() => modifier(i)}>modifier</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
