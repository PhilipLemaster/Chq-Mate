import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import GameOptions from '../GameOptions';
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
    
    if(this.state.topgame === '') {
      window.alert('Please confirm your top game choice!')
    }

    else {
      this.createUser();
      window.location.reload(false)
    }
  }

  createUser = async () => {
    try {
      const response = await axios.post('/api', this.state);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    this.props.reLoad();
  }

  componentDidMount = () => {
    this.setState({ 
      email: document.getElementById('email').value,
     });
  }

  confirmGame = () => {
    this.setState({
      topgame: document.getElementById('favGame').value
    })
    window.alert(`Top game updated!`)
  }
  

  render() {

    return (
      <div>
        <h1 className='ePHeadingC'>CREATE PROFILE</h1>
        <Form className='wholeCreateForm' onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="gamertag" className="cLabels">Gamertag</Label>
            <Input type="text" name="gamertag" id="gamertagC" placeholder="CaptainTeal" onChange={this.onChange} required/>
          </FormGroup>
          <FormGroup>
            <Label for="consoleSelect" className="cLabels">Primary Console</Label>
            <Input type="select" name="console" id="consoleSelectC" onChange={this.onChange} required>
              <option value="" disabled selected>Select Your Option</option>
              <option>Xbox One</option>
              <option>Playstation 4</option>
              <option>Nintendo Switch</option>
              <option>PC</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="styleSelect" className="cLabels">Style</Label>
            <Input type="select" name="style" id="styleSelectC" onChange={this.onChange} required>
              <option value="" disabled selected>Select Your Option</option>
              <option>Casual</option>
              <option>Competitive</option>
              <option>Speedrunner</option>
            </Input>
          </FormGroup>
          <GameOptions class="cLabels"/>
          <FormGroup className="fGameGroupC">
            <Label for="favGame" className="cLabels">Top Game</Label>
            <Input type="text" name="topgame" id="favGame" readOnly required/>
            <Button className="confirmBut" onClick={this.confirmGame}>Confirm</Button>
          </FormGroup>
          <FormGroup className= 'uBGroupC'>
            <Label for="userBio" className="cLabels">User Bio</Label>
            <Input type="textarea" name="bio" id="userBioC" maxLength="100" onChange={this.onChange}/>
            <FormText color="muted">
            Max Length: 100 characters
            </FormText>
          </FormGroup>
          <EmailRO class="cLabels"/>
          <Button className="submitButC">Get Started!</Button>
        </Form>
      </div>
    );
  }
}

export default CreateProfileForm;