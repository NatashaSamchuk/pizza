import React from 'react';
import style from "./Contacts.module.scss";
import {AddressMap} from "./AddressMap";

const Contacts = () => {
    return (
        <section id="contact" className={style.contact}>
            <div className={style.contact__container}>
                <AddressMap/>
                <div className={style.contact__form__container}>
                    <div className={style.contact__title}>
                        <h2><span className={style.bigger__letter}>C</span>ontact <span className={style.bigger__letter}>U</span>s
                        </h2>
                    </div>
                    <div className={style.form__container}>
                        <form name="contact__form" action="#">
                            <div className={style.form__input_container}>
                                <label htmlFor="first__name">First Name</label>
                                <input type="text" id="first__name" name="first__name" required/>
                            </div>
                            <div className={style.form__input_container}>
                                <label htmlFor="last__name">Last Name</label>
                                <input type="text" id="last__name" name="last__name"/>
                            </div>
                            <div className={style.form__input_container}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit" id="send__feedback">Send</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contacts;