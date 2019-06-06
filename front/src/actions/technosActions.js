import * as api from '../api'
// import {technosReducer} from '../reducers'

export const technosActions = {
    getAll,
    getOne,
    invalidateEntities,
}

function getAll() {
    return (dispatch, getState) => {
        dispatch({type:'TECHNOS_FETCH_ALL_STARTED'})
        api.technosApi.getAll()
        .then(resp => {
            dispatch({type:'TECHNOS_FETCH_ALL_SUCCEEDED', payload:{technos: resp.data}})
        })
        .catch(err => {
            dispatch({type:'TECHNOS_FETCH_ALL_FAILED', payload:{error: err}})
        })
    }
}

function getOne(id) {
    return (dispatch, getState) => {
        dispatch({type:'TECHNOS_FETCH_ONE_STARTED'})
        api.technosApi.getOne(id)
        .then(resp => {
            dispatch({type:'TECHNOS_FETCH_ONE_SUCCEEDED', payload:{techno: resp.data}})
        })
        .catch(err => {
            dispatch({type:'TECHNOS_FETCH_ONE_FAILED', payload:{error: err}})
        })
    }
}

function invalidateEntities() {
    return (dispatch, getState) => {
        dispatch({type:'TECHNOS_INVALIDATE_ENTITIES'})
    }
}