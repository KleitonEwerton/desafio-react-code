import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  AiOutlineUserAdd,
  AiFillEdit,
  AiFillDelete,
  AiFillEye,
  AiOutlinePlusSquare,
} from "react-icons/ai";

import "./styles/MembersAdm.css";
import "../../styles.css";
import deleteMember from "./controllers/MembersAdmController";

// Modal.setAppElement("#root");
const host = "http://localhost:5000/members/";

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const custonStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
    },
  };

  return (
    <div>
      <div className="dashBoard">
        <div className="members-bar">
          <button onClick={handleOpen}>
            <AiOutlinePlusSquare></AiOutlinePlusSquare>
          </button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            
          </Modal>
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
