import React from 'react';
import './style.css';

function SideNav() {
    return(
            <ul id="menu">
                <a href="#t1"><button className="icon fas fa-home" id="1"></button></a>
                <a href="#t2"><button className="icon far fa-keyboard" id="2"></button></a>
                <a href="#t3"><button className="icon fa fa-rocket" id="3"></button></a>
                <a href="#t4"><button className="icon fas fa-search" id="4"></button></a>
                <a href="#t5"><button className="icon fas fa-list-ol" id="5"></button></a>
            </ul>
    )
}

export default SideNav;