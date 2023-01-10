import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {ActionTypes, PostsType} from "../../../redux/state";



export type MyPostsPropsType = {
    posts: PostsType[]
    // addNewPost: () => void
    newPostText: string
    // updateAddNewPost: (newText: string) => void
    dispatch: (action: ActionTypes) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    const myPosts = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    const newPostHandler = React.createRef<HTMLTextAreaElement>()


    const onClickBtnAddPostHandler = () => {
            // props.addNewPost(newPostHandler.current.value)
            // newPostHandler.current.value = '';
            // props.addNewPost()
        props.dispatch({type: "ADD-POST"})
            // props.updateAddNewPost('')

    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value
        // props.updateAddNewPost(text)
        props.dispatch({type: "CHANGE-NEW-POST-TEXT", newText: text})
    }


    return (
        <>
            <div className={style.postsBlock}>
                <h2>My Post</h2>
                <div className={style.newPost}>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostHandler} value={props.newPostText}/>
                    </div>
                    <button onClick={onClickBtnAddPostHandler}>Add post</button>
                </div>
                <div className={style.posts}>
                    {myPosts}
                </div>
            </div>
        </>
    );
};

