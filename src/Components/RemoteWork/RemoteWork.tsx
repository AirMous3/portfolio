import React from "react"
import s from "./RemoteWork.module.scss"
import pinkSonic from "../../assets/image/1000px.png"

export const RemoteWork = () => {
    return (
        <section className={`${s.main} section`}>
            <div className={s.container}>

                <div className={s.textBox}>
                    <h2>
                        Considering options for remote work
                    </h2>
                </div>

                <div className={s.photo}>
                    <img src={pinkSonic} alt="redSonic"/>
                </div>
            </div>

        </section>
    )
}