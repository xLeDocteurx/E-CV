// import {technosActions} from '../actions'

export const technosInitialState = {
    isLoading: null,
    error: null,

    technos: null,
}

export const selectedTechnoInitialState = {
    isLoading: null,
    error: null,

    techno: null,
}

export function technos(state = technosInitialState, action) {
    switch (action.type) {
        case 'TECHNOS_FETCH_ALL_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'TECHNOS_FETCH_ALL_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                error: null,

                technos: action.payload.technos,
            }
        case 'TECHNOS_FETCH_ALL_FAILED':
            let errorsMessage = null
            if(action.payload.error.response)
            errorsMessage = action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message
            return {
                ...state,
                isLoading: false,
                
                error: errorsMessage, 
            }
        case 'TECHNOS_INVALIDATE_ENTITIES':
            return technosInitialState
        case 'TECHNOS_INVALIDATE_FETCH':
        default:
            return state
    }
}

export function selectedTechno(state = selectedTechnoInitialState, action) {
    switch (action.type) {
        case 'TECHNOS_FETCH_ONE_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'TECHNOS_FETCH_ONE_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                error: null,

                techno: action.payload.techno,
            }
        case 'TECHNOS_FETCH_ONE_FAILED':
            let errorMessage = null
            if(action.payload.error.response)
            errorMessage = action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message
            return {
                ...state,
                isLoading: false,
                
                error: errorMessage, 
            }
        case 'TECHNOS_INVALIDATE_ENTITIES':
            return technosInitialState
        case 'TECHNOS_INVALIDATE_FETCH':
        default:
            return state
    }
}