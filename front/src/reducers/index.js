import {combineReducers} from 'redux'

import {session} from './sessionReducer'

import {sections} from './sectionsReducer'
import {skills, selectedSkill} from './skillsReducer'
import {projects, selectedProject} from './projectsReducer'
import {education, selectedEducation} from './educationReducer'
import {experiences, selectedExperience} from './experiencesReducer'
import {technos, selectedTechno} from './technosReducer'

let model = combineReducers({
    skills,
    projects,
    education,
    experiences,
    technos,
})

export default combineReducers({
    model,
    
    session,

    sections,
    selectedSkill,
    selectedProject,
    selectedEducation,
    selectedExperience,
    selectedTechno,
})