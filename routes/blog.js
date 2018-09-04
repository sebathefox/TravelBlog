const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: " my blog." });
});

router.get('/:year/:date/:name', function(req, res) {
    res.render('index', { title: req.params.name });
});

router.get('/:year/:date', function(req, res) {
    res.render('index', { title: req.params.date });
});

router.get('/:year', function(req, res) {
    res.render('index', { title: req.params.year });
});

module.exports = router;
