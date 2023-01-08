import React from 'react';

import './SideBar.css'

export default function SideBar() {
    return (
        <div className="sidebar" >
            <div className="sidebar__title">Shannon Elise</div>
            <div className="sidebar__menu">
                <ul className="sidebar__link">
                    Home
                </ul>
                <ul className="sidebar__link">
                    About
                </ul>
                <ul className="sidebar__link">
                    Blog
                </ul>
                <ul className="sidebar__link">
                    Contact
                </ul>
            </div>
        </div>
    );
}