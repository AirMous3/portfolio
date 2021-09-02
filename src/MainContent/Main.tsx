import React from "react"
import s from "./Main.module.css"


export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.text}>
                <span>
                    Hi there
                </span>
                    <h1>
                        ABOUT ME
                    </h1>
                    <p>
                        Front-End developer
                    </p>
                </div>

                <div className={s.photo}>picture</div>
            </div>
        </div>
    )
}