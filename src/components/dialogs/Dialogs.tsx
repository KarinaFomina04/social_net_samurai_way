import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to={'/dialogs/1'}>Karina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>Siarhei</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>Marianna</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'}>Zina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/6'}>Natasha</NavLink>
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