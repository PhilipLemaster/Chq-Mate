import React, { Component }from 'react';
import SideNav from '../../components/SideNav';
import EditProfileForm from '../../components/EditProfileForm';
import LogoutButton from '../../components/LogoutButton';
import Matches from '../../components/Matches';
import MainGreeting from '../../components/MainGreeting';
import CreateProfileForm from '../../components/CreateProfileForm';
import './main.css';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: '',
            gamertag: '',
            console: '',
            bio: '',
            topgame: '',
            style: ''
        }

        this.reLoad = this.reLoad.bind(this);
      }

      getInfo = () => {
        const email = document.getElementById('email').value

        axios.get('/api', {
            params: {
              email: email
            }
          })
          .then((response) => {
            if (response.data[0]) {
                const data = response.data[0]
                const myId = parseInt(data.id);
                this.setState({ 
                    id: myId,
                    gamertag: data.gamertag,
                    console: data.console,
                    bio: data.bio,
                    topgame: data.topgame,
                    style: data.style
                })
            }
          })
        }

        clearInfo = () => {
            this.setState({ 
                id: '',
                gamertag: '',
                console: '',
                bio: '',
                topgame: '',
                style: ''
            })
        }

        reLoad = () => {
            this.getInfo();
            this.forceUpdate();
            this.clearInfo();
          }

        componentDidMount = () => {
            this.getInfo();
        }
        
    render() {
        
        if(this.props.isUser === 'true') {
            return(
                <div>
                    <SideNav reLoad={this.reLoad}/>
                    <div className="ct" id="t1">
                        <div className="ct" id="t2">
                            <div className="ct" id="t3">
                                <div className="ct" id="t4">
                                    <div className="ct" id="t5">
                                        <div className="page" id="p2">
                                            <Matches 
                                            console={this.state.console} 
                                            topgame={this.state.topgame} 
                                            style={this.state.style}
                                            reLoad={this.reLoad}/>
                                        </div>  
                                        <div className="page" id="p3">
                                            <h1 className="chatFiller">Chat/Messaging Feature Coming Soon!</h1>
                                        </div>
                                        <div className="page" id="p4">
                                            <h1 className="topGames">Most Popular Games</h1>
                                        </div> 
                                        <div className="page" id="p5">
                                            <EditProfileForm 
                                            myId={this.state.id} 
                                            gamertag={this.state.gamertag}
                                            bio={this.state.bio}
                                            topgame={this.state.topgame}
                                            />
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LogoutButton />
                    <MainGreeting />
                </div> 
            )
        }

        else if (this.props.isUser === 'false') {
            return(
                <CreateProfileForm reLoad={this.reLoad}/>
            )
        }
        
    }
}

export default Main;