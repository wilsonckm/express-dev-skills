const exercises = [
    {id: 125223, exercise: 'Deadlift', done: true},
    {id: 127904, exercise: 'Squat', done: false},
    {id: 139608, exercise: 'Bench press', done: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteExercise,
};

function getAll() {
    return exercises;
}

function getOne(id) {
    id = parseInt(id);
    return exercises.find(exercise => exercise.id === id);
}

function create(exercise) {
    exercise.id = Date.now() % 1000000;
    exercise.done = false;
    exercises.push(exercise);
}

function deleteExercise(id){
    id = parseInt(id);
    const ex = exercises.findIndex(exercise => exercise.id === id);
    exercises.splice(ex, 1);
}