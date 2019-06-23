import * as api from '../api'
// import {educationReducer} from '../reducers'

export const educationActions = {
    getAll,
    getOne,
    invalidateEntities,
}

function getAll() {
    return (dispatch, getState) => {
        dispatch({type:'EDUCATION_FETCH_ALL_STARTED'})
        api.educationApi.getAll()
        .then(resp => {
            dispatch({type:'EDUCATION_FETCH_ALL_SUCCEEDED', payload:{education: resp.data}})
        })
        .catch(err => {
            dispatch({type:'EDUCATION_FETCH_ALL_FAILED', payload:{error: err}})
        })
    }
}

function getOne(id) {
    return (dispatch, getState) => {
        dispatch({type:'EDUCATION_FETCH_ONE_STARTED'})
        api.educationApi.getOne(id)
        .then(resp => {
            dispatch({type:'EDUCATION_FETCH_ONE_SUCCEEDED', payload:{education: resp.data}})
        })
        .catch(err => {
            dispatch({type:'EDUCATION_FETCH_ONE_FAILED', payload:{error: err}})
        })
    }
}

function invalidateEntities() {
    return (dispatch, getState) => {
        dispatch({type:'EDUCATION_INVALIDATE_ENTITIES'})
    }
}