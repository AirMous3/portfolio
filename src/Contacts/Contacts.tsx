import React from "react";
import s from "./Contacts.module.css"
import sonic from "../assets/image/SonicContacts.png"
import {MyContacts} from "./MyContacts/MyContacts";
import {QuickContactForm} from "./QuickContactForm/QuickContactForm";

export const Contacts = () => {
    return (
        <div className={s.main}>

            <div className={s.container}>

                <div className={s.contactPage}>
                    <MyContacts/>
                </div>

                <div className={s.image}>
                    {/*<img src={sonic} alt="blueSonic"/>*/}
                </div>

                <div className={s.quickContact}>
                    <QuickContactForm/>
                </div>

            </div>
        </div>
    )
}