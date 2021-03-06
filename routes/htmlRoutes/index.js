const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// router.get('/api/notes', (req, res) => {
//     console.log(data);
//     res.json(data);//sends json data to /api/notes

// });

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;