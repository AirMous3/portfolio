import React from "react"
import s from "./DistanceWork.module.css"
import pinkSonic from "../assets/image/1000px.png"

export const DistanceWork = () => {
    return (
        <section className={`${s.main} section`}>
            <div className={`${s.container} container`}>

                <div className={s.textBox}>
                    <h2>
                        Considering options for remote work
                    </h2>
                    <div className={s.wrapper}>
                        <span > dsadsadsadsdsads dsadsadsadsadsadsa dsadsadsadsadsa dsadsadsadsadsadsadsa dsadsadsadsa</span>
                    </div>

                </div>
                <div className={s.photo}>
                    <img src={pinkSonic} alt="redSonic"/>
                </div>
            </div>

        </section>
    )
}