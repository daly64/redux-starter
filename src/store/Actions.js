const ADD_BUG='addBug'
const REMOVE_BUG='removeBug'
const RESOLVE_BUG='resolveBug'

const addBug = description => ({type: ADD_BUG, payload: {description}})
const removeBug = id => ({type: REMOVE_BUG, payload: {id}})
const resolveBug = id => ({type: RESOLVE_BUG, payload: {id}})

export {ADD_BUG, REMOVE_BUG, RESOLVE_BUG}
export {addBug, removeBug, resolveBug}
