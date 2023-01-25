import React, {FC} from 'react';
import {Post, PostType} from "../Post/Post";
import s from './Posts.module.css'

type PostsPropsType = {
    posts: Array<PostType>
}


export const Posts: FC<PostsPropsType> = (props) => {
    const postsList = props.posts.map(post => {
        return <Post key={post.id} title={post.title} body={post.body}/>
    })

    return (
        <div className={s.posts}>
            {postsList}
        </div>
    );
};
