import React, { Component } from 'react'
import { Link } from "react-router-dom";
import BurgerMenu from '../base/BurgerMenu'

export default class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <h2>APP-ID</h2>
                    <img src={this.props.img} alt="img" style={this.props.style}></img>
                </div>
                <div className="boxlink">
                    <Link to="/" className="dashboard">Dashboard</Link>
                    <Link to="/contact" className="contact">Contact</Link>
                    <Link to="/api" className="apifordevelopers">API for Developers</Link>
                </div>
                <BurgerMenu />
            </div>
        )
    }
}
