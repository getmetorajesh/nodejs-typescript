
import express = require('express');
let router = express.Router();
import * as fs from 'fs';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({
            "Message":"Data"
    })
});


export = router;  