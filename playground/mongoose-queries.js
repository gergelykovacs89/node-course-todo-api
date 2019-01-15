const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '5c3da9645b232dd22e1f7b2c';

User.findById(userId)
    .then((user) => {
        if (!user) {
            return console.log('User not found');
        }
        console.log(user);
    })
    .catch((err) => {
        console.log(err)
    });


// var id = '5c3da4df660031249cf4c053';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
//     })
//     .then((todos) => {
//         console.log('Todos', todos);
//     });
//
// Todo.findOne({
//     _id: id
//     })
//     .then((todo) => {
//         console.log('Todo', todo);
//     });
//
// Todo.findById(id).then(
//     (todo) => {
//         if (!todo) {
//             return console.log('ID not found');
//         }
//         console.log('Todo by ID', todo);
//     }
//     )
//     .catch((err) => {
//         console.log(err);
//     });