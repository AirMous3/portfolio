import React, { ReactElement } from 'react';

import s from './skill.module.scss';

type PropsType = {
  title: string;
  description: string;
  image: string;
};

export const Skill = ({ title, description, image }: PropsType): ReactElement => (
  <div className={s.skill}>
    <div className={s.container}>
      <div className={s.icon}>
        <img src={image} alt="hedgehog" />
      </div>
      <h3>{title}</h3>

      <span>{description}</span>
    </div>
  </div>
);
