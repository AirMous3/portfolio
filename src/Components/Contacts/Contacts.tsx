import React from "react";
import s from "./Contacts.module.css"
import sonic from "../../assets/image/SonicContacts.png"
import {MyContacts} from "./MyContacts/MyContacts";
import {QuickContactForm} from "./QuickContactForm/QuickContactForm";

export const Contacts = () => {
    return (
        <section className={`${s.main} section`}>

            <div className={`${s.container} container`}>

                <div className={s.contactPage}>
                    <MyContacts/>
                </div>

                <div className={s.imageWrapper}>
                    <img  src={sonic} alt="blueSonic"/>
                </div>

                <div className={s.quickContact}>
                    <QuickContactForm/>
                </div>

            </div>
        </section>
    )
}