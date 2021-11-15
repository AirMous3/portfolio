import React from 'react';
import s from "./Skills.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    const data = [
        {
            title: 'React',
            description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.' +
                ' It lets you compose complex UIs from small and isolated pieces of code called “components”'
        },
        {
            title: 'Redux',
            description: 'Redux is a pattern and library for managing and updating application state, using events called "actions".' +
                ' It serves as a centralized store for state that needs to be used across your entire application, with rules ' +
                'ensuring that the state can only be updated in a predictable fashion.'
        },
        {
            title: 'TypeScript',
            description: 'TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.'
        },
        {
            title: 'Git',
            description: 'Distributed version control system that allows you to create repositories to manage collaborative development and, if necessary, revert to earlier versions of the application.'
        },
        {
            title: 'SASS',
            description: 'Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. ' +
                'Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.'
        },

    ]

    return (
        <section className={`${s.main} section`}>
            <div className={`${s.container} container`}>

                <h2 className={s.title}>MY SKILLS</h2>


                <div className={s.skills}>
                    {data.map(s =>
                        <Skill title={s.title} description={s.description}/>
                    )}
                </div>

            </div>
        </section>
    )
}


