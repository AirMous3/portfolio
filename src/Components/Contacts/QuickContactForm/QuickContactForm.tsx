import React from "react";
import s from "./QuickContactForm.module.css"

export const QuickContactForm = () => {
    return (
        <div className={s.main}>

            <h2>Quick Contact Form</h2>
            <div className={s.wrapper}>
                <form method="post">

                    <input className={s.input} type="text" placeholder="Your Name"/>

                    <input className={s.input} type="email" placeholder="Your Email"/>

                    <input className={s.input} type="text" placeholder="Your Phone"/>

                    <input className={s.input} type="text" placeholder="Address"/>


                    <textarea className={s.textArea} placeholder="Your Message..."/>


                </form>
                <button className={s.button} type="submit">Submit</button>

            </div>
        </div>
    )
}