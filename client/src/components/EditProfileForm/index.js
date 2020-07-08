import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './style.css';
import GameDropdown from '../GameDropdown';

const EditProfileForm = (props) => {
  return (
    <div>
      <h1 className='ePHeading'>EDIT PROFILE</h1>
      <Form className='wholeForm'>
        <FormGroup>
          <Label for="gamertag">Gamertag</Label>
          <Input type="text" name="gamertag" id="gamertag" placeholder="CaptainTeal" />
        </FormGroup>
        <FormGroup>
          <Label for="consoleSelect">Primary Console</Label>
          <Input type="select" name="conSelect" id="consoleSelect">
            <option>Xbox One</option>
            <option>Playstation 4</option>
            <option>Nintendo Switch</option>
            <option>PC</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="styleSelect">Type</Label>
          <Input type="select" name="styleSelect" id="styleSelect">
            <option>Casual</option>
            <option>Competitive</option>
            <option>Speedrunner</option>
          </Input>
        </FormGroup>
        <GameDropdown />
        <FormGroup className="fGameGroup">
          <Label for="favGame">Top Game</Label>
          <Input type="text" name="game" id="favGame" readOnly/>
        </FormGroup>
        <FormGroup className= 'uBGroup'>
          <Label for="userBio">User Bio</Label>
          <Input type="textarea" name="text" id="userBio" maxLength="100" />
          <FormText color="muted">
          Max Length: 100 characters
          </FormText>
        </FormGroup>
        <FormGroup className="picGroup">
          <Label for="profilePicture">Profile Picture</Label>
          <Input type="file" name="file" id="profilePicture" />
          <FormText color="muted">
            Ensure that profile image is appropriate and follows all Chq Mate terms of use
          </FormText>
        </FormGroup>
        <Button className="submitBut">Submit</Button>
      </Form>
    </div>
  );
}

export default EditProfileForm;