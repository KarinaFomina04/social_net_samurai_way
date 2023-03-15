import React from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";



export const Profile = () =>{
    return (
        <div>
            <div>
                <img src="https://celes.club/uploads/posts/2022-10/1666882025_3-celes-club-p-makoto-sinkai-oboi-na-telefon-pinterest-3.jpg" alt=""/>
            </div>
            <div>
                avatar + description
            </div>
           <MyPosts/>
        </div>
    )
}