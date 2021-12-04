import React, { ReactElement } from 'react';

import sonic from '../../assets/image/SonicContacts.png';

import s from './contacts.module.scss';
import { MyContacts } from './myContacts/MyContacts';

export const Contacts = (): ReactElement => (
  <section className={`${s.main} section`}>
    <div className={s.container}>
      <div className={s.imageWrapper}>
        <img src={sonic} alt="blueSonic" />
      </div>
      <div className={s.contactPage}>
        <MyContacts />
      </div>
    </div>
  </section>
);
