import React, { Component } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
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