/** Import des modules nécessaires */
import Axios from './caller.service'

const headers = { 'Content-Type': 'multipart/form-data' };


let getSubscriptions = (filter:string) => {
    return Axios.get('/subcriptions/'+filter)
}

let getSubscription = (uid: number) => {
    return Axios.get('/subcriptions/'+uid)
}


let updateSubscription = (form: any) => {
    return Axios.put('/subcriptions/'+form.id+'/', form,{ headers })
}


let createSubscritpion = (form: any) => {
    return Axios.post('/subcriptions/', form)
}

let deleteSubscription = (uid: number) => {
    return Axios.delete('/subcriptions/'+uid)
}

export const subscriptionService = {
  getSubscriptions,
  getSubscription,
  updateSubscription,
  createSubscritpion,
  deleteSubscription,

}
