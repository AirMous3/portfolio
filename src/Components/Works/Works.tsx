import React from "react";
import s from "./Works.module.scss"
import {Work} from "./work/Work";

export const Works = () => {
    return (
        <section className={`${s.main} section`}>

            <div className={`container`}>
                <h2 className={s.text}>MY WORKS</h2>

                <div className={s.wrapper}>

                    <Work/>
                    <Work/>
                    <Work/>


                </div>

            </div>

        </section>
    )
}
