import React, { Component } from 'react';
import GameCard from '../GameCard';
import debounce from 'lodash.debounce';
import { InputGroupAddon, Input, Label, FormGroup } from 'reactstrap';
import './style.css';

class GameOptions extends Component {


    constructor(props) {
        super(props)
        this.state = {
            gameTitle: '',
            gameData: [],
            loading: 'Game Search'
        }
        this.handleChange = this.handleChange.bind(this)
            // Delay action 1.5 seconds
        this.onChangeDebounced = debounce(this.onChangeDebounced, 1000)
    }

        handleChange(event) {

            // Properly handle input
            this.setState({
                gameTitle: event.target.value.substr(0,1).toUpperCase() + event.target.value.substr(1).toLowerCase()
            })
            
            this.onChangeDebounced(
                this.setState({
                    loading: 'Loading...'
                })
            )}

            onChangeDebounced = () => {

                // Make call to GameSpot API for titles
                const queryUrl = 'https://boiling-journey-58609.herokuapp.com/http://www.gamespot.com/api/games/?api_key=0e27e3e25c2d1e2fdf52fae8191317b1730d9589&format=json&filter=name:' + this.state.gameTitle + '&limit=8';

                this.setState({
                    loading: 'Game Search'
                })

                console.log(queryUrl);
                
                fetch(queryUrl)

                .then(response => response.json())
                .then(response => {this.setState({ 
                        gameData : response.results
                    });
                    console.log(response.results)
                });
        }

        handleSubmit(event) {
            event.preventDefault();
        }

    render() {

        const gameCards = this.state.gameData.map(game => <GameCard game={game} />)
            
        

        return(
                <FormGroup>
                    <InputGroupAddon addonType="append">
                        <Label className={`statusBut ${this.props.class}`}>{this.state.loading}</Label>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Type Here" onChange={this.handleChange} id="gameSearch"/>
                    <section className='gCardContainer'>
                        {gameCards}
                    </section>
                </FormGroup>
        )
        
        
    }   
}

export default GameOptions;