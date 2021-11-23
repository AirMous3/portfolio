import React from "react";
import s from "./Works.module.scss"
import Slider from "react-slick";

export const Works = () => {

    return (
        <section className={`${s.main} section`}>

            <div className={`container`}>
                <h2 className={s.text}>MY WORKS</h2>

                <div className={s.wrapper}>


                    <SimpleSlider/>
                </div>

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
        <div>
            <Slider {...settings} >
                <div className={s.slide}>

                    <a href="https://github.com/AirMous3/toDO">
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd7039f6-9d6a-4365-85a3-c7cdaa31c873/d5ku9pk-dac0bc61-12d8-4fbf-bd5c-9031d262f418.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkNzAzOWY2LTlkNmEtNDM2NS04NWEzLWM3Y2RhYTMxYzg3M1wvZDVrdTlway1kYWMwYmM2MS0xMmQ4LTRmYmYtYmQ1Yy05MDMxZDI2MmY0MTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3NrvCTaDrOqn57eKhNiu_b7XC1eaNUAlXzgSKkU-c74"
                            alt="sas"/>
                    </a>
                    <div className={s.descriptionWrapper}>
                        <div>TODOLIST</div>

                        <div className={s.description}>
                            <div>Web application designed to conveniently structure information about all current tasks
                                in one place.
                            </div>
                            <div style={{padding: '0'}}>
                                <div className={s.techName}>TECHNOLOGIES</div>
                                <div className={s.techDescription}>React, Redux, Redux-thunk, TS, Axios, Formik,
                                    Material UI.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={s.slide}>
                    <a href="https://github.com/AirMous3/social">
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd7039f6-9d6a-4365-85a3-c7cdaa31c873/d5ku9pk-dac0bc61-12d8-4fbf-bd5c-9031d262f418.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkNzAzOWY2LTlkNmEtNDM2NS04NWEzLWM3Y2RhYTMxYzg3M1wvZDVrdTlway1kYWMwYmM2MS0xMmQ4LTRmYmYtYmQ1Yy05MDMxZDI2MmY0MTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3NrvCTaDrOqn57eKhNiu_b7XC1eaNUAlXzgSKkU-c74"
                            alt="sas"/>
                    </a>
                    <div className={s.descriptionWrapper}>
                        <div>SOCIAL NETWORK</div>

                        <div className={s.description}>
                            <div>Web application that allows registered users to post information and communicate with
                                each other.
                            </div>
                            <div style={{padding: '0'}}>
                                <div className={s.techName}>TECHNOLOGIES</div>
                                <div className={s.techDescription}>React, Redux, Redux-thunk, TS, Axios,
                                    React-hook-form, React-router.

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.slide}>
                    <a href="https://github.com/AirMous3/counter">
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd7039f6-9d6a-4365-85a3-c7cdaa31c873/d5ku9pk-dac0bc61-12d8-4fbf-bd5c-9031d262f418.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkNzAzOWY2LTlkNmEtNDM2NS04NWEzLWM3Y2RhYTMxYzg3M1wvZDVrdTlway1kYWMwYmM2MS0xMmQ4LTRmYmYtYmQ1Yy05MDMxZDI2MmY0MTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3NrvCTaDrOqn57eKhNiu_b7XC1eaNUAlXzgSKkU-c74"
                            alt="sas"/>
                    </a>
                    <div className={s.descriptionWrapper}>
                        <div>COUNTER</div>

                        <div className={s.description}>
                            <div>Simple React application that allows increment or decrement count.
                            </div>
                            <div style={{padding: '0'}}>
                                <div className={s.techName}>TECHNOLOGIES</div>
                                <div className={s.techDescription}>React, Redux, TS.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.slide}>
                    <a href="">
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd7039f6-9d6a-4365-85a3-c7cdaa31c873/d5ku9pk-dac0bc61-12d8-4fbf-bd5c-9031d262f418.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkNzAzOWY2LTlkNmEtNDM2NS04NWEzLWM3Y2RhYTMxYzg3M1wvZDVrdTlway1kYWMwYmM2MS0xMmQ4LTRmYmYtYmQ1Yy05MDMxZDI2MmY0MTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3NrvCTaDrOqn57eKhNiu_b7XC1eaNUAlXzgSKkU-c74"
                            alt="sas"/>
                    </a>
                    <div className={s.descriptionWrapper}>
                        <div>SOMETHING ELSE</div>

                        <div className={s.description}>
                            <div>Web application designed to conveniently structure information about all current tasks
                                in one place.
                            </div>
                            <div style={{padding: '0'}}>
                                <div className={s.techName}>TECHNOLOGIES</div>
                                <div className={s.techDescription}>React, Redux, Redux-thunk, TS, Axios, Formik,
                                    Material UI.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
}