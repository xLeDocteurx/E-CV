import axios from 'axios'

// import {sessionService} from 'redux-react-session'
// import runtimeEnv from '@mars/heroku-js-runtime-env'
import {jsenv} from '../env'

const API_BASE_URL = jsenv.REACT_APP_API_BASE_URL

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: ''
    }
})

// client.interceptors.request.use(async function (config) {
//     // try{
// 	//     const jwt = await sessionService.loadUser()
// 	//     if(jwt)
// 	//         config.headers.Authorization = 'Bearer ' + jwt.jwt
//   	// }catch(e){
//   	// 	return config
//   	// }
//     return config
// }, function (error) {
// 		return Promise.reject(error)
// })

export const experiencesApi = {
    getAll,
    getOne,
}

function getAll() {
    return client.get(`/experiences`)
}

function getOne(id) {
    return client.get(`/experiences/${id}`)
}