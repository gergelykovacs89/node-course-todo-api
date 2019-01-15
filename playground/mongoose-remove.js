const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });


// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

Todo.findOneAndDelete(
    {
        _id: '5c3dcae423c08043358ca43f'
    }
)
    .then((todo) => {
        console.log(todo);
    });

Todo.findByIdAndDelete('5c3dcae423c08043358ca43f').then((todo) => {
   console.log(todo)
});