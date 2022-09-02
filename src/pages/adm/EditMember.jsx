import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

//------------------------- CSS -------------------------//

import "./styles/AddMember.css";
import "./styles/MembersAdm.css";
import "./styles/EditMember.css";

//-------------------------------------------------------//

const EditMember = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [cargo, setCargo] = useState("");
  const { id } = useParams();
  const hostPages = "http://localhost:5000/members/";
  const host = hostPages + id;

  const [member, setMember] = useState({});

  const getMember = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMember(data);
    setName(data.name);
    setEmail(data.email);
    setAniversario(data.aniversario);
    setDepartamento(data.departamentos.map((department) => department + ","));
    setCargo(data.cargo);
  };

  useEffect(() => {
    getMember(host);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    let departamentos = departamento.toString().split(",");
    departamentos = departamentos.filter((i) => i);
    const member = { name, email, aniversario, departamentos, cargo };

    fetch(host, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(member),
    }).then(() => {
      window.location.href = "http://localhost:3000/adm/members/";
    });
  };

  return (
    <div className="member-page">
      <form className="form-edit-member" onSubmit={submit}>
        <img className="edit-member-img" src="/images/user.png"></img>

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
          required
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
          placeholder="ex: VPGG Comercial"
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

        <input type="submit" name="Add" value="SAVE" />
      </form>
    </div>
  );
};
export default EditMember;
