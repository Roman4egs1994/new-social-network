import {combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./auth-reducer";
import FriendsLessonAjax from "../components/Users/FriendsLessonAjax";
import {FriendsLessonAjaxReducer} from "./FriendsLessonAjaxReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}



export const rootReducer = combineReducers({
    profileReducer:profileReducer,
    dialogsReducer:dialogsReducer,
    userReducer: userReducer,
    authReducer: authReducer,
    FriendsLessonAjaxReducer: FriendsLessonAjaxReducer  // Из урока по AJAX
    // sidebarReduce:dialogsReducer
}) //Берем все редюсеры и объединяем их (смешиваем)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export type AppStateType = ReturnType<typeof store.getState>
export type AppStateType = ReturnType<typeof rootReducer>

//Создаем Redux , отдаем ему все reducer
export const store = createStore(rootReducer, composeEnhancers())


//@ts-ignore
window.store = store;