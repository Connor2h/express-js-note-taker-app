
const router = require('express').Router();

const  db = require('../../data/db');
console.log(db);

router.get('/notes', (req, res) => {
    // console.log("data");
    // res.json(data);//sends json to browser

    let result = db;

    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }

});

module.exports = router;