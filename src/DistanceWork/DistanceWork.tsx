import React from "react"
import s from "./DistanceWork.module.css"
import redSonic from "../assets/image/1000px.png"

export const DistanceWork = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <h2>
                    Рассматриваю варианты удалённой работы
                </h2>
                <div className={s.wrapper}>
                    <span> dsadsadsadsdsads dsadsadsadsadsadsa dsadsadsadsadsa dsadsadsadsadsadsadsa dsadsadsadsa</span>
                </div>

            </div>
            <div className={s.photo}>
                <img src={redSonic} alt="redSonic"/>
            </div>
        </div>
    )
}