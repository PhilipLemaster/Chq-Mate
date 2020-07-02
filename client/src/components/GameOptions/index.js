import React, { Component } from 'react';
import GameCard from '../GameCard';

class GameOptions extends Component {


    constructor() {
        super()
        this.state = {
            gameTitle: '',
            gameData: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

        handleChange(event) {
            this.setState({
                gameTitle: event.target.value.substr(0,1).toUpperCase() + event.target.value.substr(1).toLowerCase()
            })
        }

        handleSubmit(event) {
            event.preventDefault();
        }

        componentDidMount(){
            const queryUrl = 'https://cors-anywhere.herokuapp.com/http://www.gamespot.com/api/games/?api_key=0e27e3e25c2d1e2fdf52fae8191317b1730d9589&format=json&filter=name:' + this.state.gameTitle + '&limit=10';

            console.log(queryUrl);
            
            fetch(queryUrl)

            .then(response => response.json())
            .then(response => {this.setState({ 
                    gameData : response.results
                });
                console.log(response.results)
            });
        }

    render() {

        const gameCards = this.state.gameData.map(game => <GameCard game={game}/>)
            
        

        return(
            // <form onSubmit={this.handleSubmit}>
            //     <input type="text" placeholder="game name" onChange={this.handleChange}/>
            //     <h1>{this.state.gameTitle}</h1>
            //     <button>Search Game</button>
            //     <h1>Game name: {this.state.gameData.name}</h1>
            // </form>
            <div>
                {gameCards}
            </div>
        )
        
        
    }   
}

export default GameOptions;