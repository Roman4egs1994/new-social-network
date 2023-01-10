import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {ActionTypes, addPostActionCreator, onPostChangeActionCreator, PostsType} from "../../../redux/state";
import {Button} from "../../Button/Button";



export type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}




export const MyPosts = (props: MyPostsPropsType) => {



    const myPosts = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    const newPostHandler = React.createRef<HTMLTextAreaElement>()


    const onClickBtnAddPostHandler = () => {
        // props.dispatch({type: "ADD-POST"})
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value

        // props.dispatch({type: "CHANGE-NEW-POST-TEXT", newText: text})
        props.dispatch(onPostChangeActionCreator(text))
    }


    return (
        <>
            <div className={style.postsBlock}>
                <h2>My Post</h2>
                <div className={style.newPost}>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostHandler} value={props.newPostText}/>
                    </div>
                    {/*<button onClick={onClickBtnAddPostHandler}>Add post</button>*/}
                    <Button name={'Add post'} callBack={onClickBtnAddPostHandler} />
                </div>
                <div className={style.posts}>
                    {myPosts}
                </div>
            </div>
        </>
    );
};

