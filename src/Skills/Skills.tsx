import React from 'react';
import s from "./Skills.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.main}>
            <div className={s.skillsContainer}>
                <div className={s.header}>
                <h2 className={s.title}>MY SKILLS</h2>
                </div>
                <div className={s.container}>
                    <div className={s.skills}>
                        <Skill title={"React"}/>
                        <Skill title={"Redux"}/>
                        <Skill title={"TypeScript"}/>
                        <Skill title={"Css"}/>
                        <Skill title={"Css"}/>
                        <Skill title={"Css"}/>

                    </div>
                </div>
            </div>
        </div>
    );
}


