import React from "react";
import s from "./QuickContactForm.module.css"

export const QuickContactForm = () => {
    return (
        <div className={s.main}>

            <h2>Quick Contact Form</h2>
            <div>
                <form method="post">
                    <div>
                        <input type="text" placeholder="Your Name"/>
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Your Phone"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Address"/>
                    </div>
                    <div>

                        <textarea placeholder="Your Massage..."/>

                    </div>
                    <div>
                        <button type="submit">Submit</button>

                    </div>

                </form>

            </div>
        </div>
    )
}