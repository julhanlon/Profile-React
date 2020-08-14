import React, { useContext } from "react";
import userContext from "../utils/UserContext";

const UserForm = () => {
  const userModel = useContext(userContext);

  return (
    <form className="form-group">
      <h1>Create a User</h1>
      <label htmlFor="name">Name: </label>
      <input className="form-control mb-4" id="name" {...userModel.name} />
      <label htmlFor="status">Status: </label>
      <input className="form-control mb-4" id="status" {...userModel.status} />
    </form>
  );
};

export default UserForm;