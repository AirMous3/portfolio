import React from "react";
import s from "./MyContacts.module.css"

export const MyContacts = () => {
    return (
        <div className={s.main}>


            <div className={s.contactPage}>
                <h2>My Contacts</h2>
                <p className={s.text}>
                    Belarus, officially the Republic of Belarus, is a landlocked country in Eastern Europe. It is
                    bordered by Russia to the east and northeast, Ukraine to the south, Poland to the west, and
                    Lithuania and Latvia to the northwest
                </p>

                <div className={s.address}>
                    <h3>
                        Address
                    </h3>
                    <div className={s.text}>
                    <span>
                         Republic of Belarus, Minsk
                    </span>
                    </div>
                </div>
                <div className={s.phone}>
                    <h3>
                        Phone
                    </h3>
                    <div className={`${s.text} + ${s.phone}`}>
                    <span>
                        0-666-666-666
                    </span>
                        <span>
                        0-777-777-777
                    </span>
                    </div>
                </div>
                <div className={s.email}>
                    <h3>
                        Email
                    </h3>
                    <div className={s.text}>
                    <span>
                        sample@gmail.com
                    </span>
                    </div>
                </div>
            </div>


        </div>
    )
}