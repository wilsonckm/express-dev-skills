var express = require('express');
var router = express.Router();
const exercisesCtrl= require('../controllers/exercises');


/* GET users listing. */
router.get('/', exercisesCtrl.index);

// Get/
router.get('/new', exercisesCtrl.new);

// GET /exercises/id
router.get('/:id', exercisesCtrl.show);

//Post /exercises
router.post('/', exercisesCtrl.create);

//Delete /exercises/id
router.delete('/:id', exercisesCtrl.delete);


module.exports = router;
