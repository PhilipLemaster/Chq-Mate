import React from 'react';
import { Card, Button, CardTitle, CardImg, CardText } from 'reactstrap';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css';
import competitiveIcon from '../../assets/icons/competitive.png';

function MatchCard() {

    const { user } = useAuth0();

    return(
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="matchCard">
            <img src={competitiveIcon} alt="typeIcon" className="typeIcon"></img>
            <CardImg src={user.picture} className="matchImg"/>
            <CardTitle className="cardGTag">Special Title Treatment</CardTitle>
            <CardText className="">With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
        </Card>
    )
}

export default MatchCard;