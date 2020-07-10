import React from 'react';
import SideNav from '../../components/SideNav';
import EditProfileForm from '../../components/EditProfileForm';
import LogoutButton from '../../components/LogoutButton';
import MatchCard from '../../components/MatchCard';
import MainGreeting from '../../components/MainGreeting';
import CreateProfileForm from '../../components/CreateProfileForm';
import './main.css';
import { useAuth0 } from '@auth0/auth0-react';

function Main() {

    const { user } = useAuth0();

    if (user.logins_count === 1) {
        return(
            <CreateProfileForm />
        )
    }

    else {
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
                                        <MatchCard />
                                    </div>  
                                    <div className="page" id="p3">
                                        <section className="icon fa fa-rocket"><span className="title">Rocket</span></section>
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
                                        <EditProfileForm />
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
    
}

export default Main;