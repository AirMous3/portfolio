import React from "react";
import s from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
            <div className={s.text}>My social</div>
                <div className={s.footerMenu}>
                    <div className={s.block}>

                    </div>
                    <div className={s.block}>

                    </div>
                    <div className={s.block}>

                    </div>
                    <div className={s.block}>

                    </div>

                </div>
                <div className={s.text}>
                    Copyright - 2021 Developed by Holakhau Ilya
                </div>

            </div>
        </div>
    )
}