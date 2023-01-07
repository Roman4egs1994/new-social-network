import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


//POSTS
export type PostsType = {
    id:number
    message: string
    likesCount: number
}
const posts: PostsType[] = [
    {id:1, message: "Hi, how are you?", likesCount: 12},
    {id:2, message: "It my first post", likesCount: 4},
    {id:3, message: "ahahah", likesCount: 3},
    {id:4, message: "WTF", likesCount: 3},
]



//DIALOGS USER
export type DialogsItemPropsType = {
    id: number
    name: string
}
const dialogs: DialogsItemPropsType[] = [
    {id: 1, name: 'Roman'},
    {id: 2, name: 'Mixa'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Volodya'},
    {id: 5, name: 'Prostofilya'},
    {id: 6, name: 'Kirill'}
]


//DIALOGS MESSAGES
export type MessagePropsType = {
    id?: number
    message: string
}
const messages: MessagePropsType[] = [
    {id:1, message: "Hi"},
    {id:2, message: "good"},
    {id:3, message: "goodgoodgoodgood"},
    {id:4, message: "Hello world"},
    {id:5, message: "WTF"},
    {id:6, message: "What?"}
]



ReactDOM.render(
    <BrowserRouter>
        <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
    </BrowserRouter>,
    document.getElementById('root')
);