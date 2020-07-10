import React, { Component }from 'react';
import SideNav from '../../components/SideNav';
import EditProfileForm from '../../components/EditProfileForm';
import LogoutButton from '../../components/LogoutButton';
import MatchCard from '../../components/MatchCard';
import MainGreeting from '../../components/MainGreeting';
import CreateProfileForm from '../../components/CreateProfileForm';
import './main.css';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: ''
        }

        this.reLoad = this.reLoad.bind(this);
      }
    

      componentDidMount = () => {
          this.getInfo();
      }

      getInfo = () => {
        const email = document.getElementById('email').value

        axios.get('/api', {
            params: {
              email: email
            }
          })
          .then((response) => {
            console.log(response);
            if (response.data[0]) {
                const myId = response.data[0].id;
                this.setState({ 
                    id: myId
                })
            }
          })
        }

        reLoad = () => {
            this.getInfo();
            this.forceUpdate();
          }

    render() {
        if(this.state.id !== '') {
            return(
                <div>
                    <SideNav />
                    <div className="ct" id="t1">
                        <div className="ct" id="t2">
                            <div className="ct" id="t3">
                                <div className="ct" id="t4">
                                    <div className="ct" id="t5">
                                        <div className="page" id="p2">
                                            <h1>Profile Matches</h1>
                                            <MatchCard myId={this.state.id}/>
                                        </div>  
                                        <div className="page" id="p3">
                                            <h1>Filler</h1>
                                        </div>
                                        <div className="page" id="p4">
                                            <section className="icon fas fa-search">
                                            <span className="title">Match</span>
                                            <p className="hint">
                                                <span>Hello</span> 
                                            </p>
                                            </section>
                                        </div> 
                                        <div className="page" id="p5">
                                            <EditProfileForm myId={this.state.id}/>
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

        else {
            return(
                <CreateProfileForm reLoad={this.reLoad}/>
            )
        }
        
    }
}

export default Main;