import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
// import { IconName } from "react-icons/bs";
import { AiOutlineUserAdd,AiFillEdit,AiFillDelete,AiFillEye } from "react-icons/ai";

import './DashBoardAdm.css';
import "../../styles.css";


function DashBoardAdm() {
  const [members, setMembers] = useState([]);

  const getMembers = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMembers(data);
  };

  useEffect(() => {
    const urlMembers = "http://localhost:5000/members";
    getMembers(urlMembers);
  }, []);

  return (
    <div>
      <SideBar></SideBar>
      <div className="dashBoard">
        <table className="membersTable">
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cargo</th>
            <th>Util</th>
          </tr>
          {members.map((member, index) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td> {member.email}</td>
              <td>{member.cargo}</td>
              <td><AiFillEdit></AiFillEdit><AiFillDelete></AiFillDelete><AiFillEye></AiFillEye></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default DashBoardAdm;
