import React from "react";
import "../index.css"

function LeftNavbar({setPage, Account, Update, Contact}) {
    return (
    <>
        <div className="left-panel">
          <button onClick={() => setPage(<Account/>)} className="btn">Profile</button>
          <button onClick={() => setPage(<Update/>)} className="btn">Update Information</button>
          <button onClick={() => setPage(<Contact/>)} className="btn">Contact DMV</button>
        </div>
    </>
    )
}

export default LeftNavbar;