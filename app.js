// app.js
// var databaseUrl = 'localhost:27017/testData';
var databaseUrl = "mydb"; // "username:password@example.com/mydb"
var collections = ["testData", "reports"]
var db = require("mongojs").connect(databaseUrl, collections);

db.testData.find({name: "mongo"}, function(err, users) {
  if( err || !users) console.log("No female users found");
  else console.log('the data got is: '+JSON.stringify(users));

  	
});


