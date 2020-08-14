import React, { useContext} from "react";
import userContext from "../utils/UserContext";
import profileImage from "../assets/images/profile.png";

const UserCard = () => {
    const userModel = useContext(userContext);


  return (
    <div className="container">
      <div className="card mx-auto" style={{ width: "400px" }}>
        <img
          className="center-block mt-3"
          style={{ width: "200px", margin: "0 auto" }}
          src={profileImage}
          alt="profile"
        />
​
        <div className="card-body">
          <h4 className="card-title">{userModel.name.value}</h4>
          <p className="card-text">{userModel.status.value}</p>
​
          <button
            className="btn btn-primary"
            onClick={userModel.testThing.click}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;