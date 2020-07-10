import React, { Component } from 'react';
import axios from 'axios';
import MatchCard from '../MatchCard';
import './style.css';

class Matches extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            matchData: []
        }
      }

      componentDidMount() {
          this.renderStrongCards();
      }

      renderStrongCards = () => {
        axios.get('/api', {
            params: {
              topgame: this.props.topgame,
              console: this.props.console,
              style: this.props.style,
              _limit: 10
            }
          })
          .then(response => {this.setState({ 
                matchData : response.data
            });
            console.log(response.data)
    });
      }
    

    render() {

        const matchCards = this.state.matchData.map(match => <MatchCard match={match} />)

        return(
            <div>
                {matchCards}
            </div>
        )
    }
}

export default Matches;