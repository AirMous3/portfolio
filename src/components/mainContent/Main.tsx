import React, { ReactElement } from 'react';

import redSonic from '../../assets/image/mainLogo/RedSonic.png';

import s from './main.module.scss';

export const Main = (): ReactElement => (
  <section className={`${s.main} section`}>
    <div className={`${s.container} container`}>
      <div className={s.text}>
        <span>Hi there</span>
        <p>I'm ILYA HOLAKHAU</p>
        <h1>Front-End developer</h1>
      </div>

      <div className={s.photo}>
        <img src={redSonic} alt="RedSonic" />
      </div>
    </div>
  </section>
);
