import React, { ReactElement } from 'react';

import { Link } from 'react-scroll';

import s from './nav.module.scss';

export const Nav = (): ReactElement => (
  <div className={s.nav}>
    <Link to="skills">Skills</Link>
    <Link to="projects">Projects</Link>
    <Link to="contacts">Contacts</Link>
  </div>
);
