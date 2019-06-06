import * as api from '../api'
// import {experiencesReducer} from '../reducers'

export const experiencesActions = {
    getAll,
    getOne,
    invalidateEntities,
}

function getAll() {
    return (dispatch, getState) => {
        dispatch({type:'EXPERIENCES_FETCH_ALL_STARTED'})
        api.experiencesApi.getAll()
        .then(resp => {
            dispatch({type:'EXPERIENCES_FETCH_ALL_SUCCEEDED', payload:{experiences: resp.data}})
        })
        .catch(err => {
            dispatch({type:'EXPERIENCES_FETCH_ALL_FAILED', payload:{error: err}})
        })
    }
}

function getOne(id) {
    return (dispatch, getState) => {
        dispatch({type:'EXPERIENCES_FETCH_ONE_STARTED'})
        api.experiencesApi.getOne(id)
        .then(resp => {
            dispatch({type:'EXPERIENCES_FETCH_ONE_SUCCEEDED', payload:{experience: resp.data}})
        })
        .catch(err => {
            dispatch({type:'EXPERIENCES_FETCH_ONE_FAILED', payload:{error: err}})
        })
    }
}

function invalidateEntities() {
    return (dispatch, getState) => {
        dispatch({type:'EXPERIENCES_INVALIDATE_ENTITIES'})
    }
}