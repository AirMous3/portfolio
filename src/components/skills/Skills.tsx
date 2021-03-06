import React, { ReactElement } from 'react';

import ReduxSonic from './features/12.gif';
import GitSonic from './features/13.gif';
import SassSonic from './features/28.gif';
import TypeScriptSonic from './features/5.gif';
import ReactSonic from './features/8.gif';
import { Skill } from './skill/Skill';
import s from './skills.module.scss';

const Zoom = require('react-reveal/Zoom');

const data = [
  {
    title: 'React',
    description:
      'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.' +
      ' It lets you compose complex UIs from small and isolated pieces of code called “components”',
    image: ReactSonic,
  },
  {
    title: 'Redux',
    description:
      'Redux is a pattern and library for managing and updating application state, using events called "actions".' +
      ' It serves as a centralized store for state that needs to be used across your entire application, with rules ' +
      'ensuring that the state can only be updated in a predictable fashion.',
    image: ReduxSonic,
  },
  {
    title: 'TypeScript',
    description:
      'TypeScript adds additional syntax to JavaScript to support a tighter ' +
      'integration with your editor. Catch errors early in your editor.',
    image: TypeScriptSonic,
  },
  {
    title: 'Git',
    description:
      'Distributed version control system that allows you to create repositories to manage ' +
      'collaborative development and, if necessary, revert to earlier versions of the application.',
    image: GitSonic,
  },
  {
    title: 'SASS',
    description:
      'Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables,' +
      ' nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. ' +
      'Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.',
    image: SassSonic,
  },
];

export const Skills = (): ReactElement => (
  <section className={`${s.main} section`}>
    <div id="skills" className="container">
      <h2 className={s.skillsTitle}>MY SKILLS</h2>

      <div className={s.skills}>
        {data.map(({ title, description, image }) => (
          <Zoom key={title}>
            <Skill title={title} description={description} image={image} />
          </Zoom>
        ))}
      </div>
    </div>
  </section>
);
