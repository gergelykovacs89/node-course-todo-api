const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true },(err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.')
    }
    console.log('Connected to MongoDB...');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c3c85965b8a893c63a26877')
    // }).toArray().then((documenets) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(documenets, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch documents', err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch documents', err)
    // });

    db.collection('Users').find({name: 'gergo'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch documents', err)
    });

    // client.close();
});