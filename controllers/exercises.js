const Exercise = require('../models/exercise');

module.exports = {
    index,
    show,
};

function index(req, res) {
    res.render('exercises/index', {
        exercises: Exercise.getAll()
    });
}

function show(req, res){
    res.render('exercises/show', {
        exercise: Exercise.getOne(req.params.id),
    })
}