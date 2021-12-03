import React from "react";
import s from "./Works.module.scss"
import Slider from "react-slick";
import socialNetwork from '../../assets/image/workIcons/socialNetwork.png'
import counter from '../../assets/image/workIcons/counter.png'
import todolist from '../../assets/image/workIcons/todo.png'
import somethingElse from '../../assets/image/workIcons/someElse.png'

export const Works = () => {

    return (
        <section className={`${s.main} section`}>

            <div id={"projects"}>
                <h2 className={s.text}>MY WORKS</h2>


                <SimpleSlider/>

            </div>

        </section>
    )
}

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },


        ]
    };
    return (
        <div className={`${s.sliderContainer} container`}>
            <Slider {...settings} >
                <div className={s.slide}>
                    <a href="https://github.com/AirMous3/toDO" target={'_blank'}>
                        <div className={s.image}>

                            <img
                                src={todolist}
                                alt="toDoImage"/>

                        </div>
                        <div className={s.descriptionWrapper}>
                            <h3>TODOLIST</h3>

                            <div className={s.description}>
                                <p>Web application designed to conveniently structure
                                    information about all current tasks
                                    in one place.
                                </p>
                                <div>
                                    <h4 className={s.techName}>TECHNOLOGIES</h4>
                                    <p className={s.techDescription}>React, Redux,
                                        Redux-thunk, TS, Axios, Formik,
                                        Material UI.
                                    </p>
                                </div>
                            </div>


                        </div>
                    </a>
                </div>
                <div className={s.slide}>
                    <a href="https://github.com/AirMous3/social" target={'_blank'}>
                        <div className={s.image}>

                            <img
                                src={socialNetwork}
                                alt="socialNetworkImage"/>

                        </div>

                        <div className={s.descriptionWrapper}>
                            <h3>SOCIAL NETWORK</h3>

                            <div className={s.description}>
                                <div>Web application that allows registered users to post
                                    information and communicate with
                                    each other.
                                </div>
                                <div>
                                    <div className={s.techName}>TECHNOLOGIES</div>
                                    <div className={s.techDescription}>React, Redux,
                                        Redux-thunk, TS, Axios,
                                        React-hook-form, React-router.

                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={s.slide}>
                    <a href="https://github.com/AirMous3/social"
                       target={'_blank'}>
                        <div className={s.image}>

                            <img
                                src={counter}
                                alt="counterImage"/>

                        </div>

                        <div className={s.descriptionWrapper}>
                            <h3>COUNTER</h3>

                            <div className={s.description}>
                                <div>Simple React application that allows increment or
                                    decrement count.
                                </div>
                                <div>
                                    <div className={s.techName}>TECHNOLOGIES</div>
                                    <div className={s.techDescription}>React, Redux, TS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={s.slide}>
                    <a href="https://github.com/AirMous3/social" target={'_blank'}>
                        <div className={s.image}>

                            <img
                                src={somethingElse}
                                alt="somethingElseImage"/>

                        </div>

                        <div className={s.descriptionWrapper}>
                            <h3>SOMETHING ELSE</h3>

                            <div className={s.description}>
                                <div>
                                    Here will be a description of the future project, his functionality, complexity or something else
                                </div>
                                <div>
                                    <div className={s.techName}>TECHNOLOGIES</div>
                                    <div className={s.techDescription}>React, Redux,
                                        Redux-thunk, TS, Axios, Formik,
                                        Material UI.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            </Slider>
        </div>
    );
}