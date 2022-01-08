
const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');

const  db = require('../../data/db');

router.get('/notes', (req, res) => {

    let result = db;

    if (result) {
        res.json(result);//sends json to browser
    } else {
        res.sendStatus(404);
    }

});

router.post('/notes', (req, res) => {
    //console.log(req.body)//this is the data that is typed in by the user

    const newNote = createNewNote(req.body, db);
    res.json(newNote);

});

router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;//break request object into id

    //search through database and find the id that matches the database id and store in noteIndex
    const noteIndex = db.findIndex(p => p.id == id);
    
    //splice out the noteIndex from the database json array
    db.splice(noteIndex, 1);

    return res.send();

});

module.exports = router;