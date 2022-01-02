
const router = require('express').Router();

const { data } = require('../../data/db');

router.get('/notes', (req, res) => {
    // console.log("data");
    // res.json(data);//sends json to browser

    let result = data;

    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }

});

module.exports = router;