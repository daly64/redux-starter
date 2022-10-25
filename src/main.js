/*
import {pipe} from 'lodash/fp'

let input = ' java Script '
let output = '<div>' + input.trim().toLowerCase() + '</div>'

// trim
const trim = str => str.trim()
// toLowercase
const toLowerCase = str => str.toLowerCase()
// warpInDiv
const warpInDiv = type => str => `<${type}> ${str} </${type}>`

const transform = pipe(trim, toLowerCase, warpInDiv('h1'))

const result = transform(input)

console.log(result)

const app = document.getElementById('app')
app.innerHTML = result*/

/*
import {produce} from 'immer'

let book = {title: 'harry potter', published: false}

function publish(book) {
    // book.published = true
    return produce(book, draftBook => {
        draftBook.published = true
    })
}

console.log('book', book)
const updatedBook = publish(book)
console.log('updatedBook', updatedBook)*/

import store from "./store/Store.js"
import {addBug, removeBug, resolveBug} from "./store/Actions.js"

console.log('initial log ',store.getState())
store.subscribe(()=>{
    console.log('subscribe ', store.getState())})
store.dispatch(addBug('ddd'))
store.dispatch(addBug('ddd'))
store.dispatch(addBug('ddd'))
store.dispatch(addBug('ddd'))
store.dispatch(resolveBug(3))
store.dispatch(removeBug(4))


