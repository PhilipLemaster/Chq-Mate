import React from 'react';
import SideNav from '../../components/SideNav';
import GameOptions from '../../components/GameOptions';
import EditProfileForm from '../../components/EditProfileForm';
import LogoutButton from '../../components/LogoutButton';
import './main.css';

function Main() {
    return(
        <div>
            <div className="ct" id="t1">
                <div className="ct" id="t2">
                    <div className="ct" id="t3">
                        <div className="ct" id="t4">
                            <div className="ct" id="t5">
                                <SideNav />
                                <LogoutButton />
                                <div className="page" id="p2">
                                    <GameOptions />
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
        </div>
        
    )
}

export default Main;