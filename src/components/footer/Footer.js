import React from "react";
import './FooterStyles.css';
import { SiDatabricks } from "react-icons/si";
import {BsFillArrowUpCircleFill} from "react-icons/bs";
import { FiInstagram,FiFacebook,FiLinkedin,FiDribbble,FiGithub,FiMail } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <SiDatabricks className="icon"/>
                        <h2>Secured</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <BsFillArrowUpCircleFill className='icon' />
        </Link>
                    </div>
                    <div className="col-container">
                        <div className="col">
                            <h3>Navigation</h3>
                            <p>Home</p>
                            <p>Data</p>
                            <p>Cloud</p>
                            <p>Contract</p>

                        
                        </div>
                        <div className="col">
                        <h3>My Account</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contract</p>

                    
                    </div>
                    <div className="col">
                    <h3>Information</h3>
                    <p>Home</p>
                    <p>Data</p>
                    <p>Cloud</p>
                    <p>Contract</p>

                
                </div>
                <div className="col">
                <h3>Legal</h3>
                <p>Home</p>
                <p>Data</p>
                <p>Cloud</p>
                <p>Contract</p>
            </div>
            <form>
                <h3>Join Our Team</h3>
                <input type="email" placeholder="Enter your email" />
                <FiMail className="mail-icon" />
                <div>
                    <FiInstagram className="social-icon" />
                    <FiFacebook className="social-icon" />
                    <FiLinkedin className="social-icon" />
                    <FiDribbble className="social-icon" />
                    <FiGithub className="social-icon" />

                </div>
            </form>
                    </div>
                </div>
            </div>
        
    )
}

export default Footer;