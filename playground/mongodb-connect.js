// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID}= require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
	if(err){
		return console.log('unable to connect');

	}
	console.log('connected to mongodb serer');

	const db= client.db('TodoApp')

	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed: false

	// },(err, result) =>{
	// 	if(err){
	// 		return console.log("Unable to print",err);

	// 	}
	// 	console.log(JSON.stringify(result.ops, unefined, 2));
	// });
// insert new doc 


    // db.collection('Harshi').insertOne({
    // 	name: 'harshit agarwal',
    // 	age: 21,
    // 	location: 'rourkela'
    // },(err, results) => {
    // if(err){
    // 	return console.log("unable to print", err);

    // }
    // console.log(result.ops);

    }); 

	client.close();
});



