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
import {ActionDialogType, onMessagesChangeTextAC, onMessagesSendMessageAC} from "./redux/dialogsReducer";
import {ActionProfileType} from "./redux/profileReducer";


import {DialogContainer} from "./components/Dialogs/DialogContainer";
import {MyPostContainer} from "./components/Profile/MyPost/MyPostContainer";


// exact - компонента отрендерится когда попал точь в точь по пути ссылок

type AppTypeProps = {
    store: AppStateType
    dispatch: (action: DispatchType) => void
}


export type DispatchType = ActionDialogType | ActionProfileType

function App(props: AppTypeProps) {

    // const store = props.store.getState();

    return (
        <div className="App">
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Route path={"/profile"} render={() =>
                        <Profile
                            profilePageStore={props.store.profileReducer}
                            dispatch={props.dispatch}
                            // store={props.store}
                        />}
                    />
                    <Route path={"/dialogs"} render={() =>
                       <DialogContainer
                            // dialogPage={props.store.dialogsReducer}
                           dialogs={props.store.dialogsReducer.dialogs}

                       />
                    }
                    />

                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>

            </div>
        </div>
    );
}

export default App;
