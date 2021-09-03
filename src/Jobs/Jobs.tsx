import React from "react";
import s from "./Jobs.module.css"
import {Job} from "./job/Job";

export const Jobs = () => {
    return (
        <div className={s.main}>

            <div className={s.container}>
                <h2 className={s.text}>MY JOBS</h2>

                <div className={s.containerMini}>

                        <Job/>
                        <Job/>
                        <Job/>

                </div>

            </div>

        </div>
    )
}
