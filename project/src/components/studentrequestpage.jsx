import React from "react";
// import pic from "./image6.png"
// import accountpic from "./accountImage.png";
// import pencilImage from "./pencilImage.png";
export default function StudentRequestPage(){
    
    const [userData, setUserData] = React.useState({
        name: "Hrithik",
        rollNo: "2022073031",
        course: "MCA",
        branch: "ITCA"
    });

    const [userRequestData, setUserRequestData] = React.useState({
        address: "",
        transactionNumber: "",
        contactNumber: ""
    });

    function handleUserRequestData(event){
        const fieldName=event.target.getAttribute('name');
        const fieldValue= event.target.value;

        const newRequestData = {...userRequestData};
        newRequestData[fieldName] = fieldValue;

        setUserRequestData(newRequestData);
    }

    function handleSubmitRequestData(event){
        event.preventDefault();
    }

    return (
        <div className="studentRequestDiv">
            <img src={pic} className="image6" alt="mmmut"></img>
            <h2 id="studentReqText">STUDENT REQUEST PAGE</h2>
            <div className="student-req-mid-section">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Roll No</th>
                            <th>Course</th>
                            <th>Branch</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{userData.name}</td>
                            <td>{userData.rollNo}</td>
                            <td>{userData.course}</td>
                            <td>{userData.branch}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="user-account">
                    <img src={accountpic} className="useraccount-pic" alt="user account pic"></img>
                    <h3>EDIT YOUR PROFILE</h3>
                    <img src={pencilImage} className="pencil-image" alt="pencil"></img>
                </div>
            </div>

            <form onSubmit={handleSubmitRequestData}>
                <div className="labelAndInput">
                    <label htmlFor="userAddress">
                        Enter Your Present Address
                    </label>
                    <input 
                        id="userAddress"
                        name="address"
                        type="text"
                        value= {userRequestData.address}
                        onChange={handleUserRequestData}
                    >
                    </input>
                </div>
                
                <div className="labelAndInput">
                    <label htmlFor="userTransactionNum">
                        Enter Your Transaction Number
                    </label>
                    <input 
                        id="userTransactionNum"
                        name= "transactionNumber"
                        type="text"
                        value= {userRequestData.transactionNumber}
                        onChange={handleUserRequestData}
                    >
                    </input>
                </div>

                <div className="labelAndInput">
                    <label htmlFor="userContactNum">
                        Enter Your Contact Number
                    </label>
                    <input 
                        id="userContactNum"
                        name= "contactNumber"
                        type="text"
                        value= {userRequestData.contactNumber}
                        onChange={handleUserRequestData}
                    >
                    </input>
                
                </div>

                <button type="submit">Submit Your Request</button>
            </form>
        </div>
    )
}