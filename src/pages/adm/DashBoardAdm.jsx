import { Link } from "react-router-dom";

//------------------------- CSS -------------------------//

import "./styles/DashBoardAdm.css";

//-------------------------------------------------------//

export default function DashBoardAdm() {
  return (
    <div className="dashBoard">
      <Link to="/adm/members/" className="card">
        <img src="/images/user.png"></img>
        <div>MEMBERS</div>
      </Link>
    </div>
  );
}
