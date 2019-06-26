// import {skillsActions} from '../actions'

export const skillsInitialState = {
    isLoading: false,
    error: null,

    skills: null,
}

export const selectedSkillInitialState = {
    isLoading: false,
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
            let errorsMessage = null
            if(action.payload.error.response)
            errorsMessage = action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message
            return {
                ...state,
                isLoading: false,
                
                error: errorsMessage, 
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

                skill: action.payload.skill,
            }
        case 'SKILLS_FETCH_ONE_FAILED':
            let errorMessage = null
            if(action.payload.error.response)
            errorMessage = action.payload.error.response.data.statusCode + " : " + action.payload.error.response.data.message
            return {
                ...state,
                isLoading: false,
                
                error: errorMessage, 
            }
        case 'SKILLS_INVALIDATE_ENTITIES':
            return skillsInitialState
        case 'SKILLS_INVALIDATE_FETCH':
        default:
            return state
    }
}