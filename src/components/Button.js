import React, {useContext} from 'react';
import UserContext from "./utils/userContext";

const Button = () => {
    const userModel = useContext(UserContext);
    return (
        <div>
            <h1>{userModel.name}</h1>
        </div>
    )
}

export default Button
