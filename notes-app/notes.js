const fs = require('fs')
const getNotes = function(){
    return 'Your notes...'
}

const addNote = function(){

}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){

    }
    
}

module.exports = {
    'getNotes': getNotes,
    'addNote': addNote
}