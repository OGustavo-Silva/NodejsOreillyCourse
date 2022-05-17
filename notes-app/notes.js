const fs = require('fs')
const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New note added!')
    }else{
        console.log('Note title taken!')
    }

}

const readNote = (title) =>{
    const notes = loadNotes()
    const noteFound = notes.find((note) => note.title === title)

    if(noteFound){
        console.log('-| ' + noteFound.title + ' |-')
        console.log(noteFound.body)
    }else{
        console.log('Note not found!')
    }
    

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notesToKeep.length < notes.length){
        saveNotes(notesToKeep)
        console.log('Note removed!')
    }else{
        console.log('Note not found!')
    }
     
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}

const listNotes = () =>{
    console.log('Your notes:')
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

module.exports = {
    'getNotes': getNotes,
    'addNote': addNote,
    'removeNote': removeNote,
    'listNotes': listNotes,
    'readNote': readNote
}