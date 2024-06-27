import React from "react";
import { HouseFill } from 'react-bootstrap-icons';
import { TwitterX } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';
import { Bell } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { People } from 'react-bootstrap-icons';
import { Person } from 'react-bootstrap-icons';
import { SlashSquare } from 'react-bootstrap-icons';
import { ThreeDots } from 'react-bootstrap-icons';
export default function LeftSidebar () {    
    return (
        <>
                <ul className=""> 
                    <li className="nav-item">
                    <a className="pull-left " href="/#" id="twittericon">
                        <TwitterX/>
                    </a>
                    </li>
                    <li className="nav-item"><a href="#"><HouseFill className="menu-icons" />Home</a></li>
                    <li className="nav-item"> <a href="#"><Search className="menu-icons" />Explore</a></li>
                    <li className="nav-item"><a href="#"><Bell className="menu-icons" />Notification</a></li>
                    <li className="nav-item"><a href="#"><Envelope className="menu-icons" />Messages</a></li>
                    <li className="nav-item"><a href="#"><SlashSquare className="menu-icons" />Grok</a></li>
                    <li className="nav-item"><a href="#"><People className="menu-icons" />Communities</a></li>
                    <li className="nav-item"><a href="#"><Person className="menu-icons" />Profile</a></li>
                    <li className="nav-item"><a href="#"><ThreeDots className="menu-icons" />More</a></li>
                    <li><button type="button" class="btn btn-primary post-btn">Post</button></li>
                </ul>
                
        </>
    )
}