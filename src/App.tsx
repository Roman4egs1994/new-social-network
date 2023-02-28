import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {AppStateType} from "./redux/reduxStore";
import {ActionDialogType} from "./redux/dialogsReducer";
import {ActionProfileType, setUserProfileAC} from "./redux/profileReducer";
import {DialogContainer} from "./components/Dialogs/DialogContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import FriendsLessonAjax from "./components/Users/FriendsLessonAjax";


// exact - компонента отрендерится когда попал точь в точь по пути ссылок

type AppTypeProps = {
    store: AppStateType
    dispatch: (action: DispatchType) => void
}


export type DispatchType = ActionDialogType | ActionProfileType

function App(props: AppTypeProps) {


    return (
        <div className="App">
            <div className={'app-wrapper'}>
                <HeaderContainer />
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={"/friendsLessonAjax"} render={() => <FriendsLessonAjax />}/>
                    <Route path={"/profile/:userId"} render={() => <ProfileContainer/>}/>
                    <Route path={"/dialogs"} render={() => <DialogContainer dialogs={props.store.dialogsReducer.dialogs}/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>

            </div>
        </div>
    );
}

export default App;
