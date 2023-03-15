import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";

export const MyPosts = () =>{
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>add post</button>
                    <button>remove</button>
                </div>
                <div>
                    New posts
                </div>
                <div className={s.posts}>
                   <Post message={"Hi, how are you?"}/>
                    <Post message={"It's my fiers post"}/>
                </div>
            </div>
    )
}