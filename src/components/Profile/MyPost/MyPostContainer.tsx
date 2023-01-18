import {connect} from "react-redux";
import {Profile} from "../Profile";
import {AppStateType} from "../../../redux/reduxStore";
import {addPostAC, onPostChangeAC, PostsType, ProfilePageType} from "../../../redux/profileReducer";
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";




type mapStatePostToPropsType = {
    posts: PostsType []
    newPostText: string
}


type mapDispatchPostToPropsType = {
    addPostAC: () => void
    onPostChangeAC: (newText: string) => void
}

const mapStatePostToProps = (state:AppStateType): mapStatePostToPropsType => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}


const mapDispatchPostToProps = (dispatch: Dispatch): mapDispatchPostToPropsType => {
    return {
        addPostAC: () => {
            dispatch(addPostAC())
        },
        onPostChangeAC: (newText:string) => {
            dispatch(onPostChangeAC(newText))
        }
    }
}



export const MyPostContainer = connect(mapStatePostToProps,mapDispatchPostToProps)(MyPosts)