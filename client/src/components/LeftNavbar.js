import React from "react";
import '../styles/Header.css'

function Header({setPage, Account, Update, Contact}) {
    return (
    <>
      <div className="Content-Container">
        <div className="left-panel">
          <button onClick={() => setPage(<Account/>)} className="btn">Account Information</button>
          <button onClick={() => setPage(<Update/>)} className="btn">Update Your Information</button>
          <button onClick={() => setPage(<Contact/>)} className="btn">Contact DMV</button>
        </div>
      </div>
    </>
    )
}

export default Header;