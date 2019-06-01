// import {projectsActions} from '../actions'

export const projectsInitialState = {
    isLoading: null,
    error: null,

    projects: null,
}

export const selectedProjectInitialState = {
    isLoading: null,
    error: null,

    project: null,
    from: null,
}

export function projects(state = projectsInitialState, action) {
    switch (action.type) {
        case 'PROJECTS_FETCH_ALL_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'PROJECTS_FETCH_ALL_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                error: null,

                projects: action.payload.projects,
            }
        case 'PROJECTS_FETCH_ALL_FAILED':
            return {
                ...state,
                isLoading: false,
                
                error: action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message, 
            }
        case 'PROJECTS_INVALIDATE_ENTITIES':
            return projectsInitialState
        case 'PROJECTS_INVALIDATE_FETCH':
        default:
            return state
    }
}

export function selectedProject(state = selectedProjectInitialState, action) {
    switch (action.type) {
        case 'PROJECTS_FETCH_ONE_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'PROJECTS_FETCH_ONE_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                error: null,

                project: action.payload.project,
                from: action.payload.from ? action.payload.from : null,
            }
        case 'PROJECTS_FETCH_ONE_FAILED':
            return {
                ...state,
                isLoading: false,
                
                error: action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message, 
            }
        case 'PROJECTS_INVALIDATE_ENTITIES':
            return projectsInitialState
        case 'PROJECTS_INVALIDATE_FETCH':
        default:
            return state
    }
}