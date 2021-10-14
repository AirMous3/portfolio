import React from 'react';
import s from "./Skill.module.css"


type PropsType = {
    title: string

}

export const Skill = (props: PropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.container}>
                <div className={s.icon}>
                    <img src={"https://i0.wp.com/pa1.narvii.com/6495/a59913f75290d830cfb61f2651917c6b2ce3400b_hq.gif"}
                         alt="hedgehog"/>
                </div>
                <h3>{props.title}</h3>

                <span className={s.description}>  sa  dfgshfdghsghfdsgfs fdhsgfgsdghfdsg dsadd sa dsa dsadsasdadsa dsadsadsa dsadsadas da blalbalbllab blalbalblablablballbal bllblbalblfdsf dsf dsfdsfdfddfsghfdsgh fdghsdghfdgshgh dfgshfdghsghfdsgfs fdhsgfgsdghfdsg dsadd sa dsa dsadsasdadsa dsadsadsa dsadsadas da blalbalbllab blalbalblabla</span>
            </div>
        </div>
    )
}