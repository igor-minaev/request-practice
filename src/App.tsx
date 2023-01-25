import React, {useEffect, useState} from 'react';
import './App.css';
import {Posts} from "./components/Posts/Posts";
import {PostType} from "./components/Post/Post";
import {Button} from "./components/Button/Button";
import {Input} from "./components/Input/Input";


function App() {
    const [posts, setPosts] = useState<Array<PostType>>([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    console.log(title)
    console.log(body)

    const showUpPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }

    useEffect(() => {
        showUpPosts()
    }, [])

    const redisplayPosts = () => {
        showUpPosts()
    }

    const clearPosts = () => {
        setPosts([])
    }

    const addPost = () => {
        const newPost = {
            userId: 12124124151,
            id: 23233,
            title,
            body
        }
        setPosts([newPost, ...posts])
        setTitle('')
        setBody('')
    }


    return (
        <div className="App">
            <div>
                <Input placeholder={'Post title'} value={title} setValue={setTitle}/>
                <Input placeholder={'Post body'} value={body} setValue={setBody}/>
                <Button callBack={addPost}>Add New Post</Button>
            </div>
            <div className={'buttons'}>
                <Button callBack={redisplayPosts}>Redisplay Posts</Button>
                <Button callBack={clearPosts}>Clear Posts</Button>
            </div>
            <Posts posts={posts}/>
        </div>
    );

}

export default App;
