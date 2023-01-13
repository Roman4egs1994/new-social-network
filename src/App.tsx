import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
// import { ActionTypes} from "./redux/store";
import {AppStoreType} from "./redux/reduxStore";
import {ActionTypes} from "redux-form";
import {ActionDialogType} from "./redux/dialogsReducer";
import {ActionProfileType} from "./redux/profileReducer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


// exact - компонента отрендерится когда попал точь в точь по пути ссылок

type AppTypeProps = {
    store: AppStoreType
    // store: StoreType
    // dispatch: (action: ActionTypes) => void
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
                        // <Dialogs
                        //     dialogPage={props.store.dialogsReducer}
                        //     dispatch={props.dispatch}
                        // />
                        <DialogsContainer
                            dialogPage={props.store.dialogsReducer}
                            dispatch={props.dispatch}
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
