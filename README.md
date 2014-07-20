node-mongodb
======

**node-mongodb** is a Node app to interact with MongoDB.

## Features

* Fetching a collection named "testData"

## Installation

```bash
$ npm install mongojs
```

## Usage

Open two consoles 1 for starting the mongodb server and other to work with it. After setting the path to mongodb tools:
Console1:
```bash
$ mongod --dbpath PATH_TO_MONGODB_DATABASES
```
Console2:
```bash
$ mongo
```

In console 2:
1. Create a database mydb
```bash
> use mydb
```
2. Create a collection "testData" in mydb
```bash
> x={name="mongo"}
> db.testData.insert(x)
> db.testData.stats()
```

## Fetching data from MongoDB in NodeJS

```bash
$ node app.js
```

```bash
var databaseUrl = "mydb"; 
var collections = ["testData", "reports"] // All the collections we have in the database
// connecting to database using connect() method
var db = require("mongojs").connect(databaseUrl, collections);
// fetching  data in JSON format using find() method 
db.testData.find({name: "mongo"}, function(err, users) {
  if( err || !users) console.log("No female users found");
  else console.log('the data got is: '+JSON.stringify(users));
});
```
