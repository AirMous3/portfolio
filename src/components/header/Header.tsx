import React, { ReactElement } from 'react';

import s from './header.module.scss';
import { Nav } from './navBar/Nav';

export const Header = (): ReactElement => (
  <div className={s.header}>
    <Nav />
  </div>
);
