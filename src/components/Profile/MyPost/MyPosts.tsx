import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {PostsType} from "../../../index";


export type MyPostsPropsType = {
    posts: PostsType[]
}


// export type PostsType = {
//     id:number
//     message: string
//     likesCount: number
// }

export const MyPosts = (props:MyPostsPropsType) => {

    const myPosts = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

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

