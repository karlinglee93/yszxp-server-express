
const { MongoClient } = require('mongodb');
const pwd = 'passw0rd';
const uri = `mongodb+srv://admin:${pwd}@hk-for-free.7nx04.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

// connect to db - done
// do examples, aka insert data, etc - done
// format folder structure - done
// try to use es6 - done
// create model
// upload csv and insert data

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  }
  finally {
    await client.close();
  }
}

run().catch(console.dir);