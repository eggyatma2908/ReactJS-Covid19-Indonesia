import React, { Component } from 'react'
import LogoFacebook from '../../assets/logofacebook.png'
import LogoTwitter from '../../assets/logotwitter.png'
import LogoInstagram from '../../assets/logoinstagram.png'
import LogoYoutube from '../../assets/logoyoutube.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="boxfooter">
                                <div className="logo">
                                    <h2>APP-ID</h2>
                                    <img src={this.props.img} alt="img" style={this.props.style}></img>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="socialmedia">
                                <img src={LogoFacebook} alt="img"></img>
                                <img src={LogoTwitter} alt="img"></img>
                                <img src={LogoInstagram} alt="img"></img>
                                <img src={LogoYoutube} alt="img"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
