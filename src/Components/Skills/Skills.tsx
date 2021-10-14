import React from 'react';
import s from "./Skills.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <section className={`${s.main} section`}>
            <div className={`${s.container} container`}>

                <h2 className={s.title}>MY SKILLS</h2>

                <div className={s.wrapper}>
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
        </section>
    );
}


