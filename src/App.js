import React from 'react';
import './App.css';
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import useUserModel from "./utils/useUserModel";
import UserContext from "./utils/UserContext";

function App() {

const userModel = useUserModel();


  return (
    <div className="container text-center">
      <h1 className ="mt-4 mb-4" >Welcome to the custom side of things</h1>

      <div className = "jumbotron">

        <UserContext.Provider value={userModel}>
        <UserForm/>
        <UserCard/>
        </UserContext.Provider>
      </div>
   
    </div>
  );
}

export default App;
