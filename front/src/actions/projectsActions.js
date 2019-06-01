import * as api from '../api'
// import {projectsReducer} from '../reducers'

export const projectsActions = {
    getAll,
    getOne,
    invalidateEntities,
}

function getAll(callback) {
    return (dispatch, getState) => {
        dispatch({type:'PROJECTS_FETCH_ALL_STARTED'})
        api.projectsApi.getAll()
        .then(resp => {
            dispatch({type:'PROJECTS_FETCH_ALL_SUCCEEDED', payload:{projects: resp.data}})
            if(callback) {callback()}
        })
        .catch(err => {
            dispatch({type:'PROJECTS_FETCH_ALL_FAILED', payload:{error: err}})
        })
    }
}

function getOne(name, callback, from) {
    return (dispatch, getState) => {
        dispatch({type:'PROJECTS_FETCH_ONE_STARTED'})
        api.projectsApi.getOne(name)
        .then(resp => {

            dispatch({type:'PROJECTS_FETCH_ONE_SUCCEEDED', payload:{project: resp.data, from: from}})
            if(callback) {callback()}
        })
        .catch(err => {
            console.log(err)
            dispatch({type:'PROJECTS_FETCH_ONE_FAILED', payload:{error: err}})
        })
    }
}

function invalidateEntities() {
    return (dispatch, getState) => {
        dispatch({type:'PROJECTS_INVALIDATE_ENTITIES'})
    }
}