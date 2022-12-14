import {ADD_BUG, REMOVE_BUG, RESOLVE_BUG} from './Actions.js'
import {produce} from "immer"


let lastID = 0
export default function reducer(state = [], action) {

    switch (action.type) {
        case (ADD_BUG):
            // return state = [...state, {id: ++lastID, description: action.payload.description, resolved: false}]
            const newBug = {id: ++lastID, description: action.payload.description, resolved: false}
            return state = produce(state, draft => {
                draft.push(newBug)
            })
        case (REMOVE_BUG):
            return state = state.filter(bug => bug.id !== action.payload.id)
        case (RESOLVE_BUG):
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
        default :
            return state
    }

}