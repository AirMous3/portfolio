import React from "react";
import s from "./Works.module.scss"
import {Work} from "./work/Work";

export const Works = () => {
    const data = [
        {
            title: "Todolist",
            description: "Web application designed to conveniently structure information about all current tasks in one place."
        },
        {
            title: "Social Network",
            description: "Web application that allows registered users to post information and communicate with each other."
        },
    ]
    return (
        <section className={`${s.main} section`}>

            <div className={`container`}>
                <h2 className={s.text}>MY WORKS</h2>

                <div className={s.wrapper}>

                    {data.map((w, index) => <Work key={index} title={w.title} description={w.description}/>)}
                </div>

            </div>

        </section>
    )
}
