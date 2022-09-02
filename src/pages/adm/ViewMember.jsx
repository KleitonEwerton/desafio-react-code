import { useEffect } from "react";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";

//------------------------- CSS -------------------------//

import "./styles/AddMember.css";
import "./styles/MembersAdm.css";
import "./styles/ViewMember.css";

//-------------------------------------------------------//

const ViewMember = (props) => {
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

  return (
    <div className="member-page">
      <img className="view-member-img" src="/images/user.png"></img>
      <form className="form-view-member">
        <label>Name</label>
        <input placeholder="ex: name" type="text" value={name} disabled />

        <label>e-mail</label>
        <input
          placeholder="ex: name.lastname@fhjuridica.com.br"
          type="email"
          value={email}
          disabled
        />

        <label>birthday</label>
        <input
          placeholder="ex: 01/01"
          type="text"
          value={aniversario}
          disabled
        />

        <label>departments</label>
        <input
          placeholder="ex: VPGG Comercial"
          type="text"
          value={departamento}
          disabled
        />

        <label>cargo</label>
        <input placeholder="ex: assessor" type="text" value={cargo} disabled />

        <a href="http://localhost:3000/adm/members/">BACK</a>
      </form>
    </div>
  );
};
export default ViewMember;
