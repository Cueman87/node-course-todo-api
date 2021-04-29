// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/playgroundApp', (err,client)=>{
    if(err){
        return console.log('enable to connect to the mongodb server');
    }

    
    console.log('connected successfully to mongodb server');
    const db = client.db('playgroundApp');

    
    // db.collection('todos').insertOne({
    //     name: 'first todo'
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('enable to insert document', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'mahmoud',
    //     age: 33,
    //     location: 'Algeria'
    // }, (err, result)=>{
    //     if(err) {
    //         return console.log('enable to insert data.');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});