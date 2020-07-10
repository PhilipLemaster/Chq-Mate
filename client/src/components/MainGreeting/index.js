import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css';

function MainGreeting() {
    const { user } = useAuth0();
    console.log(user);
    return(
        <div>
            <h1 className="greetMsg">Welcome, {user.name}</h1>
        </div>
    )
}

export default MainGreeting;