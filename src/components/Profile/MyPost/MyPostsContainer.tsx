import React from 'react';
import {addPostAC, onPostChangeAC, PostsType} from "../../../redux/profileReducer";
import {DispatchType} from "../../../App";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/reduxStore";



export type MyPostsPropsType = {
    // store: AppStoreType
    posts: PostsType[]
    newPostText: string
    dispatch: (action: DispatchType) => void
}




export const MyPostsContainer = (props: MyPostsPropsType) => {



    const onClickBtnAddPostHandler = () => {
        props.dispatch(addPostAC())

    }

    const onPostChange = (text:string) => {
        props.dispatch(onPostChangeAC(text))
    }


    return (
        <>
         <MyPosts
             posts={props.posts}
             newPostText={props.newPostText}
             // dispatch={props.dispatch}
             onPostChangeAC={onPostChange}
             addPostAC={onClickBtnAddPostHandler}/>
        </>
    );
};

