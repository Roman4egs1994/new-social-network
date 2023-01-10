import React from 'react';
// import style from './Profile.module.css'
import {MyPosts} from "./MyPost/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType, ActionTypes} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePropsType
    // addNewPost: () => void
    // updateAddNewPost: (newText: string) => void
    dispatch: (action: ActionTypes)=> void
}

type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
}


export const Profile = (props: ProfileType)  => {

    return (
        <>
            <div>
                <ProfileInfo/>
                <MyPosts
                    posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    // addNewPost={props.addNewPost}
                    dispatch = {props.dispatch}
                    // updateAddNewPost = {props.updateAddNewPost}
                />
            </div>
        </>
    );
};

