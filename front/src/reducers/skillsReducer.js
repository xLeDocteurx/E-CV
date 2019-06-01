// import {skillsActions} from '../actions'

export const skillsInitialState = {
    isLoading: null,
    error: null,

    skills: null,
}

export const selectedSkillInitialState = {
    isLoading: null,
    error: null,

    skill: null,
}

export function skills(state = skillsInitialState, action) {
    switch (action.type) {
        case 'SKILLS_FETCH_ALL_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'SKILLS_FETCH_ALL_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                error: null,

                skills: action.payload.skills,
            }
        case 'SKILLS_FETCH_ALL_FAILED':
            return {
                ...state,
                isLoading: false,
                
                error: action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message, 
            }
        case 'SKILLS_INVALIDATE_ENTITIES':
            return skillsInitialState
        case 'SKILLS_INVALIDATE_FETCH':
        default:
            return state
    }
}

export function selectedSkill(state = selectedSkillInitialState, action) {
    switch (action.type) {
        case 'SKILLS_FETCH_ONE_STARTED':
            return {
                ...state,
                isLoading: true,
            }
        case 'SKILLS_FETCH_ONE_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                error: null,

                skills: action.payload.skills,
            }
        case 'SKILLS_FETCH_ONE_FAILED':
            return {
                ...state,
                isLoading: false,
                
                error: action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message, 
            }
        case 'SKILLS_INVALIDATE_ENTITIES':
            return skillsInitialState
        case 'SKILLS_INVALIDATE_FETCH':
        default:
            return state
    }
}