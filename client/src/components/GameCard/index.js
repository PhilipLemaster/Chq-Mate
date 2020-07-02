import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Button, Form
} from 'reactstrap';
import './style.css';

function populateTitle() {
    let gameTitle = String(this.children[1].props.value);
    let favGame = document.getElementById('favGame')
    favGame.value = gameTitle;
}


const GameCard = (props) => {
  return (
        <Card className='wholeCard' body inverse style={{ backgroundColor: '#333', borderColor: '#333'}}>
          <CardImg src={props.game.image ? props.game.image.original : 'https://i.ibb.co/gyLmqhN/CMLogo-Text.png'} className='cardImg'/>
          <CardBody className='cardBody'>
            <CardTitle style= {{fontSize: '20px'}} className='gameTitle'>{props.game.name}</CardTitle>
            <Button onClick={populateTitle} className='favGameBut'>Select<input style={{visibility:'hidden'}} value={props.game.name} className={props.game.name}></input></Button>
          </CardBody>
        </Card>
    
        
  );
};

export default GameCard;