var express = require('express');
var router = express.Router();

const exercisesCtrl= require('../controllers/exercises');


/* GET users listing. */
router.get('/', exercisesCtrl.index);

// GET /exercises/id
router.get('/:id', exercisesCtrl.show);

module.exports = router;
