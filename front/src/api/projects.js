import axios from 'axios'

// import {sessionService} from 'redux-react-session'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const API_BASE_URL = runtimeEnv().REACT_APP_API_BASE_URL

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

export const projectsApi = {
    getAll,
    getOne,
}

function getAll() {
    return client.get(`/projects`)
}

function getOne(name) {
    return client.get(`/projects/${name}`)
}