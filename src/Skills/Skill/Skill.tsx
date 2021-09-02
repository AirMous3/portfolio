import React from 'react';
import s from "./Skill.module.css"


type PropsType = {
    title: string

}

export const Skill = (props: PropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}> ballbaldsfjk djdfjfdfjkd jkfdshjkfjhsd jkfdsjkfdsjkjfd dsadsadsadsa dsa dsa ds ad sa dasdsadsasddsadsadsadsadsa dsasjhfskfjdshballbal</span>
        </div>
    )
}