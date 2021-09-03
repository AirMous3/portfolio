import React from "react";
import s from "./MyContacts.module.css"

export const MyContacts = () => {
    return (
        <div className={s.main}>


            <div className={s.contactPage}>
                <h2>My contacts</h2>
                <p> description</p>

                <div className={s.address}>
                    <h3>
                        Address
                    </h3>
                    <span>
                        description
                    </span>
                </div>
                <div className={s.phone}>
                    <h3>
                        Phone
                    </h3>
                    <span>
                        description
                    </span>
                </div>
                <div className={s.email}>
                    <h3>
                        Email
                    </h3>
                    <span>
                        description
                    </span>
                </div>
            </div>


        </div>
    )
}