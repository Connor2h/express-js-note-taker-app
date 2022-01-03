
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

module.exports = router;