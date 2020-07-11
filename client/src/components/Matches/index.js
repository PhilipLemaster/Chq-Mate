import React, { Component } from 'react';
import { Button } from 'reactstrap';
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
          this.clearState();
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

      clearState = () => {
        this.setState({ 
          matchData : []
        });
      }

    render() {

        const matchCardsStrong = this.state.matchData.map(match => <MatchCard match={match} />)

        return(
          <div>
            <h1 className="matchHead">My Matches</h1>
            <Button onClick={() => window.location.reload(false)} className="refreshBut"></Button>
              <div className="matchCardContainer">
                {matchCardsStrong}
            </div>
          </div>
            
        )
    }
}

export default Matches;