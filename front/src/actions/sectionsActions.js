import * as api from '../api'
import {sectionsReducer} from '../reducers'

export const sectionsActions = {
    getAll,
    getOne,
    invalidateEntities,
}

function getAll() {
    return (dispatch, getState) => {
        dispatch({type:'SECTIONS_FETCH_ALL_STARTED'})
        api.sectionsApi.getAll()
        .then(resp => {
            dispatch({type:'SECTIONS_FETCH_ALL_SUCCEEDED', payload:{sections: resp.data}})
        })
        .catch(err => {
            dispatch({type:'SECTIONS_FETCH_ALL_FAILED', payload:{error: err}})
        })
    }
}

function getOne(name) {
    return (dispatch, getState) => {
        dispatch({type:'SECTIONS_FETCH_ONE_STARTED'})
        api.sectionsApi.getOne(name)
        .then(resp => {
            dispatch({type:'SECTIONS_FETCH_ONE_SUCCEEDED', payload:{section: resp.data}})
        })
        .catch(err => {
            dispatch({type:'SECTIONS_FETCH_ONE_FAILED', payload:{error: err}})
        })
    }
}

function invalidateEntities() {
    return (dispatch, getState) => {
        dispatch({type:'SECTIONS_INVALIDATE_ENTITIES'})
    }
}