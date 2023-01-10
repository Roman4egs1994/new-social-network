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
import {StateType, store, StoreType, ActionTypes} from "./redux/state";


// exact - компонента отрендерится когда попал точь в точь по пути ссылок

// type AppTypeProps = {
//     state: StateType
//     store: StoreType
//     addNewPost: () => void
//     updateAddNewPost:(newText:string) => void
// }
type AppTypeProps = {
    state: StateType
    store: StoreType
    dispatch: (action: ActionTypes) => void
}





function App(props: AppTypeProps) {

    // const state = props.store.getState();

    return (
        <div className="App">
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    {/*<Route path={"/profile"} component={Profile}/>*/}
                    {/*<Route path={"/dialogs"} component={Dialogs}/>*/}
                    {/*<Route path={'/news'} component={News}/>*/}
                    {/*<Route path={'/music'} component={Music}/>*/}
                    {/*<Route path={'/settings'} component={Settings}/>*/}


                    <Route path={"/profile"} render={() =>
                        <Profile
                            profilePage={props.store._state.profilePage}
                            dispatch = {props.store.dispatch.bind(props.store)}
                            // addNewPost={props.store.addNewPost.bind(props.store)}
                            // updateAddNewPost = {props.store.changeNewText.bind(props.store)}
                        />}
                    />
                    <Route path={"/dialogs"} render={() =>
                        <Dialogs
                            // state={props.state.messagesPage}
                            state={props.store._state.messagesPage}
                        />}
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
