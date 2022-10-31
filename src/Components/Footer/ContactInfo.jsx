import React from 'react';
import style from "./Footer.module.scss";
import location from "../../assets/img/loc-icon.png";
import phone from "../../assets/img/phone-icon.png";
import mail from "../../assets/img/mail-icon.png";

const ContactInfo = () => {
    return (
        <div className={style.footer__contactInfo}>
            <h4>Have a questions?</h4>
            <address className={style.footer__contactInfo__items}>
                <div className={style.contactInfo__item}>
                    {/*<img src={location} alt="geo"/>*/}
                    <i className="fa-solid fa-location-dot"></i>
                    <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                </div>
                <div className={style.contactInfo__item}>
                    {/*<img src={phone} alt="tel"/>*/}
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:23923929210<">+2 392 3929 210</a>
                </div>
                <div className={style.contactInfo__item}>
                    {/*<img src={mail} alt="mail"/>*/}
                    <i className="fa-regular fa-envelope"></i>
                    <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                </div>
            </address>
        </div>
    );
};

export default ContactInfo;