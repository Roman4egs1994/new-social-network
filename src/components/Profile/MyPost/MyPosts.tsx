import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {Button} from "../../Button/Button";
import {addPostAC, PostsType} from "../../../redux/profileReducer";
import {DispatchType} from "../../../App";
import {AppStateType} from "../../../redux/reduxStore";




export type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    // dispatch: (action: DispatchType) => void


    addPostAC:()=> void
    onPostChangeAC: (newText: string)=> void
}




export const MyPosts = (props: MyPostsPropsType) => {



    const myPosts = props.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    const newPostHandler = React.createRef<HTMLTextAreaElement>()


    const onAddPost = () => {
        // props.dispatch(addPostAC())
        props.addPostAC();
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value

        props.onPostChangeAC(text)
        // props.dispatch(onPostChangeAC(text))

    }


    return (
        <>
            <div className={style.postsBlock}>
                <h2>My Post</h2>
                <div className={style.newPost}>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostHandler} value={props.newPostText}/>
                    </div>
                    <Button name={'Add post'} callBack={onAddPost} />
                </div>
                <div className={style.posts}>
                    {myPosts}
                </div>
            </div>
        </>
    );
};

