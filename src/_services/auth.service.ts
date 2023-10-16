/** Import des modules nécessaires */

import Axiosss from './caller-other-service '
import Axios from './caller.service'

let login = (credentials: {email:string, password:string}) => {
    return Axiosss.post('auth/login', credentials)
}

let logout = () => {
    localStorage.removeItem('access')
}



let getDatabase = () => {
  return localStorage.getItem('database')
}

let getToken = () => {
    return localStorage.getItem('access')
}

let getRole = () => {
    return localStorage.getItem('role')
}


let saveToken = (name:string,token:string) => {
    localStorage.setItem(name, token)
}

let isLogged = () => {
    let token = localStorage.getItem('access')
    return !!token
}


export const accountService = {
    login,
    logout,
    saveToken,
    getToken,
    getRole,
    getDatabase,
    isLogged
}
