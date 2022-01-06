import React, { ReactElement } from 'react';

import Slider from 'react-slick';

import counter from '../../../assets/image/workIcons/counter.png';
import noteBook from '../../../assets/image/workIcons/noteBook.png';
import search from '../../../assets/image/workIcons/searchForBooks.png';
import socialNetwork from '../../../assets/image/workIcons/socialNetwork.png';
import somethingElse from '../../../assets/image/workIcons/someElse.png';
import todolist from '../../../assets/image/workIcons/todo.png';
import weatherCards from '../../../assets/image/workIcons/weather.png';
import s from '../works.module.scss';

export const SimpleSlider = (): ReactElement => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className={`${s.sliderContainer} container`}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        <div className={s.slide}>
          <a href="https://github.com/AirMous3/toDO" target="_blank" rel="noreferrer">
            <div className={s.image}>
              <img src={todolist} alt="toDoImage" />
            </div>
            <div className={s.descriptionWrapper}>
              <h3>TODOLIST</h3>

              <div className={s.description}>
                <p>
                  Web application designed to conveniently structure information about all
                  current tasks in one place.
                </p>
                <div>
                  <h4 className={s.techName}>TECHNOLOGIES</h4>
                  <p className={s.techDescription}>
                    React, Redux, Redux-thunk, TS, Axios, Formik, Material UI,
                    React-router.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={s.slide}>
          <a href="https://github.com/AirMous3/social" target="_blank" rel="noreferrer">
            <div className={s.image}>
              <img src={socialNetwork} alt="socialNetworkImage" />
            </div>

            <div className={s.descriptionWrapper}>
              <h3>SOCIAL NETWORK</h3>

              <div className={s.description}>
                <div>
                  Web application that allows registered users to post information and
                  communicate with each other.
                </div>
                <div>
                  <div className={s.techName}>TECHNOLOGIES</div>
                  <div className={s.techDescription}>
                    React, Redux, Redux-thunk, TS, Axios, React-hook-form, React-router.
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={s.slide}>
          <a href="https://github.com/AirMous3/counter" target="_blank" rel="noreferrer">
            <div className={s.image}>
              <img src={counter} alt="counterImage" />
            </div>

            <div className={s.descriptionWrapper}>
              <h3>COUNTER</h3>

              <div className={s.description}>
                <div>
                  Simple React application that allows increment or decrement count.
                </div>
                <div>
                  <div className={s.techName}>TECHNOLOGIES</div>
                  <div className={s.techDescription}>React, Redux, TS.</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={s.slide}>
          <a
            href="https://github.com/AirMous3/NybleCraft_Testovoe"
            target="_blank"
            rel="noreferrer"
          >
            <div className={s.image}>
              <img src={noteBook} alt="noteBookImage" />
            </div>

            <div className={s.descriptionWrapper}>
              <h3>NoteBook</h3>

              <div className={s.description}>
                <div>
                  React Web application that allows create notes, edit, delete, filter by
                  tag.
                </div>
                <div>
                  <div className={s.techName}>TECHNOLOGIES</div>
                  <div className={s.techDescription}>React, TS, SASS.</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={s.slide}>
          <a
            href="https://github.com/AirMous3/InnoTechSolution"
            target="_blank"
            rel="noreferrer"
          >
            <div className={s.image}>
              <img src={weatherCards} alt="weatherCardsImage" />
            </div>

            <div className={s.descriptionWrapper}>
              <h3>WeatherCards</h3>

              <div className={s.description}>
                <div>React Web application that allows add city weather cards.</div>
                <div>
                  <div className={s.techName}>TECHNOLOGIES</div>
                  <div className={s.techDescription}>
                    React, Redux, Redux-thunk, TS, Axios, Formik, Ant Design.
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={s.slide}>
          <a
            href="https://github.com/AirMous3/future_group"
            target="_blank"
            rel="noreferrer"
          >
            <div className={s.image}>
              <img src={search} alt="searchForBooksImage" />
            </div>

            <div className={s.descriptionWrapper}>
              <h3>Search For Books</h3>

              <div className={s.description}>
                <div>
                  React Web application that allows search books and filter them by
                  categories or sorting by relevance
                </div>
                <div>
                  <div className={s.techName}>TECHNOLOGIES</div>
                  <div className={s.techDescription}>
                    React, Redux, Redux-thunk, TS, Axios, Ant Design, SASS, React-router,
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={s.slide}>
          <a href="https://github.com/AirMous3" target="_blank" rel="noreferrer">
            <div className={s.image}>
              <img src={somethingElse} alt="somethingElseImage" />
            </div>

            <div className={s.descriptionWrapper}>
              <h3>SOMETHING ELSE</h3>

              <div className={s.description}>
                <div>
                  Here will be a description of the future project, his functionality,
                  complexity or something else
                </div>
                <div>
                  <div className={s.techName}>TECHNOLOGIES</div>
                  <div className={s.techDescription}>
                    React, Redux, Redux-thunk, TS, Axios, Formik, Material UI.
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </Slider>
    </div>
  );
};
