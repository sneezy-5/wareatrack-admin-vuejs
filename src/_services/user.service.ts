/** Import des modules nécessaires */
import Axios from './caller.service'

const headers = { 'Content-Type': 'multipart/form-data' };


let getAllUsers = () => {
    return Axios.get('/users')
}

let getUser = (uid: string) => {
    return Axios.get('/users/'+uid)
}

let getProfile = () => {
    return Axios.get('/account/profile/')
}

let updateUserProfile = (user: { id: string; }) => {
    return Axios.put('/profile/'+user.id+'/', user,{ headers })
}

let updateUser = (user: { id: string; }) => {
    return Axios.put('/user/'+user.id+'/', user)
}

let updateParameter = (user: { id: string; }) => {
    return Axios.put('/parameter/'+user.id+'/', user,{headers})
}

let getParameter = () => {
    return Axios.get('/parameter/')
}

let changePasswordUser = (user: any,id: string) => {
    return Axios.put('/change-password/'+id, user)
}

let changeProfilePasswordUser = (user: { id: string; }) => {
    return Axios.put('/profile-password-change/'+user.id+'/', user)
}

let createUser = (user: any) => {
    return Axios.post('/register/', user)
}

let deleteUser = (uid: string) => {
    return Axios.delete('/users/'+uid)
}

export const userService = {
    getAllUsers,
    getUser,
    getProfile,
    changePasswordUser,
    changeProfilePasswordUser,
    updateUserProfile ,
    updateParameter,
    getParameter,
    updateUser,
    createUser,
    deleteUser,
}
