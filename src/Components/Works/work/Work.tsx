import React from "react";
import s from "./Work.module.css"

export const Work = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>

                <div className={s.image}>
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd7039f6-9d6a-4365-85a3-c7cdaa31c873/d5ku9pk-dac0bc61-12d8-4fbf-bd5c-9031d262f418.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkNzAzOWY2LTlkNmEtNDM2NS04NWEzLWM3Y2RhYTMxYzg3M1wvZDVrdTlway1kYWMwYmM2MS0xMmQ4LTRmYmYtYmQ1Yy05MDMxZDI2MmY0MTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3NrvCTaDrOqn57eKhNiu_b7XC1eaNUAlXzgSKkU-c74"
                        alt="sas"/>
                    <a href="">check it</a>
                </div>


                <div className={s.wrapper}>
                    <div>Name of Project </div>
                    <div className={s.description}>
                        <span> Project description   Project description dsajkdsaj sdadhshdsd dsdsdsds dsdsds dsdsdsd  dsdsdsdsdd dddsasd dsds dsdsdsds dsdsds dsdsds dsad sadsadsadsagdgshahd sddsgdshdgshds dshdhsghds  Project description dsajkdsaj sdadhshdsd dsdsdsds dsdsds dsdsdsd  dsdsdsdsdd dddsasd dsds dsdsdsds dsdsds dsdsds dsad sadsadsadsagdgshahd sddsgdshdgshds dshdhsghds dsajkdsaj sdadhshdsd dsdsdsds dsdsds dsdsdsd  dsdsdsdsdd dddsasd dsds dsdsdsds dsdsds dsdsds dsad sadsadsadsagdgshahd sddsgdshdgshds dshdhsghds</span>
                    </div>
                </div>
            </div>
        </div>
    )
}