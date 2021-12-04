import React, { ReactElement } from 'react';

import s from './nav.module.scss';

export const Nav = (): ReactElement => (
  <div className={s.nav}>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contacts">Contacts</a>
  </div>
);
