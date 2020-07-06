import React from 'react';
import { FormGroup } from 'reactstrap';
import './style.css';
import GameOptions from '../GameOptions';

function GameDropdown() {

    return(
        <FormGroup>
            <GameOptions />
        </FormGroup>
    )
}

export default GameDropdown;