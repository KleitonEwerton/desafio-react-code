import { useState } from "react";

//------------------------- CSS -------------------------//

import "./styles/AddMember.css";
import "./styles/MembersAdm.css";

//-------------------------------------------------------//

export default function AddMember() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [departamento, setDepartamento] = useState([]);
  const [cargo, setCargo] = useState("");
  const host = "http://localhost:5000/members/";

  const submit = (e) => {
    e.preventDefault();
    const departamentos = departamento.split(",");
    const member = { name, email, aniversario, departamentos, cargo };
    console.log(member);

    fetch(host, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(member),
    }).then(() => {
      window.location.href = "http://localhost:3000/adm/members/";
    });
  };

  return (
    <div className="member-page">
      <form className="form-add-member" onSubmit={submit}>
        <img className="add-member-img" src="/images/user.png"></img>

        <label>Name</label>
        <input
          required
          placeholder="ex: name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>e-mail</label>
        <input
          placeholder="ex: name.lastname@fhjuridica.com.br"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>birthday</label>
        <input
          required
          placeholder="ex: 01/01"
          type="text"
          value={aniversario}
          onChange={(e) => setAniversario(e.target.value)}
        />

        <label>department</label>
        <input
          required
          placeholder="ex: VPGG, Comercial"
          type="text"
          value={departamento}
          onChange={(e) => setDepartamento(e.target.value)}
        />

        <label>cargo</label>
        <input
          required
          placeholder="ex: assessor"
          type="text"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />

        <input type="submit" name="Add" value="ADICIONAR" />
      </form>
    </div>
  );
}
