import React, {Component} from "react";
import s from "./Works.module.scss"
import {Work} from "./work/Work";
import Slider from "react-slick";

export const Works = () => {
    const data = [
        {
            title: "Todolist",
            description: "Web application designed to conveniently structure information about all current tasks in one place."
        },
        {
            title: "Social Network",
            description: "Web application that allows registered users to post information and communicate with each other."
        },
    ]
    return (
        <section className={`${s.main} section`}>

            <div className={`container`}>
                <h2 className={s.text}>MY WORKS</h2>

                <div className={s.wrapper}>

                    {/*{data.map((w, index) => <Work key={index} title={w.title} description={w.description}/>)}*/}
                    <SimpleSlider/>
                </div>

            </div>

        </section>
    )
}

class SimpleSlider extends Component {
    render() {
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
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd7039f6-9d6a-4365-85a3-c7cdaa31c873/d5ku9pk-dac0bc61-12d8-4fbf-bd5c-9031d262f418.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkNzAzOWY2LTlkNmEtNDM2NS04NWEzLWM3Y2RhYTMxYzg3M1wvZDVrdTlway1kYWMwYmM2MS0xMmQ4LTRmYmYtYmQ1Yy05MDMxZDI2MmY0MTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3NrvCTaDrOqn57eKhNiu_b7XC1eaNUAlXzgSKkU-c74"
                            alt="sas"/>

                    </div>
                    <div className={s.slide}>
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd7039f6-9d6a-4365-85a3-c7cdaa31c873/d5ku9pk-dac0bc61-12d8-4fbf-bd5c-9031d262f418.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkNzAzOWY2LTlkNmEtNDM2NS04NWEzLWM3Y2RhYTMxYzg3M1wvZDVrdTlway1kYWMwYmM2MS0xMmQ4LTRmYmYtYmQ1Yy05MDMxZDI2MmY0MTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3NrvCTaDrOqn57eKhNiu_b7XC1eaNUAlXzgSKkU-c74"
                            alt="sas"/>

                    </div>
                    <div className={s.slide}>
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd7039f6-9d6a-4365-85a3-c7cdaa31c873/d5ku9pk-dac0bc61-12d8-4fbf-bd5c-9031d262f418.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkNzAzOWY2LTlkNmEtNDM2NS04NWEzLWM3Y2RhYTMxYzg3M1wvZDVrdTlway1kYWMwYmM2MS0xMmQ4LTRmYmYtYmQ1Yy05MDMxZDI2MmY0MTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3NrvCTaDrOqn57eKhNiu_b7XC1eaNUAlXzgSKkU-c74"
                            alt="sas"/>

                    </div>
                    <div className={s.slide}>
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd7039f6-9d6a-4365-85a3-c7cdaa31c873/d5ku9pk-dac0bc61-12d8-4fbf-bd5c-9031d262f418.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkNzAzOWY2LTlkNmEtNDM2NS04NWEzLWM3Y2RhYTMxYzg3M1wvZDVrdTlway1kYWMwYmM2MS0xMmQ4LTRmYmYtYmQ1Yy05MDMxZDI2MmY0MTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3NrvCTaDrOqn57eKhNiu_b7XC1eaNUAlXzgSKkU-c74"
                            alt="sas"/>

                    </div>
                    <div className={s.slide}>
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd7039f6-9d6a-4365-85a3-c7cdaa31c873/d5ku9pk-dac0bc61-12d8-4fbf-bd5c-9031d262f418.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkNzAzOWY2LTlkNmEtNDM2NS04NWEzLWM3Y2RhYTMxYzg3M1wvZDVrdTlway1kYWMwYmM2MS0xMmQ4LTRmYmYtYmQ1Yy05MDMxZDI2MmY0MTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3NrvCTaDrOqn57eKhNiu_b7XC1eaNUAlXzgSKkU-c74"
                            alt="sas"/>

                    </div>

                </Slider>
            </div>
        );
    }
}