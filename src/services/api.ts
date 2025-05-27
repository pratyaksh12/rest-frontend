import axios from "axios";

export const api = axios.create({
    baseURL : "http://localhost:3001/api"
})

export interface User {
    id : number,
    firstName : string,
    lastName : string,
    email : string,
    age : number;
}

export const userApi = {
    getAllUser : async function(){
        const response  = await api.get("/users");
        return response.data;
    },

    getUserById : async function(id : number){
        const response = await api.get(`/users/${id}`);
        return response.data;
    },
    creataUser : async function(user : Partial<User>){
        const response = await api.post("/users", user);
        return response.data;
    },
    updateUser : async function(id : number, user : Partial<User>){
        const response = await api.put(`/users/${id}`, user);
        return response.data;
    },
    delete: async function(id : number){
        const response = await api.delete(`/users/${id}`);
        return response.data;
    }
}