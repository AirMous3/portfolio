import React from 'react';
import s from "./Skill.module.scss"


type PropsType = {
    title: string
    description: string
    image: string

}

export const Skill = ({title, description, image}: PropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.container}>
                <div className={s.icon}>
                    <img src={image} alt="hedgehog"/>
                </div>
                <h3>{title}</h3>

                <span>{description}</span>
            </div>
        </div>
    )
}