import React from "react";
import '../styles/Header.css'

function Header() {
    return (
    <body>
      <div className="Content-Container">
        <div className="left-panel">
          <button className="Button">Account Information</button>
          <button className="Button">Update Your Information</button>
          <button className="Button">Contact DMV</button>
        </div>
      </div>
    </body>
    )
}

export default Header;