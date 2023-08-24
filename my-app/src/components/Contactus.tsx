import React from 'react';
import './Contactus.css'; // Import the CSS file for styling

export const Contactus = () => {
    return (
        <div >
            <h5 className="contact-title">Registered Office Address</h5>
            <p className="contact-address">
                <span style={{ color: '#007bff' }}>Buildings Alyssa,</span>
                <br />
                <span style={{ color: '#007bff' }}>Begonia and Clover situated in Embassy Tech Village,</span>
                <br />
                Outer Ring Road,
                <br />
                Devarabeesanahalli Village,
                <br />
                Varthur Hobli,
                <br />
                Bengaluru – 560103, India
                <br />
                Telephone: <span style={{ color: '#007bff' }}>+91-80-61561999</span>
            </p>
        </div>
    );
}
