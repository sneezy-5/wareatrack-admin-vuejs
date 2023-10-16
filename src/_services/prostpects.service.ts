/** Import des modules nécessaires */
import Axios from './caller.service'

const headers = { 'Content-Type': 'multipart/form-data' };


let getProstpects = (filter:string) => {
    return Axios.get('/prostpects/'+filter)
}

let getProstpect = (uid: number) => {
    return Axios.get('/prostpects/'+uid)
}



let updateProstpect = (prostpect: any) => {
    return Axios.put('/prostpects/'+prostpect.id+'/', prostpect,{ headers })
}






let createProstpect = (user: any) => {
    return Axios.post('/prostpect', user)
}

let deleteProstpect = (uid: number) => {
    return Axios.delete('/prostpects/'+uid)
}

export const prostpectService = {
  getProstpects,
  getProstpect,
  updateProstpect,
  createProstpect,
  deleteProstpect,

}
