import React from 'react';
import { Card, Button, CardImg } from 'reactstrap';
import './style.css';

const MatchCard = (props) => {

    return(
        <Card body inverse style={{ backgroundColor: '#232136' }} className="matchCard">
            <img alt="typeIcon" className="typeIcon" id={props.match.style}></img>
            <img alt="consoleIcon" className="consoleIcon" id={props.match.console}></img>
            <div>
                <CardImg src='https://i.imgur.com/ucBhiBk.png' className="matchImg"/>
                <h2 className="cardGTag">{props.match.gamertag}</h2>
                <p className="cardFGame">{props.match.topgame}</p>
                <p className="cardBio">{props.match.bio}</p>
                <Button className="cardBut">Message</Button>
            </div>
        </Card>
    )
}

export default MatchCard;