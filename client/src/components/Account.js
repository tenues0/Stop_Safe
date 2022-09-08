import React from "react";
import "../index.css"


function Account() {
    return (
        <>
        <div className="Card-Container">
            <div className="cardQR"></div>
            <div className="text-Container">
                <div className="Name">Bob Bubba</div>
                <div className="phoneNum">12083718021</div>
                <div className="email">BobbyBobafer@bobs.com</div>
            </div>
        </div>
        <div className="Driver-Container">
            <div className="DriverInfo">
                <div className="License">Driver License #:</div>
                <div className="Policy">Policy #:</div>
                <div className="Insurance">Insurance Company:</div>
            </div>

        </div>
        </>
    )
}

export default Account;