// import {experiencesActions} from '../actions'

export const experiencesInitialState = {
    isLoading: null,
    error: null,

    experiences: null,
}

export const selectedExperienceInitialState = {
    isLoading: null,
    error: null,

    experience: null,
}

export function experiences(state = experiencesInitialState, action) {
    switch (action.type) {
        case 'EXPERIENCES_FETCH_ALL_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'EXPERIENCES_FETCH_ALL_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                error: null,

                experiences: action.payload.experiences,
            }
        case 'EXPERIENCES_FETCH_ALL_FAILED':
            let errorsMessage = null
            if(action.payload.error.response)
            errorsMessage = action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message
            return {
                ...state,
                isLoading: false,
                
                error: errorsMessage, 
            }
        case 'EXPERIENCES_INVALIDATE_ENTITIES':
            return experiencesInitialState
        case 'EXPERIENCES_INVALIDATE_FETCH':
        default:
            return state
    }
}

export function selectedExperience(state = selectedExperienceInitialState, action) {
    switch (action.type) {
        case 'EXPERIENCES_FETCH_ONE_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'EXPERIENCES_FETCH_ONE_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                error: null,

                experience: action.payload.experience,
            }
        case 'EXPERIENCES_FETCH_ONE_FAILED':
            let errorMessage = null
            if(action.payload.error.response)
            errorMessage = action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message
            return {
                ...state,
                isLoading: false,
                
                error: errorMessage, 
            }
        case 'EXPERIENCES_INVALIDATE_ENTITIES':
            return experiencesInitialState
        case 'EXPERIENCES_INVALIDATE_FETCH':
        default:
            return state
    }
}