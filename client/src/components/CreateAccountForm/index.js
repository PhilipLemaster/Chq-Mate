import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateAccountForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="SpicyWizard1337@hotmail.com" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="*********" />
      </FormGroup>
      <FormGroup>
        <Label for="passwordConf">Confirm Password</Label>
        <Input type="password" name="passwordConf" id="passwordConf" placeholder="*********" />
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
        <Label for="gamertag">Gamertag</Label>
        <Input type="text" name="username" id="gamertag" placeholder="DarkNinja46" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default CreateAccountForm;