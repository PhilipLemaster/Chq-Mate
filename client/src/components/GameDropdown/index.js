import React, { Component } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import './style.css';
import GameCard from '../GameCard';
import GameOptions from '../GameOptions';

function GameDropdown() {

    return(
        <FormGroup>
            <Label for ='gameSearch'>Top Game Title:</Label>
            <Input type='text' name='gameSearch' id='gameSearch'/>
            <Button onClick={GameOptions} className="gapBut">Search</Button>
            <br></br>
            <Label for="titleSelect">Top Game</Label>
            <Input type="select" name="select" id="titleSelect"></Input>
        </FormGroup>
    )
}

export default GameDropdown;