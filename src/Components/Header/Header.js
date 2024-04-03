import React from "react";
import Menu from '../../Images/icons8-menu.svg';
import Heart from '../../Images/icons8-heart-32.png';
import Search from '../../Images/icons8-search.svg';
import Location from '../../Images/icons8-location-50.png';
import UserIcon from '../../Images/icons8-user-48.png'
import './Header.css'

export default function Header(){
    return (
        <header>
            <div id="firstHeader">
                {/*--------LOGO-------- */}
                <h1 id="Logo">BookUsNow</h1>

                {/*------Categories Btn---------- */}
                <button id="categoryBtn">
                    <img src={Menu} alt="menu" id="menuBar"/>
                    <span id="categories">Categories</span>
                </button>

                {/*------INPUT------- */}
                <input type="text" placeholder="Event Name" id="eventInput"/>
                <img src={Search} alt="seacrh" id="searchIcon"/>
                
                <div id="favSec">
                    <img src={Heart} alt="favorites" />
                    <span id="favorites">Favorites</span>
                </div>
                
                <img src={UserIcon} alt="userIcon" id="userIcon"/>
                <button id="SignBtn">Sign In</button>
            </div>

            <div id="secondHeader">
                <div id="locSec">
                    <img src={Location} alt="loc" id="locIcon"/>
                    <span id="locText">Mumbai,India</span>
                    <span id="locArrow">{`>`}</span>
                </div>

                <div id="allEvents">
                    <span>Live shows</span>
                    <span>Streams</span>
                    <span>Movies</span>
                    <span>Plays</span>
                    <span>Events</span>
                    <span>Sports</span>
                    <span>Activities</span>
                </div>
            </div>
        </header>
    )
}