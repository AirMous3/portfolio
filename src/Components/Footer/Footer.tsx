import React from "react";
import s from "./Footer.module.scss"

export const Footer = () => {
    return (
        <div className={s.main}>
            <div className={`${s.container} container`}>
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
                    copyright 2021 all rights reserved
                </div>

            </div>
        </div>
    )
}