import React from "react";
import s from "./Contacts.module.scss"
import sonic from "../../assets/image/SonicContacts.png"
import {MyContacts} from "./MyContacts/MyContacts";

export const Contacts = () => {
    return (
        <section className={`${s.main} section`}>

            <div className={s.container}>

                <div className={s.imageWrapper}>
                    <img src={sonic} alt="blueSonic"/>
                </div>
                <div className={s.contactPage}>
                    <MyContacts/>
                </div>

            </div>
        </section>
    )
}