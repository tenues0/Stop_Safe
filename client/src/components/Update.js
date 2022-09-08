import React from "react";
import "../index.css"


function Update() {
    return (
        <>
            <section className="update-Info">
                <h1>To Make any changes to your account information please update your information here.</h1>
                <div className="update">Update phone number:</div>
                <input type="text"></input>
                <div className="update">Update email address:</div>
                <input type="text"></input>
                <div className="update">Update Driver License #:</div>
                <input type="text"></input>
                <div className="update">Update Policy #:</div>
                <input type="text"></input>
                <div className="update">Update your Insurance Company:</div>
                <input type="text"></input>
                <button className="SubmitBtn">Submit</button>
            </section>
        </>
    )
}

export default Update;