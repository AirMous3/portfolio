import React from "react"
import s from "./RemoteWork.module.css"
import pinkSonic from "../../assets/image/1000px.png"

export const RemoteWork = () => {
    return (
        <section className={`${s.main} section`}>
            <div className={`${s.container} `}>

                <div className={s.textBox}>

                    <h2 className={s.mainText}>
                        Considering options for remote work
                    </h2>

                    <div className={s.wrapper}>
                        <span > dsadasd dasdsadas das dasdsadsa sdsa dasdasdas </span>
                    </div>

                </div>
                <div className={s.photo}>
                    <img src={pinkSonic} alt="redSonic"/>
                </div>
            </div>

        </section>
    )
}