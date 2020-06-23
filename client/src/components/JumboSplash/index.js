import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './style.css';
import bgimage from '../../assets/images/JumboLogo.png';

const JumboSplash = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ 
        height: '500px', 
        backgroundImage: `url(${bgimage})`, 
        backgroundSize: '100% 100%' 
        }}>
          
        <h1 className="main">It's Dangerous To Go Alone</h1>
        <p className="lead">Find and match with other gamers to build your party!</p>
        <hr className="my-2" />
        <p className="lead">
          <Button className='purpleBut'>Get Started</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumboSplash;