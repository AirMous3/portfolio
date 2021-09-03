import React from "react";
import s from "./Job.module.css"

export const Job = () => {
    return (
        <div className={s.main}>
            <div>picture</div>
            <div>Название проекта</div>
            <span>Описание проекта </span>
        </div>
    )
}