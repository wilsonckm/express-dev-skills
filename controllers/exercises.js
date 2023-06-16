const Exercise = require('../models/exercise');

module.exports = {
    index,
    show,
    new: newExercise,
    create,
    delete: deleteExercise,
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

function newExercise(req, res){
    res.render('exercises/new', {title:'New Exercise'});
}

function create(req, res){
    console.log(req.body);
    Exercise.create(req.body);
    res.redirect('/exercises');
}

function deleteExercise(req, res){
    Exercise.deleteExercise(req.params.id);
    res.redirect('/exercises')
}