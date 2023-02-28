import axios from "axios";

// const baseURL =  'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '60a736fa-51da-4c8e-9364-ebbbd514420d'
    }
});


export const usersAPI = {
    getUsers(currentPage:number, pageSize: number) { //Получить пользователей
        return   instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return  response.data
            })
    },

    getFollow(userId:string){ //Подписка на пользователя
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getUnfollow(userId:string) { //Отписка от пользователя
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}


