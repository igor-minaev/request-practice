import React, {FC} from 'react';
import s from './Post.module.css'


export type PostType = {
    userId?: number
    id?: number
    title: string
    body: string
}

export const Post: FC<PostType> = (props) => {
    return (
        <div className={s.post}>
            <h3 className={s.title}>{props.title}</h3>
            <p className={s.body}>{props.body}</p>
        </div>
    );
};

