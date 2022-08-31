import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  AiOutlineUserAdd,
  AiFillEdit,
  AiFillDelete,
  AiFillEye,AiOutlinePlusSquare
} from "react-icons/ai";

import "./styles/MembersAdm.css";
import "../../styles.css";
import deleteMember from "./controllers/MembersAdmController";

Modal.setAppElement("#root");

function MembersAdm() {
  let host = "http://localhost:5000/members/"; //API localhost

  const [members, setMembers] = useState([]);

  const getMembers = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMembers(data);
  };

  useEffect(() => {
    getMembers(host);
  }, []);



  return (
    <div>
      <div className="dashBoard">
       <div className="members-bar"><button><AiOutlinePlusSquare></AiOutlinePlusSquare></button></div>
        <table className="members-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Controllers</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={member.id} className={ index%2==0?'row-table-members2':'row-table-members1'}>
                <td className="line-table-members">{member.name}</td>
                <td className="line-table-members"> {member.email}</td>
                <td className="line-table-members">
                  <button className="button-dsb buttonView-dsb">
                    <AiFillEye></AiFillEye>
                  </button>
                  <button className="button-dsb buttonEdit-dsb">
                    <AiFillEdit></AiFillEdit>
                  </button>
                  <button
                    className="button-dsb buttonDelete-dsb"
                    onClick={() => deleteMember(member.id)}
                    style={{ color: "red" }}
                  >
                    <AiFillDelete></AiFillDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MembersAdm;
