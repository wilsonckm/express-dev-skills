const exercises = [
    {id: 125223, exercise: 'Deadlift', done: true},
    {id: 127904, exercise: 'Squat', done: false},
    {id: 139608, exercise: 'Bench press', done: false}
]

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return exercises;
}

function getOne(id) {
    id = parseInt(id);
    return exercises.find(exercise => exercise.id === id);
}



