import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import profImg from '../../assets/images/Profile.png'

const MatchCard = (props) => {
  return (
    <div>
      <Card>
        <img height='180px' top width='180px' alt="Card image cap" src={profImg}></img> 
        <CardBody>
          <CardTitle>ZeusOrangejuice</CardTitle>
          <CardSubtitle>Street Fighter V</CardSubtitle>
          <CardText>Blah Blah Blah Blah</CardText>
          <Button className='purpleBut'>Match</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MatchCard;