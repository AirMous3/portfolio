import React from "react";
import s from "./QuickContactForm.module.scss"

export const QuickContactForm = () => {
    return (
        <div className={s.main}>

            <h2>Quick Contact Form</h2>
            <div className={s.wrapper}>
                <form method="post">

                    <input type="text" placeholder="Your Name"/>

                    <input type="email" placeholder="Your Email"/>

                    <input type="text" placeholder="Your Phone"/>

                    <input type="text" placeholder="Address"/>


                    <textarea className={s.textArea} placeholder="Your Message..."/>


                </form>
                <button type="submit">Submit</button>

            </div>
        </div>
    )
}