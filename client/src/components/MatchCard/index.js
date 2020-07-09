import React from 'react';
import { Card, Button, CardTitle, CardImg, CardText } from 'reactstrap';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css';
import competitiveIcon from '../../assets/icons/competitive.png';
import pcIcon from '../../assets/icons/pc.png';

function MatchCard() {

    const { user } = useAuth0();

    return(
        <Card body inverse style={{ backgroundColor: '#232136' }} className="matchCard">
            <img src={competitiveIcon} alt="typeIcon" className="typeIcon"></img>
            <img src={pcIcon} alt="consoleIcon" className="consoleIcon"></img>
            <div>
                <CardImg src={user.picture} className="matchImg"/>
                <h2 className="cardGTag">ZeusOrangejuice</h2>
                <p className="cardFGame">Super Smash Bros.</p>
                <p className="cardBio">I'm just a cool d00d from Charlotte. I main Dr. Mario in Smash and play jungle on LoL. Hit me up yo.</p>
                <Button className="cardBut">Message</Button>
            </div>
        </Card>
    )
}

export default MatchCard;