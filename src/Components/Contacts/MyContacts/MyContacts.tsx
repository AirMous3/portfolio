import React from "react";
import s from "./MyContacts.module.scss"

export const MyContacts = () => {
    return (
        <div>


            <div className={s.contactPage}>
                <h2>My Contacts</h2>
                <p className={s.text}>
                    Belarus, officially the Republic of Belarus, is a landlocked country in Eastern Europe. It is
                    bordered by Russia to the east and northeast, Ukraine to the south, Poland to the west, and
                    Lithuania and Latvia to the northwest
                </p>


                <h3>
                    Address
                </h3>
                <div className={s.text}>
                    <span>
                         Republic of Belarus, Minsk
                    </span>
                </div>


                <h3>
                    Phone
                </h3>
                <div className={s.text}>
                    <span>
                       +375-33-3219635
                    </span>
                </div>


                <h3>
                    Email
                </h3>
                <div className={s.text}>
                    <span>
                        airmouselol@gmail.com
                    </span>
                </div>

            </div>


        </div>
    )
}