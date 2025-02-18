import React from 'react';
import '../assets/styles/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me via email or phone.</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <span><a href="mailto:bkolhe@buffalo.edu">bkolhe@buffalo.edu</a></span>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} size="2x" />
              <span><a href="tel:+17169102215">+1 (716) 910-2215</a></span>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faLocationDot} size="2x" />
              <span><a >  Buffalo, NY</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
