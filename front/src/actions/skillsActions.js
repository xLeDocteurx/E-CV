import * as api from '../api'
// import {skillsReducer} from '../reducers'

export const skillsActions = {
    getAll,
    getOne,
    invalidateEntities,
}

function getAll() {
    return (dispatch, getState) => {
        dispatch({type:'SKILLS_FETCH_ALL_STARTED'})
        api.skillsApi.getAll()
        .then(resp => {
            dispatch({type:'SKILLS_FETCH_ALL_SUCCEEDED', payload:{skills: resp.data}})
        })
        .catch(err => {
            dispatch({type:'SKILLS_FETCH_ALL_FAILED', payload:{error: err}})
        })
    }
}

function getOne(id) {
    return (dispatch, getState) => {
        dispatch({type:'SKILLS_FETCH_ONE_STARTED'})
        api.skillsApi.getOne(id)
        .then(resp => {
            dispatch({type:'SKILLS_FETCH_ONE_SUCCEEDED', payload:{skill: resp.data}})
        })
        .catch(err => {
            dispatch({type:'SKILLS_FETCH_ONE_FAILED', payload:{error: err}})
        })
    }
}

function invalidateEntities() {
    return (dispatch, getState) => {
        dispatch({type:'SKILLS_INVALIDATE_ENTITIES'})
    }
}