import React, { ReactElement } from 'react';

import pinkSonic from '../../assets/image/1000px.png';

import s from './remoteWork.module.scss';

export const RemoteWork = (): ReactElement => (
  <section className={`${s.main} section`}>
    <div className={s.container}>
      <div className={s.textBox}>
        <h2>Considering options for remote work</h2>
      </div>

      <div className={s.photo}>
        <img src={pinkSonic} alt="redSonic" />
      </div>
    </div>
  </section>
);
