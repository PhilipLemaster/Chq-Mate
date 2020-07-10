import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css';

function EmailRO(props) {

    const { user } = useAuth0();

    return(
        <FormGroup className="emailGroup">
            <Label for="emailGroup" className={props.class}>Email</Label>
            <Input type="email" name="email" id="email" readOnly value={user.email} />
        </FormGroup>
    )
}

export default EmailRO;