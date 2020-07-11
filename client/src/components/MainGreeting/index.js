import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css';

function MainGreeting() {
    const { user } = useAuth0();
    return(
        <div>
            <h1 className="greetMsg">Welcome, {user.name}</h1>
            <p className="mainInfo">Click the chess piece to the left to see your current matches!</p>
        </div>
    )
}

export default MainGreeting;