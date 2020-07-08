import React from 'react';
import LoginButton from '../../components/LoginButton';
import LogoutButton from '../../components/LogoutButton';
import './log.css';

function Log() {
    return(
        <div id='wholeLog'>
            <div className="login-wrapper">
                <div className="login-left">
                    <img src="https://wallpaperhd.wiki/wp-content/uploads/minimalist-wallpaper-1920x1080-minimalist-sunset-in-hill-65133-1920x1080.jpg" alt="login background" id='logBack'/>
                    <div className="h1" onClick={loginFunct}>Welcome to ChqMate</div>
                </div>
                <div className="login-right">
                    <h1 className="dangerGreet">It's Dangerous To Go Alone...</h1>
                    <div className="button-area">
                        <LoginButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

function loginFunct() {
    var loginWrapper = document.querySelector('.login-wrapper');
    loginWrapper.classList.toggle('open'); 
}

export default Log;