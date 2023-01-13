import React from 'react';
// import style from './Profile.module.css'
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType} from "../../App";
import {addPostAC, onPostChangeAC, PostsType} from "../../redux/profileReducer";
import {MyPostsContainer} from "./MyPost/MyPostsContainer";
import {AppStoreType, store} from "../../redux/reduxStore";




type ProfileType = {
    // store: AppStoreType
    profilePageStore: ProfilePropsType
    dispatch: (action: DispatchType) => void
}

type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
}


export const Profile = (props: ProfileType) => {
debugger
    return (
        <>
            <div>
                <ProfileInfo/>
                <MyPostsContainer
                    posts={props.profilePageStore.posts}
                    newPostText={props.profilePageStore.newPostText}
                    dispatch={props.dispatch}
                    // store = {props.store}
                />
            </div>
        </>
    );
};

