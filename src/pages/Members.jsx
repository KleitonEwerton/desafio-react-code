import React, { Component, useEffect, useState } from "react";
import Card from "../components/Card";

//------------------------- CSS -------------------------//

import "../index.css";
import "../styles.css";

//-------------------------------------------------------//
//http://localhost:5000/members
function Members() {
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
    <div className="App-header">
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          width: "70%",
          justifyContent: "center",
          alignContent: "spaceBetween",
        }}
      >
        {
          members.map((member,index) => (
            <Card key={index}
              id={member.id}
              name={member.name}
              email={member.email}
              post={member.cargo}
              departments={member.departamentos}
              birthday={member.aniversario}
            />
          ))
          }
      </div>
    </div>
  );
}

export default Members;
