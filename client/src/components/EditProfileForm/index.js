import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const EditProfileForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="gamertag">Gamertag</Label>
        <Input type="email" name="email" id="gamertag" placeholder="DarkNinja46" />
      </FormGroup>
      <FormGroup>
        <Label for="consoleSelect">Primary Console</Label>
        <Input type="select" name="select" id="consoleSelect">
          <option>Xbox One</option>
          <option>Playstation 4</option>
          <option>Nintendo Switch</option>
          <option>PC</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="userBio">User Bio</Label>
        <Input type="textarea" name="text" id="userBio" maxLength="100" />
        <FormText color="muted">
         Max Length: 100 characters
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="profilePicture">Profile Picture</Label>
        <Input type="file" name="file" id="profilePicture" />
        <FormText color="muted">
          Ensure that profile image is appropriate and follows all Chq Mate terms of use
        </FormText>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default EditProfileForm;