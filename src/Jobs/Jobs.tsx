import React from "react";
import s from "./Jobs.module.css"
import {Job} from "./job/Job";

export const Jobs = () => {
    return (
        <div className={s.main}>

            <div className={s.container}>
                <h2 className={s.text}>MY WORKS</h2>

                <div className={s.wrapper}>

                    <Job/>
                    <Job/>
                    <Job/>


                </div>

            </div>

        </div>
    )
}