const {Router} = require('express');
const router = Router();
const axios = require('axios').default;

router.get("/", (req, res) => {
    axios.get('http://192.168.0.169:3000/').then(function (response) {
        res.send(response.data);
        res.end();
    })

});

module.exports = router