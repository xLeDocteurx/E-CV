import {combineReducers} from 'redux'

import {session} from './sessionReducer'

import {sections} from './sectionsReducer'
import {skills, selectedSkill} from './skillsReducer'
import {projects, selectedProject} from './projectsReducer'

let model = combineReducers({
    skills,
    projects,
})

export default combineReducers({
    model,
    
    session,

    sections,
    selectedSkill,
    selectedProject,
})