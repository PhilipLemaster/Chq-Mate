import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './style.css'

function populateTitle() {
  
}


const GameCard = (props) => {
  return (
        <Card className='wholeCard' body inverse style={{ backgroundColor: '#333', borderColor: '#333'}}>
          <CardImg style={{display: props.game.image === null ? 'none' : props.game.image.original}} src={props.game.image.original} className='cardImg'/>
          <CardBody className='cardBody'>
            <CardTitle style= {{fontSize: '20px'}}>{props.game.name}</CardTitle>
            <Button>Select</Button>
          </CardBody>
        </Card>
  );
};

export default GameCard;