import React from 'react';
import s from "../App.module.css";



export const Profile = () =>{
    return (
        <div className={s.content}>
            <div>
                <img src="https://celes.club/uploads/posts/2022-10/1666882025_3-celes-club-p-makoto-sinkai-oboi-na-telefon-pinterest-3.jpg" alt=""/>
            </div>
            <div>
                avatar + description
                <img src="http://s3.amazonaws.com/photography.prod.demandstudios.com/c639593c-3f0b-48a5-a623-13f772f411ba.png" alt=""/>
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    <div>Post1</div>
                    <div>Post2</div>
                </div>
            </div>
        </div>
    )
}