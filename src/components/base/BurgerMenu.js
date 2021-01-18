import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

export default class BurgerMenu extends Component {
    render() {
        return (
                <Menu>
                    <Link to="/" id="home" className="menu-item">Dashboard</Link>
                    <Link to="/contact" id="about" className="menu-item">Contact</Link>
                    <Link to="/api" id="contact" className="menu-item">API for Developers</Link>
                </Menu>
        )
    }
}
