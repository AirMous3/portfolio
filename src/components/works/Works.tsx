import React, { ReactElement } from 'react';

import { SimpleSlider } from './slider/Slider';
import s from './works.module.scss';

const Fade = require('react-reveal/Fade');

export const Works = (): ReactElement => (
  <section id="projects" className={`${s.main} section`}>
    <div className="container">
      <h2 className={s.title}>MY WORKS</h2>
      <Fade>
        <SimpleSlider />
      </Fade>
    </div>
  </section>
);
