import React from "react";
import s from "./QuickContactForm.module.css"

export const QuickContactForm = () => {
    return (
        <div className={s.main}>

            <h2>Quick Contact Form</h2>
            <div className={s.wrapper}>
                <form method="post">
                    <div >
                        <input className={s.input} type="text" placeholder="Your Name"/>
                    </div>
                    <div>
                        <input className={s.input} type="email" placeholder="Your Email"/>
                    </div>
                    <div>
                        <input className={s.input} type="text" placeholder="Your Phone"/>
                    </div>
                    <div>
                        <input className={s.input} type="text" placeholder="Address"/>
                    </div>
                    <div >

                        <textarea className={s.textArea} placeholder="Your Massage..."/>

                    </div>
                    <div >
                        <button className={s.button} type="submit">Submit</button>

                    </div>

                </form>

            </div>
        </div>
    )
}