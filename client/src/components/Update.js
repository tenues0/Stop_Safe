import { useMutation } from "@apollo/react-hooks";
import React from "react";
import "../index.css"


function Update() {

  //   const [saveInsurance, { error }] = useMutation(SAVE_INSURANCE);
  //   const handleSaveInsurance = async (input) => {
  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const { data } = await saveInsurance({
  //       variables: { input },
  //     });

  //     // upon success, remove book's id from localStorage
  //     savePolicyId(input);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
                {/* <div className="update">Update your Insurance Company:</div>
                <input type="text"></input> */}
                <button className="SubmitBtn" >Submit</button>
                {/* onClick={() => handleSaveInsurance} */}
            </section>
        </>
    )
}

export default Update;