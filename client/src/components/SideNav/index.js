import React from 'react';
import './style.css';
import homeIcon from '../../assets/icons/home.png';
import matchIcon from '../../assets/icons/match.png';
import editIcon from '../../assets/icons/edit.png';
import topIcon from '../../assets/icons/topgames.png';
import chatIcon from '../../assets/icons/chat.png';

function SideNav() {
    return(
            <ul id="menu">
                <a href="#t1"><img id="1" className="icon far" src={homeIcon} alt='Home Icon'></img></a>
                <a href="#t2"><img id="2" className="icon far" src={matchIcon} alt='Match Icon'></img></a>
                <a href="#t3"><img id="3" className="icon far" src={chatIcon} alt='Chat Icon'></img></a>
                <a href="#t4"><img id="4" className="icon far" src={topIcon} alt='Top Games Icon'></img></a>
                <a href="#t5"><img id="5" className="icon far" src={editIcon} alt='Edit Icon'></img></a>
            </ul>
    )
}

export default SideNav;