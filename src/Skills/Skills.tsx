import React from 'react';
import s from "./Skills.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.main}>
            <div className={s.skillsContainer}>
                <h2 className={s.title}>MY SKILLS</h2>
                <div className={s.skills}>
                    <Skill title={"React"} />
                    <Skill title={"Redux"}/>
                    <Skill title={"TypeScript"}/>
                </div>
            </div>
        </div>
    );
}


