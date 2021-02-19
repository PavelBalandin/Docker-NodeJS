const {Router} = require('express');
const router = Router();

router.get("/", (req, res) => {
    res.send('Hello from home !');
    res.end();

});

router.get("/pasha", (req, res) => {
    res.send('Hello pasha');
    res.end();

});

module.exports = router