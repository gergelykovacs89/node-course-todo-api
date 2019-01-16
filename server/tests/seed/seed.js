const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneID = new ObjectID();
const userTwoID = new ObjectID();

const users = [
    {
        _id: userOneID,
        email: 'gergelyk89@gmail.com',
        password: 'userOnePass',
        tokens: [{
            access: 'auth',
            token:  jwt.sign({_id: userOneID, access: 'auth'}, 'abc123').toString()
        }]
    },
    {
        _id: userTwoID,
        email: 'rad008@gmail.com',
        password: 'userTwoPass'
    }
];



const todos = [
    {
        _id: new ObjectID(),
        text: 'first test todo'
    },
    {
        _id: new ObjectID(),
        text: 'second test todo',
        completed: true,
        completedAt: 333
    },
    {
        _id: new ObjectID(),
        text: 'third test todo'
    },
    {
        _id: new ObjectID(),
        text: 'fourth test todo'
    }
];

const populateTodos = (done) => {
        Todo.deleteMany({}).then(() => {
            Todo.insertMany(todos);
        })
            .then(() => done());
    };

const populateUsers = (done) => {
    User.deleteMany({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    })
        .then(() => done());
};

module.exports = {
    todos: todos,
    populateTodos: populateTodos,
    users: users,
    populateUsers: populateUsers
};