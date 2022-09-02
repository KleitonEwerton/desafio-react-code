import { useRef, useState } from "react";
import "./styles/AddMember.css";

const AddMember = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [aniversario, setAniversario] = useState('');
  const [departamento, setDepartamento] = useState([]);
  const [cargo, setCargo] = useState('');
  const host = "http://localhost:5000/members/";

  const submit = (e) => {
    e.preventDefault();
    const departamentos = departamento.split(",")
    const member = {name, email,aniversario,departamentos,cargo};
    console.log(member);

    fetch(host, {
      method: "POST",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify(member)
      
    })
      .then(()=>{
        console.log(201);
      })
      
  };

  return (
    <div className="AddMember">
      <form className="form-add-member" onSubmit={submit}>
        <label>Name</label>
        <input placeholder="ex: name" type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
        
        <label>e-mail</label>
        <input placeholder="ex: name.lastname@fhjuridica.com.br" type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        
        <label>birthday</label>
        <input placeholder="ex: 01/01" type="text"  value={aniversario} onChange={(e)=>setAniversario(e.target.value)}/>
        
        <label>department</label>
        <input placeholder="ex: VPGG, Comercial" type="text"  value={departamento} onChange={(e)=>setDepartamento(e.target.value)}/>

        <label>cargo</label>
        <input placeholder="ex: assessor" type="text"  value={cargo} onChange={(e)=>setCargo(e.target.value)}/>
        
        <input  type="submit" name="Add" />
      </form>
    </div>
  );
}
export default AddMember;
