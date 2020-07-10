import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import GameDropdown from '../GameDropdown';
import EmailRO from '../EmailRO';
import './style.css';
import axios from 'axios';

class CreateProfileForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
       email: '',
       gamertag: '',
       console: '',
       bio: '',
       topgame: '',
       style: ''
    }
  }

  onChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
     })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    axios.post('/api', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  

  render() {

    return (
      <div>
        <h1 className='ePHeading'>EDIT PROFILE</h1>
        <Form className='wholeForm' onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="gamertag">Gamertag</Label>
            <Input type="text" name="gamertag" id="gamertag" placeholder="CaptainTeal" onChange={this.onChange }/>
          </FormGroup>
          <FormGroup>
            <Label for="consoleSelect">Primary Console</Label>
            <Input type="select" name="console" id="consoleSelect" onChange={this.onChange }>
              <option value="" disabled selected>Select Your Option</option>
              <option>Xbox One</option>
              <option>Playstation 4</option>
              <option>Nintendo Switch</option>
              <option>PC</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="styleSelect">Style</Label>
            <Input type="select" name="style" id="styleSelect" onChange={this.onChange }>
              <option value="" disabled selected>Select Your Option</option>
              <option>Casual</option>
              <option>Competitive</option>
              <option>Speedrunner</option>
            </Input>
          </FormGroup>
          <GameDropdown />
          <FormGroup className="fGameGroup">
            <Label for="favGame">Top Game</Label>
            <Input type="text" name="topgame" id="favGame" readOnly/>
          </FormGroup>
          <FormGroup className= 'uBGroup'>
            <Label for="userBio">User Bio</Label>
            <Input type="textarea" name="bio" id="userBio" maxLength="100" onChange={this.onChange }/>
            <FormText color="muted">
            Max Length: 100 characters
            </FormText>
          </FormGroup>
          <EmailRO />
          <Button className="submitBut">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CreateProfileForm;