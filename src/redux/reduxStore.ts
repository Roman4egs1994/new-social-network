import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {dialogsReducer} from "./dialogsReducer";


const reducers = combineReducers({
    profileReducer:profileReducer,
    dialogsReducer:dialogsReducer,
    // sidebarReduce:dialogsReducer
}) //Берем все редюсеры и объединяем их (смешиваем)


//Создаем Redux , отдаем ему все reducer
export const store = createStore(reducers)

export type AppStateType = ReturnType<typeof store.getState>