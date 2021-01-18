import React from 'react'
import Header from '../components/module/Header'
import FlagId from '../assets/flagid.png'
import Email from '../assets/email.jpg'
import Phone from '../assets/phone1.png'
import Footer from '../components/module/Footer.js'

export default function Contact() {
    return (
        <div>
            <Header img={FlagId} style={{ width: 70, height: 70 }} />
            <div className="container-fluid">
                <div className="boxcontact">
                    <h1>Contact Us</h1>
                    <div className="line"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde. </p>
                    <div className="boxemailphone">
                        <div className="boxemail">
                            <img src={Email} style={{ width: 30, height: 30 }} alt="img"></img>
                            <p>lorem@gmail.com</p>
                        </div>
                        <div className="boxphone">
                            <img src={Phone} style={{ width: 30, height: 30 }} alt="img"></img>
                            <p>+62 1111-2222-3333</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer img={FlagId} style={{ width: 70, height: 70 }} />
            </div>
        </div>
    )
}
