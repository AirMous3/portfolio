import React from "react";
import s from "./QuickContactForm.module.css"

export const QuickContactForm = () => {
    return (
        <div className={s.main}>

            <h2>Quick Contact Form</h2>
            <div>
                <form method="post">
                    <div style={{marginTop: "20px"}}>
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
                    <div style={{marginTop: "20px"}}>

                        <textarea className={s.textArea} placeholder="Your Massage..."/>

                    </div>
                    <div style={{marginTop: "10px"}}>
                        <button className={s.button} type="submit">Submit</button>

                    </div>

                </form>

            </div>
        </div>
    )
}