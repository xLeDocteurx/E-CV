import {combineReducers} from 'redux'

import {sections} from './sectionsReducer'
import {skills, selectedSkill} from './skillsReducer'

let model = combineReducers({
    skills,
})

export default combineReducers({
    model,
    
    sections,
    selectedSkill,
})