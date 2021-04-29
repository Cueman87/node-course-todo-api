// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/playgroundApp', (err,client)=>{
    if(err){
        return console.log('enable to connect to the mongodb server');
    }

    
    console.log('connected successfully to mongodb server');
    const db = client.db('playgroundApp');

    // db.collection('todos').find({completed: true}).toArray().then((docs)=>{
    //     console.log('todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('enable to fetch todos', err);
    // });

    // db.collection('todos').find().count().then((count)=>{
    //     console.log('todos count: ');
    //     console.log(JSON.stringify(count, undefined, 2));
    // }, (err)=>{
    //     console.log('enable to count todos', err);
    // });
    db.collection('Users').find({name: 'mahmoud'}).count().then((users)=>{
        console.log('users: ', JSON.stringify(users, undefined, 2));
    }, (err)=>{
        return console.log('cant fetch the data', err);
    });

    //client.close();
});