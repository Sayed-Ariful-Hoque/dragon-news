import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='contact mt-4 d-flex justify-content-evenly text-white p-5'>
            <div>
                <h4>Services</h4>
                <li>Branding</li>
                <li>Design</li>
                <li>Marketing</li>
                <li>Advertisement</li>
            </div>
            <div>
                <h4>Company</h4>
                <li>About us</li>
                <li>Contact</li>
                <li>Jobs</li>
                <li>Press kit</li>
            </div>
            <div>
                <h4>Terms</h4>
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Cookie policy</li>
            </div>
            <div className='fs-1 icon mt-4'>
                <><FaFacebook className='me-2'></FaFacebook></>
                <><FaYoutube className='me-2'></FaYoutube></>
                <><FaTwitter className='me-2'></FaTwitter></>
                <><FaWhatsapp className='me-2'></FaWhatsapp></>

            </div>
        </div>
    );
};

export default Footer;