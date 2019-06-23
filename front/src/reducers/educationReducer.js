// import {educationActions} from '../actions'

export const educationInitialState = {
    isLoading: null,
    error: null,

    education: null,
}

export const selectedEducationInitialState = {
    isLoading: null,
    error: null,

    education: null,
}

export function education(state = educationInitialState, action) {
    switch (action.type) {
        case 'EDUCATION_FETCH_ALL_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'EDUCATION_FETCH_ALL_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                error: null,

                education: action.payload.education,
            }
        case 'EDUCATION_FETCH_ALL_FAILED':
            let errorsMessage = null
            if(action.payload.error.response)
            errorsMessage = action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message
            return {
                ...state,
                isLoading: false,
                
                error: errorsMessage, 
            }
        case 'EDUCATION_INVALIDATE_ENTITIES':
            return educationInitialState
        case 'EDUCATION_INVALIDATE_FETCH':
        default:
            return state
    }
}

export function selectedEducation(state = selectedEducationInitialState, action) {
    switch (action.type) {
        case 'EDUCATION_FETCH_ONE_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'EDUCATION_FETCH_ONE_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                error: null,

                education: action.payload.education,
            }
        case 'EDUCATION_FETCH_ONE_FAILED':
            let errorMessage = null
            if(action.payload.error.response)
            errorMessage = action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message
            return {
                ...state,
                isLoading: false,
                
                error: errorMessage, 
            }
        case 'EDUCATION_INVALIDATE_ENTITIES':
            return educationInitialState
        case 'EDUCATION_INVALIDATE_FETCH':
        default:
            return state
    }
}