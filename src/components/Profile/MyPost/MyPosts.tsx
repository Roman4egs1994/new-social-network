import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";



export const MyPosts = () => {

    const postData = [
        {id:1, message: "Hi, how are you?", likesCount: 12},
        {id:2, message: "It my first post", likesCount: 4},
        {id:3, message: "ahahah", likesCount: 3},
    ]
    const myPosts = postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    return (
        <>
            <div className={style.postsBlock}>
               <h2>My Post</h2>
                <div className={style.newPost}>
                    <div>
                        <textarea value={'asdads'}></textarea>
                    </div>
                    <button>Add post</button>
                </div>
                <div className={style.posts}>
                    {myPosts}
                </div>

            </div>
        </>
    );
};

