import React, { useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

import deleteMember from "./controllers/MembersAdmController";

//------------------------- CSS -------------------------//

import "./styles/MembersAdm.css";
import "../../styles.css";

//-------------------------------------------------------//

const host = "http://localhost:5000/members/";
const hostPages = "/adm/members/";

function MembersAdm() {
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
      <div className="member-page">
        <div className="members-bar">
          <div className="item-member-bar">
            <Link className="link-member-bar" to="/adm">
              <img src="/images/back.png" />
            </Link>
          </div>
          <div className="item-member-bar">
            <Link className="link-member-bar" to={hostPages + "addmember"}>
              <img src="/images/plus.png" />
            </Link>
          </div>
        </div>
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
              <tr
                key={member.id}
                className={
                  index % 2 == 0 ? "row-table-members2" : "row-table-members1"
                }
              >
                <td className="line-table-members">{member.name}</td>
                <td className="line-table-members"> {member.email}</td>
                <td className="line-table-members">
                  <Link
                    to={hostPages + "viewmember/" + member.id}
                    className="button-dsb "
                    style={{ color: "blue" }}
                  >
                    <AiFillEye></AiFillEye>
                  </Link>
                  <Link
                    to={hostPages + "editmember/" + member.id}
                    className="button-dsb "
                    style={{ color: "green" }}
                  >
                    <AiFillEdit></AiFillEdit>
                  </Link>
                  <button
                    className="button-dsb "
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
