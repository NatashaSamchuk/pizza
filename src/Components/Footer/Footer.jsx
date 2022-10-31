import React from 'react';
import style from "./Footer.module.scss";
import SocialMedia from "./SocialMedia";
import ContactInfo from "./ContactInfo";


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        // <footer>
        //     <p>Copyright ⓒ {year}</p>
        // </footer>
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <SocialMedia/>
                <ContactInfo/>
            </div>
            <p className={style.copyright}>Copyright &copy;{year} All rights reserved | This template is made
                with &#10084;
                </p>
        </footer>
    );
}

export default Footer;