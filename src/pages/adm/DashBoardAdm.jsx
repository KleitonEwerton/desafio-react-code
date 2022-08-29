import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";

import {
  AiOutlineUserAdd,
  AiFillEdit,
  AiFillDelete,
  AiFillEye,
} from "react-icons/ai";

import "./styles/DashBoardAdm.css";
import "../../styles.css";
import deleteMember from "./controllers/ControllerDashBoardAdm";

function DashBoardAdm() {
  let host = "http://localhost:5000/members/";

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
      <SideBar></SideBar>
      <div className="dashBoard">
        <table className="membersTable">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Util</th>
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

export default DashBoardAdm;
