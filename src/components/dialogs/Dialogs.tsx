import React from 'react';
import s from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    Karina
                </div>
                <div className={s.dialog}>
                    Siarhei
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Marianna
                </div>
                <div className={s.dialog}>
                    Zina
                </div>
                <div className={s.dialog}>
                    Natasha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>🤗</div>
            </div>
        </div>
    )
}