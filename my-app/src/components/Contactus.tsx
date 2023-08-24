import React from 'react';
import { Link } from 'react-router-dom';
import '../stylecss/Contactus.css';


export const Contactus = () => {
    return (
        <div >
            <h5 className="contact-title">Registered Office Address</h5>
            <p className="contact-address">
                <span className="address-line">Buildings Alyssa,</span>
                <br />
                <span className="address-line">Begonia and Clover situated in Embassy Tech Village,</span>
                <br />
                <span className="address-line">Outer Ring Road,</span>
                <br />
                <span className="address-line">Devarabeesanahalli Village,</span>
                <br />
                <span className="address-line">Varthur Hobli,</span>
                <br />
                <span className="address-line">Bengaluru – 560103, India</span>
                <br />
                Telephone: <span className="phone-number" style={{ color: '#007bff' }}>+91-80-61561999</span>
            </p>
        </div>
    );
}

export default Contactus;
