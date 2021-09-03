import React from "react"
import s from "./Main.module.css"
import redSonic from "../assets/image/MainLogo/RedSonic.png"


export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.text}>
                <span>
                    Hi there
                </span>
                    <p>
                        I'm HOLAKHAU ILYA
                    </p>
                    <h1>
                        Front-End developer
                    </h1>

                </div>

                <div className={s.photo}>
                    <img style={{height: "100vh", position: "absolute"}} src={redSonic} alt="RedSonic"/>
                </div>
            </div>
        </div>
    )
}