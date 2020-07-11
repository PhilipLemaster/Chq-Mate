import React from 'react';
import { Card, Button, CardImg } from 'reactstrap';
// import { useAuth0 } from "@auth0/auth0-react";
import defImg from '../../assets/images/profile.png';
import './style.css';

const MatchCard = (props) => {

    // const { user } = useAuth0();
    
    

    return(
        <Card body inverse style={{ backgroundColor: '#232136' }} className="matchCard">
            <img alt="typeIcon" className="typeIcon" id={props.match.style}></img>
            <img alt="consoleIcon" className="consoleIcon" id={props.match.console}></img>
            <div>
                <CardImg src={defImg} className="matchImg"/>
                <h2 className="cardGTag">{props.match.gamertag}</h2>
                <p className="cardFGame">{props.match.topgame}</p>
                <p className="cardBio">{props.match.bio}</p>
                <Button className="cardBut">Message</Button>
            </div>
        </Card>
    )
}

export default MatchCard;