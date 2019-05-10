import {sectionsActions} from '../actions'

export const initialState = {
    isLoading: null,
    error: null,

    sections: {},
}

export function sections(state = initialState, action) {
    switch (action.type) {
        case 'SECTIONS_FETCH_ALL_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'SECTIONS_FETCH_ALL_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                error: null,

                sections: action.payload.sections,
            }
        case 'SECTIONS_FETCH_ALL_FAILED':
            return {
                ...state,
                isLoading: false,
                
                error: action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message, 
            }
        case 'SECTIONS_FETCH_ONE_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'SECTIONS_FETCH_ONE_SUCCEEDED':
            let sections = state.sections
            sections[action.payload.section.name] = action.payload.section
            return {
                ...state,
                isLoading: false,
                error: null,

                sections: sections,
            }
        case 'SECTIONS_FETCH_ONE_FAILED':
            return {
                ...state,
                isLoading: false,
                
                error: action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message, 
                // error: action.payload.error, 
            }
        case 'SECTIONS_INVALIDATE_ENTITIES':
            return initialState
        default:
            return state
    }
}