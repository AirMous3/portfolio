import React from "react"
import s from "./Main.module.css"
import redSonic from "../../assets/image/MainLogo/RedSonic.png"


export const Main = () => {
    return (
        <section className={`${s.main} section`}>
            <div className={`${s.container} container`}>
                <div className={s.text}>
                <span>
                    Hi there
                </span>
                    <p>
                        I'm ILYA HOLAKHAU
                    </p>
                    <h1>
                        Front-End developer
                    </h1>

                </div>

                <div className={s.photo}>
                    <img  src={redSonic} alt="RedSonic"/>
                </div>
            </div>
        </section>
    )
}