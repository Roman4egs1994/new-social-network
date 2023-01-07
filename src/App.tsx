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
import {DialogsItemPropsType, MessagePropsType, PostsType} from "./index";


// exact - компонента отрендерится когда попал точь в точь по пути ссылок

type AppTypeProps = {
    posts: PostsType[]
    dialogs: DialogsItemPropsType[]
    messages: MessagePropsType[]
}


function App(props: AppTypeProps) {


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


                    <Route path={"/profile"} render={() => <Profile posts={props.posts}/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogs = {props.dialogs} messages = {props.messages}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>

            </div>
        </div>
    );
}

export default App;