import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Button, Form
} from 'reactstrap';
import './style.css'

function populateTitle() {
    console.log(this.children[1].props.value);
}


const GameCard = (props) => {
  return (
        <Card className='wholeCard' body inverse style={{ backgroundColor: '#333', borderColor: '#333'}}>
          <CardImg style={{display: props.game.image === null ? 'none' : props.game.image.original}} src={props.game.image.original} className='cardImg'/>
          <CardBody className='cardBody'>
            <CardTitle style= {{fontSize: '20px'}} className='gameTitle'>{props.game.name}</CardTitle>
            <Button onClick={populateTitle}>Select<input style={{visibility:'hidden'}} value={props.game.name} className={props.game.name}></input></Button>
          </CardBody>
        </Card>
    
        
  );
};

export default GameCard;