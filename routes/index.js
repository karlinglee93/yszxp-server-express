var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');
const pwd = 'passw0rd';
const uri = `mongodb+srv://admin:${pwd}@hk-for-free.7nx04.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const dbName = "test";

const connectToDB = async () => {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (error) {
    console.log(error.stack);
  }
}

connectToDB().catch(console.dir);

const db = client.db(dbName);

router.get('/', async (req, res) => {
  const col = db.collection('people')
  const data = await col.findOne({})
  res.send(data)
})

router.post('/', function (req, res) {
  res.send('Got a POST request')
})

router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

module.exports = router;
