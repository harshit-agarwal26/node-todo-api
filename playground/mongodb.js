const MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
	if(err){
		return console.log('unable to connect');

	}
	console.log('connected to mongodb serer');

  db.collection('harshi').find().toArray().then((docs) =>
  {
  	console.log('harshi');
  	console.log(JSON.stringify(docs,undefined, 2));

  },(err) =>
  {
  	console.log('unable to fetch todos',err);

  });

	
    

	client.close();
});



