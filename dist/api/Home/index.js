"use strict";
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send({
        "Message": "Data"
    });
});
module.exports = router;
//# sourceMappingURL=index.js.map