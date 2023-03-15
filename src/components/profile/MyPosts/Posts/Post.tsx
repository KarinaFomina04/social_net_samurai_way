import React from 'react';
import s from "./Post.module.css";

type MessageType = {
    message: string
}
export const Post = (props: MessageType) => {
    return(
        <div className={s.item}>
            <img src="https://s3.amazonaws.com/photography.prod.demandstudios.com/c639593c-3f0b-48a5-a623-13f772f411ba.png" alt=""/>
            {props.message}
            <div>
                <span>like</span>
            </div> 
        </div>
    )
}