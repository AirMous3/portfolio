import React from 'react';
import s from "./Skill.module.css"
import sonic from "../../assets/image/MiniIcon/BlueSonic.png"

type PropsType = {
    title: string

}

export const Skill = (props: PropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.container}>
                <div className={s.icon}>
                    <img src={sonic} alt="hedgehog"/>
                </div>
                <h3>{props.title}</h3>
                <span className={s.description}> blballbal bllblbalbla blalbalbllab blalbalblabla</span>
            </div>
        </div>
    )
}