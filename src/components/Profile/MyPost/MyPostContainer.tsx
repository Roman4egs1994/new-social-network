import {connect} from "react-redux";
import {Profile} from "../Profile";
import {AppStateType} from "../../../redux/reduxStore";
import {addPostAC, onPostChangeAC, ProfilePageType} from "../../../redux/profileReducer";
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";




type mapStatePostToPropsType = {
    profilePage: ProfilePageType
}


type mapDispatchPostToPropsType = {
    addPostAC: () => void
    onPostChangeACType: (newText: string) => void
}

const mapStatePostToProps = (state:AppStateType): mapStatePostToPropsType => {
    return {
        profilePage: state.profileReducer
    }
}


const mapDispatchPostToProps = (dispatch: Dispatch): mapDispatchPostToPropsType => {
    return {
        addPostAC: () => {
            dispatch(addPostAC())
        },
        onPostChangeACType: (newText:string) => {
            dispatch(onPostChangeAC(newText))
        }
    }
}



export const MyPostContainer = connect(mapStatePostToProps,mapDispatchPostToProps)(MyPosts)