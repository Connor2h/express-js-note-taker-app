const fs = require("fs");
const uuid = require('uuid');
const path = require("path");


function createNewNote(body, notesArray) {

    //create new object to store what it written in title and text/also give unique id
    const newNote = {
        id: uuid.v4(),
        title: body.title,
        text: body.text
    }

    //push the newNote object into the notesArray
    notesArray.push(newNote);

    //write to file/synchronous version of fs.writeFile()
    fs.writeFileSync(
    path.join(__dirname, '../data/db.json'),
    JSON.stringify( notesArray , null, 2)
    );

    // return finished code to post route for response
    return newNote;
}

module.exports = { createNewNote };