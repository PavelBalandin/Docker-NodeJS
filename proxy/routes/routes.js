const {Router} = require('express');
const router = Router();
const axios = require('axios').default;

const URL = 'http://192.168.0.169:3000/';

router.get("/", (req, res) => {
    axios.get(URL).then(function (response) {
        res.send(response.data);
        res.end();
    })

});

module.exports = router