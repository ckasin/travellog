var express = require('express');
var router = express.Router();
var db = require('./dbconnect'); //database
var bodyParser = require('body-parser').text();

//endpoint: GET travels -----------------------------
router.get('/', function (req, res) {

    var sql = 'SELECT * FROM travelsview';
    db.any(sql).then(function(data) {

        res.status(200).json(data); //success!

    }).catch(function(err) {

        res.status(500).json(err);

    });
});

//endpoint: POST travels ----------------------------
router.post('/', bodyParser, function (req, res) {

    //console.log("inne i post-endepunktet");
    var updata = JSON.parse(req.body);
    //console.log(updata);

    var sql = `PREPARE insert_travel (int, timestamp, timestamp, int, text) AS
                INSERT INTO travels VALUES(DEFAULT, $2, $3, $4, $5); EXECUTE
                insert_travel
                (0, '${updata.starttime}', '${updata.endtime}', ${updata.km},
                '${updata.description}')`;

    db.any(sql).then(function(data) {

        db.any("DEALLOCATE insert_travel");
        res.status(200).json({msg: "insert ok"}); //success!

    }).catch(function(err) {
        res.status(500).json(err);

    });
});




//export module -------------------------------------
module.exports = router;
